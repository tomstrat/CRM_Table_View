"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../..");
const opstimenav_1 = __importDefault(require("../../components/layout/opstimenav"));
function usercard() {
    return (0, __1.layout)(`${(0, opstimenav_1.default)()}
  <div class="page-container">
  <div class="user-card-container">
    title (name)
  <div>
  </div>
  <script type="text/javascript" src="/js/usercard.js"></script>
  `);
}
exports.default = usercard;
