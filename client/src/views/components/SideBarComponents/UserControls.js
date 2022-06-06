import React, {useState} from "react"
import "../../styles/UserControls.css"
import PropTypes from "prop-types"
import ToggleContainer from "../Buttons/ToggleContainer"

const UserControls = (props) => {
  const [eType, setEType] = useState(["operations" ,"driver", "navigator", "trainer", "temp"])

  function controlsGetButtons (group, state) {
    setEType(state)
  }

  function formatType (name) {
    if(name == "Operations") return name.toLowerCase()
    else return name.toLowerCase().slice(0, name.length - 1)
  }
  function sendQueryOnClick() {
    const eTypeQuery = []
    if(eType[0].currState)
    {
      eType.map((obj) => {
        if(obj.buttonRole == "child")
          eTypeQuery.push(formatType(obj.name))
      })
    }
    else 
    {
      eType.map((obj) => {
        if(obj.buttonRole == "child" && obj.currState)
          eTypeQuery.push(formatType(obj.name))
      })
    }
    props.pageGetQuery(eTypeQuery)
  }
  
  return (
    <>
      <div className="sidebar-components-container">        
        <ToggleContainer
          pState={eType}
          passState={controlsGetButtons}
          buttons={
            [
              {name: "All users", currState: true, buttonRole: "master", classInject: "single-row"}, 
              {name: "Operations", currState: false, buttonRole: "child", classInject: "double-row-left"}, 
              {name: "Trainers", currState: false, buttonRole: "child", classInject: "double-row-right"},
              {name: "Drivers", currState: false, buttonRole: "child", classInject: ""},
              {name: "Navigators", currState: false, buttonRole: "child", classInject: ""}, 
              {name: "Temps", currState: false, buttonRole: "child", classInject: ""}
            ]
          }
          groupId={"userSearch"}
        />
      </div>
      <div className="user-controls-container">
        <div className="controls-label">Include Inactive</div>
        <input type="checkbox" className="controls-checkbox"></input>
        <button className="search-button" id="search" onClick={sendQueryOnClick}>Search</button>
      </div>
      
    </>
  )
} 

export default UserControls

UserControls.propTypes = {
  ToggleButtons: PropTypes.object,
  setToggleButtons: PropTypes.func,
  typeQuery: PropTypes.array,
  pageGetQuery: PropTypes.func
}