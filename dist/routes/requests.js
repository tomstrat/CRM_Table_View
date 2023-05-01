"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestResources = exports.requestToken = void 0;
const error_1 = require("../models/error");
const config_1 = __importDefault(require("../config/config"));
const got_1 = __importDefault(require("got"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
async function requestToken(code) {
    const id = process.env.CONSUMER_KEY;
    const secret = process.env.CONSUMER_SECRET;
    const { token, redirect } = config_1.default.urls;
    try {
        const tokenData = await got_1.default.post(token, {
            method: "POST",
            body: `grant_type=authorization_code&code=${code}&client_id=${id}&client_secret=${secret}&redirect_uri=${redirect}`,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        });
        const { access_token } = JSON.parse(tokenData.body);
        console.log("Retrieved access token", access_token);
        return access_token;
    }
    catch (error) {
        console.log(error);
        if (error instanceof Error)
            throw new error_1.BadRequest("Problem retreiving access token");
    }
}
exports.requestToken = requestToken;
async function requestResources(url, token) {
    try {
        const resourcesData = await got_1.default.get(url, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        const resources = JSON.parse(resourcesData.body);
        return resources;
    }
    catch (error) {
        console.log(error);
        if (error instanceof Error)
            throw new error_1.NotFound("Resources could not be found");
    }
}
exports.requestResources = requestResources;
