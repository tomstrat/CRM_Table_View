import React, { useState, useEffect } from "react"
import SideBar from "../../components/SideBarComponents/SideBar"
import StaffSearchControls from "../../components/Staff_Search/StaffSearchControls"
import "../../styles/ScheduleBuilder.css"
import StaffSearchResults from "../../components/Staff_Search/StaffSearchResults"
import RoutePlanner from "../../components/RoutePlanner/RoutePlanner"
import getCurrentDate from "../../../utilities/getCurrentDate"
import Nav from "../../components/Nav/Nav"
import TruckContents from "../../components/SideBarComponents/TruckContents"
import printDay from "../../../utilities/printDay"
import fixMonth from "../../../utilities/fixMonth"
import defaultRoutes from "../../components/RoutePlanner/defaultRoutes"
import recodeSchedule from "../../components/RoutePlanner/recodeSchedule"
import getSchedule from "../../components/RoutePlanner/getSchedule"

 

const ScheduleBuilder = () => {
  // eslint-disable-next-line no-unused-vars
  const [sideFlip, setSideFlip] = useState(false)
  const [insertName, setInsertName] = useState("")
  const [addedNames, setAddedNames] = useState([""])
  const [availQuery, setAvailQuery] = useState(["notWorking", "working", "contactable", "unselected"])
  const [hoursQuery, setHoursQuery] = useState(["temp", "fullTime", "casual"])
  const [roleQuery, setRoleQuery] = useState(["driver", "navigator", "trainer", "trainee", "temp"])
  const [currDay, setCurrday] = useState(getCurrentDate("dateTime", 1))
  const [idMap, setIdMap] = useState(null)
  const [data, setData] = useState({data: [{}], populated: false})
  const [locationQuery, setLocationQuery] = useState(
    [
      "cbd", "Unspecified", "innerNorth", "innerWest", "innerEast", "innerSouth", "outerNorth", "outerWest", "outerEast", "outerSouth"
    ]
  )
  
  useEffect(() => {
    const getData = async () => {
      const result = await getSchedule(currDay)
      if(result.status == 200){
        const formattedResult = recodeSchedule(result.data)
        console.log("result:", formattedResult)
        setData({data: formattedResult, populated: true})
      }
      else {
        setData({data: defaultRoutes, populated: true})
      }
    }
    if(!data.populated) getData()
  }), [data, currDay]
  
  function getIdMap(map){
    setIdMap(map)
  }
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
    setCurrday(currDay => {
      currDay.setDate(currDay.getDate() + 1)
      return new Date(currDay)
    })
  }
  
  function decreaseDay(){
    setCurrday(currDay => {
      currDay.setDate(currDay.getDate() - 1)
      return new Date(currDay)
    })
  }

  function sideBarSwitch(){
    if (sideFlip) {
      setSideFlip(false)
    }
    else setSideFlip(true)
    
  }

  return (
    <>
      <Nav auth={true}/>
      <div className="schedule-builder-container">
        <div className="centralise-sidebar">
          <div className="day-select-container">
            <div className="tiny-title">Schedule for:</div>
            <div className="date-container">
              <button className={"arrow-button"} onClick={decreaseDay}>&#60;</button>
              <div className="day-title">{printDay(currDay.getDay())}</div>
              <button className={"arrow-button"} onClick={increaseDay}>&#62;</button>
            </div>
            <div className="date-title">{currDay.getDate() + "-" + fixMonth(currDay.getMonth()) + "-" + currDay.getFullYear()}</div>
          </div>
          <div id="default-sidebar" 
            className={
              sideFlip 
                ? "visible-sidebar"
                : "hidden"
            }
          >
            
            <SideBar 
              title={"Search Staff"} 
              component={StaffSearchControls}
              pageGetButtons={pageGetButtons}
            />
          </div>
          <div id="secondary-sidebar" 
            className={
              sideFlip 
                ? "hidden"
                : "visible-sidebar"
            }
          >
            
            <SideBar 
              title={"Truck Info"} 
              component={TruckContents}
              defaultTrucks={
                [
                  {
                    name: "1AQ", 
                    contents: "",
                    location: "",
                    tools: ""
                  },
                  {
                    name: "1CZ", 
                    contents: "",
                    location: "",
                    tools: ""
                  },
                  {
                    name: "1GA",
                    contents: "",
                    location: "",
                    tools: ""
                  },
                  {
                    name:  "1IP",
                    contents: "",
                    location: "",
                    tools: ""
                  },
                  {
                    name: "1JK", 
                    contents: "",
                    location: "",
                    tools: ""
                  },
                  {
                    name: "1JW",
                    contents: "",
                    location: "",
                    tools: ""
                  },
                  {
                    name: "1LL",
                    contents: "",
                    location: "",
                    tools: ""
                  },
                  {
                    name:   "1LS",
                    contents: "",
                    location: "",
                    tools: ""
                  },
                  {
                    name: "1WZ",
                    contents: "",
                    location: "",
                    tools: ""
                  },
                  {
                    name: "289",
                    contents: "",
                    location: "",
                    tools: ""
                  },
                  {
                    name: "290", 
                    contents: "",
                    location: "",
                    tools: ""
                  },
                  {
                    name: "442",
                    contents: "",
                    location: "",
                    tools: ""
                  },
                  {
                    name: "554",
                    contents: "",
                    location: "",
                    tools: ""
                  },
                  {
                    name:  "XV4",
                    contents: "",
                    location: "",
                    tools: ""
                  },
                  {
                    name:  "XV5",
                    contents: "",
                    location: "",
                    tools: ""
                  },
                  {
                    name:  "XV81",
                    contents: "",
                    location: "",
                    tools: ""
                  },
                  {
                    name:   "XV88",
                    contents: "",
                    location: "",
                    tools: ""
                  },
                  {
                    name:  "XV9",
                    contents: "",
                    location: "",
                    tools: ""
                  },
                  {
                    name:  "ZPR",
                    contents: "",
                    location: "",
                    tools: ""
                  },
                ]
              }
            />
          </div>
          <button className="switch-button" onClick={sideBarSwitch}>Switch Panel</button>
        </div>
        <div className="column-page">
          <StaffSearchResults
            getIdMap={getIdMap}
            idMap={idMap} 
            currDay={currDay}
            availQuery={availQuery}
            hoursQuery={hoursQuery}
            roleQuery={roleQuery}
            locationQuery={locationQuery}
            addedNames={addedNames}
            pageGetName={pageGetNames}>
          </StaffSearchResults>
          <RoutePlanner
            idMap={idMap}
            currDay={currDay}
            addedNames={addedNames}
            nameWasRemoved={nameWasRemoved}
            nameWasAdded={nameWasAdded}
            insertName={insertName}
            defaultRoutes={defaultRoutes}
            data={data}
          >
            
          </RoutePlanner>
        </div>
      </div>
    </>
  )
}

export default ScheduleBuilder

