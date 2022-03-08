import { NavLink } from "react-router-dom"
import React from "react"
import PropTypes from "prop-types"
import "../../styles/Phone_App/PhoneNav.css"

const Nav = () => {
  return (
    <div className="phone-nav">
      <div className="phone-link-container">
        <NavLink to="/ttm/overview" >Overview</NavLink>
        <NavLink to="/ttm/addhours" >Add Hours</NavLink>
        <NavLink to="/ttm/requests" >Requests</NavLink>
        <NavLink to="/ttm/forms" >Forms</NavLink>
      </div>
    </div>
   
  )
}

Nav.propTypes = {
  auth: PropTypes.bool
}

export default Nav