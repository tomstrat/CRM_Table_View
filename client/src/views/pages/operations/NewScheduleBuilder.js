/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef} from "react"
import Nav from "../../components/Nav/Nav"
import getCurrentDate from "../../../utilities/getCurrentDate"
import printDay from "../../../utilities/printDay"
import fixMonth from "../../../utilities/fixMonth"
import NewRouteBox from "../../components/RoutePlanner/NewRouteBox"
import defaultRoutes2 from "../../components/RoutePlanner/defaultRoutes2"
import formatHours from "../../components/RoutePlanner/formatHours"
import formatStaff from "../../components/RoutePlanner/formatStaff"
import NewStaffWidget from "../../components/Staff_Search/NewStaffWidget"
import axios from "axios"
import { formatStaffName } from "../../../utilities/formatters/util"
import truckList from "../../components/RoutePlanner/truckList"
import NewTruckContents from "../../components/RoutePlanner/NewTruckContents"

const NewScheduleBuilder = () => { 
  const [currDay, setCurrDay] = useState(getCurrentDate("dateTime", + 1))
  const [staff, setStaff] = useState([])
  const [timeSheet, setTimeSheet] = useState(defaultRoutes2) 
  const [truckState, setTruckState] = useState(truckList)
  const nameToAdd = useRef("")
  
  useEffect(() => {
   
    const getStaff = async () => {
      if (!staff.length > 0) {
        const url = "/api/users"
        axios.get(url)
          .then(res => {
            const usersWithToggle = res.data.map((user)=> {
              return {...user, toggleState: false}
            })
            setStaff(usersWithToggle)
            //pointless line? 
            return res
          })
          .catch((err) => {
            console.log(err)
            return err
          })
      }
    }
    getStaff()
  }), []


  function addName() {
    const name = nameToAdd.current
    const toggleCheck = timeSheet.some(function(e) {
      return e.toggleState == true
    })
     
    
    if (name && toggleCheck) {
      nameToAdd.current = ""
      setTimeSheet(values => {
        return values.map((obj) => {
          if (obj.toggleState) 
            return {...obj, names: [...obj.names, name]}
          else return obj
        })
      })
    }
  }
  function removeName (routeIndex, targetIndex, name) {
    nameToAdd.current = name
    setTimeSheet(values => {
      return values.map((obj, index) => {
        if (index == routeIndex) return {...obj, names: obj.names.filter((element, index) => index !== targetIndex)}
        else return obj
      })
    })
  }
  
  function toggleStaff(targetIndex, name) {
    if(!nameToAdd.current) nameToAdd.current = name
    else if (nameToAdd.current && nameToAdd.current !== name) nameToAdd.current = name
    else nameToAdd.current = ""
    
    setStaff(values => {
      return values.map((obj, index) => {
        if (index == targetIndex && obj.toggleState == false) {
          return {...obj, toggleState: true}
        }
        else return {...obj, toggleState: false}
      })
    })
  }

  function toggleRoute(targetIndex){
    setTimeSheet(values => {
      return values.map((obj, index) => {
        if (index == targetIndex && obj.toggleState == false) {
          return {...obj, toggleState: true}
        }
        else return {...obj, toggleState: false}
      })
    })
  }
  
  

  function timeChange(targetIndex, type, newValue) {
    const tempDate = new Date(timeSheet[targetIndex].startTime)
    if (type == "start-hours") tempDate.setHours(newValue)
    else if (type == "start-mins") tempDate.setMinutes(newValue)
    setTimeSheet(values => {
      return values.map((obj, index) => {
        if (index == targetIndex) 
          return {...obj, startTime: tempDate}
        else return obj
      })
    })
  }

  function notesChange(targetIndex, name, newValue) {
    setTimeSheet(values => {
      return values.map((obj, index) => {
        if (index == targetIndex) 
          return {...obj, routeNotes: newValue}
        else return obj
      })
    })
  }

  function increaseDay(){
    setCurrDay(currDay => {
      currDay.setDate(currDay.getDate() + 1)
      return new Date(currDay)
    })
  }

  function decreaseDay(){
    setCurrDay(currDay => {
      currDay.setDate(currDay.getDate() - 1)
      return new Date(currDay)
    })
  }

  function truckContentsChange (row, column, newValue) {
    setTruckState(values => {
      return values.map((truck, index) => {
        if(index == row) {
          if(column == "tools") return {...truck, tools: newValue}
          else if(column == "contents") return {...truck, contents: newValue}
          else if(column == "location") return {...truck, location: newValue}
        }
        else return truck
      })
    })
  }
  function makeRoute(routeInfo, index){
    const {routeName, routeType, startTime, names, routeNotes, toggleState} = routeInfo
    const formattedTimes = formatHours(startTime)
    return (

      <NewRouteBox
        index={index}
        key={"routebox" + index}
        routeName={routeName}
        routeType={routeType}
        startHours={formattedTimes[0]}
        startMins={formattedTimes[1]}
        names={names}
        routeNotes={routeNotes}
        toggleState={toggleState}
        toggleRoute={toggleRoute}
        timeChange={timeChange}
        notesChange={notesChange}
        removeName={removeName}
      />
    )
  }

  function makeWidget(user, index){
    const addedNames = []
    timeSheet.map((route) => {
      route.names.map((name) => {
        if (name && name !== "Unassigned") addedNames.push(name)
      })
    })
    if (!addedNames.includes(user.username)){
      return (
        <NewStaffWidget
          index={index}
          key={"staffWidget" + index} 
          user={user}
          toggleStaff={toggleStaff}
          addName={addName}
        />
      )
    }
  }
  return (
    <>
      <Nav auth={true}/>
      <div className="date-staff-container">
        <div className="day-select-container">
          <div className="tiny-title">Schedule for:</div>
          <div className="date-container">
            <button className={"arrow-button"} onClick={decreaseDay}>&#60;</button>
            <div className="day-title">{printDay(currDay.getDay())}</div>
            <button className={"arrow-button"} onClick={increaseDay}>&#62;</button>
          </div>
          <div className="date-title">{currDay.getDate() + "-" + fixMonth(currDay.getMonth()) + "-" + currDay.getFullYear()}</div>
        </div>
        <div className="new-staff-search-results-container">
          <div className="add-route-button" onClick={addName}>Test</div>
          {staff.map((user, index) => {
            return makeWidget(user, index)
          })}
       



        </div>
      </div>
      <div className="lower-row-container">
        <div className="truck-contents-container">
          <NewTruckContents
            key={"truckcontents"}
            truckList={truckState}
            truckContentsChange={truckContentsChange}
          />
        </div>
        <div className="new-container-of-the-routes">
          {timeSheet.map((route, index) => {
            return makeRoute(route, index)
          })}
        </div>

      </div>
      
    </>
  )
}
export default NewScheduleBuilder