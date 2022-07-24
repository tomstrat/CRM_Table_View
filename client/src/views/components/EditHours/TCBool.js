import React from "react"
import PropTypes from "prop-types"

export default function TCBool(props){
  function onChange(e){
    props.boolChange(e.target.name, e.target.value)
  }
  
  return (
    <div className="bool-select">
      <select 
        type="select" 
        name={props.name}  
        value={props.value} 
        onChange={onChange} 
        className="bool-select"
      >
        <option value={false}>No</option>
        <option value={true}>Yes</option>
      </select>
    </div>
  ) 
}

TCBool.propTypes = {
  name: PropTypes.string,
  value: PropTypes.bool,
  boolChange: PropTypes.func
}