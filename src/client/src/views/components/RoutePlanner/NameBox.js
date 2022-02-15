import React from "react"
import PropTypes from "prop-types"

const NameBox = (props) => {

  return (
    <div className="name-box">
      <button
        onClick={props.removeName}
        name={props.name}
        className={
          props.toggleState 
          && props.name !== "" 
          && props.name !== "Unassigned"
          && props.name !== undefined
          && props.name !== null  
            ? "xbutton"
            : "hidden"
        }
      >x
      </button>
      {props.name}
    </div>
  ) 
}

export default NameBox

NameBox.propTypes = {
  name: PropTypes.string,
  toggleState: PropTypes.bool,
  removeName: PropTypes.func
  
}