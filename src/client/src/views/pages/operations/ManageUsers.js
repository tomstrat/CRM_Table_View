import Nav from "../../components/Nav"
import React, {useState, useEffect} from "react"
import TableContents from "../../components/TableContents"
import "../../styles/ManageUsers.css"
import SideBarSelect from "../../components/SideBarSelect"
import UserControls from "../../components/UserControls"
import NewUserPanel from "../../components/NewUserPanel" 

const ManageUsers = () => {
  const [data, setData] = useState([{}])
  const [populated, setPopulated] = useState(false)

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
        <SideBarSelect 
          component1={
            UserControls
          } 
          component2={NewUserPanel} 
          title1="Search Users"
          title2="Add New User"
        />
      </div>
      <TableContents data={data}/>  
    </>
  )
  
}

export default ManageUsers