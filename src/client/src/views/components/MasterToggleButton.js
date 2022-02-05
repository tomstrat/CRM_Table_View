import React from "react"
import {useState} from "react"
import PropTypes from "prop-types"

const MasterToggleButton = (props) => {
  const [MasterToggleButtonBool, setToggleButtonBool] = useState(true)
  const idParsed = props.title.replace(" ", "").toLowerCase()
  if ( MasterToggleButtonBool == true ) {
    return (
      <button className="controls-button-clicked" id={idParsed} onClick={() => setToggleButtonBool(false)}>{props.title}</button>
    )} else { return (
    <button className="controlsbutton" id={idParsed} onClick={() => setToggleButtonBool(true)}>{props.title}</button>
  )}
    
    
}
  
export default MasterToggleButton

MasterToggleButton.propTypes = {
  title: PropTypes.string
}
  