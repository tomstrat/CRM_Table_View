import Nav from "../../components/Nav"
import React, {useState, useEffect} from "react"
import TableContents from "../../components/TableContents"
import "../../styles/ManageUsers.css"
import SideBar from "../../components/SideBar"
// import SideBarSelect from "../../components/SideBarSelect"
import UserControls from "../../components/UserControls"
import NewUserPanel from "../../components/NewUserPanel" 

const ManageUsers = () => {
  const [data, setData] = useState([{}])
  const [populated, setPopulated] = useState(false)
  const [clickBool, setClickBool] = useState(false)

  useEffect(() => {
    const getData = async () => {
      const result = await fetch("/ops/users")
      const parsedResult = await result.json()
      setData(parsedResult)
      setPopulated(true)
    }
    if(!populated) getData()
  }, [data, populated])
 
  return (
    <>
      <Nav auth={true}/>
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
              props={{populate: setPopulated}}
            />
            <div className="new-user-button-container">
              <button className="new-user-button" onClick={() => setClickBool(false)}>Cancel</button>
            </div>
          </>
        }
      </div>
      <TableContents data={data}/>  
    </>
  )
  
}

export default ManageUsers

/* <SideBarSelect 
  component1={
    NewUserPanel
  } 
  component2={
    // <NewUserPanel populate={setPopulated}/>
    NewUserPanel
  } 
  title1="Search Users"
  title2="Add New User"
/> */