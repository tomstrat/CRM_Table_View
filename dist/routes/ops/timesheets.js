"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_1 = require("../../database/models/User");
function opstimesheetsRouteFactory({ userClient, opsoverview, scheduler, edithours, dataviewer, requests, manageusers }) {
    const opstimesheetsRouter = (0, express_1.Router)();
    opstimesheetsRouter.get("/", (req, res) => {
        res.redirect("/ops/timesheets/opsoverview");
    });
    opstimesheetsRouter.get("/opsoverview", (req, res) => {
        return res.send(opsoverview());
    });
    opstimesheetsRouter.get("/scheduler", (req, res) => {
        return res.send(scheduler());
    });
    opstimesheetsRouter.get("/edithours", (req, res) => {
        return res.send(edithours());
    });
    opstimesheetsRouter.get("/dataviewer", (req, res) => {
        return res.send(dataviewer());
    });
    opstimesheetsRouter.get("/requests", (req, res) => {
        return res.send(requests());
    });
    // opstimesheetsRouter.get("/manageusers", async (req: Request, res: Response) => {
    //   return res.send(manageusers(await userClient.getAll()))
    // })
    return ["/ops/timesheets", opstimesheetsRouter, User_1.Role.operations];
}
exports.default = opstimesheetsRouteFactory;
