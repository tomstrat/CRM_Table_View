import SideBar from "../../components/SideBar"
import Nav from "../../components/Nav"
import UserControls from "../../components/UserControls"
import NewUserPanel from "../../components/NewUserPanel"
import React from "react"


const ManageUsers = () => {
  return (
    <>
      <Nav auth={true}/>
      <div className="page-container">
        <div id="default-sidebar" className="visible-sidebar">
          {SideBar("Select users", UserControls)}
        </div>
        <div id="secondary-sidebar" className="invisible-sidebar">
          {SideBar("New user", NewUserPanel)}
        </div>
        <div className="table-content-container">
          <div className="table">
            <div className="theaders">
            </div>
            <div className="tbody">
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ManageUsers