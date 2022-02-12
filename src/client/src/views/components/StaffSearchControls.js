import React from "react"
import "../styles/StaffSearchControls.css"
import PropTypes from "prop-types"
import ToggleContainer from "./ToggleContainer"

const StaffSearchControls = () => {
  return (
    <>
      <div className="sidebar-components-container">
        <div className="basic-column">
          <label className="search-label">Availability</label> 
          <ToggleContainer 
            buttons={
              [
                {name: "All", currState: true, buttonRole: "master"}, 
                {name: "Rostered", currState: false, buttonRole: "child"},
                {name: "Possible", currState: false, buttonRole: "child"},  
              ]
            }
            groupId={"avail-search"}
          />
          <label className="search-label">Hours</label> 
          <ToggleContainer 
            buttons={
              [
                {name: "All", currState: true, buttonRole: "master"}, 
                {name: "Contracted", currState: false, buttonRole: "child"},
                {name: "Casual", currState: false, buttonRole: "child"},  
              ]
            }
            groupId={"hours-search"}
          />
          <label className="search-label">Role</label> 
          <ToggleContainer 
            buttons={
              [
                {name: "All Roles", currState: true, buttonRole: "master"}, 
                {name: "Drivers", currState: false, buttonRole: "child"},
                {name: "Navigators", currState: false, buttonRole: "child"},
                {name: "Trainers", currState: false, buttonRole: "child"},
                {name: "Trainees", currState: false, buttonRole: "child"}, 
                {name: "Temps", currState: false, buttonRole: "child"},  
              ]
            }
            groupId={"role-search"}
          />
          <label className="search-label">Location</label> 
          <ToggleContainer 
            buttons={
              [
                {name: "Both", currState: true, buttonRole: "master"}, 
                {name: "Inner", currState: false, buttonRole: "child"},
                {name: "Outer", currState: false, buttonRole: "child"}
              ]
            }
            groupId={"role-search"}
          />
          <label className="search-label">Direction</label> 
          <ToggleContainer 
            buttons={
              [
                {name: "All", currState: true, buttonRole: "master"}, 
                {name: "North", currState: false, buttonRole: "child"},
                {name: "East", currState: false, buttonRole: "child"},
                {name: "South", currState: false, buttonRole: "child"},
                {name: "West", currState: false, buttonRole: "child"}
              ]
            }
            groupId={"role-search"}
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