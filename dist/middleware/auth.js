"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireAuth = void 0;
function requireAuth(req, res, next) {
    const token = req.cookies.token || "";
    if (token) {
        next();
    }
    else {
        throw new Error("Auth Token Doesnt Exist");
    }
}
exports.requireAuth = requireAuth;
