import { handleSubmitFactory } from "../../utilities/requests"

const NewUserPanel = () => {
  return (
    <div className="new-user-container">
      <form method="POST" action="users/new" className="new-user-form" id="new-user-form" onsubmit={handleSubmitFactory()}>
        <label className="new-user-label new-user-element">Required fields</label>
        <div className="user-button-container">
          <select name="contract" id="contract" className="new-user-drop new-user-element">
            <option value="fullTime">Full-time</option>
            <option value="partTime">Part-time</option>
            <option value="casual">Casual</option>
            <option value="temp">Temp</option>
          </select>
          <select name="role" id="role" className="new-user-drop new-user-element">
              <option value="user">User</option>
              <option value="operations">Operations</option>
              <option value="admin">Admin</option>
          </select>
        </div>
      
        <input className="user-name new-user-element new-user-auth-form" type="text" placeholder="Enter Username" name="username" autocomplete="off" required/>
        <div className="valError" data-error="username"></div>
        
        <input className="password new-user-element new-user-auth-form" type="password" placeholder="Enter Password" name="password" autocomplete="off" required/>
        <div className="valError" data-error="password"></div>
        
        <input className="password new-user-element new-user-auth-form" type="password" placeholder="Confirm Password" name="confirmPassword" autocomplete="off" required/>
        <div className="valError" data-error="confirmPassword"></div>
        <label className="new-user-label new-user-element">Optional fields</label>
        <div className="user-button-container">
        <label className="checkbox-label" new-user-element>Certified
          <input name="certified" type="checkbox" className="new-user-element controls-checkbox" value="true"/>
          <span className="checkmark"></span>
        </label>
        <label className="checkbox-label new-user-element controls-checkbox">Injured
          <input name="injured" type="checkbox" className="new-user-element" value="true"/>
          <span className="checkmark"></span>
        </label>
        </div>
        <div className="roster-toggle roster-toggle-off new-user-element">Set roster</div>
        <div className="user-button-container avail-display-off new-user-element" id="roster-container">
          <div className="availability-button new-user-element avail-none" id="avail-mon">M</div>
          <div className="availability-button new-user-element avail-none" id="avail-tue">T</div>
          <div className="availability-button new-user-element avail-none" id="avail-wed">W</div>
          <div className="availability-button new-user-element avail-none" id="avail-thu">T</div>
          <div className="availability-button new-user-element avail-none" id="avail-fri">F</div>
          <div className="availability-button new-user-element avail-none" id="avail-sat">S</div>
          <input type="text" className="hidden-value" id="invis-mon" name="rosterMonday" value="unselected"></input>
          <input type="text" className="hidden-value" id="invis-tue" name="rosterTuesday" value="unselected"></input>
          <input type="text" className="hidden-value" id="invis-wed" name="rosterWednesday" value="unselected"></input>
          <input type="text" className="hidden-value" id="invis-thu" name="rosterThursday" value="unselected"></input>
          <input type="text" className="hidden-value" id="invis-fri" name="rosterFriday" value="unselected"></input>
          <input type="text" className="hidden-value" id="invis-sat" name="rosterSaturday" value="unselected"></input>
        </div>
        <div className="search-button-container">
        <input className="new-user-submit-button" type="submit" value="Submit"/>
        </div>
      </form>
      <div className="cancel-button-container">
        <button className="new-user-button new-user-element">Cancel</button>
      </div>
    </div>
  )
}

export default NewUserPanel;