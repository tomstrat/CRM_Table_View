import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import * as R from "ramda"

const MasterToggleButton = (props) => {
  const [curClass, setCurClass] = useState("controls-button-clicked")
  const idParsed = props.title.replace(" ", "").toLowerCase()
  useEffect(() => {

    if(R.isEmpty(R.filter(prop => prop, props.ToggleButtons.children))){
      setCurClass("controls-button-clicked")
    } else {
      setCurClass("controlsbutton")
    }
    
  }, [props, R]) 

  

  const handleOnClick = (event) => {
    event.persist()
    
    props.setToggleButtons(values => {
      const currentVal = values[idParsed] ? false : true
      currentVal ? setCurClass("controls-button-clicked") : setCurClass("controlsbutton")
      return {
        ...values,
        master:{[idParsed]: currentVal}
      
      }
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
    
    

 
export default MasterToggleButton

MasterToggleButton.propTypes = {
  title: PropTypes.string,
  setToggleButtons: PropTypes.func,
  ToggleButtons: PropTypes.object,
  master: PropTypes.bool
}


  