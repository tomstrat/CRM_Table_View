"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ramda_1 = require("ramda");
const pipeWithPromise = (0, ramda_1.pipeWith)((func, prev) => {
    return (prev && prev.then) ? prev.then(func) : func(prev);
});
exports.default = pipeWithPromise;
