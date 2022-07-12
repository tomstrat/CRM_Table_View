import React from "react"
import PropTypes from "prop-types"


export default function NewTextBox(props) {

  function handleChange(e){
    props.valChange({targetIndex: props.index, name: props.name, newValue: e.target.value})
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