import SideBar from "../../components/SideBar"
import Nav from "../../components/Nav"
import UserControls from "../../components/UserControls"
import NewUserPanel from "../../components/NewUserPanel"
import React, {useState, useEffect} from "react"
import TableContents from "../../components/TableContents"




const ManageUsers = () => {
  const [data, setData] = useState([{}])

  useEffect(() => {
    (async () => {
      const result = await fetch("/ops/users")
      const parsedResult = await result.json()
      setData(parsedResult.body)
    })()
  }, [data])
  return (
    <>
      <Nav auth={true}/>
      <div id="default-sidebar" className="visible-sidebar">
        <SideBar title="Select Users" component={UserControls}/>
      </div>
      <div id="secondary-sidebar" className="invisible-sidebar">
        <SideBar title="Select Users" component={NewUserPanel}/>
      </div>
      <TableContents data={data}/>  
    </>
  )
}

export default ManageUsers