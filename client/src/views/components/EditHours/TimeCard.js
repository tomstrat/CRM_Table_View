/* eslint-disable no-unused-vars */
import React from "react"
import PropTypes from "prop-types"
import formatHours from "../RoutePlanner/formatHours"
import TCTimeBox from "./TCTimeBox"
import RouteTextArea from "../RoutePlanner/RouteTextArea"
import TCBool from "./TCBool"
import patchTimeSheet from "./patchTimeSheet"

export default function TimeCard (props) {
  const {
    id, route, routeType, startTime, endTime, 
    breakStart, plannedStart, workingDate,
    ttmComments, opsComments, opsMessage, 
    sick, late, edited, user
  } = props.data

  const plannedStartObj = new Date(plannedStart)
  const pStartFormatted = formatHours(plannedStartObj)

  const sTimeObj = new Date(startTime)
  const sTimeFormatted = formatHours(sTimeObj)

  const eTimeObj = new Date(endTime)
  const eTimeFormatted = formatHours(eTimeObj)

  const bTimeObj = new Date(breakStart)
  const bTimeFormatted = formatHours(bTimeObj)

  function patchOnClick () {
    patchTimeSheet(props.data)
  }

  return (
    <div className="time-card-container">
      <div className="time-card-column-left">
        <div className="time-card-elem">Card ID: {id}</div>
        <div className="time-card-elem">Employee: {user.username}</div>
        <div className="time-card-elem">Date: {workingDate}</div>
        <div className="time-card-elem">Planned Start: {`${pStartFormatted[0] + ":" + pStartFormatted[1]}`}</div>
        <div className="time-card-elem">Route Name: {route}</div>
        <div className="time-card-elem">Route Type: {routeType}</div>
        <div className="time-card-elem">{opsMessage}</div>
        <div className="time-card-elem">TTM Comments: {
          ttmComments
            ? "True"
            : "False"
        }
        </div>
      </div>
      <div className="time-card-column">
        <div className="time-card-elem">Start Time:
          <TCTimeBox
            key={"starttimebox"}
            index={0}
            startHours={sTimeFormatted[0]}
            startMins={sTimeFormatted[1]}
            timeChange={props.startTimeChange}
          />
        </div>
        <div className="time-card-elem">End Time: 
          <TCTimeBox
            key={"endtimebox"}
            index={1}
            startHours={eTimeFormatted[0]}
            startMins={eTimeFormatted[1]}
            timeChange={props.endTimeChange}
          />
        </div>
        <div className="time-card-elem">Break Start: 
          <TCTimeBox
            key={"breaktimebox"}
            index={2}
            startHours={bTimeFormatted[0]}
            startMins={bTimeFormatted[1]}
            timeChange={props.breakTimeChange}
          />
        </div>
        <div className="time-card-elem">Sick?:
          <TCBool
            boolChange={props.boolChange}
            name={"sick"}
            value={sick}
          />
        </div>
        <div className="time-card-elem">Late?: 
          <TCBool
            boolChange={props.boolChange}
            name={"late"}
            value={late}
          />
        </div>
        <div className="time-card-elem">Operations Comments: 
          <RouteTextArea
            key={"opscomments"}
            index={0}
            currVal={
              opsComments
                ? opsComments
                : ""
            }
            valChange={props.commentsChange}
          />
        </div>
        <div className="time-card-elem">Ops Edit?: {
          edited
            ? edited
            : "False"}
        </div>
        <div className="basic-row button-row">
          <div className={"update-button"} onClick={patchOnClick}>Update</div>
          <div className={"close-button"} onClick={props.closeTimeCard}>Close</div>
        </div>
      </div>
    </div>
  )
}

TimeCard.propTypes = {
  onClick: PropTypes.func,
  data: PropTypes.object,
  startTimeChange: PropTypes.func,
  endTimeChange: PropTypes.func,
  breakTimeChange: PropTypes.func,
  commentsChange: PropTypes.func,
  boolChange: PropTypes.func,
  closeTimeCard: PropTypes.func
}