import React, {useState, useEffect} from "react"
import { initialUserState } from "../../../utilities/userdata"
import * as R from "ramda"
import "../../styles/ScheduleBuilder.css"
import StaffWidget from "./StaffWidget"
import uniqid from "uniqid"


const StaffSearchResults = () => {

  const [users, setUsers] = useState({
    data: [initialUserState], populated: false
  })

  useEffect(() => {
    const getData = async () => {
      const result = await fetch("/ops/users")
      const parsedResult = await result.json()
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
          return <StaffWidget key={uniqid("staffwidget-")} user={user}/>
        })}
      </div>
    </div>
  )
}

export default StaffSearchResults