import Nav from "../../components/Nav"
import React from "react"
import SideBar from "../../components/SideBar"

const ScheduleBuilder = () => {
  return (
    <>
      <Nav auth={true}/>
      <div className="page-container">
        <div id="default-sidebar" className="visible-sidebar">
          <SideBar 
            title={"Search Staff"} 
            
          />
        </div>
      </div>
    </>
  )
}

export default ScheduleBuilder