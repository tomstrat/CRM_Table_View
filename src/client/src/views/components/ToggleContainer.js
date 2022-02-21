import React, { useEffect, useState} from "react"
import PropTypes from "prop-types"
import uniqid from "uniqid"
import ToggleButton from "./ToggleButton"
import "../styles/ToggleContainer.css"



//component for rendering and holding togglebuttons
//number per row can be customised by injecting relevant css classes
//Requires specific props in the form of an array of objects to be called succesfully
//See bottom of page for example array


const ToggleContainer = (props) => {
  const [ToggleGroup, setToggleGroup] = useState(props.buttons)
  //pState (parent state) and passState are used to check state consistancy with parent and pass data up
  //parent declared and passes in a function which returns state of the child, parent then calls setState with the data
  
  useEffect(() => {
    if(props.passState){
      if(props.pState !== ToggleGroup)
        props.passState(props.groupId, ToggleGroup)
    }
  }), []

  //on click handler for updating and retaining relevant state, state is held solely in ToggleContainer
  const handleOnClick = (e) => {
    const {name, value, className} = e.target
    const bool = (value !== "true")
    const buttonRole = className.split(" ")[0]
    const classInject = className.split(" ")[2]
     
    switch(buttonRole){
    case "free" : 
      setToggleGroup(values => {
        return values.map(obj => {
          if(obj.name === name) return {name, currState: bool, buttonRole: "free", classInject: classInject}
          return obj
        })
      })
      break
    case "master" : 
      setToggleGroup(values => {
        return values.map(obj => {
          if(obj.name === name) {
            return (
              {name, currState: bool, buttonRole: "master", classInject: classInject}
              
            )} if (bool && obj.buttonRole == "child") {
            return (
              {name: obj.name, currState: false, buttonRole: "child", classInject: obj.classInject}
            )
          } else {
            return(
              obj
            ) 
          }
        })
      })
      break
    case "child" : 
      setToggleGroup(values => {
        return values.map(obj => {
          if(obj.name === name) {
            return (
              {name, currState: bool, buttonRole: "child", classInject: classInject}
              
            )} if (bool == true && obj.buttonRole == "master") {
            return (
              {name: obj.name, currState: false, buttonRole: "master", classInject: obj.classInject}
            )
          } else { 
            return(
              obj
            ) 
          }}
        )
      })
      break
    }}
  
  //function definition for rendering togglebuttons
  function makeButton(name, currState, buttonRole, classInject){
    return (
      <ToggleButton
        key={uniqid("button-")}
        name={name}
        value={currState}
        onClick={handleOnClick}
        buttonRole={buttonRole}
        classInject={classInject}
      />
    )
  }
  

  //render calls button rendering function inside a single container
  return (
    <div className="toggle-container">
      
      {ToggleGroup.map(button => {

        return makeButton(button.name, button.currState, button.buttonRole, button.classInject)
      })}
       
    </div>
  )
}



export default ToggleContainer
ToggleContainer.propTypes = {
  buttons: PropTypes.array,
  handleOnClick: PropTypes.func,
  ToggleGroup: PropTypes.array,
  setToggleGroup: PropTypes.func,
  groupId: PropTypes.string,
  passState: PropTypes.func,
  pState: PropTypes.array
}

//buttonRole requires either 'master', child' or 'free'
//any number of buttons can be added
//if class injection is not required, an empty string must be added to the 'classInject' property
//example of array shape and required props: 
// [
//   {name: "All users", currState: true, buttonRole: "master", classInject: "single-row"}, 
//   {name: "Operations", currState: false, buttonRole: "child", classInject: "double-row-left"}, 
//   {name: "Trainers", currState: false, buttonRole: "child", classInject: "double-row-right"},
//   {name: "Drivers", currState: false, buttonRole: "child", classInject: ""},
//   {name: "Navigators", currState: false, buttonRole: "child", classInject: ""}, 
//   {name: "Temp", currState: false, buttonRole: "child", classInject: ""}
// ]


