/* eslint-disable no-unused-vars */
import React from "react"
import PropTypes from "prop-types"
import formatHours from "../RoutePlanner/formatHours"

export default function TimeCard (props) {
  const {
    id, route, routeType, startTime, endTime, 
    breakStart, plannedStart, workingDate,
    ttmComments, opsComments, opsMessage, 
    sick, late, edited, user
  } = props.data

  const plannedStartObj = new Date(plannedStart)
  const pStartFormatted = formatHours(plannedStartObj)

  return (
    <div className="time-card-container">
      <div className="time-card-column-left">
        <div className="time-card-elem">Card ID: {id}</div>
        <div className="time-card-elem">Employee: {user.username}</div>
        <div className="time-card-elem">Date: {workingDate}</div>
        <div className="time-card-elem">Route Name: {route}</div>
        <div className="time-card-elem">Route Type: {routeType}</div>
        <div className="time-card-elem">Planned Start: {`${pStartFormatted[0] + ":" + pStartFormatted[1]}`}</div>
        <div className="time-card-elem">{opsMessage}</div>
      </div>
      <div className="time-card-column">
        
        <div className="time-card-elem">Start Time: {
          startTime
            ? startTime
            : "Not set"
        }
        </div>
        <div className="time-card-elem">End Time: {
          endTime
            ? endTime
            : "Not set"
        }
        </div>
        <div className="time-card-elem">Break Start Time: {
          breakStart
            ? breakStart
            : "Not set"
        }
        </div>
       
       
        <div className="time-card-elem">Sick?: {
          sick
            ? sick
            : "False"
        }
        </div>
        <div className="time-card-elem">Late?: {
          late
            ? late
            : "False"}
        </div>
        <div className="time-card-elem">Operations Comments: {
          opsComments
            ? "True"
            : "False"
        }
        </div>
        <div className="time-card-elem">Ops Edit?: {
          edited
            ? edited
            : "False"}
        </div>
        <div className="time-card-elem">TTM Comments: {
          ttmComments
            ? "True"
            : "False"
        }
        </div>
       
      </div>
      
    </div>
  )
}

TimeCard.propTypes = {
  onClick: PropTypes.func,
  data: PropTypes.object
}