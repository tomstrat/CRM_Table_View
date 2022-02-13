import React from "react"
import PropTypes from "prop-types"
import ValError from "../valError"
import "../../styles/User_card/userField.css"

const UserField = (props) => {

  const {
    title,
    content,
    edit,
    input,
    error
  } = props

  return (
    <div className="user-field-container">
      <span className="user-field-title">{title}:</span>
      {edit
        ? input
        :<span className="user-field-content">{content}</span>
      }
      {edit
        ? error ? <ValError message={error}/> : ""
        : ""
      }
    </div>
  )
  
}

export default UserField

UserField.propTypes = {
  title: PropTypes.string,
  content: PropTypes.oneOfType([
    PropTypes.string, 
    PropTypes.object
  ]),
  input: PropTypes.element,
  edit: PropTypes.bool,
  error: PropTypes.string
}