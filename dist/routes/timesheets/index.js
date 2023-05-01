"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_1 = require("../../database/models/User");
function timesheetsRouteFactory({ ttmoverview, ttmhours, ttmavailability }) {
    const timesheetsRouter = (0, express_1.Router)();
    timesheetsRouter.get("/", (req, res) => {
        res.redirect("timesheets/ttmoverview");
    });
    timesheetsRouter.get("/ttmoverview", (req, res) => {
        return res.send(ttmoverview());
    });
    timesheetsRouter.get("/ttmhours", (req, res) => {
        return res.send(ttmhours());
    });
    timesheetsRouter.get("/ttmavailability", (req, res) => {
        return res.send(ttmavailability());
    });
    return ["/timesheets", timesheetsRouter, User_1.Role.user];
}
exports.default = timesheetsRouteFactory;
