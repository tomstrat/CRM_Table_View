import { Link } from "react-router-dom"

export default function opsTimeNav() {
  return (
    <div class="nav">
      <div class="link-container">
        <Link to="/ops/timesheets/opsoverview">Overview</Link>
        <Link to="/ops/timesheets/scheduler">Scheduler</Link>
        <Link to="/ops/timesheets/edithours">Edit hours</Link>
        <Link to="/ops/timesheets/dataviewer">Dataviewer</Link>
        <Link to="/ops/timesheets/requests">Requests</Link>
        <Link to="/ops/users">Manage users</Link>
      </div>
    </div>
  )  
}