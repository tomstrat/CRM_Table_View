import React, {  useEffect, useState } from "react"
import PropTypes from "prop-types"
import * as R from "ramda"

const MasterToggleButton = (props) => {
  const [masterCurClass, setMasterCurClass] = useState(true)
  const idParsed = props.title.replace(" ", "").toLowerCase()
  


  const handleOnClick = () => {
    masterCurClass
      ? setMasterCurClass(false)
      : setMasterCurClass(true)
    
    console.log("click")
  }
  
  
  useEffect(() => {
    props.setToggleButtons(values => {
      
      return R.assocPath(["master", idParsed], masterCurClass, values)
    })

  }, [masterCurClass])
    
   
  return (
    <button 
      className={masterCurClass
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
    
    

 
export default MasterToggleButton

MasterToggleButton.propTypes = {
  title: PropTypes.string,
  setToggleButtons: PropTypes.func,
  ToggleButtons: PropTypes.object,
  master: PropTypes.bool,
}


  