import React from "react"
import PropTypes from "prop-types"
import "../../styles/User_card/userTypeField.css"

const UserTypeField = (props) => {

  const {
    title,
    content,
    edit,
    input
  } = props

  return (
    <div className="user-type-field-container">
      <span className="user-type-field-title">{title}:</span>
      {edit
        ? input
        :<span className="user-type-field-content">{content}</span>
      }
    </div>
  )
  
}

export default UserTypeField

UserTypeField.propTypes = {
  title: PropTypes.string,
  content: PropTypes.object,
  input: PropTypes.element,
  edit: PropTypes.bool
}