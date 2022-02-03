export default function userControls(){
  return (
    <div class="sidebar-components-container">        
      <div class="user-button-container">
        <button class="controlsbutton" id="allusers">All users</button>
      </div>
      <div class="user-button-container">
        <button class="controlsbutton" id="operations">Operations</button>
        <button class="controlsbutton" id="trainers">Trainers</button>
      </div><div class="user-button-container">
        <button class="controlsbutton" id="drivers">Drivers</button>
        <button class="controlsbutton" id="navigators">Navigators</button>
        <button class="controlsbutton" id="temp">Temps</button>
      </div><div class="user-controls-container">
        <div class="controls-label">Include Inactive</div>
        <input type="checkbox" class="controls-checkbox"></input>
        <button class="search-button" id="search">Search</button>
      </div><div class="new-user-button-container">
        <button class="new-user-button">Add new user</button>
      </div>
    </div>
  )
}