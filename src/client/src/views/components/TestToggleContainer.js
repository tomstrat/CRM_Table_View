import React, {useState} from "react"
import PropTypes from "prop-types"
import uniqid from "uniqid"
import SingleToggleTest from "./SingleToggleTest"


const TestToggleContainer = (props) => {
  const [ToggleGroup, setToggleGroup] = useState(props.buttons)

  const handleOnClick = (e) => {
    const {name, value} = e.target
    const bool = (value !== "true")
    setToggleGroup(values => {
      return values.map(obj => {
        if(obj.name === name) return {name, loadState: bool}
        return obj
      })
    })
  }
 
  function makeButton(name, loadState){
    return (
      <SingleToggleTest
        key={uniqid("button-")}
        name={name}
        value={loadState}
        onClick={handleOnClick}
      />
    )
  }
  return (
    <div className="user-button-container">
      
      {ToggleGroup.map(button => {

        return makeButton(button.name, button.loadState)
      })}
       
    </div>
  )
}



export default TestToggleContainer
TestToggleContainer.propTypes = {
  component: PropTypes.func,
  buttons: PropTypes.array,
  loadState: PropTypes.bool,
  buttonTitle: PropTypes.string,
  index: PropTypes.number,
  handleOnClick: PropTypes.func,
  ToggleGroup: PropTypes.array,
  setToggleGroup: PropTypes.func,
  groupId: PropTypes.string
}
