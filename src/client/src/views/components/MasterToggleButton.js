import React from "react"
import PropTypes from "prop-types"
import * as R from "ramda"

const MasterToggleButton = (props) => {
 
  const idParsed = props.title.replace(" ", "").toLowerCase()
  const omitMaster = R.omit(["master"], props.ToggleButtons)
  const eliminateChildren = R.map(() => false, omitMaster.children) 

  const handleOnClick = () => {
    if(props.ToggleButtons.master[idParsed] !== true){
      props.setToggleButtons(values => {
        return R.mergeDeepLeft(
          {master: {[idParsed]: true}, children: eliminateChildren},
          values
        )
      })} 
    else {
      props.setToggleButtons(values => {
        return R.assocPath(["master", idParsed], false, values)
      })
    }
  }
  return (
    <button 
      className={props.ToggleButtons.master[idParsed]
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


  