import React from "react"
import PropTypes from "prop-types"

export default function ValError(props) {
  const { message } = props
  return (
    <div className="valError">
      {typeof message === Array ? message.join("\n"): message}
    </div>
  )
}

ValError.propTypes = {
  message: PropTypes.string | PropTypes.array
}