import React, {useState, useEffect} from "react"
import { initialUserState } from "../../../utilities/userdata"
import * as R from "ramda"
import "../../styles/ScheduleBuilder.css"
import StaffWidget from "./StaffWidget"
import uniqid from "uniqid"
import PropTypes from "prop-types"

const StaffSearchResults = (props) => {

  const [users, setUsers] = useState({
    data: [initialUserState], populated: false
  })

  const [toggleState, setToggleState] = useState(null)

 

  useEffect(() => {
    if(toggleState){
      let passNames = toggleState.map((obj) => {
        if(obj.state == true) return(obj.username)
      })
      const passNamesParsed = passNames.filter(name => name !== undefined)
      const passNamesParsedString = passNamesParsed[0]
      if(!props.addedNames.includes(passNamesParsedString)) {
        props.pageGetName(passNamesParsedString)
      }
    }}), [toggleState]



  const resultsGetName = (name) => {
    const updateState = toggleState.map((obj) => {
      if(obj.username == name && obj.state == false) {
        return {...obj, state: true}
      } 
      else if(obj.username == name && obj.state == true){
        return {...obj, state: false}
      } 
      else return {...obj, state: false}
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
      <div className="staff-search-results-widgets">
        {users.data.map(user => {
          if(!props.addedNames.includes(user.username)){
            return <StaffWidget 
              key={uniqid("staffwidget-")} 
              toggleState={toggleState}
              resultsGetName={resultsGetName} 
              user={user}
            />
          }
        })}
      </div>
    </div>
  )
}

export default StaffSearchResults


StaffSearchResults.propTypes = {
  pageGetName: PropTypes.func,
  addedNames: PropTypes.array
}