import React from "react"
import "../styles/UserControls.css"
import ToggleButton from "./ToggleButton"
import MasterToggleButton from "./MasterToggleButton"

const UserControls = () => {
  return (
    <div className="sidebar-components-container">        
      <div className="user-button-container">
        <MasterToggleButton title="All Users"/>
      </div>
      <div className="user-button-container">
        <ToggleButton title="Operations"/>
        <ToggleButton title="Trainers"/>
      </div>
      <div className="user-button-container">
        <ToggleButton title="Drivers"/>
        <ToggleButton title="Navigators"/>
        <ToggleButton title="Temp"/> 
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