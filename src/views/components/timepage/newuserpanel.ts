import { Result, ValidationError } from "express-validator"
import getError from "../../../utilities/getError"

export default function newuserpanel({ errors }: { errors?: Result<ValidationError> } = {}): string {
    return (`
    <div class="user-controls-container">
      <form method="POST" action="/users/new">
        
        <select name="contract" id="contract" class="contract-select">
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Casual">Casual</option>
          <option value="Temp">Temp</option>
        </select>

        <select name="role" id="role" class="role-select">
            <option value="Driver">Driver</option>
            <option value="Navigator">Navigator</option>
            <option value="Trainer">Trainer</option>
            <option value="Operations">Operations</option>
            <option value="Admin">Admin</option>
        </select>
        
        <input class="user-name" type="text" placeholder="Enter Username" name="username" required>
        <div class="valError">${getError(errors, "username")}</div>
        
        <input class="password" type="password" placeholder="Enter Password" name="password" required>
        <div class="valError">${getError(errors, "password")}</div>
        
        <input class="password" type="password" placeholder="Confirm Password" name="confirmPassword" required>
        <div class="valError">${getError(errors, "confirmPassword")}</div>
        
        <input class="submit-button" type="submit" value="Submit"></br>
      </form>
    </div>
    `)
}