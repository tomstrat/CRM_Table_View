"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getError(errors, prop) {
    try {
        if (errors)
            return errors.mapped()[prop].msg;
        return "";
    }
    catch (err) {
        return "";
    }
}
exports.default = getError;
