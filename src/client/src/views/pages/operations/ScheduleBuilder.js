import React, { useState } from "react"
import SideBar from "../../components/SideBar"
import StaffSearchControls from "../../components/StaffSearchControls"





const ScheduleBuilder = () => {
  const [clickBool, setClickBool] = useState(false)
  return (
    <>
      
      <div className="schedule-builder-container">
        <div id="default-sidebar" className="visible-sidebar">
          {clickBool == false 
            ? 
            <>
              <SideBar 
                title={"Search Staff"} 
                component={StaffSearchControls}
              />
              <div className="new-user-button-container">
                <button className="new-user-button" onClick={() => setClickBool(true)}>Add new user</button>
              </div>
            </>
            : 
            <>
              <SideBar 
                title={"Add New User"} 
                // component={NewUserPanel}
                // setData={setData}
                // setRosterButtons={setRosterButtons}
                // rosterButtons={rosterButtons}
              />
              <div className="new-user-button-container">
                <button className="new-user-button" onClick={() => setClickBool(false)}>Cancel</button>
              </div>
            </>
          }
        </div>
        
      </div>
    </>
  )
}

export default ScheduleBuilder

