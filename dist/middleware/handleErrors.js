"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error_1 = require("../models/error");
function handleErrors(err, req, res, next) {
    console.log(err);
    if (err instanceof error_1.BaseError) {
        return res.status(err.getCode()).send(err);
    }
}
exports.default = handleErrors;
