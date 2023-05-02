"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function opstimenav() {
    return `
    <div class="nav">
      <div class="link-container">
        <a href="/ops/timesheets/opsoverview">Overview</a>
        <a href="/ops/timesheets/scheduler">Scheduler</a>
        <a href="/ops/timesheets/edithours">Edit hours</a>
        <a href="/ops/timesheets/dataviewer">Dataviewer</a>
        <a href="/ops/timesheets/requests">Requests</a>
        <a href="/ops/users">Manage users</a>
      </div>
    </div>
    `;
}
exports.default = opstimenav;