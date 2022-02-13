import React from "react"
import SideBar from "../../components/SideBar"
import StaffSearchControls from "../../components/StaffSearchControls"
import "../../styles/ScheduleBuilder.css"
import StaffSearchResults from "../../components/StaffSearchResults"
import RoutePlanner from "../../components/RoutePlanner"
import getCurrentDate from "../../../utilities/getCurrentDate"



const ScheduleBuilder = () => {
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
          <StaffSearchResults>

          </StaffSearchResults>
          <RoutePlanner
            defaultRoutes={[
              {
                routeName: "D1",
                routeType: "Standard",
                startTime: "Not set",
                name1: "unassigned",
                name2: "unassigned",
                routeNotes: "routeNotes",
                toggleState: false
              },
              {
                routeName: "D2",
                routeType: "Standard",
                startTime: "Not set",
                name1: "unassigned",
                name2: "unassigned",
                routeNotes: "routeNotes",
                toggleState: false
              },
              {
                routeName: "E1",
                routeType: "Standard",
                startTime: "Not set",
                name1: "unassigned",
                name2: "unassigned",
                routeNotes: "routeNotes",
                toggleState: false
              },
              {
                routeName: "E2",
                routeType: "Standard",
                startTime: "Not set",
                name1: "unassigned",
                name2: "unassigned",
                routeNotes: "routeNotes",
                toggleState: false
              },
              {
                routeName: "S1",
                routeType: "Standard",
                startTime: "Not set",
                name1: "unassigned",
                name2: "unassigned",
                routeNotes: "routeNotes",
                toggleState: false
              },
              {
                routeName: "S2",
                routeType: "Standard",
                startTime: "Not set",
                name1: "unassigned",
                name2: "unassigned",
                routeNotes: "routeNotes",
                toggleState: false
              },
              {
                routeName: "W1",
                routeType: "Standard",
                startTime: "Not set",
                name1: "unassigned",
                name2: "unassigned",
                routeNotes: "routeNotes",
                toggleState: false
              },
              {
                routeName: "W2",
                routeType: "Standard",
                startTime: "Not set",
                name1: "unassigned",
                name2: "unassigned",
                routeNotes: "routeNotes",
                toggleState: false
              },
              {
                routeName: "F1",
                routeType: "Standard",
                startTime: "Not set",
                name1: "unassigned",
                name2: "unassigned",
                routeNotes: "routeNotes",
                toggleState: false
              },
              {
                routeName: "F2",
                routeType: "Standard",
                startTime: "Not set",
                name1: "unassigned",
                name2: "unassigned",
                routeNotes: "routeNotes",
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

