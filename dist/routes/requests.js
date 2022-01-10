"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestResources = exports.requestToken = void 0;
const got_1 = __importDefault(require("got"));
async function requestToken(url, code, id, secret, redirect) {
    try {
        const tokenData = await got_1.default.post(url, {
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
        let message = 'Unknown Error';
        if (error instanceof Error)
            message = error.message;
        console.log(message);
        throw new Error(message);
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
        let message = 'Unknown Error';
        if (error instanceof Error)
            message = error.message;
        console.log(message);
        throw new Error(message);
    }
}
exports.requestResources = requestResources;
