import React from "react"
import PropTypes from "prop-types"

//Component for a toggleable button, mainly used in search panels
//for better understanding of functionality, see 'ToggleContainer'

//Injected classes, buttonType and 'toggled' and 'untoggled' classes are passed through the button class property,
// and parsed in the click handler function found in ToggleContainer.
const ToggleButton = (props) => {
  return (
    <button 
      className={props.value
        ? `${props.buttonRole} controls-button-clicked ${props.classInject}`
        : `${props.buttonRole} controlsbutton ${props.classInject}`}
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
  buttonRole: PropTypes.string,
  classInject: PropTypes.string
}
