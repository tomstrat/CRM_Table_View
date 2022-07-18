import React from "react"
import PropTypes from "prop-types"
import { formatStaffName } from "../../../utilities/formatters/util"
import "../../styles/Staff_Search/staffWidget.css"
export default function NewNameBox (props) {
  function handleClick () {
    props.removeName(props.routeIndex, props.index)
  }
  return (
    props.toggleState
      ? <>
        <div 
          className={"route-staff-widget-toggled"}
        >
          <div className={"staff-widget-username"}>{formatStaffName(props.name, ".")}</div>
          
          <div className={"staff-remove-button"} onClick={handleClick}>x</div>
        </div>
        
      </>
      : <>
        <div 
          className={"route-staff-widget-toggled"}
        >
          <div className={"staff-widget-username"}>{formatStaffName(props.name, ".")}</div>
          
          
        </div>
        
      </>
  )
}

NewNameBox.propTypes = {
  index: PropTypes.number,
  name: PropTypes.string,
  toggleState: PropTypes.bool,
  routeIndex: PropTypes.number,
  removeName: PropTypes.func
}