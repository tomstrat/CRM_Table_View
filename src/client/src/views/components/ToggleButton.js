import React from "react"
import PropTypes from "prop-types"
import * as R from "ramda"

const ToggleButton = (props) => {
 
  const idParsed = props.title.replace(" ", "").toLowerCase()
  
  const handleOnClick = () => {
    if(props.ToggleButtons.free[idParsed] !== true){
      props.setToggleButtons(values => {
        return R.assocPath(["free", idParsed], true, values)
      })} else {
      props.setToggleButtons(values => {
        return R.assocPath(["free", idParsed], false, values)
      })
    }
  }

  return (
    <button 
      className={props.ToggleButtons.free[idParsed]
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
  children: PropTypes.bool,
}

