import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import uniqid from "uniqid"
import "../../styles/Staff_Search/staffWidget.css"
import { formatStaffName } from "../../../utilities/formatters/util"

const StaffWidget = (props) => {
  const [ownState, setOwnState] = useState(false)

  useEffect(() => {
    if(props.toggleState){
      props.toggleState.map((obj) => {
        if(obj.username == username && obj.state !== ownState){
          if(ownState) setOwnState(false)
          else setOwnState(true)
        }
      })
    }
  }), []
  
  function findTopRole(list) {
    if(list.includes("uncertified")) return "uncertified"
    if(list.includes("trainer")) return "trainer"
    if(list.includes("driver")) return "driver"
    if(list.includes("navigator")) return "navigator"
    
  }
 
  const {
    username,
    employeeType,
    certified
  } = props.user

  const updatedTypes = certified
    ? employeeType
    : [...employeeType, "uncertified"]

  function toggleOnClick () {
    props.resultsGetName(username)
  }
  return (
    <div key={uniqid("type-")} className={
      ownState
        ? `staff-widget staff-widget-toggled ${findTopRole(updatedTypes)}`
        : `staff-widget ${findTopRole(updatedTypes)}`
      
    }
    onClick={toggleOnClick} 
    >
      <div className="staff-widget-username">{formatStaffName(username, ".")}</div>
    </div>
  )
  
}

export default StaffWidget

StaffWidget.propTypes = {
  user: PropTypes.object,
  toggleState: PropTypes.array,
  resultsGetName: PropTypes.func
}