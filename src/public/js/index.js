let controlsButtons = document.querySelectorAll(".controlsbutton")
let newUserButtons = document.querySelectorAll(".new-user-button")
let rosterButton = document.querySelectorAll(".roster-toggle")
let dayButtons = document.querySelectorAll(".availability-button")
let routeForm = document.querySelectorAll("#route-form")

//probs don't need var Myelement = document.forms["new-user-form"]["invis-mon"]

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

dayButtons.forEach(element => {
  element.addEventListener("click", dayToggle)
})

routeForm.forEach(element => {
  element.addEventListener("submit", newRoute)
})


  



function sidebarSwitch() {
  if (document.querySelector("#default-sidebar").classList.contains("visible-sidebar")) {
    document.querySelector("#default-sidebar").classList.remove("visible-sidebar")
    document.querySelector("#default-sidebar").classList.add("invisible-sidebar")
    document.querySelector("#secondary-sidebar").classList.add("visible-sidebar")
    document.querySelector("#secondary-sidebar").classList.remove("invisible-sidebar")
  } else {
    document.querySelector("#default-sidebar").classList.add("visible-sidebar")
    document.querySelector("#default-sidebar").classList.remove("invisible-sidebar")
    document.querySelector("#secondary-sidebar").classList.remove("visible-sidebar")
    document.querySelector("#secondary-sidebar").classList.add("invisible-sidebar")
  }
}

function buttonHighlight(e) {

if (e.target.classList.contains("controlsbutton")) {
  e.target.classList.add("controls-button-clicked")
  e.target.classList.remove("controlsbutton")
} else {
  e.target.classList.add("controlsbutton")
  e.target.classList.remove("controls-button-clicked")
}
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
function create(htmlStr){
  let frag = document.createDocumentFragment()
  temp = document.createElement('div')

  temp.innerHTML = htmlStr

while (temp.firstChild) {
  frag.appendChild(temp.firstChild)
}
return frag
}

function newRoute(x) {
  x.preventDefault(x)
  var formData = new FormData(x.target)
  routeName = formData.get('routeName')
  routeType = formData.get('routeType')
  var fragment = create(`<form class="route-box schedule-element">
  <input class="route-name" value="${routeName}"></input>
  <div class="route-type">${routeType}</div>
  <div class="crew-member">
    Name1
  </div>
  <div class="crew-member">
    Name2
  </div>
</form>`)
yes = document.getElementsByClassName('schedule-planner-container')
yes[0].appendChild(fragment)
document.getElementById("").value = "";
}

