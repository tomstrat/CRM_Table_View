import { NavLink } from "react-router-dom"

const OpsTimeNav = () => {
  return (
    <div className="nav">
      <div className="link-container">
        <NavLink to="/ops/timesheets/opsoverview">Overview</NavLink>
        <NavLink to="/ops/timesheets/scheduler">Scheduler</NavLink>
        <NavLink to="/ops/timesheets/edithours">Edit hours</NavLink>
        <NavLink to="/ops/timesheets/dataviewer">Dataviewer</NavLink>
        <NavLink to="/ops/timesheets/requests">Requests</NavLink>
        <NavLink to="/ops/users">Manage users</NavLink>
      </div>
    </div>
  )  
}

export default OpsTimeNav;