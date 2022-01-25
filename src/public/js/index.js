let elements = document.querySelectorAll(".controlsbutton")

elements.forEach(element => {
 element.addEventListener("click", classSwitch)
});

function classSwitch(e) {
console.log(e)
if (e.target.classList.contains("controlsbutton")) {
  e.target.classList.add("controls-button-clicked")
  e.target.classList.remove("controlsbutton")
} else {
  e.target.classList.add("controlsbutton")
  e.target.classList.remove("controls-button-clicked")
}
}

//function controlsClick(id) {
//
//  const element = document.getElementsByClassName(id)
//  
//
//  if (element === cssClass) {
//  document.getElementById(id).style.cssText = 'border: 2px solid #8dc63f; background-color: #8dc63f; color: #ffffff; border-radius: 12px; width: 7vw; height: 5vh;';
//  } else {
//    document.getElementById(id).style.cssText = 'border: 2px solid #8dc63f; background-color: #ffffff; color: #000000 border-radius: 12px; width: 7vw; height: 5vh;';
//  }
//  
//  console.log(element);
//}

//document.querySelector'(.classname') - brings array of all elements
//
//if(element.classList.contains("button")) 

//element.classList.add("ButtonSelect")
//element.classList.remove("ButtonSelect")
//
//
//
//
//elements.forEach(element => {
//  function....
//})
