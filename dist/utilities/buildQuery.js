"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildQuery = void 0;
const config_1 = __importDefault(require("../config/config"));
function buildQuery(query) {
    const fieldQuery = query.fields.reduce((current, next, index) => {
        return index + 1 == query.fields.length ? current + `+${next}` : current + `+${next},`;
    }, `${config_1.default.urls.data}${query.version}/query?q=SELECT`);
    return `${fieldQuery}+from+${query.resource}`;
}
exports.buildQuery = buildQuery;
