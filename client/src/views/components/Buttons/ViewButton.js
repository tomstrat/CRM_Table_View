import React from "react"
import PropTypes from "prop-types"

export default function ViewButton (props) {
  
  const {viewName, viewState, updateState, index} = props

  function handleClick () {
    updateState(index)
  }
  
  return (
    <div 
      onClick={handleClick}
      className={
        viewState
          ? "view-button view-button-toggled"
          : "view-button "
      }
    >{viewName}
    </div>
  )
}

ViewButton.propTypes = {
  viewName: PropTypes.string,
  viewState: PropTypes.bool,
  updateState: PropTypes.func,
  index: PropTypes.number
}