import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

const TimeBox = (props) => {
  const [currHours, setCurrHours] = useState(props.startHours)
  const [currMins, setCurrMins] = useState(props.startMins)
  
  
  useEffect(() => {
    if (currHours !== props.startHours) {
      return props.routeGetTime(currHours, currMins)
    } 
    else if (currMins !== props.startMins) {
      return props.routeGetTime(currHours, currMins)
    }
  }), [props.startHours, props.startMins]
 
  
  const onChange = (e) => {
    if(e.target.name == "start-hours") {
      setCurrHours(e.target.value)
     
    }
    else if (e.target.name == "start-mins") {
      setCurrMins(e.target.value) 
      
    }
    
  }
  
  return (
    <div className="start-time-box">
      <select type="select" name="start-hours" value={currHours} className="start-time-select start-time-hours" onChange={onChange}>
        <option value="05">05</option>
        <option value="06">06</option>
        <option value="07">07</option>
        <option value="08">08</option>
        <option value="09">09</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
      </select>
      <select type="select" name="start-mins" value={currMins} className="start-time-select start-time-minutes" onChange={onChange}>
        <option value="00">00</option>
        <option value="15">15</option>
        <option value="30">30</option>
        <option value="45">45</option>
      </select>
      
    </div>
  ) 
}

export default TimeBox

TimeBox.propTypes = {
  startHours: PropTypes.string,
  startMins: PropTypes.string,
  routeGetTime: PropTypes.func
}