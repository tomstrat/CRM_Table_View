import React from "react"
import "../styles/StaffSearchControls.css"
import PropTypes from "prop-types"
import ToggleButton from "./ToggleButton"
import MasterToggleButton from "./MasterToggleButton"
import ChildToggleButton from "./ChildToggleButton"


const StaffSearchControls = (props) => {
  return (
    <>
      <div className="sidebar-components-container">
        <div className="basic-column">
          <label className="search-label">Availability</label> 
          <div className="user-button-container"> 
            <ChildToggleButton title="Rostered" ToggleButtons={props.ToggleButtons} setToggleButtons={props.setToggleButtons}/>
            <ChildToggleButton title="Potential" ToggleButtons={props.ToggleButtons} setToggleButtons={props.setToggleButtons}/>
            <MasterToggleButton title="All" ToggleButtons={props.ToggleButtons} setToggleButtons={props.setToggleButtons}/>
          </div>   
          <label className="search-label">Contract</label>  
          <div className="user-button-container">
            <ToggleButton title="Full time" ToggleButtons={props.ToggleButtons} setToggleButtons={props.setToggleButtons}/>
            <ToggleButton title="Casual" ToggleButtons={props.ToggleButtons} setToggleButtons={props.setToggleButtons}/>
            <ToggleButton title="Temp" ToggleButtons={props.ToggleButtons} setToggleButtons={props.setToggleButtons}/>
          </div>
        </div>  
        <div className="basic-column">
          <label className="search-label">Role</label> 
          <div className="user-button-container">
            <MasterToggleButton title="All Junkies" ToggleButtons={props.ToggleButtons} setToggleButtons={props.setToggleButtons}/>
          </div>
          <div className="user-button-container">
            <ChildToggleButton title="Trainers" ToggleButtons={props.ToggleButtons} setToggleButtons={props.setToggleButtons}/>
            <ChildToggleButton title="Drivers" ToggleButtons={props.ToggleButtons} setToggleButtons={props.setToggleButtons}/>
          </div>
          <div className="user-button-container">
            <ChildToggleButton title="Navis" ToggleButtons={props.ToggleButtons} setToggleButtons={props.setToggleButtons}/>
            <ChildToggleButton title="Trainees" ToggleButtons={props.ToggleButtons} setToggleButtons={props.setToggleButtons}/>
            <ChildToggleButton title="Temps" ToggleButtons={props.ToggleButtons} setToggleButtons={props.setToggleButtons}/>
          </div>
        </div>  
        <div className="basic-column">
          <label className="search-label">Suburb</label> 
          <div className="user-button-container">
            <ChildToggleButton title="Inner" ToggleButtons={props.ToggleButtons} setToggleButtons={props.setToggleButtons}/>
            <ChildToggleButton title="Outer" ToggleButtons={props.ToggleButtons} setToggleButtons={props.setToggleButtons}/>
          </div>
          <div className="user-button-container">
            <ChildToggleButton title="North" ToggleButtons={props.ToggleButtons} setToggleButtons={props.setToggleButtons}/>
          </div>
          <div className="user-button-container">
            <ChildToggleButton title="West" ToggleButtons={props.ToggleButtons} setToggleButtons={props.setToggleButtons}/>
            <ChildToggleButton title="All" ToggleButtons={props.ToggleButtons} setToggleButtons={props.setToggleButtons}/>
            <ChildToggleButton title="East" ToggleButtons={props.ToggleButtons} setToggleButtons={props.setToggleButtons}/>
          </div>
          <div className="user-button-container">
            <ChildToggleButton title="South" ToggleButtons={props.ToggleButtons} setToggleButtons={props.setToggleButtons}/>
          </div>
        </div>  
      </div>
    </>
  )
} 

export default StaffSearchControls

StaffSearchControls.propTypes = {
  ToggleButtons: PropTypes.object,
  setToggleButtons: PropTypes.func,
}