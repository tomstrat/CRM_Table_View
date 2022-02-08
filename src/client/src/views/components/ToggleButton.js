import React, {  useEffect, useState } from "react"
import PropTypes from "prop-types"
import * as R from "ramda"

const ToggleButton = (props) => {
  const [CurClass, setCurClass] = useState(false)
  const idParsed = props.title.replace(" ", "").toLowerCase()
  
  const handleOnClick = () => {
    CurClass
      ? setCurClass(false)
      : setCurClass(true)
    
    console.log("click")
  }
  
  useEffect(() => {
    props.setToggleButtons(values => {
      
      return R.assocPath(["children", idParsed], CurClass, values)
    })

  }, [CurClass])
    
  return (
    <button 
      className={CurClass
        ? "controls-button-clicked"
        : "controlsbutton"
      } 
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
  master: PropTypes.bool,
}


  