import React from "react"
import {useState} from "react"
import PropTypes from "prop-types"

const ToggleButton = (props) => {
  const [toggleButtonBool, setToggleButtonBool] = useState(false)
  const idParsed = props.title.replace(" ", "").toLowerCase()
  if ( toggleButtonBool == false ) {
    return (
      <button className="controlsbutton" id={idParsed} onClick={() => setToggleButtonBool(true)}>{props.title}</button>
    )} else { return (
    <button className="controls-button-clicked" id={idParsed} onClick={() => setToggleButtonBool(false)}>{props.title}</button>
  )}
    
}
  
export default ToggleButton

ToggleButton.propTypes = {
  title: PropTypes.string
}
  