import { Result, ValidationError } from "express-validator"
import getError from "../../../utilities/getError"

export default function newuserpanel({ errors }: { errors?: Result<ValidationError> | undefined } = {}): string {
  return (`
    <div class="new-user-container">
      <form method="POST" action="users/new" class="new-user-form" id="new-user-form" onsubmit="handleFormSubmitAndGet(event)">
        <label class="new-user-label new-user-element">Required fields</label>
        <div class="user-button-container">
          <select name="contract" id="contract" class="new-user-drop new-user-element">
            <option value="fullTime">Full-time</option>
            <option value="partTime">Part-time</option>
            <option value="casual">Casual</option>
            <option value="temp">Temp</option>
          </select>
          <select name="role" id="role" class="new-user-drop new-user-element">
              <option value="driver">Driver</option>
              <option value="navigator">Navigator</option>
              <option value="trainer">Trainer</option>
              <option value="operations">Operations</option>
              <option value="admin">Admin</option>
          </select>
        </div>
      
        <input class="user-name new-user-element new-user-auth-form" type="text" placeholder="Enter Username" name="username" autocomplete="off" required></br>
        <div class="valError" data-error="username">${getError(errors, "username")}</div>
        
        <input class="password new-user-element new-user-auth-form" type="password" placeholder="Enter Password" name="password" autocomplete="off" required></br>
        <div class="valError" data-error="password">${getError(errors, "password")}</div>
        
        <input class="password new-user-element new-user-auth-form" type="password" placeholder="Confirm Password" name="confirmPassword" autocomplete="off" required></br>
        <div class="valError" data-error="confirmPassword">${getError(errors, "confirmPassword")}</div>
        <label class="new-user-label new-user-element">Optional fields</label>
        <div class="user-button-container">
        <label class="checkbox-label" new-user-element>Certified
          <input name="certified" type="checkbox" class="new-user-element controls-checkbox" value="true">
          <span class="checkmark"></span>
        </label>
        <label class="checkbox-label new-user-element controls-checkbox">Injured
          <input name="injured" type="checkbox" class="new-user-element" value="true">
          <span class="checkmark"></span>
        </label>
        </div>
        <div class="roster-toggle roster-toggle-off new-user-element">Set roster</div>
        <div class="user-button-container avail-display-off new-user-element" id="roster-container">
          <div class="availability-button new-user-element avail-none" id="avail-mon">M</div>
          <div class="availability-button new-user-element avail-none" id="avail-tue">T</div>
          <div class="availability-button new-user-element avail-none" id="avail-wed">W</div>
          <div class="availability-button new-user-element avail-none" id="avail-thu">T</div>
          <div class="availability-button new-user-element avail-none" id="avail-fri">F</div>
          <div class="availability-button new-user-element avail-none" id="avail-sat">S</div>
          <input type="text" class="hidden-value" id="invis-mon" name="rosterMonday" value="unselected"></input>
          <input type="text" class="hidden-value" id="invis-tue" name="rosterTuesday" value="unselected"></input>
          <input type="text" class="hidden-value" id="invis-wed" name="rosterWednesday" value="unselected"></input>
          <input type="text" class="hidden-value" id="invis-thu" name="rosterThursday" value="unselected"></input>
          <input type="text" class="hidden-value" id="invis-fri" name="rosterFriday" value="unselected"></input>
          <input type="text" class="hidden-value" id="invis-sat" name="rosterSaturday" value="unselected"></input>
        </div>
        <div class="search-button-container">
        <input class="new-user-submit-button" type="submit" value="Submit"></br>
        </div>
      </form>
      <div class="cancel-button-container">
        <button class="new-user-button new-user-element">Cancel</button>
      </div>
    </div>
    `)
}