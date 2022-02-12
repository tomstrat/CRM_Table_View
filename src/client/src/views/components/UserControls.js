import React from "react"
import "../styles/UserControls.css"
import ChildToggleButton from "./ChildToggleButton"
import MasterToggleButton from "./MasterToggleButton"
import PropTypes from "prop-types"

const UserControls = (props) => {
  return (
    <>
      <div className="sidebar-components-container">        
        <div className="user-button-container">
          <MasterToggleButton title="All Users" ToggleButtons={props.ToggleButtons} setToggleButtons={props.setToggleButtons}/>
        </div>
        <div className="user-button-container">
          <ChildToggleButton title="Operations" ToggleButtons={props.ToggleButtons} setToggleButtons={props.setToggleButtons}/>
          <ChildToggleButton title="Trainers" ToggleButtons={props.ToggleButtons} setToggleButtons={props.setToggleButtons}/>
        </div>
        <div className="user-button-container">
          <ChildToggleButton title="Drivers" ToggleButtons={props.ToggleButtons} setToggleButtons={props.setToggleButtons}/>
          <ChildToggleButton title="Navigators" ToggleButtons={props.ToggleButtons} setToggleButtons={props.setToggleButtons}/>
          <ChildToggleButton title="Temp" ToggleButtons={props.ToggleButtons} setToggleButtons={props.setToggleButtons}/> 
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

UserControls.propTypes = {
  ToggleButtons: PropTypes.object,
  setToggleButtons: PropTypes.func,
}