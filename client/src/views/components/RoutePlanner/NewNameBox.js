import React from "react"
import PropTypes from "prop-types"

export default function NewNameBox (props) {
  function handleClick () {
    props.removeName(props.routeIndex, props.index )
  }
  return (
    props.toggleState
      ? <>
        <div 
          className="name-box"
        >
          {props.name}
          
        </div>
        <div onClick={handleClick} >X</div>
      </>
      : <div className="name-box">{props.name}</div>
    
  )
}

NewNameBox.propTypes = {
  index: PropTypes.number,
  name: PropTypes.string,
  toggleState: PropTypes.bool,
  routeIndex: PropTypes.number,
  removeName: PropTypes.func
}