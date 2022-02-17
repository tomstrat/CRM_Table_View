import React, { useState } from "react"
import SideBar from "../../components/SideBar"
import StaffSearchControls from "../../components/Staff_Search/StaffSearchControls"
import "../../styles/ScheduleBuilder.css"
import StaffSearchResults from "../../components/Staff_Search/StaffSearchResults"
import RoutePlanner from "../../components/RoutePlanner/RoutePlanner"
import getCurrentDate from "../../../utilities/getCurrentDate"



const ScheduleBuilder = () => {
  // eslint-disable-next-line no-unused-vars
  const [insertNames, setInsertNames] = useState(["", ""])

  function pageGetNames(names) {
    setInsertNames([names])
  }

  return (
    <>
      
      <div className="schedule-builder-container">
        <div className="centralise-sidebar">
          <div className="day-select-container">
            <div>Select Date</div>
            <div className="checkbox-label">(Placeholder)</div>
            <input className="new-user-element new-user-date-select" type="date" id="select-date" name="selectdate"
                
              min="2005-01-01" max={getCurrentDate()}></input>
          </div>
          <div id="default-sidebar" className="visible-sidebar">
            <SideBar 
              title={"Search Staff"} 
              component={StaffSearchControls}
            />
          </div>
        </div>
        <div className="column-page">
          <StaffSearchResults pageGetNames={pageGetNames}>

          </StaffSearchResults>
          <RoutePlanner
            insertNames={insertNames}
            defaultRoutes={[
              {
                routeName: "D1",
                routeType: "Standard",
                startHours: "07",
                startMins: "00",
                name1: "Luke Bailey",
                name2: "",
                name3: "",
                routeNotes: "",
                toggleState: false
              },
              {
                routeName: "D2",
                routeType: "Standard",
                startHours: "07",
                startMins: "00",
                name1: "Tom Copestake",
                name2: "Luke Bailey",
                name3: "",
                routeNotes: "",
                toggleState: false
              },
              {
                routeName: "E1",
                routeType: "Standard",
                startHours: "07",
                startMins: "00",
                name1: "Sean Humphreys",
                name2: "Tom Copestake",
                name3: "",
                routeNotes: "",
                toggleState: false
              },
              {
                routeName: "E2",
                routeType: "Standard",
                startHours: "07",
                startMins: "00",
                name1: "Unassigned",
                name2: "",
                name3: "",
                routeNotes: "",
                toggleState: false
              },
              {
                routeName: "S1",
                routeType: "Standard",
                startHours: "07",
                startMins: "00",
                name1: "Unassigned",
                name2: "",
                name3: "",
                routeNotes: "",
                toggleState: false
              },
              {
                routeName: "S2",
                routeType: "Standard",
                startHours: "07",
                startMins: "00",
                name1: "Unassigned",
                name2: "",
                name3: "",
                routeNotes: "",
                toggleState: false
              },
              {
                routeName: "W1",
                routeType: "Standard",
                startHours: "07",
                startMins: "00",
                name1: "Unassigned",
                name2: "",
                name3: "",
                routeNotes: "",
                toggleState: false
              },
              {
                routeName: "W2",
                routeType: "Standard",
                startHours: "07",
                startMins: "00",
                name1: "Unassigned",
                name2: "",
                name3: "",
                routeNotes: "",
                toggleState: false
              },
              {
                routeName: "F1",
                routeType: "Standard",
                startHours: "07",
                startMins: "00",
                name1: "Unassigned",
                name2: "",
                name3: "",
                routeNotes: "",
                toggleState: false
              },
              {
                routeName: "F2",
                routeType: "Standard",
                startHours: "07",
                startMins: "00",
                name1: "Unassigned",
                name2: "",
                name3: "",
                routeNotes: "",
                toggleState: false
              },
            ]}
          
          >
            
          </RoutePlanner>
        </div>
      </div>
    </>
  )
}

export default ScheduleBuilder

