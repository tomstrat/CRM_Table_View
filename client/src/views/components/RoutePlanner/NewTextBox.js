import React from "react"
import PropTypes from "prop-types"


export default function NewTextBox(props) {

  function handleNotes(e){
    props.notesChange(props.index, e.target.value)
  }

  return (
    <input
      type="text"
      value={props.routeNotes}
      onChange={handleNotes}
    />

  )
}

NewTextBox.propTypes = {
  routeNotes: PropTypes.string,
  notesChange: PropTypes.func,
  index: PropTypes.number
}