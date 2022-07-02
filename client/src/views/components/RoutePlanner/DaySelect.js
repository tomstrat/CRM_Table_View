import React from "react"
import printDay from "../../../utilities/printDay"
import PropTypes from "prop-types"
import fixMonth from "../../../utilities/fixMonth"

export default function DaySelect (props) {

  return (
    <div className="day-select-container">
      <div className="tiny-title">Schedule for:</div>
      <div className="date-container">
        <button className={"arrow-button"} onClick={props.decreaseDay}>&#60;</button>
        <div className="day-title">{printDay(props.currDay.getDay())}</div>
        <button className={"arrow-button"} onClick={props.increaseDay}>&#62;</button>
      </div>
      <div className="date-title">{props.currDay.getDate() + "-" + fixMonth(props.currDay.getMonth()) + "-" + props.currDay.getFullYear()}</div>
    </div>
  )

}

DaySelect.propTypes = {
  currDay: PropTypes.instanceOf(Date),
  increaseDay: PropTypes.func,
  decreaseDay: PropTypes.func
}

