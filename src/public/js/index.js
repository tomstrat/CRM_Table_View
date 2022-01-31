let controlsButtons = document.querySelectorAll(".controlsbutton")
let newUserButtons = document.querySelectorAll(".new-user-button")
let rosterButton = document.querySelectorAll(".roster-toggle")
let dayButtons = document.querySelectorAll(".availability-button")
let searchButton = document.querySelector("#search")

newUserButtons.forEach(element => {
  element.addEventListener("click", sidebarSwitch)
 })

controlsButtons.forEach(element => {
 element.addEventListener("click", buttonHighlight)
})

rosterButton.forEach(element => {
  element.addEventListener("click", rosterToggle)
})

dayButtons.forEach(element => {
  element.addEventListener("click", dayToggle)
})

searchButton.addEventListener("click", getUserResults)
  
function sidebarSwitch() {
  if (document.querySelector("#default-sidebar").classList.contains("visible-sidebar")) {
    document.querySelector("#default-sidebar").setAttribute("class", "invisible-sidebar")
    document.querySelector("#secondary-sidebar").setAttribute("class", "visible-sidebar")
  } else {
    document.querySelector("#default-sidebar").setAttribute("class", "visible-sidebar")
    document.querySelector("#secondary-sidebar").setAttribute("class", "invisible-sidebar")
  }
}

function buttonHighlight(e) {
  if (e.target.id !== 'allusers') {
    if (e.target.classList.contains("controlsbutton")) {
      document.querySelector("#allusers").setAttribute("class", "controlsbutton")
      e.target.setAttribute("class", "controls-button-clicked")
    } else {
      e.target.setAttribute("class", "controlsbutton")
      }
    } else {
        if (e.target.classList.contains("controlsbutton")) {
          document.querySelector("#operations").setAttribute("class", "controlsbutton")
          document.querySelector("#trainers").setAttribute("class", "controlsbutton")
          document.querySelector("#drivers").setAttribute("class", "controlsbutton")
          document.querySelector("#navigators").setAttribute("class", "controlsbutton")
          document.querySelector("#temp").setAttribute("class", "controlsbutton")
          e.target.setAttribute("class", "controls-button-clicked")
      } else {
        e.target.setAttribute("class", "controlsbutton")
    }
  }
}

//Just playing with generating a list of the roles selected from the user search when the search button is clicked
//hopefully we can use it
function getUserResults(){
  return R.map(element => {
    console.log(element.id)
    return element.id
  }, document.querySelectorAll(".controls-button-clicked"))
}

function rosterToggle(e) {
  if (e.target.classList.contains("roster-toggle-off")) {
    e.target.classList.add("roster-toggle-on")
    e.target.classList.remove("roster-toggle-off")
    document.querySelector("#roster-container").classList.add("avail-display-on")
    document.querySelector("#roster-container").classList.remove("avail-display-off")
  } else {
    e.target.classList.add("roster-toggle-off")
    e.target.classList.remove("roster-toggle-on")
    document.querySelector("#roster-container").classList.add("avail-display-off")
    document.querySelector("#roster-container").classList.remove("avail-display-on")
}
}

function dayToggle (e) {
  let idswitched = e.target.id.replace("avail", "invis")
  let otherElement = document.forms["new-user-form"][idswitched]
  

  if (e.target.classList.contains("avail-none")) {
    e.target.classList.add("avail-green")
    e.target.classList.remove("avail-none")
    otherElement.setAttribute("value", "working")
  } else if (e.target.classList.contains("avail-green")){
      e.target.classList.add("avail-yellow")
      e.target.classList.remove("avail-green")
      otherElement.setAttribute("value", "contactable")
  } else if (e.target.classList.contains("avail-yellow")){
      e.target.classList.add("avail-red")
      e.target.classList.remove("avail-yellow")
      otherElement.setAttribute("value", "notWorking")
  } else if (e.target.classList.contains("avail-red")){
      e.target.classList.add("avail-none")
      e.target.classList.remove("avail-red")
      otherElement.setAttribute("value", "unselected")
  }
}


