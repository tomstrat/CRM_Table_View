"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function authRouteFactory({ userValidators, handleValErrors, userClient }) {
    const authRouter = (0, express_1.Router)();
    const { requireUsername, requirePassword } = userValidators;
    authRouter.post("/login", [requireUsername, requirePassword], handleValErrors(), async (req, res) => {
        const { username, role } = await userClient.getOne(req.body.username);
        req.session = {
            jwt: jsonwebtoken_1.default.sign({ username, role }, process.env.JWT_SECRET_KEY),
        };
        return res.json({ role });
    });
    authRouter.get("/current-session", (req, res) => {
        if (req.session && req.session.jwt) {
            const decoded = jsonwebtoken_1.default.verify(req.session.jwt, process.env.JWT_SECRET_KEY);
            return (decoded.role)
                ? res.json({ role: decoded.role })
                : res.json({ role: false });
        }
        return res.json({ role: false });
    });
    authRouter.get("/logout", (req, res) => {
        req.session = null;
        return res.json({ role: false });
    });
    return ["/auth", authRouter]; // NO ROLE NEEDED
}
exports.default = authRouteFactory;
