import React from "react"
import PropTypes from "prop-types"
import "../../styles/SideBar.css"


const SideBar = ({component: Component, title, ...rest}) => {
 
  return (
    <div className="sidebar">
      <div className="sidebar-title">
        {title}
      </div>
      <div className="sidebar-components">
        <Component {...rest} />
      </div>
    </div>
  )
}

SideBar.propTypes = {
  title: PropTypes.string,
  component: PropTypes.func
}

export default SideBar