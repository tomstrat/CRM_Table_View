import React from "react"
import PropTypes from "prop-types"

export default function TCTimeBox(props){
  function onChange(e){
    props.timeChange(e.target.name, e.target.value)
  }
  return (
    <div className="start-time-box">
      <select 
        type="select" 
        name="start-hours"  
        value={props.startHours} 
        onChange={onChange} 
        className="start-time-select start-time-hours"
      >
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
      <select 
        type="select" 
        name="start-mins"  
        value={props.startMins} 
        onChange={onChange} 
        className="start-time-select start-time-minutes"
      >
        <option value="00">00</option>
        <option value="15">15</option>
        <option value="30">30</option>
        <option value="45">45</option>
      </select>
      
    </div>
  ) 
}

TCTimeBox.propTypes = {
  startHours: PropTypes.string,
  startMins: PropTypes.string,
  index: PropTypes.number,
  timeChange: PropTypes.func
}