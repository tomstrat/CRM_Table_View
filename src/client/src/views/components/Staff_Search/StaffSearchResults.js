/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from "react"
import { initialUserState } from "../../../utilities/userdata"
import * as R from "ramda"
import "../../styles/ScheduleBuilder.css"
import StaffWidget from "./StaffWidget"
import uniqid from "uniqid"
import ToggleButton from "../ToggleButton"


const StaffSearchResults = () => {

  const [users, setUsers] = useState({
    data: [initialUserState], populated: false
  })

  const [toggleState, setToggleState] = useState(null)
  const [toggleCount, setToggleCount] = useState(0)

  const resultsGetName = (name) => {
    const updateState = toggleState.map((obj) => {
      if(obj.username == name && obj.state == false && toggleCount < 2) {
        setToggleCount(toggleCount + 1)
        return {...obj, state: true}
      } 
      else if(obj.username == name && obj.state == true){
        setToggleCount(toggleCount - 1)
        return {...obj, state: false}
      } 
      else return obj
    })
    setToggleState(updateState)
  }

  useEffect(() => {
    const getData = async () => {
      const result = await fetch("/ops/users")
      const parsedResult = await result.json()
      if (toggleState == null){
        const allPresent = R.map(R.pick([
          "username"
        ]), parsedResult)
        const allPresentState = allPresent.map((elem) => {
          return {...elem, state : false}
          
        })
        setToggleState(allPresentState)
      }
      
      const formattedResult = R.map(R.pick([
        "username", "employeeType", "location", "contract", "certified"
      ]), parsedResult)
      setUsers({data: formattedResult, populated: true})
    }
    if(!users.populated) getData()
  }, [users])

  return (
    <div className="staff-search-results-container">
      <h1>Staff Search Results</h1>
      <div className="staff-search-results-widgets">
        {users.data.map(user => {
          return <StaffWidget 
            key={uniqid("staffwidget-")} 
            toggleState={toggleState}
            resultsGetName={resultsGetName} 
            user={user}
          />
        })}
      </div>
    </div>
  )
}

export default StaffSearchResults