import React, { useState } from "react"
import "../styles/UserControls.css"
import ToggleButton from "./ToggleButton"
import MasterToggleButton from "./MasterToggleButton"


const UserControls = () => {
  const [ToggleButtons, setToggleButtons] = useState({
    allusers: true, 
    operations: false, 
    trainers: false, 
    drivers: false, 
    navigators: false, 
    temp: false
  })

  return (
    <>
      <div className="sidebar-components-container">        
        <div className="user-button-container">
          <MasterToggleButton title="All Users" ToggleButtons={ToggleButtons} setToggleButtons={setToggleButtons}/>
        </div>
        <div className="user-button-container">
          <ToggleButton title="Operations" ToggleButtons={ToggleButtons} setToggleButtons={setToggleButtons}/>
          <ToggleButton title="Trainers" ToggleButtons={ToggleButtons} setToggleButtons={setToggleButtons}/>
        </div>
        <div className="user-button-container">
          <ToggleButton title="Drivers" ToggleButtons={ToggleButtons} setToggleButtons={setToggleButtons}/>
          <ToggleButton title="Navigators" ToggleButtons={ToggleButtons} setToggleButtons={setToggleButtons}/>
          <ToggleButton title="Temp" ToggleButtons={ToggleButtons} setToggleButtons={setToggleButtons}/> 
        </div>
        <div className="user-controls-container">
          <div className="controls-label">Include Inactive</div>
          <input type="checkbox" className="controls-checkbox"></input>
          <button className="search-button" id="search">Search</button>
        </div>
      </div>
    </>
  )
} 


export default UserControls