let routeForm = document.querySelectorAll("#route-form")
let controlsButtons = document.querySelectorAll(".controlsbutton")

routeForm.forEach(element => {
  element.addEventListener("submit", newRoute)
})

controlsButtons.forEach(element => {
  element.addEventListener("click", buttonHighlight)
 })

function create(htmlStr){
  let frag = document.createDocumentFragment()
  temp = document.createElement("div")

  temp.innerHTML = htmlStr

  while (temp.firstChild) {
    frag.appendChild(temp.firstChild)
  }
  return frag
}

function newRoute(x) {
  x.preventDefault(x)
  var formData = new FormData(x.target)
  routeName = formData.get("routeName")
  routeType = formData.get("routeType")
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
  yes = document.getElementsByClassName("schedule-planner-container")
  yes[0].appendChild(fragment)
}

function buttonHighlight(e) {
  if (e.target.id !== 'alljunkies') {
    if (e.target.classList.contains("controlsbutton")) {
      document.querySelector("#alljunkies").setAttribute("class", "controlsbutton")
      e.target.setAttribute("class", "controls-button-clicked")
    } else {
      e.target.setAttribute("class", "controlsbutton")
      }
    } else {
        if (e.target.classList.contains("controlsbutton")) {
          document.querySelector("#trainees").setAttribute("class", "controlsbutton")
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