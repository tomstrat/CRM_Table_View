import React, { useState } from "react"
import "../../styles/StaffSearchControls.css"
import PropTypes from "prop-types"
import ToggleContainer from "../Buttons/ToggleContainer"

const StaffSearchControls = (props) => {
  const [avail, setAvail] = useState(null)
  const [hours, setHours] = useState(null)
  const [role, setRole] = useState(null)
  const [location, setLocation] = useState(null)
  const [direction, setDirection] = useState(null)
  
  function controlsGetButtons(groupId, groupState){
    switch(groupId) {
    case "avail": setAvail(groupState)
      break
    case "hours": setHours(groupState)
      break
    case "role": setRole(groupState)
      break
    case "location": setLocation(groupState)
      break
    case "direction": setDirection(groupState)
      break
    }
  }

  function formatRole(name){
    return name.toLowerCase().slice(0, name.length - 1)
  }

  function formatAvail (name) {
    if(name == "Rostered")
      return name.replace("Rostered", "working")
    if(name == "Possible")
      return name.replace("Possible", "contactable")
  }

  function formatHours (name) {
    if(name == "Contracted")
      return name.replace("Contracted", "fullTime")
    if(name == "Casual")
      return name.toLowerCase()
  }
  
  function searchOnClick() {
    const availQuery = []
    if(avail[0].currState)
    {
      avail.map((obj) => {
        if(obj.buttonRole == "child")
          availQuery.push(formatAvail(obj.name))
      })
    }
    else 
    {
      avail.map((obj) => {
        if(obj.buttonRole == "child" && obj.currState)
          availQuery.push(formatAvail(obj.name))
      })
    }
    const hoursQuery = []
    if(hours[0].currState)
    {
      hoursQuery.push("temp")
      hours.map((obj) => {
        if(obj.buttonRole == "child")
          hoursQuery.push(formatHours(obj.name))
      })
    }
    else 
    {
      hours.map((obj) => {
        if(obj.buttonRole == "child" && obj.currState)
          hoursQuery.push(formatHours(obj.name))
      })
    }
    const roleQuery = []
    if(role[0].currState)
    {
      role.map((obj) => {
        if(obj.buttonRole == "child")
          roleQuery.push(formatRole(obj.name))
      })
    }
    else 
    {
      role.map((obj) => {
        if(obj.buttonRole == "child" && obj.currState)
          roleQuery.push(formatRole(obj.name))
      })
    }
    const locationQuery = []

    if(location) {
      if(direction[2].currState == true)
      {
        location.map((prox) => {
          if(prox.currState == true){
            direction.map((obj) => {
              if(obj.buttonRole !== "master")
                locationQuery.push(prox.name.toLowerCase() + obj.name)
            })
          }
        })
      }
      else {
        location.map((prox) => {
          if(prox.currState == true){
            direction.map((obj) => {
              if(obj.currState == true && obj.buttonRole !== "master")
                locationQuery.push(prox.name.toLowerCase() + obj.name)
            })
          }
        })
      }
      
      
    }
    props.pageGetButtons(availQuery, hoursQuery, roleQuery, locationQuery)
    
  }
  
  return (
    <>
      <div className="sidebar-components-container">
        <div className="basic-column">
          <label className="search-label">Availability</label> 
          <ToggleContainer
            pState={avail}
            passState={controlsGetButtons} 
            buttons={
              [
                {name: "All", currState: true, buttonRole: "master", classInject: ""}, 
                {name: "Rostered", currState: false, buttonRole: "child", classInject: ""},
                {name: "Possible", currState: false, buttonRole: "child", classInject: ""}, 
              ]
            }
            groupId={"avail"}
          />
          <label className="search-label">Hours</label> 
          <ToggleContainer
            pState={hours}
            passState={controlsGetButtons}  
            buttons={
              [
                {name: "Any", currState: true, buttonRole: "master", classInject: ""}, 
                {name: "Contracted", currState: false, buttonRole: "child", classInject: ""},
                {name: "Casual", currState: false, buttonRole: "child", classInject: ""},  
              ]
            }
            groupId={"hours"}
          />
          <label className="search-label">Role</label> 
          <ToggleContainer
            pState={role}
            passState={controlsGetButtons}  
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
            groupId={"role"}
          />
          <label className="search-label">Location</label> 
          <ToggleContainer
            pState={location}
            passState={controlsGetButtons}  
            buttons={
              [
                {name: "Inner", currState: true, buttonRole: "free", classInject: ""},
                {name: "Outer", currState: true, buttonRole: "free", classInject: ""}
              ]
            }
            groupId={"location"}
          />
          <ToggleContainer
            pState={direction}
            passState={controlsGetButtons}  
            buttons={
              [
                {name: "North", currState: false, buttonRole: "child", classInject: "single-row"},
                {name: "West", currState: false, buttonRole: "child", classInject: ""},
                {name: "All", currState: true, buttonRole: "master", classInject: ""}, 
                {name: "East", currState: false, buttonRole: "child", classInject: ""},
                {name: "South", currState: false, buttonRole: "child", classInject: "single-row"}
              ]
            }
            groupId={"direction"}
          />
          <button className="search-button" onClick={searchOnClick}>Search</button>
        </div>  
      </div>
    </>
  )
} 

export default StaffSearchControls

StaffSearchControls.propTypes = {
  ToggleButtons: PropTypes.object,
  setToggleButtons: PropTypes.func,
  pageGetButtons: PropTypes.func
}