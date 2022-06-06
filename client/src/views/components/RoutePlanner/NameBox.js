import React from "react"
import PropTypes from "prop-types"

const NameBox = (props) => {

  
  return (
    <div className="name-box">
      <button type="submit"
        onClick={props.removeName}
        name={props.name}
        className={
          props.toggleState 
          && props.name !== "" 
          && props.name !== "Unassigned"
          && props.name !== undefined
          && props.name !== null  
            ? "xbutton-name"
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
  removeName: PropTypes.func,
  nameWasRemoved: PropTypes.func,
  currNames: PropTypes.array,
  index: PropTypes.number
}

