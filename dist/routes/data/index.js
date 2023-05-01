"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_1 = require("../../database/models/User");
function dataRouteFactory({ tableViewBuilder }) {
    const dataRouter = (0, express_1.Router)();
    dataRouter.get("/", async (req, res) => {
        // const token = req.session ? req.session.token : "undefined"
        // const query_b = {
        //   resource: "Employee__c",
        //   version: "v33.0",
        //   fields: ["Name", "Paid_Hours__c", "Revenue__c", "Total_Cost__c", "Waste__c", "AJS__c", "Total_Services__c", "	RPH__c"]
        // }
        // const url = buildQuery(query_b)
        // console.log(url)
        // const resources = await requestResources(url, token)
        // const formatted = formatRecords(resources)
        res.send("discontinued");
    });
    return ["/data", dataRouter, User_1.Role.user];
}
exports.default = dataRouteFactory;
