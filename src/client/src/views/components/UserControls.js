import React from "react"
import "../styles/UserControls.css"
import ToggleButton from "./ToggleButton"


const UserControls = () => {
  return (
    <div className="sidebar-components-container">        
      <div className="user-button-container">
        {ToggleButton("All Users")}
      </div>
      <div className="user-button-container">
        {ToggleButton("Operations")}
        {ToggleButton("Trainers")}
      </div>
      <div className="user-button-container">
        {ToggleButton("Drivers")}
        {ToggleButton("Navigators")}
        {ToggleButton("Temp")}
      </div>
      <div className="user-controls-container">
        <div className="controls-label">Include Inactive</div>
        <input type="checkbox" className="controls-checkbox"></input>
        <button className="search-button" id="search">Search</button>
      </div>
      
    </div>
  )
} 


export default UserControls