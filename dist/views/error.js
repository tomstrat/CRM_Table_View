"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const layout_1 = __importDefault(require("./layout"));
function errorPage(err) {
    return (0, layout_1.default)(`
    <div class="error">
      <h1>Whoops! Something Went Wrong!</h1>
      <h2>Code: ${err.getCode()}</h2>
      <h3>Message: ${err.message}</h3>
    </div>
  `);
}
exports.default = errorPage;
