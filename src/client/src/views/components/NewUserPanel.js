import React from "react"


const NewUserPanel = () => {
  return (
    <div className="new-user-container">
      <form method="POST" action="users/new" className="new-user-form" id="new-user-form">
        <label className="new-user-label new-user-element">Required fields</label>
        <div className="user-button-container">
          <select name="contract" id="contract" className="new-user-drop new-user-element">
            <option defaultValue="fullTime">Full-time</option>
            <option defaultValue="partTime">Part-time</option>
            <option defaultValue="casual">Casual</option>
            <option defaultValue="temp">Temp</option>
          </select>
          <select name="role" id="role" className="new-user-drop new-user-element">
            <option defaultValue="user">User</option>
            <option defaultValue="operations">Operations</option>
            <option defaultValue="admin">Admin</option>
          </select>
        </div>
      
        <input className="user-name new-user-element new-user-auth-form" type="text" placeholder="Enter Username" name="username" autoComplete="off" required/>
        <div className="valError" data-error="username"></div>
        
        <input className="password new-user-element new-user-auth-form" type="password" placeholder="Enter Password" name="password" autoComplete="off" required/>
        <div className="valError" data-error="password"></div>
        
        <input className="password new-user-element new-user-auth-form" type="password" placeholder="Confirm Password" name="confirmPassword" autoComplete="off" required/>
        <div className="valError" data-error="confirmPassword"></div>
        <label className="new-user-label new-user-element">Optional fields</label>
        <div className="user-button-container">
          <label className="checkbox-label new-user-element">Certified
            <input name="certified" type="checkbox" className="new-user-element controls-checkbox" defaultValue="true"/>
            <span className="checkmark"></span>
          </label>
          <label className="checkbox-label new-user-element controls-checkbox">Injured
            <input name="injured" type="checkbox" className="new-user-element" defaultValue="true"/>
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
          <input type="text" className="hidden-value" id="invis-mon" name="rosterMonday" defaultValue="unselected"></input>
          <input type="text" className="hidden-value" id="invis-tue" name="rosterTuesday" defaultValue="unselected"></input>
          <input type="text" className="hidden-value" id="invis-wed" name="rosterWednesday" defaultValue="unselected"></input>
          <input type="text" className="hidden-value" id="invis-thu" name="rosterThursday" defaultValue="unselected"></input>
          <input type="text" className="hidden-value" id="invis-fri" name="rosterFriday" defaultValue="unselected"></input>
          <input type="text" className="hidden-value" id="invis-sat" name="rosterSaturday" defaultValue="unselected"></input>
        </div>
        <div className="search-button-container">
          <input className="new-user-submit-button" type="submit" defaultValue="Submit"/>
        </div>
      </form>
      <div className="cancel-button-container">
        <button className="new-user-button new-user-element">Cancel</button>
      </div>
    </div>
  )
}

export default NewUserPanel