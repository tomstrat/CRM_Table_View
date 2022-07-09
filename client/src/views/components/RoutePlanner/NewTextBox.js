import React from "react"
import PropTypes from "prop-types"


export default function NewTextBox(props) {

  function handleChange(e){
    props.valChange(props.index, props.name, e.target.value)
  }

  return (
    <input
      type="text"
      value={props.currVal}
      onChange={handleChange}
    />

  )
}

NewTextBox.propTypes = {
  currVal: PropTypes.string,
  valChange: PropTypes.func,
  index: PropTypes.number,
  name: PropTypes.string
}