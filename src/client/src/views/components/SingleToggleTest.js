import React from "react"
import PropTypes from "prop-types"



const SingleToggleTest = (props) => {
  
  return (
    <button 
      className={props.value
        ? "controls-button-clicked"
        : "controlsbutton"}
      id={props.name} 
      onClick={props.onClick}
      value={props.value}
      name={props.name}
    >
      {props.name}
    </button>
  )
}
  
export default SingleToggleTest

SingleToggleTest.propTypes = {
  buttonTitle: PropTypes.string,
  loadState: PropTypes.bool,
  buttons: PropTypes.object,
  index: PropTypes.number,
  name: PropTypes.string,
  value: PropTypes.bool,
  setToggleGroup: PropTypes.func,
  onClick: PropTypes.func,
  groupId: PropTypes.string,
  ToggleGroup: PropTypes.array,
  className: PropTypes.string
}

