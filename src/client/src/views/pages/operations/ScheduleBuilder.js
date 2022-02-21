import React, { useState } from "react"
import SideBar from "../../components/SideBar"
import StaffSearchControls from "../../components/Staff_Search/StaffSearchControls"
import "../../styles/ScheduleBuilder.css"
import StaffSearchResults from "../../components/Staff_Search/StaffSearchResults"
import RoutePlanner from "../../components/RoutePlanner/RoutePlanner"
import getCurrentDate from "../../../utilities/getCurrentDate"
// import * as R from "ramda"

const ScheduleBuilder = () => {
  const [insertName, setInsertName] = useState("")
  const [addedNames, setAddedNames] = useState([])
  const [availQuery, setAvailQuery] = useState(["working", "contactable"])
  const [hoursQuery, setHoursQuery] = useState(["temp", "fullTime", "casual"])
  const [roleQuery, setRoleQuery] = useState(["driver", "navigator", "trainer", "trainee", "temp"])
  const [locationQuery, setLocationQuery] = useState(
    [
      "innerNorth", "innerWest", "innerEast", "innerSouth", "outerNorth", "outerWest", "outerEast", "outerSouth"
    ]
  )

  

  function pageGetButtons(avail, hours, role, location) {
    setAvailQuery(avail)
    setHoursQuery(hours)
    setRoleQuery(role)
    setLocationQuery(location)
  }
  function pageGetNames(newName) {
    if(newName == undefined) setInsertName("")
    else {
      setInsertName(newName)
    }
  }

  function nameWasAdded() {
    setAddedNames([...addedNames, insertName])
    setInsertName("")
  }

  function nameWasRemoved(removedName){
    console.log("TRIGGERED!!!!!")
    console.log(removedName)
    const tempNameList = addedNames.filter((elem) => {
      if(elem !== removedName  && elem) return true
    })
    setAddedNames(tempNameList)
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
              pageGetButtons={pageGetButtons}
            />
          </div>
        </div>
        <div className="column-page">
          <StaffSearchResults 
            availQuery={availQuery}
            hoursQuery={hoursQuery}
            roleQuery={roleQuery}
            locationQuery={locationQuery}
            addedNames={addedNames}
            pageGetName={pageGetNames}>
          </StaffSearchResults>
          <RoutePlanner
            nameWasRemoved={nameWasRemoved}
            nameWasAdded={nameWasAdded}
            insertName={insertName}
            defaultRoutes={[
              {
                routeName: "D1",
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
                routeName: "D2",
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
                routeName: "E1",
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

