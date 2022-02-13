import React from "react"
import PropTypes from "prop-types"
import uniqid from "uniqid"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBus, faCompass, faChalkboardTeacher, faBookReader, faCalendarDay, faKey } from "@fortawesome/free-solid-svg-icons"
import "../../styles/Staff_Search/staffWidget.css"

const StaffWidget = (props) => {

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

  return (
    <div className="staff-widget">
      <div className="staff-widget-username">{username}</div>
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
  user: PropTypes.object
}