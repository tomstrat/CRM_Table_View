import React from "react"

const UserControls = () => {
  return (
    <div className="sidebar-components-container">        
      <div className="user-button-container">
        <button className="controlsbutton" id="allusers">All users</button>
      </div>
      <div className="user-button-container">
        <button className="controlsbutton" id="operations">Operations</button>
        <button className="controlsbutton" id="trainers">Trainers</button>
      </div><div className="user-button-container">
        <button className="controlsbutton" id="drivers">Drivers</button>
        <button className="controlsbutton" id="navigators">Navigators</button>
        <button className="controlsbutton" id="temp">Temps</button>
      </div><div className="user-controls-container">
        <div className="controls-label">Include Inactive</div>
        <input type="checkbox" className="controls-checkbox"></input>
        <button className="search-button" id="search">Search</button>
      </div><div className="new-user-button-container">
        <button className="new-user-button">Add new user</button>
      </div>
    </div>
  )
} 

export default UserControls