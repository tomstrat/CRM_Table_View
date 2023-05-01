"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unauthorised = exports.NotFound = exports.BadRequest = exports.BaseError = void 0;
class BaseError extends Error {
    constructor(message) {
        super(message);
        this.message = message;
    }
    getCode() {
        if (this instanceof BadRequest)
            return 400;
        if (this instanceof NotFound)
            return 404;
        if (this instanceof Unauthorised)
            return 401;
        return 500;
    }
}
exports.BaseError = BaseError;
class BadRequest extends BaseError {
}
exports.BadRequest = BadRequest;
class NotFound extends BaseError {
}
exports.NotFound = NotFound;
class Unauthorised extends BaseError {
}
exports.Unauthorised = Unauthorised;
