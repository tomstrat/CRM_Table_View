import React from "react"
import PropTypes from "prop-types"
import ValError from "../valError"
import "../../styles/User_card/userField.css"

const HiddenUserField = (props) => {

  const {
    title,
    edit,
    input,
    error
  } = props


  if(edit) {
    return (
      <div className="user-field-container">
        <span className="user-field-title">{title}:</span>
        {input}
        {error ? <ValError message={error}/> : ""}
      </div>
    )
  }
  return ""
}

export default HiddenUserField

HiddenUserField.propTypes = {
  title: PropTypes.string,
  input: PropTypes.element,
  edit: PropTypes.bool,
  error: PropTypes.string
}