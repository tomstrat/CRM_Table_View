import React from "react"
import "../styles/UserControls.css"
import PropTypes from "prop-types"
import ToggleContainer from "./ToggleContainer"

const UserControls = () => {
  return (
    <>
      <div className="sidebar-components-container">        
        <ToggleContainer 
          buttons={
            [
              {name: "All users", currState: true, buttonRole: "master", classInject: "injectAttempt"}, 
              {name: "Operations", currState: false, buttonRole: "child", classInject: "attempt2"}, 
              {name: "Trainers", currState: false, buttonRole: "child", classInject: "attempt3"},
              {name: "Drivers", currState: false, buttonRole: "child", classInject: ""},
              {name: "Navigators", currState: false, buttonRole: "child", classInject: ""}, 
              {name: "Temp", currState: false, buttonRole: "child", classInject: ""}
            ]
          }
          groupId={"userSearch"}
        />
      </div>
      <div className="user-controls-container">
        <div className="controls-label">Include Inactive</div>
        <input type="checkbox" className="controls-checkbox"></input>
        <button className="search-button" id="search">Search</button>
      </div>
      
    </>
  )
} 

export default UserControls

UserControls.propTypes = {
  ToggleButtons: PropTypes.object,
  setToggleButtons: PropTypes.func,
}