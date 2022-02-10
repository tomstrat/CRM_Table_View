import Nav from "../../components/Nav"
import React, { useState } from "react"
import SideBar from "../../components/SideBar"
import StaffSearchControls from "../../components/StaffSearchControls"



const ScheduleBuilder = () => {
  
  const [ToggleButtons, setToggleButtons] = useState({
    master: {
      alljunkies: true
    },
    children: {
      trainers: false, 
      drivers: false, 
      navigators: false,
      trainees: false,  
      temps: false
    },
    free: {
      fulltime: true,
      casual: false,
      temp: false
    }
  })
  return (
    <>
        
      <Nav auth={true}/>
      <div className="manage-user-container">
        <div id="default-sidebar" className="visible-sidebar"> 
          <>
            <SideBar 
              title={"Search Staff"} 
              component={StaffSearchControls}
              ToggleButtons={ToggleButtons}
              setToggleButtons={setToggleButtons}
            />
          </>
        </div>
      </div>
    </>
  )
}

export default ScheduleBuilder