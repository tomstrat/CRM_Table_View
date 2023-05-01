"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const layout_1 = __importDefault(require("../../layout"));
const timenav_1 = __importDefault(require("../../components/layout/timenav"));
function ttmoverview() {
    return (0, layout_1.default)(`${(0, timenav_1.default)()}
    
    `);
}
exports.default = ttmoverview;
