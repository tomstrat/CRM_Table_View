"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../database/models/User");
const error_1 = require("../models/error");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function requireAuth(requiredRole) {
    return (req, res, next) => {
        if (!requiredRole) {
            next();
        }
        else if (req.session && req.session.jwt) {
            const decoded = jsonwebtoken_1.default.verify(req.session.jwt, process.env.JWT_SECRET_KEY);
            if (getAccessLevel(decoded.role) >= getAccessLevel(requiredRole)) {
                next();
            }
            else {
                throw new error_1.Unauthorised("You dont have the correct authorisation");
            }
        }
        else {
            throw new error_1.Unauthorised("You dont have the correct authorisation");
        }
    };
}
exports.default = requireAuth;
function getAccessLevel(role) {
    return User_1.RolePermission[role];
}
