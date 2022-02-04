import React from "react"
import PropTypes from "prop-types"

const SideBar = ({component: Component, title, ...rest}) => {
  return (
    <div className="sidebar">
      <div className="sidebar-title">
        <h2>{title}</h2>
      </div>
      <div className="sidebar-components">
        <Component {...rest}/>
      </div>
    </div>
  )
}

SideBar.propTypes = {
  title: PropTypes.string,
  component: PropTypes.Component
}

export default SideBar