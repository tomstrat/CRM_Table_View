"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const Roster_1 = require("../../database/models/Roster");
const User_1 = require("../../database/models/User");
function userValidatorFactory({ userClient }) {
    return {
        requireUsername: (0, express_validator_1.body)("username")
            .trim()
            .escape()
            .custom(async (username) => {
            const user = await userClient.getOne(username);
            if (!user)
                throw new Error("Incorrect Username or Password");
        }),
        requirePassword: (0, express_validator_1.body)("password")
            .trim()
            .escape()
            .custom(async (password, { req }) => {
            const isCorrect = await userClient.comparePasswords(req.body.username, password);
            if (!isCorrect)
                throw new Error("Incorrect Username or Password");
        }),
        requireNewUsername: (0, express_validator_1.body)("username")
            .trim()
            .escape()
            .exists()
            .isLength({ min: 3, max: 20 })
            .withMessage("Must be between 3 and 20 characters")
            .custom(async (username) => {
            const user = await userClient.getOne(username);
            if (user)
                throw new Error("Username already exists");
        }),
        requireEditUsername: (0, express_validator_1.body)("username")
            .trim()
            .escape()
            .optional()
            .isLength({ min: 3, max: 20 })
            .withMessage("Must be between 3 and 20 characters")
            .custom(async (username, { req }) => {
            const id = req.params ? req.params.id : undefined;
            const user = await userClient.getOne(username);
            if (user && user.id === id)
                throw new Error("Username already exists");
        }),
        requireNewPassword: (0, express_validator_1.body)("password")
            .trim()
            .escape()
            .exists()
            .isLength({ min: 5, max: 30 })
            .withMessage("Must be between 5 and 30 characters"),
        requireEditPassword: (0, express_validator_1.body)("password")
            .trim()
            .escape()
            .optional()
            .isLength({ min: 5, max: 30 })
            .withMessage("Must be between 5 and 30 characters"),
        requirePasswordConfirmation: (0, express_validator_1.body)("confirmPassword")
            .trim()
            .escape()
            .exists()
            .isLength({ min: 5, max: 30 })
            .withMessage("Must be between 5 and 30 characters")
            .custom((password, { req }) => {
            if (password != req.body.password)
                throw new Error("Passwords dont match");
            return true;
        }),
        requireEditPasswordConfirmation: (0, express_validator_1.body)("confirmPassword")
            .trim()
            .escape()
            .optional()
            .isLength({ min: 5, max: 30 })
            .withMessage("Must be between 5 and 30 characters")
            .custom((password, { req }) => {
            if (password != req.body.password)
                throw new Error("Passwords dont match");
            return true;
        }),
        requireContract: (0, express_validator_1.body)("contract")
            .custom(contract => {
            if (!(contract in User_1.Contract))
                throw new Error("Contract not valid");
            return true;
        }),
        requireRole: (0, express_validator_1.body)("role")
            .custom(role => {
            if (!(role in User_1.Role))
                throw new Error("Role not valid");
            return true;
        }),
        requireCert: (0, express_validator_1.body)("certified")
            .optional()
            .custom(cert => {
            if (cert != "true" && cert != "false")
                throw new Error("Certified not valid");
            return true;
        }),
        requireInjured: (0, express_validator_1.body)("injured")
            .optional()
            .custom(inj => {
            if (inj != "true" && inj != "false")
                throw new Error("Injured not valid");
            return true;
        }),
        requireRoster: (0, express_validator_1.body)(["rosterMonday", "rosterTuesday", "rosterWednesday", "rosterThursday", "rosterFriday", "rosterSaturday"])
            .custom(roster => {
            if (!(roster in Roster_1.RosterStatus))
                throw new Error("Roster not valid");
            return true;
        }),
        requireEmployeeType: (0, express_validator_1.body)("employeeType")
            .optional()
            .custom(types => {
            const typesArr = (typeof types === "string")
                ? types.split(",")
                : types;
            typesArr.forEach(type => {
                if (!(type in User_1.EmployeeType))
                    throw new Error("Employee type not valid");
            });
            return true;
        }),
        requireLocation: (0, express_validator_1.body)("location")
            .optional()
            .custom(location => {
            if (!(location in User_1.Location))
                throw new Error("Location not valid");
            return true;
        }),
        requireJoinDate: (0, express_validator_1.body)("joinDate")
            .optional()
            .trim()
            .custom(date => {
            const workingDate = new Date(date);
            if (date.match(/^\d{4}-\d{2}-\d{2}$/) &&
                workingDate.getTime() &&
                workingDate.toISOString().slice(0, 10) === date)
                return true;
            throw new Error("Invalid date");
        })
    };
}
exports.default = userValidatorFactory;
