import React from "react"
import PropTypes from "prop-types"
import "../../styles/User_card/userRosterField.css"

const UserRosterField = (props) => {

  const {
    title,
    input
  } = props

  return (
    <div className="user-roster-field-container">
      <span className="user-roster-field-title">{title}</span>
      {input}
    </div>
  )
  
}

export default UserRosterField

UserRosterField.propTypes = {
  title: PropTypes.string,
  input: PropTypes.array,
}