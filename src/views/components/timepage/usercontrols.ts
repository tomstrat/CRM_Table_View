export default function usercontrols(): string {
  return `
  <div class="user-controls-container">
    <div class="user-button-container">
      <button class="controls-button" id="allusers" onclick="controlsClick('allusers')">All users</button>
    </div>
  </div>
  <div class="user-controls-container">
    <div class="user-button-container">
      <button class="controls-button" id="operations" onclick="controlsClick('operations')">Operations</button>
      <button class="controls-button" id="trainers" onclick="controlsClick('trainers')">Trainers</button>
    </div>
  </div>
    <div class="user-button-container">
      <button class="controls-button" id="drivers" onclick="controlsClick('drivers')">Drivers</button>
      <button class="controls-button" id="navigators" onclick="controlsClick('navigators')">Navigators</button>
    </div>
  </div>
  <div class="user-controls-container">
      <div class="controls-label">Include Inactive</div>
      <input type="checkbox" class="controls-checkbox">
  </div>
  <div class="user-controls-container">
      <button class="search-button" id="search">Search</button>
  </div>
  `

}