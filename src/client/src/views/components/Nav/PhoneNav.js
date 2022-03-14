import { NavLink } from "react-router-dom"
import React from "react"
import PropTypes from "prop-types"
import "../../styles/Phone_App/PhoneNav.css"

const Nav = () => {
  return (
    <div className="phone-nav">
      <div className="phone-link-container">
        <NavLink to="/overview" >Overview</NavLink>
        <NavLink to="/addhours" >Add Hours</NavLink>
        <NavLink to="/forms" >Forms</NavLink>
      </div>
    </div>
   
  )
}

Nav.propTypes = {
  auth: PropTypes.bool
}

export default Nav