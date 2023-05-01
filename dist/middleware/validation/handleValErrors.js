"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
function handleValErrors(template) {
    return (req, res, next) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            console.log(`Errors: ${JSON.stringify(errors)}`);
            return template
                ? res.status(400).send(template({ errors }))
                : res.status(400).json(errors);
        }
        next();
    };
}
exports.default = handleValErrors;
