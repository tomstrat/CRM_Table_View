import React from "react"
import PropTypes from "prop-types"
import CommentToggle from "./CommentToggle"

const RouteBox = (props) => {
  return (
    <div onClick={props.onClick} className={
      props.toggleState
        ? "route-box-clicked"
        : "route-box"
    }  id={`routeBox${props.index}`}>
      <div className={
        props.toggleState
          ? "route-title-box-clicked unclickable"
          : "route-title-box unclickable"
      }>
        <div className="route-title unclickable">{props.routeName}</div>
        <div className="route-type unclickable">{props.routeType}</div>
      </div>
      <div className="unclickable">{props.startTime}</div>
      <div className="basic-row unclickable">
        <div className="unclickable">{props.name1}</div>
        <div className="unclickable">{props.name2}</div>
      </div>
      <CommentToggle 
        commentName={"Test"} 
        toggleState={props.toggleState} 
        routeNotes={props.routeNotes}/>
    </div>
  )
}
  
export default RouteBox

RouteBox.propTypes = {
  routeName: PropTypes.string,
  routeType: PropTypes.string,
  startTime: PropTypes.string,
  name1: PropTypes.string,
  name2: PropTypes.string,
  routeNotes: PropTypes.string,
  onClick: PropTypes.func,
  toggleState: PropTypes.bool,
  index: PropTypes.number
}

