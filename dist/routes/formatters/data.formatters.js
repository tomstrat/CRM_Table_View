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
exports.formatRecords = exports.formatRecord = void 0;
const R = __importStar(require("ramda"));
function formatRecord(externalRecord) {
    return {
        meta: {
            sfObject: R.path(["attributes", "type"], externalRecord),
            recordUrl: R.path(["attributes", "url"], externalRecord),
        },
        name: externalRecord.Name,
        paidHours: externalRecord.Paid_Hours__c,
        revenue: externalRecord.Revenue__c,
        totalCost: externalRecord.Total_Cost__c,
        waste: externalRecord.Waste__c,
        AJS: externalRecord.AJS__c,
        totalServices: externalRecord.Total_Services__c,
        RPH: externalRecord.RPH__c
    };
}
exports.formatRecord = formatRecord;
function formatRecords(externalData) {
    const { records } = externalData;
    return {
        records: records.map((record) => {
            return formatRecord(record);
        })
    };
}
exports.formatRecords = formatRecords;
