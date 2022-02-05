import React from "react"
import getCurrentDate from "./getCurrentDate"
import "../styles/NewUserPanel.css"

const NewUserPanel = () => {
  return (
    <>
      <div className="new-user-container">
        <form method="POST" action="users/new" className="new-user-form" id="new-user-form">
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
          <div className="basic-column avail-display-box new-user-element">
            <div className="basic-row">
              
              <div className="new-user-button-container">
                <label className="checkbox-label" new-user-element>Ops</label>
                <input name="operations" type="checkbox" className="new-user-element controls-checkbox" value="false"/>
                <span className="checkmark"></span>
              </div>
              <div className="new-user-button-container">
                <label className="checkbox-label" new-user-element>Trainer</label>
                <input name="trainer" type="checkbox" className="new-user-element controls-checkbox" value="false"/>
                <span className="checkmark"></span>
              </div>
              <div className="new-user-button-container">
                <label className="checkbox-label" new-user-element>Driver</label>
                <input name="driver" type="checkbox" className="new-user-element controls-checkbox" value="false"/>
                <span className="checkmark"></span>
              </div>
              <div className="new-user-button-container">
                <label className="checkbox-label" new-user-element>Navi</label>
                <input name="navigator" type="checkbox" className="new-user-element controls-checkbox" value="false"/>
                <span className="checkmark"></span>
              </div>
              <div className="new-user-button-container">
                <label className="checkbox-label">Temp</label>
                <input name="temp" type="checkbox" className="new-user-element controls-checkbox" value="false"/>
                <span className="checkmark"></span>
              </div>
            
            </div>
            <div className="basic-row inj-cert">
              <div className="new-user-button-container">
                <label className="checkbox-label" new-user-element>Certified</label>
                <input name="certified" type="checkbox" className="new-user-element controls-checkbox" value="false"/>
                <span className="checkmark"></span>
              </div>
              <div className="new-user-button-container">
                <label className="checkbox-label" new-user-element>Injured</label>
                <input name="injured" type="checkbox" className="new-user-element controls-checkbox" value="false"/>
                <span className="checkmark"></span>
              </div>
              
            </div>
            
            
          </div>
          <div className="user-button-container">
            <label className="new-user-element">Join date:</label>
            <input type="date" id="join-date-select" name="join-date"
              defaultValue={getCurrentDate()}
              min="2005-01-01" max={getCurrentDate()}></input>
          </div>
          <div className="user-button-container avail-display-box new-user-element" id="roster-container">
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
      </div>
    </>
  )
}

export default NewUserPanel