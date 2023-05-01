"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_1 = require("../../database/models/User");
const user_formatters_1 = require("../formatters/user.formatters");
function usersRouteFactory({ userClient, userValidators, handleValErrors, }) {
    const usersRouter = (0, express_1.Router)();
    const { requireNewUsername, requireEditUsername, requireNewPassword, requireEditPassword, requirePasswordConfirmation, requireEditPasswordConfirmation, requireContract, requireRole, requireCert, requireInjured, requireRoster, requireEmployeeType, requireJoinDate, requireLocation } = userValidators;
    usersRouter.get("/", async (req, res) => {
        const users = await userClient.getAll();
        return res.status(200).json(users);
    });
    usersRouter.get("/:id", async (req, res) => {
        const id = parseInt(req.params.id);
        const user = await userClient.getOne(id);
        if (user) {
            return res.status(200).json(user);
        }
        else {
            return res.status(404).json(undefined);
        }
    });
    usersRouter.post("/new", [
        requireNewUsername, requireNewPassword,
        requirePasswordConfirmation,
        requireContract, requireRole,
        requireCert, requireInjured, requireRoster,
        requireEmployeeType, requireJoinDate,
        requireLocation
    ], handleValErrors(), async (req, res) => {
        const user = await userClient.addRecord((0, user_formatters_1.formatUser)(req.body));
        res.status(200).json(user);
    });
    usersRouter.patch("/:id", [
        requireEditUsername, requireEditPassword,
        requireEditPasswordConfirmation,
        requireContract, requireRole,
        requireCert, requireInjured, requireRoster,
        requireEmployeeType, requireJoinDate,
        requireLocation
    ], handleValErrors(), async (req, res) => {
        const user = await userClient.updateRecord(parseInt(req.params.id), (0, user_formatters_1.cleanObject)((0, user_formatters_1.formatUser)(req.body)));
        res.status(200).json(user);
    });
    usersRouter.delete("/:id", async (req, res) => {
        const response = await userClient.deleteRecord(parseInt(req.params.id));
        if (response)
            res.status(200).json(response);
        if (!response)
            res.status(404).json(false);
    });
    return ["/api/users", usersRouter, User_1.Role.operations];
}
exports.default = usersRouteFactory;
