export default function schedulecontrols(): string {
    return `
    <div class="controls-division schedule-element">
      Hours
    </div>
    <div class="user-button-container">
    <button class="controlsbutton">Full-time</button>
    <button class="controlsbutton">Part-time</button>
    <button class="controlsbutton">Casual</button>
    </div>
    <div class="controls-division schedule-element">
    Role
    </div>
    <div class="user-button-container">
    <button class="controlsbutton" ">All Junkies</button>
  </div>
  <div class="user-button-container">
    <button class="controlsbutton" >Trainees</button>
    <button class="controlsbutton" >Trainers</button>
  </div>
  <div class="user-button-container">
    <button class="controlsbutton">Drivers</button>
    <button class="controlsbutton">Navigators</button>
    <button class="controlsbutton">Temps</button>
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
    `
}