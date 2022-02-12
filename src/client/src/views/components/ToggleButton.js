import React from "react"
import PropTypes from "prop-types"



const ToggleButton = (props) => {
  return (
    <button 
      className={props.value
        ? props.buttonRole + " controls-button-clicked"
        : props.buttonRole + " controlsbutton"}
      id={props.name} 
      onClick={props.onClick}
      value={props.value}
      name={props.name}
    >
      {props.name}
    </button>
  )
}
  
export default ToggleButton

ToggleButton.propTypes = {
  name: PropTypes.string,
  value: PropTypes.bool,
  onClick: PropTypes.func,
  buttonRole: PropTypes.string
}

