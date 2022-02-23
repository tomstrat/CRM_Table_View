import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import uniqid from "uniqid"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBus, faCompass, faChalkboardTeacher, faBookReader, faCalendarDay, faKey } from "@fortawesome/free-solid-svg-icons"
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
  


  const {
    username,
    employeeType,
    certified
  } = props.user

  const updatedTypes = certified
    ? employeeType
    : [...employeeType, "uncertified"]


  const getTypeIcon = type => {
    switch(type) {
    case "driver":
      return <FontAwesomeIcon className="staff-widget-icon" icon={faBus} size="lg" />
    case "trainer":
      return <FontAwesomeIcon className="staff-widget-icon" icon={faChalkboardTeacher} size="lg" />
    case "navigator":
      return <FontAwesomeIcon className="staff-widget-icon" icon={faCompass} size="lg" />
    case "temp":
      return <FontAwesomeIcon className="staff-widget-icon" icon={faCalendarDay} size="lg" />
    case "uncertified":
      return <FontAwesomeIcon className="staff-widget-icon" icon={faBookReader} size="lg" />
    case "operations":
      return <FontAwesomeIcon className="staff-widget-icon" icon={faKey} size="lg" />
    }
  }
  

  function toggleOnClick () {
    props.resultsGetName(username)
  }
  return (
    <div className={
      ownState
        ? "staff-widget-toggled staff-widget"
        : "staff-widget"
    }
    onClick={toggleOnClick} 
    >
      <div className="staff-widget-username">{formatStaffName(username, ".")}</div>
      {updatedTypes.map(type => {
        return <span key={uniqid("type-")} className="staff-widget-type">
          <div className="staff-widget-tooltip">{type}</div>
          {getTypeIcon(type)}
        </span>
      })}
    </div>
  )
  
}

export default StaffWidget

StaffWidget.propTypes = {
  user: PropTypes.object,
  toggleState: PropTypes.array,
  resultsGetName: PropTypes.func
}