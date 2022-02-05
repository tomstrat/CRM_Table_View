import React from "react"
import PropTypes from "prop-types"
import "../styles/SideBar.css"

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
  component: PropTypes.func
}

export default SideBar