"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const layout_1 = __importDefault(require("../../layout"));
const opstimenav_1 = __importDefault(require("../../components/layout/opstimenav"));
const sidebar_1 = __importDefault(require("../../components/layout/sidebar"));
const edithourscontrols_1 = __importDefault(require("../../components/timepage/edithourscontrols"));
function edithours() {
    return (0, layout_1.default)(`  
    <div id="default-sidebar" class="visible-sidebar">
        ${(0, sidebar_1.default)("Edit hours", edithourscontrols_1.default)}
      </div>
      
      ${(0, opstimenav_1.default)()}
      <div class="table-content-container">
            </div>`);
}
exports.default = edithours;
