"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Client_1 = __importDefault(require("./Client"));
const User_1 = require("../models/User");
const crypto_1 = __importDefault(require("crypto"));
const error_1 = require("../../models/error");
const pipeWithPromise_1 = __importDefault(require("../../utilities/pipeWithPromise"));
const R = __importStar(require("ramda"));
class UserClient extends Client_1.default {
    constructor(db) {
        super("User", db, User_1.User);
        this.db = db;
        this.encrypt = R.bind(async (user) => {
            const salt = crypto_1.default.randomBytes(16).toString("hex");
            const buf = await crypto_1.default.scryptSync(user.password, salt, 64);
            return R.assoc("password", `${buf.toString("hex")}.${salt}`, user);
        }, this);
        this.hidePassword = (user) => {
            return R.assoc("password", "", user);
        };
    }
    async addRecord(record) {
        try {
            return await (0, pipeWithPromise_1.default)([
                this.create,
                this.encrypt,
                this.save,
                this.hidePassword
            ])(record);
        }
        catch (err) {
            if (err instanceof Error)
                throw new error_1.BadRequest(err.message);
        }
    }
    async getOne(unameOrId, complete) {
        const key = typeof unameOrId === "string"
            ? "username"
            : "id";
        const hideOrShowPass = (user) => complete ? user : this.hidePassword(user);
        return await (0, pipeWithPromise_1.default)([
            this.findOne,
            R.ifElse(R.has("username"), hideOrShowPass, (user) => user)
        ])({ [key]: unameOrId }, { relations: ["roster"] });
    }
    async getAll() {
        const users = await this.find({ relations: ["roster"] });
        if (!users)
            return users;
        return R.map(this.hidePassword, users);
    }
    async updateRecord(id, fieldsToUpdate) {
        const isHashed = (password) => /\w{128}\.\w{32}/.test(password);
        const user = await this.getOne(id, true);
        if (!user)
            return user;
        return await (0, pipeWithPromise_1.default)([
            R.mergeDeepLeft(fieldsToUpdate),
            R.ifElse(R.pathSatisfies(isHashed, ["password"]), (user) => user, this.encrypt),
            this.save,
            this.hidePassword
        ])(user);
    }
    async deleteRecord(id) {
        const user = await this.getOne(id);
        if (!user)
            return user;
        await this.repository.remove(user);
        return true;
    }
    async comparePasswords(username, supplied) {
        const user = await this.findOne({ username });
        if (!user)
            return user;
        const [hashed, salt] = user.password.split(".");
        const compare = (supplied) => R.equals(supplied, hashed);
        const hex = (pass) => pass.toString("hex");
        return await (0, pipeWithPromise_1.default)([
            crypto_1.default.scryptSync,
            hex,
            compare
        ])(supplied, salt, 64);
    }
}
exports.default = UserClient;
