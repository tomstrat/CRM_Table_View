import Nav from "../../components/Nav"
import React, {useState, useEffect} from "react"
import TableContents from "../../components/TableContents"
import "../../styles/ManageUsers.css"
import SideBar from "../../components/SideBar"
import UserControls from "../../components/UserControls"
import NewUserPanel from "../../components/NewUserPanel"
import { formatUsers } from "../../../utilities/formatters/users.formatters"


const ManageUsers = () => {
  const [data, setData] = useState({data: [{}], populated: false})
  const [clickBool, setClickBool] = useState(false)
  const [rosterButtons, setRosterButtons] = useState(
    {
      rosterMonday: "unselected",
      rosterTuesday: "unselected",
      rosterWednesday: "unselected",
      rosterThursday: "unselected",
      rosterFriday: "unselected",
      rosterSaturday: "unselected"
    })
  



  useEffect(() => {
    const getData = async () => {
      const result = await fetch("/ops/users")
      const parsedResult = await result.json()
      const formattedResult = formatUsers(parsedResult)
      setData({data: formattedResult, populated: true})
    }
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
        <TableContents data={data.data}/>
      </div>
    </>
  )
  
}

export default ManageUsers
