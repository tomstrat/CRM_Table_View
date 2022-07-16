import React from "react"
import PropTypes from "prop-types"
import uniqid from "uniqid"
import "../../styles/Staff_Search/staffWidget.css"
import { formatStaffName } from "../../../utilities/formatters/util"

const NewStaffWidget = (props) => {

  function findTopRole(list) {
    if(list.includes("uncertified")) return "uncertified"
    if(list.includes("trainer")) return "trainer"
    if(list.includes("driver")) return "driver"
    if(list.includes("navigator")) return "navigator"
  }
  
  function addNameClick () {
    props.addName()
  }
  

  const {
    username,
    employeeType,
    certified,
    toggleState
  } = props.user

  const updatedTypes = (certified === "true")
    ? employeeType
    : [...employeeType, "uncertified"]

  function toggleOnClick() {
    props.toggleStaff(props.index, username)
  }
  
  

  return (
    toggleState
      ? 
      <>
        <div key={uniqid("type-")} 
          className={`staff-widget staff-widget-toggled ${findTopRole(updatedTypes)}`
          }
          onClick={toggleOnClick} 
        >
          <div className="staff-widget-username">{formatStaffName(username, ".")}</div>
          <div className="staff-add-button" onClick={addNameClick}>+</div>
        </div>
       
      </>
      :
      <div key={uniqid("type-")} 
        className={`staff-widget ${findTopRole(updatedTypes)}`
        }
        onClick={toggleOnClick} 
      >
        <div className="staff-widget-username">{formatStaffName(username, ".")}</div>
      </div>
  )
}

export default NewStaffWidget

NewStaffWidget.propTypes = {
  index: PropTypes.number,
  user: PropTypes.object,
  toggleStaff: PropTypes.func,
  addName: PropTypes.func
}