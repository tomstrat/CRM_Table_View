import { Result, ValidationError } from "express-validator"
import layout from "./layout"
import getError from "../utilities/getError"

export default function loginPage({ errors }: { errors?: Result<ValidationError> } = {}): string {
  return layout(`
  <div class="login-container">
    <form method="POST">
      <input class="user-name" type="text" placeholder="Enter Username" name="username" required>
      <div class="valError">${getError(errors, "username")}</div>
      <input class="password" type="password" placeholder="Enter Password" name="password" required>
      <div class="valError">${getError(errors, "password")}</div>
      <input class="submit-button" type="submit" value="Login"></br>
      <label class="remember-me-container">
        <input class="remember-me" type="checkbox" checked="checked" name="remember"> Remember me
      </label></br>
      <a class="forgot-link" href="">Forgotton password?</a>
    </form>
  </div>
              
  `)
}