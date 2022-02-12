import React, {useState} from "react"
import PropTypes from "prop-types"
import uniqid from "uniqid"
import ToggleButton from "./ToggleButton"
import "../styles/ToggleContainer.css"

const ToggleContainer = (props) => {
  const [ToggleGroup, setToggleGroup] = useState(props.buttons)

  const handleOnClick = (e) => {
    const {name, value, className} = e.target
    const bool = (value !== "true")
    const buttonRole = className.split(" ")[0]
    switch(buttonRole){
    case "free" : 
      setToggleGroup(values => {
        return values.map(obj => {
          if(obj.name === name) return {name, currState: bool, buttonRole: "free"}
          return obj
        })
      })
      break
    case "master" : 
      setToggleGroup(values => {
        return values.map(obj => {
          if(obj.name === name) {
            return (
              {name, currState: bool, buttonRole: "master"}
              
            )} if (bool && obj.buttonRole == "child") {
            return (
              {name: obj.name, currState: false, buttonRole: "child"}
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
              {name, currState: bool, buttonRole: "child"}
              
            )} if (bool == true && obj.buttonRole == "master") {
            return (
              {name: obj.name, currState: false, buttonRole: "master"}
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
 
  function makeButton(name, currState, buttonRole){
    return (
      <ToggleButton
        key={uniqid("button-")}
        name={name}
        value={currState}
        onClick={handleOnClick}
        buttonRole={buttonRole}
      />
    )
  }
  return (
    <div className="toggle-container">
      
      {ToggleGroup.map(button => {

        return makeButton(button.name, button.currState, button.buttonRole)
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
  groupId: PropTypes.string
}
