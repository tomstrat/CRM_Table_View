import React, { useState } from "react"
import SideBar from "../../components/SideBarComponents/SideBar"
import StaffSearchControls from "../../components/Staff_Search/StaffSearchControls"
import "../../styles/ScheduleBuilder.css"
import StaffSearchResults from "../../components/Staff_Search/StaffSearchResults"
import RoutePlanner from "../../components/RoutePlanner/RoutePlanner"
import getCurrentDate from "../../../utilities/getCurrentDate"


const ScheduleBuilder = () => {
  const [insertName, setInsertName] = useState("")
  const [addedNames, setAddedNames] = useState([])
  const [availQuery, setAvailQuery] = useState(["notWorking", "working", "contactable", "unselected"])
  const [hoursQuery, setHoursQuery] = useState(["temp", "fullTime", "casual"])
  const [roleQuery, setRoleQuery] = useState(["driver", "navigator", "trainer", "trainee", "temp"])
  const [currDay, setCurrday] = useState(1)
  const [locationQuery, setLocationQuery] = useState(
    [
      "cbd", "innerNorth", "innerWest", "innerEast", "innerSouth", "outerNorth", "outerWest", "outerEast", "outerSouth"
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
    if(insertName){
      setAddedNames([...addedNames, insertName])
      setInsertName("")
    }
  }

  function nameWasRemoved(removedName){
    if(removedName) {
      const tempNameList = addedNames.filter((elem) => {
        if(elem !== removedName  && elem) return true
      })
      setAddedNames(tempNameList)
    }
  }
  
  function increaseDay(){
    setCurrday(currDay + 1)
  }

  function decreaseDay(){
    setCurrday(currDay - 1)
  }


  return (
    <>
      
      <div className="schedule-builder-container">
        <div className="centralise-sidebar">
          <div className="day-select-container">
            <div className="tiny-title">Schedule for:</div>
            <div className="date-container">
              <button className={"arrow-button"} onClick={decreaseDay}>&#60;</button>
              <div className="day-title">{getCurrentDate("day", currDay)}</div>
              <button className={"arrow-button"} onClick={increaseDay}>&#62;</button>
            </div>
            <div className="date-title">{getCurrentDate("date", currDay)}</div>
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
            currDay={currDay}
            availQuery={availQuery}
            hoursQuery={hoursQuery}
            roleQuery={roleQuery}
            locationQuery={locationQuery}
            addedNames={addedNames}
            pageGetName={pageGetNames}>
          </StaffSearchResults>
          <RoutePlanner
            addedNames={addedNames}
            nameWasRemoved={nameWasRemoved}
            nameWasAdded={nameWasAdded}
            insertName={insertName}
            defaultRoutes={[
              {
                routeName: "N1",
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
                routeName: "N2",
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
                routeName: "F1",
                routeType: "Float",
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
                routeType: "Training",
                startHours: "07",
                startMins: "00",
                name1: "Unassigned",
                name2: "",
                name3: "",
                routeNotes: "",
                toggleState: false
              },
              {
                routeName: "D1",
                routeType: "Depot",
                startHours: "07",
                startMins: "00",
                name1: "Unassigned",
                name2: "",
                name3: "",
                routeNotes: "",
                toggleState: false
              }
            ]}
          
          >
            
          </RoutePlanner>
        </div>
      </div>
    </>
  )
}

export default ScheduleBuilder

