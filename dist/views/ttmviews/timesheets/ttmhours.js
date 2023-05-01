"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const layout_1 = __importDefault(require("../../layout"));
const timeform_1 = __importDefault(require("../../components/timepage/timeform"));
const timenav_1 = __importDefault(require("../../components/layout/timenav"));
const calendar_1 = __importDefault(require("../../components/timepage/calendar"));
function ttmhours() {
    return (0, layout_1.default)(` 
        ${(0, timenav_1.default)()}
        ${(0, calendar_1.default)()}
        ${(0, timeform_1.default)()}
                
    `);
}
exports.default = ttmhours;
