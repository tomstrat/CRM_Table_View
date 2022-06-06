import React from "react"
import PropTypes from "prop-types"


const UserControlsContainer = (props) => {
  return ( <div className="user-controls-container">
    {props.components}
  </div> )
}
  
export default UserControlsContainer

UserControlsContainer.propTypes = {
  setBool: PropTypes.bool,
  components: PropTypes.object
}
  