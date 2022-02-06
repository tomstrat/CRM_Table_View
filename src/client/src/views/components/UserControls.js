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
          <MasterToggleButton title="All Users" setToggleButtons={setToggleButtons}/>
        </div>
        <div className="user-button-container">
          <ToggleButton title="Operations" setToggleButtons={setToggleButtons}/>
          <ToggleButton title="Trainers" setToggleButtons={setToggleButtons}/>
        </div>
        <div className="user-button-container">
          <ToggleButton title="Drivers" setToggleButtons={setToggleButtons}/>
          <ToggleButton title="Navigators" setToggleButtons={setToggleButtons}/>
          <ToggleButton title="Temp" setToggleButtons={setToggleButtons}/> 
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