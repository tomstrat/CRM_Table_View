import Nav from "../../components/Nav"
import React, {useState, useEffect} from "react"
import TableContents from "../../components/TableContents"
import "../../styles/ManageUsers.css"
import SideBarSelect from "../../components/SideBarSelect"
import UserControls from "../../components/UserControls"
import NewUserPanel from "../../components/NewUserPanel" 

const ManageUsers = () => {
  const [data, setData] = useState([{}])

  useEffect(() => {
    const getData = async () => {
      const result = await fetch("/ops/users")
      const parsedResult = await result.json()
      setData(parsedResult)
    }
    if(!data[0].username) getData()
  }, [data])
 
  return (
    <>
      <Nav auth={true}/>
      <div id="default-sidebar" className="visible-sidebar">
        {SideBarSelect(UserControls, NewUserPanel, "Search Users", "Add New User")}
      </div>
      <TableContents data={data}/>  
    </>
  )
  
}

export default ManageUsers