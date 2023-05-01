"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHeaders = void 0;
const R = __importStar(require("ramda"));
const testUser = {
    username: "test",
    password: "test",
    role: "Role.admin",
    contract: "Contract.fullTime",
    certified: true,
    injured: false,
    roster: {
        monday: "RosterStatus.working",
        tuesday: "RosterStatus.working",
        wednesday: "RosterStatus.working",
        thursday: "RosterStatus.working",
        friday: "RosterStatus.working",
        saturday: "RosterStatus.working",
    }
};
function getHeaders() {
    const newtestUser = R.omit(['password', 'roster'], testUser);
    return Object.keys(newtestUser).map(header => `<div class="column">${header.charAt(0).toUpperCase() + header.slice(1)}</div>`).join("");
}
exports.getHeaders = getHeaders;
