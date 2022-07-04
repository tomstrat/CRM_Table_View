import React from "react"
import PropTypes from "prop-types"

export default function NewNameBox (props) {
  return (
    props.toggleState
      ? <>
        <div 
          className="name-box"
        >
          {props.name}
          
        </div>
      </>
      : <div className="name-box">{props.name}</div>
    
  )
}

NewNameBox.propTypes = {
  index: PropTypes.number,
  name: PropTypes.string,
  toggleState: PropTypes.bool
}