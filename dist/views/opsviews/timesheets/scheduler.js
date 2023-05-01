"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const layout_1 = __importDefault(require("../../layout"));
const opstimenav_1 = __importDefault(require("../../components/layout/opstimenav"));
const sidebar_1 = __importDefault(require("../../components/layout/sidebar"));
const schedulecontrols_1 = __importDefault(require("../../components/timepage/schedulecontrols"));
const scheduletopbar_1 = __importDefault(require("../../components/timepage/scheduletopbar"));
const routebox_1 = __importDefault(require("../../components/timepage/routebox"));
function scheduler() {
    return (0, layout_1.default)(`
    

    <div id="default-sidebar" class="visible-sidebar">
        ${(0, sidebar_1.default)("Employee Search", schedulecontrols_1.default)}
      </div>
      
      ${(0, opstimenav_1.default)()}
      <div class="schedule-content-container">
      <div class="junkie-search-container">
      <div>
      </div>
      Dynamic employee search results here (can click on, and add employees to routes from here based on desired search results)
      </div>
      <div class="schedule-planner-container">
        ${(0, scheduletopbar_1.default)()}
        ${(0, routebox_1.default)("Everyday routes", "Ask Mike")}
        </form>
        </div>
        <script type="text/javascript" src="/js/scheduler.js"></script>  
        `);
}
exports.default = scheduler;
