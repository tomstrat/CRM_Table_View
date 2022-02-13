import React from "react"
import PropTypes from "prop-types"

const RouteBox = (props) => {
  return (
    <button className={
      props.toggleState
        ? "route-box-clicked"
        : "route-box"
    } value={[props.index, props.toggleState]} onClick={props.onClick} id={props.routeName}>
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
      <div className="unclickable">{props.routeNotes}</div> 
    </button>
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

