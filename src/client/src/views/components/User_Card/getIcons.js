import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimesCircle, faCheckCircle, faBan, faCalendarCheck, faCalendarTimes } from "@fortawesome/free-solid-svg-icons"
import React from "react"


export function getTypeIcon(type) {
  return type
    ? <FontAwesomeIcon className="user-card-icon user-icon-green" icon={faCheckCircle} size="lg" />
    : <FontAwesomeIcon className="user-card-icon user-icon-red" icon={faTimesCircle} size="lg" />
}

export function getRosterIcon(roster) {
  switch(roster) {
  case "notWorking":
    return <FontAwesomeIcon className="user-card-icon user-icon-red" icon={faCalendarTimes} size="lg" />
  case "working":
    return <FontAwesomeIcon className="user-card-icon user-icon-green" icon={faCalendarCheck} size="lg" />
  default:
    return <FontAwesomeIcon className="user-card-icon user-icon-grey" icon={faBan} size="lg" />
  }
}