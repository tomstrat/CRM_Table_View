import React from "react"
import PropTypes from "prop-types"

export default function ValError(props) {
  const { message } = props
  return (
    <div className="valError">
      {message}
    </div>
  )
}

ValError.propTypes = {
  message: PropTypes.string
}