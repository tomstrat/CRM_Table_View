"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const layout_1 = __importDefault(require("../../layout"));
const opstimenav_1 = __importDefault(require("../../components/layout/opstimenav"));
const sidebar_1 = __importDefault(require("../../components/layout/sidebar"));
const usercontrols_1 = __importDefault(require("../../components/timepage/usercontrols"));
const newuserpanel_1 = __importDefault(require("../../components/timepage/newuserpanel"));
function manageusers({ errors }) {
    // const users = data
    //   ? data.map(user => JSON.stringify(user))
    //   : "<div>No Users Found</div>"
    return (0, layout_1.default)(`
      
      <div hidden id="dataLoad">users/new</div>
      <div id="default-sidebar" class="visible-sidebar">
        ${(0, sidebar_1.default)("Select users", usercontrols_1.default)}
      </div>
      <div id="secondary-sidebar" class="invisible-sidebar">
        ${(0, sidebar_1.default)("New user", newuserpanel_1.default, errors)}
      </div>
      ${(0, opstimenav_1.default)()}
      <div class="table-content-container" onload="loadPageData('users/new')">
        <div class="table">
          <div class="theaders">
          </div>
          <div class="tbody">
          </div>
        </div>
      <script type="text/javascript" src="/js/index.js"></script>
      <script type="text/javascript" src="/js/requests.js"></script>
      
      
    `);
}
exports.default = manageusers;
