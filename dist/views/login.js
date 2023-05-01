"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const layout_1 = __importDefault(require("./layout"));
const getError_1 = __importDefault(require("../utilities/getError"));
function loginPage({ errors } = {}) {
    return (0, layout_1.default)(`
  <div class="login-container">
    <form method="POST">
      <input class="user-name" type="text" placeholder="Enter Username" name="username" required>
      <div class="valError">${(0, getError_1.default)(errors, "username")}</div>
      <input class="password" type="password" placeholder="Enter Password" name="password" required>
      <div class="valError">${(0, getError_1.default)(errors, "password")}</div>
      <input class="submit-button" type="submit" value="Login"></br>
      <label class="remember-me-container">
        <input class="remember-me" type="checkbox" name="remember"> Remember me
      </label></br>
      <a class="forgot-link" href="">Forgotton password?</a>
    </form>
  </div>
              
  `);
}
exports.default = loginPage;
