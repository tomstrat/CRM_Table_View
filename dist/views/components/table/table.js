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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tableViewBuilder = void 0;
const layout_1 = __importDefault(require("../../layout"));
const controls_1 = __importDefault(require("./controls"));
const R = __importStar(require("ramda"));
function formatHeader(header) {
    return header.replace(/([a-z])([A-Z])/, (match, p1, p2) => {
        return [p1, " ", p2].join("");
    }).split(" ").map(word => word[0].toUpperCase() + word.substring(1)).join(" ");
}
function getTableData(record, config) {
    const { excludes, type } = config;
    const keys = Object.keys(record);
    return keys.map(key => {
        if (R.not(R.includes(key, excludes))) {
            return type === "header" ? `<div class="column">${formatHeader(key)}</div>` : `<div class="column">${record[key]}</div>`;
        }
    }).join("");
}
function tableViewBuilder(sfdata) {
    const { records } = sfdata;
    const excludes = ["meta"];
    const renderedHeaders = getTableData(records[0], { excludes, type: "header" });
    const renderedData = records.map(record => {
        return `
        <div class="row">
          ${getTableData(record, { excludes, type: "row" })}
        </div>
    `;
    }).join("");
    const page = `
    ${(0, controls_1.default)()}
    <div class="ttmtable">
      <div class="thead">
        <div class="row">
          ${renderedHeaders}
        </div>
      </div>
      <div class="tbody">
        ${renderedData}
      </div>
    </div>    
  `;
    return (0, layout_1.default)(page);
}
exports.tableViewBuilder = tableViewBuilder;
