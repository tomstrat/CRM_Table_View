import Nav from "../../components/Nav"
import React, {useState, useEffect} from "react"
import TableContents from "../../components/TableContents"
import "../../styles/ManageUsers.css"
import SideBar from "../../components/SideBar"
import UserControls from "../../components/UserControls"
import NewUserPanel from "../../components/NewUserPanel"
import * as R from "ramda"


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
  
  const [ToggleButtons, setToggleButtons] = useState({
    master: {
      allusers: true
    },
    children: {
      operations: false, 
      trainers: false, 
      drivers: false, 
      navigators: false, 
      temp: false
    }
  })
  function formatUsers(data) {
    return R.map(R.pipe(
      R.omit(["password", "roster"]),
      R.evolve({
        certified: R.toString,
        injured: R.toString,
        joinDate: (date) => {
          const newDate = new Date(date)
          return newDate.toLocaleDateString("en-GB")
        },
        employeeType: (types) => {
          if(types){
            return R.map(type => {
              return type[0] + type[1]
            }, types).join(", ")
          }}
      })
    ), data)
  }

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
                ToggleButtons={ToggleButtons}
                setToggleButtons={setToggleButtons}
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
        <TableContents ToggleButtons={ToggleButtons} data={data.data}/>
      </div>
    </>
  )
  
}

export default ManageUsers
