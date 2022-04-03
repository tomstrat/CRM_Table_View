import React, {useState, useEffect} from "react"
import TableContents from "../../components/TableContents"
import "../../styles/ManageUsers.css"
import SideBar from "../../components/SideBarComponents/SideBar"
import UserControls from "../../components/SideBarComponents/UserControls"
import NewUserPanel from "../../components/SideBarComponents/NewUserPanel"
import { formatUsers } from "../../../utilities/formatters/users.formatters"
import Nav from "../../components/Nav/Nav"

const ManageUsers = () => {
  const [data, setData] = useState({data: [{}], populated: false})
  const [clickBool, setClickBool] = useState(false)
  const [typeQuery, setTypeQuery] = useState(["operations" ,"driver", "navigator", "trainer", "temp"])
  const [rosterButtons, setRosterButtons] = useState(
    {
      rosterMonday: "unselected",
      rosterTuesday: "unselected",
      rosterWednesday: "unselected",
      rosterThursday: "unselected",
      rosterFriday: "unselected",
      rosterSaturday: "unselected"
    })
  
  function pageGetQuery (query) {
    setTypeQuery(query)
  }


  useEffect(() => {
    const getData = async () => {
      const result = await fetch("/api/users")
      const parsedResult = await result.json()
      console.log(parsedResult)
      const formattedResult = formatUsers(parsedResult, 
        [
          "passwordConfirm",
          "roster", 
          "rosterMonday",
          "rosterTuesday",
          "rosterWednesday",
          "rosterThursday",
          "rosterFriday",
          "rosterSaturday",
          "rosterSunday",
          "timesheets"
        ]
      )
      setData({data: formattedResult, populated: true})
    }
    console.log(data)
    if(!data.populated) getData()
  }, [data])
 
  return (
    <>
      <Nav auth={true}/>
      <div className="manage-user-container">
        <div id="default-sidebar" className="visible-sidebar">
          {clickBool == false 
            ? 
            <>
              <SideBar 
                title={"Search Users"} 
                component={UserControls}
                pageGetQuery={pageGetQuery}
              />
              <div className="new-user-button-container">
                <button className="new-user-button" onClick={() => setClickBool(true)}>Add new user</button>
              </div>
            </>
            : 
            <>
              <SideBar 
                title={"Add New User"} 
                component={NewUserPanel}
                setData={setData}
                setRosterButtons={setRosterButtons}
                rosterButtons={rosterButtons}
              />
              <div className="new-user-button-container">
                <button className="new-user-button" onClick={() => setClickBool(false)}>Cancel</button>
              </div>
            </>
          }
        </div>
        <TableContents 
          data={data.data}
          typeQuery={typeQuery}
        />
      </div>
    </>
  )
  
}

export default ManageUsers
