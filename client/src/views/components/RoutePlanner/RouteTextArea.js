import React from "react"
import PropTypes from "prop-types"


export default function RouteTextArea(props) {

  function handleChange(e){
    props.valChange({targetIndex: props.index, name: props.name, newValue: e.target.value})
  }

  return (
    <textarea
      className="route-text-area"
      type="text"
      value={props.currVal}
      onChange={handleChange}
      placeholder={"Add message..."}
    />

  )
}

RouteTextArea.propTypes = {
  currVal: PropTypes.string,
  valChange: PropTypes.func,
  index: PropTypes.number,
  name: PropTypes.string
}