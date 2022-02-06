import React, { useState } from "react"
import PropTypes from "prop-types"

const MasterToggleButton = (props) => {
  const [curClass, setCurClass] = useState("controls-button-clicked")
  const idParsed = props.title.replace(" ", "").toLowerCase()
  const handleOnClick = (event) => {
    event.persist()
    curClass == "controls-button-clicked" ? setCurClass("controlsbutton") : setCurClass("controls-button-clicked")
    props.setToggleButton(values => {
      const currentVal = values[idParsed] ? false : true
      return {
        ...values,
        [idParsed]: currentVal
      
      }
    })
  }
   
  return (
    <button 
      className={curClass} 
      id={idParsed} 
      onClick={() => handleOnClick}
    >
      {props.title}
    </button>
  
  )
}
    
    

 
export default MasterToggleButton

MasterToggleButton.propTypes = {
  title: PropTypes.string,
  setToggleButton: PropTypes.func,
  ToggleButtons: PropTypes.object,
  master: PropTypes.bool
}


  