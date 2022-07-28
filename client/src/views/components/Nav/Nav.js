import { NavLink } from "react-router-dom"
import React from "react"
import PropTypes from "prop-types"

const Nav = (props) => {
  const {auth} = props
  return (
    <div className="nav">
      {auth ? (
        <div className="link-container">
          <NavLink to="/ops/overview" >Overview</NavLink>
          <NavLink to="/ops/schedulebuilder" >Scheduler</NavLink>
          <NavLink to="/ops/edithours" >Edit hours</NavLink>
          <NavLink to="/ops/dataviewer" >Dataviewer</NavLink>
          <NavLink to="/ops/requests" >Requests</NavLink>
          <NavLink to="/ops/manageusers" >Manage users</NavLink>
          <NavLink to="/logout">Logout</NavLink>
        </div>
      ) : (
        <div className="link-container">
          <NavLink to="/ops/users">Manage users</NavLink>
        </div>
      )} 
    </div>
  )
}

Nav.propTypes = {
  auth: PropTypes.bool
}

export default Nav