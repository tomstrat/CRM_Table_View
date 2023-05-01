"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function schedulecontrols() {
    return `
    <div class="controls-division schedule-element">
      Hours
    </div>
    <div class="user-button-container">
    <button class="controlsbutton" id="fulltime">Full-time</button>
    <button class="controlsbutton" id="parttime">Part-time</button>
    <button class="controlsbutton "id="casual">Casual</button>
    </div>
    <div class="controls-division schedule-element">
    Role
    </div>
    <div class="user-button-container">
    <button class="controlsbutton" id="alljunkies">All Junkies</button>
  </div>
  <div class="user-button-container">
    <button class="controlsbutton" id="trainees">Trainees</button>
    <button class="controlsbutton" id="trainers">Trainers</button>
  </div>
  <div class="user-button-container">
    <button class="controlsbutton" id="drivers">Drivers</button>
    <button class="controlsbutton" id="navigators">Navigators</button>
    <button class="controlsbutton" id="temp">Temps</button>
  </div>
</div>
<div class="controls-division schedule-element">
    Suburbs
</div>
<div class="user-controls-container">
    <div class="user-button-container">
    <button class="controlsbutton" ">CBD</button>
  </div>
  <div class="user-button-container">
    <button class="controlsbutton" >Inner east</button>
    <button class="controlsbutton" >Inner West</button>
  </div>
  <div class="user-button-container">
    <button class="controlsbutton">Inner North</button>
    <button class="controlsbutton">Outer North</button>
    <button class="controlsbutton">Outer East</button>
  </div>
</div>
<div class="user-controls-container">
    <button class="search-button">Search</button>
    `;
}
exports.default = schedulecontrols;
