import React from "react"
import PropTypes from "prop-types"
import * as R from "ramda"

const ToggleButton = (props) => {
 
  const idParsed = props.title.replace(" ", "").toLowerCase()
  
  const handleOnClick = () => {
    if(props.ToggleButtons.children[idParsed] !== true){
      props.setToggleButtons(values => {
        const masterProp = Object.keys(values.master)[0]
        return R.mergeDeepLeft(
          {master: {[masterProp]: false}, children: {[idParsed]: true}},
          values
        )
      })}
    else {
      props.setToggleButtons(values => {
        return R.assocPath(["children", idParsed], false, values)
      })
    }
  }
  return (
    <button 
      className={props.ToggleButtons.children[idParsed]
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

