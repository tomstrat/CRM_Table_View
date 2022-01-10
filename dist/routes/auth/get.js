"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dotenv_1 = __importDefault(require("dotenv"));
const config_1 = __importDefault(require("../../config/config"));
const requests_1 = require("../requests");
dotenv_1.default.config();
// /oauth2
const authGetRouter = (0, express_1.Router)();
authGetRouter.get("/login", (req, res) => {
    const { authorize, redirect } = config_1.default.urls;
    const authLink = `${authorize}?client_id=${process.env.CONSUMER_KEY}&redirect_uri=${redirect}&response_type=code`;
    return res.send(`<button onclick="window.location.replace('${authLink}')">Login</button>`);
});
authGetRouter.get("/callback", async (req, res) => {
    const id = process.env.CONSUMER_KEY;
    const secret = process.env.CONSUMER_SECRET;
    const { token, redirect, data } = config_1.default.urls;
    const { secure } = config_1.default.environment;
    const code = req.query.code;
    const now = new Date();
    now.setHours(now.getHours() + 4);
    if (!code) {
        return res.send("error");
    }
    const authToken = await (0, requests_1.requestToken)(token, code, id, secret, redirect);
    res.cookie("token", authToken, {
        expires: now,
        secure,
        httpOnly: true
    });
    return res.redirect("/data");
});
exports.default = authGetRouter;
