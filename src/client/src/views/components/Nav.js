import { NavLink } from "react-router-dom"
import React from "react"
import PropTypes from "prop-types"

const Nav = (props) => {
  const {auth} = props
  return (
    <div className="nav">
      {auth ? (
        <div className="link-container">
          <NavLink to="/ops/timesheets/opsoverview">Overview</NavLink>
          <NavLink to="/ops/timesheets/scheduler">Scheduler</NavLink>
          <NavLink to="/ops/timesheets/edithours">Edit hours</NavLink>
          <NavLink to="/ops/timesheets/dataviewer">Dataviewer</NavLink>
          <NavLink to="/ops/timesheets/requests">Requests</NavLink>
          <NavLink to="/ops/users">Manage users</NavLink>
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