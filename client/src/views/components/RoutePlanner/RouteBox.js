import React, {useState, useEffect} from "react"
import PropTypes from "prop-types"
import CommentToggle from "./CommentToggle"
import uniqid from "uniqid"
import TimeBox from "./TimeBox"
import NameContainer from "./NameContainer"

const RouteBox = (props) => {
  const [currRouteState, setCurrRouteState] = useState(props.parentState)
  const {routeName, routeType, startHours, startMins, name1, name2, name3, routeNotes, toggleState} = currRouteState
  
  useEffect(() => {
    if (currRouteState !== props.parentState) 
    {
      props.routePlannerGetRoutes(currRouteState, props.index)
    }
  }), [currRouteState, props.parentState]
  
  

  function routeGetNotes (value) {
    return setCurrRouteState(
      {
        ...currRouteState,
        routeNotes: value
      }
    )
  }

  function routeGetTime (hours, mins) {
    
    return setCurrRouteState(
      {
        ...currRouteState,
        startHours: hours,
        startMins: mins
      }
      
    )
  }

  function routeGetNames (names) {
    if (
      names[0] == ""
      &&
      names[1] == ""
      &&
      names[2] == ""
    )
      return setCurrRouteState(
        {
          ...currRouteState,
          name1: "Unassigned",
          name2: names[1],
          name3: names[2]
        }
      )
    else return setCurrRouteState(
      {
        ...currRouteState,
        name1: names[0],
        name2: names[1],
        name3: names[2]
      }
    )
  }
  

  
  

  return (
    <div className="route-box-container">
      <div index={props.index} className={
        toggleState
          ? "route-box-clicked "
          : `route-box color-${props.routeType}`
      }
      >
        <div
          id={`routeBox${props.index}`}
          onClick={props.onClick}
          className={
            toggleState
              ? "route-title-box-clicked"
              : `route-title-box title-color-${props.routeType}`
          }
        >
          <div className="route-top-column unclickable" >
            <div className="route-title unclickable">{routeName}</div>
            <div className="route-type unclickable">{routeType}</div>
          </div>
          <button
            id={`${props.index}cancel`}
            onClick={props.removeRoute}
            className={
              toggleState
                ? "xbutton-route"
                : "hidden"
            }>X</button>
          
        </div>
        <div 
          className={
            toggleState
              ? "hidden"
              : "unclickable"
          }
        >
          {startHours} : {startMins}
        </div>
        <div
          className={
            toggleState
              ? "visible"
              : "hidden"
          }>
          <TimeBox 
            routeGetTime={routeGetTime}
            startHours={startHours}
            startMins={startMins}
            className={
              toggleState
                ? "time-box"
                : "hidden"
            }
          >
          </TimeBox>
        </div>
        <NameContainer
          nameWasRemoved={props.nameWasRemoved}
          routeGetNames={routeGetNames}
          toggleState={toggleState}
          name1={name1}
          name2={name2}
          name3={name3}
        />
        <CommentToggle
          key={uniqid("comment-")} 
          commentsName={"Notes"} 
          toggleState={toggleState} 
          routeNotes={routeNotes}
          routeGetNotes={routeGetNotes}
        />
          
      </div>
    </div>
  )
}
  
export default RouteBox

RouteBox.propTypes = {
  onClick: PropTypes.func,
  index: PropTypes.number,
  parentState: PropTypes.object,
  toggleState: PropTypes.bool,
  routePlannerGetRoutes: PropTypes.func,
  removeRoute: PropTypes.func,
  nameWasRemoved: PropTypes.func,
  routeType: PropTypes.string
}

