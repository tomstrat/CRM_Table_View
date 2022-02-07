import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import * as R from "ramda"


const ToggleButton = (props) => {
  const [curClass, setCurClass] = useState("controlsbutton")
  const idParsed = props.title.replace(" ", "").toLowerCase()
  useEffect(() => {

    if(Object.values(props.ToggleButtons.master)[0] == true){
      setCurClass("controlsbutton")
    } else {
      setCurClass("controls-button-clicked")
    }
    
  }, [props, R]) 
  const handleOnClick = (event) => {
    event.persist()
    props.setToggleButtons(values => {
      const currentVal = values[idParsed] ? false : true
      currentVal ? setCurClass("controls-button-clicked") : setCurClass("controlsbutton")
      return R.assocPath(["children", idParsed], currentVal, values)
    })
  }
   
  return (
    <button 
      className={curClass} 
      id={idParsed} 
      onClick={handleOnClick}
    >
      {props.title}
    </button>
  
  )
}
    
    

 
export default ToggleButton

ToggleButton.propTypes = {
  title: PropTypes.string,
  setToggleButtons: PropTypes.func,
  ToggleButtons: PropTypes.object,
}


  