"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const config_1 = __importDefault(require("../../config/config"));
const requests_1 = require("../requests");
const auth_1 = require("../../middleware/auth");
// /data
const dataGetRouter = (0, express_1.Router)();
dataGetRouter.get("/", auth_1.requireAuth, async (req, res) => {
    const { data } = config_1.default.urls;
    const token = req.cookies.token;
    const path = `${data}v33.0/sobjects/testObj__c`;
    const resources = await (0, requests_1.requestResources)(path, token);
    res.json(resources);
});
exports.default = dataGetRouter;
