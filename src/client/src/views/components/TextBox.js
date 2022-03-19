import React, { useState } from "react"
import PropTypes from "prop-types"


const TextBox = (props) => {
  // eslint-disable-next-line no-unused-vars
  const [currText, setCurrText] = useState("")

  function onChange(e) {
    setCurrText(e.target.value)
  }

  return <input 
    type="text"
    value={currText}
    onChange={onChange}
    className={props.passedClass}
  />
}

export default TextBox

TextBox.propTypes = {
  passedClass: PropTypes.string
}