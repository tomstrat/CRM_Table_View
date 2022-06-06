import React from "react"
import PropTypes from "prop-types"


const SwitchPanelButton = (props) => {

  function clickHandler() {
    console.log("click")
  }
  return ( 
    <button 
      className="new-user-button" 
      id="new-user-button" 
      onClick={() => clickHandler()}
    >
      {props.label}
    </button>
  )  
  
}
  
export default SwitchPanelButton

SwitchPanelButton.propTypes = {
  label: PropTypes.string,
  setClickBool: PropTypes.func,
  clickBool: PropTypes.bool,
}


  