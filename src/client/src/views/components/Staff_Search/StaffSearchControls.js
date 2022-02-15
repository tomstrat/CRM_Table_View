import React from "react"
import "../../styles/StaffSearchControls.css"
import PropTypes from "prop-types"
import ToggleContainer from "../ToggleContainer"

const StaffSearchControls = () => {
  return (
    <>
      <div className="sidebar-components-container">
        <div className="basic-column">
          <label className="search-label">Availability</label> 
          <ToggleContainer 
            buttons={
              [
                {name: "All", currState: true, buttonRole: "master", classInject: ""}, 
                {name: "Rostered", currState: false, buttonRole: "child", classInject: ""},
                {name: "Possible", currState: false, buttonRole: "child", classInject: ""},  
              ]
            }
            groupId={"avail-search"}
          />
          <label className="search-label">Hours</label> 
          <ToggleContainer 
            buttons={
              [
                {name: "All", currState: true, buttonRole: "master", classInject: ""}, 
                {name: "Contracted", currState: false, buttonRole: "child", classInject: ""},
                {name: "Casual", currState: false, buttonRole: "child", classInject: ""},  
              ]
            }
            groupId={"hours-search"}
          />
          <label className="search-label">Role</label> 
          <ToggleContainer 
            buttons={
              [
                {name: "All Roles", currState: true, buttonRole: "master", classInject: ""}, 
                {name: "Drivers", currState: false, buttonRole: "child", classInject: ""},
                {name: "Navigators", currState: false, buttonRole: "child", classInject: ""},
                {name: "Trainers", currState: false, buttonRole: "child", classInject: ""},
                {name: "Trainees", currState: false, buttonRole: "child", classInject: ""}, 
                {name: "Temps", currState: false, buttonRole: "child", classInject: ""},  
              ]
            }
            groupId={"role-search"}
          />
          <label className="search-label">Location</label> 
          <ToggleContainer 
            buttons={
              [
                {name: "Inner", currState: true, buttonRole: "free", classInject: ""},
                {name: "Outer", currState: true, buttonRole: "free", classInject: ""}
              ]
            }
            groupId={"location-search"}
          />
          <ToggleContainer 
            buttons={
              [
                {name: "North", currState: false, buttonRole: "child", classInject: "single-row"},
                {name: "West", currState: false, buttonRole: "child", classInject: ""},
                {name: "All", currState: true, buttonRole: "master", classInject: ""}, 
                {name: "East", currState: false, buttonRole: "child", classInject: ""},
                {name: "South", currState: false, buttonRole: "child", classInject: "single-row"}
              ]
            }
            groupId={"direction-search"}
          />
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