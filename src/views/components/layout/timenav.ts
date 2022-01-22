export default function timenav(): string {
  return `
  <div class="nav">
    <div class="link-container">
      <a href="ops/timesheets/opsoverview">dev Switch role</a>
      <a href="/timesheets/ttmoverview">Overview</a>
      <a href="/timesheets/ttmhours">Add hours</a>
      <a href="/timesheets/ttmavailability">Availability/Requests</a>
    </div>
  </div>
  `
}