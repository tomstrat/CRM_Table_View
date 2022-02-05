import React from "react"
import {useState} from "react"
import PropTypes from "prop-types"
//not working as intended. All users button should unhighlight others, and vice versa
const ToggleButton = (title) => {
  const [toggleButtonBool, setToggleButtonBool] = useState(false)
  const idParsed = title.replace(" ", "").toLowerCase()
  if (idParsed !== "allusers" ){
    return ( toggleButtonBool == false 
      ? <button className="controlsbutton" id={idParsed} onClick={() => setToggleButtonBool(true)}>{title}</button>
      : <button className="controls-button-clicked" id={title.replace(" ", "").toLowerCase()} onClick={() => setToggleButtonBool(false)}>{title}</button>
    )} else {
    document.querySelectorAll(".controls-button-clicked").forEach(element => {element.setAttribute("className", "controlsbutton")})
    // document.querySelector("allusers").setAttribute("className", "controls-button-clicked")
    return ( toggleButtonBool == false 
      ? <button className="controlsbutton" id={idParsed} onClick={() => setToggleButtonBool(true)}>{title}</button>
      : <button className="controls-button-clicked" id={title.replace(" ", "").toLowerCase()} onClick={() => setToggleButtonBool(false)}>{title}</button>
    )}
    
}
  
export default ToggleButton

ToggleButton.propTypes = {
  title: PropTypes.string
}
  