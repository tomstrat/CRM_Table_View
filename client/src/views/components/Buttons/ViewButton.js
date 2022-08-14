import React from "react"
import PropTypes from "prop-types"

export default function ViewButton (props) {
  
  const {name, state, updateState, index, offClass, onClass} = props

  function handleClick () {
    updateState(index)
  }
  
  return (
    <div 
      onClick={handleClick}
      className={
        state
          ? onClass
          : offClass
      }
    >{name}
    </div>
  )
}

ViewButton.propTypes = {
  name: PropTypes.string,
  state: PropTypes.bool,
  updateState: PropTypes.func,
  index: PropTypes.number,
  offClass: PropTypes.string,
  onClass: PropTypes.string
}