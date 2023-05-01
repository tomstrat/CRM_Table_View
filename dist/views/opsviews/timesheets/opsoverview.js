"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const layout_1 = __importDefault(require("../../layout"));
const opstimenav_1 = __importDefault(require("../../components/layout/opstimenav"));
function opsoverview() {
    return (0, layout_1.default)(`
    ${(0, opstimenav_1.default)()}
    <div class ="page-container">
        <div class="dayheader-container">
            <h2>Current day</h2>
            <div class="date-select-container">
            <label for="day">Select day</label>
            <input type="date" name="day"
                value="2018-07-22"
                min="2018-01-01" max="2018-12-31">
            </div>
        </div>
            <div class="overview-container">
                <div class="overview-subcontainer">
                <h2>Rostered staff</h2>
                <h1>0</h1>
                    </div>
                <div class="overview-subcontainer">
                    <h2>Potentially available</h2>
                    <h1>0</h1>
                </div>
                <div class="overview-subcontainer">
                    <h2>More info</h2>
                    <h1>0</h1>
                </div>
            </div>
    </div>
    `);
}
exports.default = opsoverview;
