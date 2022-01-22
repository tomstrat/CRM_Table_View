export default function opstimenav(): string {
    return `
    <div class="nav">
      <div class="link-container">
        <a href="/timesheets/ttmoverview">dev Switch role</a>
        <a href="/ops/timesheets/opsoverview">Overview</a>
        <a href="/ops/timesheets/scheduler">Scheduler</a>
        <a href="/ops/timesheets/edithours">Edit hours</a>
        <a href="/ops/timesheets/dataviewer">Dataviewer</a>
        <a href="/ops/timesheets/requests">Requests</a>
        <a href="/ops/timesheets/adduser">Add user</a>
      </div>
    </div>
    `
  }