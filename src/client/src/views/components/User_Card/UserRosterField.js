import React from "react"
import PropTypes from "prop-types"
import "../../styles/User_card/userRosterField.css"

const UserRosterField = (props) => {

  const {
    title,
    content,
    edit,
    input
  } = props
  return (
    <div className="user-roster-field-container">
      <span className="user-roster-field-title">{title}</span>
      {edit
        ? input
        :<span className="user-field-content">{content}</span>
      }
    </div>
  )
  
}

export default UserRosterField

UserRosterField.propTypes = {
  title: PropTypes.string,
  content: PropTypes.object,
  input: PropTypes.array,
  edit: PropTypes.bool
}