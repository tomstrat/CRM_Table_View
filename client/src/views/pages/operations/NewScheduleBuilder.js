/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef} from "react"
import Nav from "../../components/Nav/Nav"
import getCurrentDate from "../../../utilities/getCurrentDate"
import printDay from "../../../utilities/printDay"
import fixMonth from "../../../utilities/fixMonth"
import NewRouteBox from "../../components/RoutePlanner/NewRouteBox"
import defaultRoutes2 from "../../components/RoutePlanner/defaultRoutes"
import formatHours from "../../components/RoutePlanner/formatHours"
import formatStaff from "../../components/RoutePlanner/formatStaff"
import NewStaffWidget from "../../components/Staff_Search/NewStaffWidget"
import axios from "axios"
import { formatStaffName } from "../../../utilities/formatters/util"
import truckList from "../../components/RoutePlanner/truckList"
import NewTruckContents from "../../components/RoutePlanner/NewTruckContents"
import postSchedule from "../../components/RoutePlanner/postSchedule"
import testSheet from "../../components/RoutePlanner/testSheet"
import getStaff from "../../components/RoutePlanner/getStaff"
import getTimeSheet from "../../components/RoutePlanner/getTimeSheet"
import recodeSchedule from "../../components/RoutePlanner/recodeSchedule"
import formatForPost from "../../components/RoutePlanner/formatForPost"
import ViewButton from "../../components/Buttons/ViewButton"

const NewScheduleBuilder = () => { 
  const [currDay, setCurrDay] = useState(getCurrentDate("dateTime", 1))
  const [viewState, setViewState] = useState([
    {name: "Trucks", state: false},
    {name: "Planner", state: true},
    {name: "Routes", state: false}
  ])
  const [staff, setStaff] = useState([])
  const [timeSheet, setTimeSheet] = useState([]) 
  const [truckState, setTruckState] = useState(truckList)
  const [newRoute, setNewRoute] = useState({name: "", type: ""})
  const dateChange = useRef(true)
  const nameToAdd = useRef("")
  
  useEffect(() => {
    if (dateChange.current == true) {
      dateChange.current = false
      getTimeSheet(currDay, setTimeSheet)
    }
   
    getStaff(staff, setStaff)
   
  }), []
  
  function saveTimesheet () {
    postSchedule(formatForPost(timeSheet))
  }

  function addName() {
    const name = nameToAdd.current
    const toggleCheck = timeSheet.some(function(e) {
      return e.toggleState == true
    })
    
    if (name && toggleCheck) {
      setTimeSheet(values => {
        return values.map((obj) => {
          if (obj.toggleState) 
            return {...obj, names: [...obj.names, name]}
          else return obj
        })
      })
    }
  }

  function removeName (routeIndex, targetIndex) {
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
  function newRouteTypeHandler (e) {
    const newValue = e.target.value
    setNewRoute({...newRoute, type: newValue})
  }
  
  function newRouteNameHandler (e) {
    const newValue = e.target.value
    setNewRoute({...newRoute, name: newValue})
  }

  function addNewRoute () {
    const defaultTime = new Date(currDay)
    defaultTime.setHours(7, 0, 0, 0)

    setTimeSheet([...timeSheet, {
      routeName: newRoute.name,
      routeType: newRoute.type,
      startTime: defaultTime,
      names: [],
      routeNotes: "",
      toggleState: false
    }])
  }

  function removeRoute () {
    setTimeSheet(values => {
      return values.filter((obj) => {if(obj.toggleState == false) return [...timeSheet, obj]})
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

  function notesChange({targetIndex, newValue}) {
    setTimeSheet(values => {
      return values.map((obj, index) => {
        if (index == targetIndex) 
          return {...obj, routeNotes: newValue}
        else return obj
      })
    })
  }

  function increaseDay(){
    const increDate = new Date(currDay)
    increDate.setDate(increDate.getDate() + 1)
    dateChange.current = true
    setCurrDay(increDate)
  }

  function decreaseDay(){
    const decreDate = new Date(currDay)
    decreDate.setDate(decreDate.getDate() - 1)
    dateChange.current = true
    setCurrDay(decreDate)
  }

  function truckContentsChange ({targetIndex, name, newValue}) {
    setTruckState(values => {
      return values.map((truck, index) => {
        if(index == targetIndex) {
          if(name == "tools") return {...truck, tools: newValue}
          else if(name == "contents") return {...truck, contents: newValue}
          else if(name == "location") return {...truck, location: newValue}
        }
        else return truck
      })
    })
  }

  function makeViewButton (viewName, viewState, index) {
    return (
      <ViewButton
        key={"ViewButton" + index}
        index={index}
        viewName={viewName}
        viewState={viewState}
        updateState={updateView}
      />
    )
  }

  function updateView (targetIndex) {
    setViewState(values => {
      return values.map((obj, index) => {
        if (index == targetIndex && obj.state == false) return {...obj, state: true}
        else if (index == targetIndex && obj.state == true) return obj
        else return {...obj, state: false}
      })
    }
      
    )
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
      
      <div className="upper-row-container">
        <div className="basic-column">
          <div className="basic-row">
            {viewState.map((view, index) => {
              return makeViewButton(view.name, view.state, index)
            })}
          </div>
          <div className={
            viewState[0].state
              ? "hidden"
              :"day-select-container"}>
            <div className="tiny-title">Schedule for:</div>
            <div className="date-container">
              <button className={"arrow-button"} onClick={decreaseDay}>&#60;</button>
              <div className="day-title">{printDay(currDay.getDay())}</div>
              <button className={"arrow-button"} onClick={increaseDay}>&#62;</button>
            </div>
            <div className="date-title">{currDay.getDate() + "-" + fixMonth(currDay.getMonth()) + "-" + currDay.getFullYear()}</div>
          </div>
        </div>
        <div className={
          viewState[1].state
            ? "new-staff-search-results-container"
            : "hidden"
        }>
          {timeSheet.length > 0
            ? staff.map((user, index) => {
              return makeWidget(user, index)
            })
            :<div>Loading</div>
          }
        </div>
      </div>
      
      <div className="lower-row-container">
        <div className={
          viewState[2].state
            ? "hidden"
            : "truck-contents-container"
        }>
          <NewTruckContents
            key={"truckcontents"}
            truckList={truckState}
            truckContentsChange={truckContentsChange}
          /> 
        </div>
        
        <div className={
          viewState[0].state
            ? "hidden"
            : "new-container-of-the-routes"
        }>
          <div className="route-top-bar">
            <select onChange={newRouteTypeHandler} placeholder="Standard" name="routeType" id="routeType" className="new-route-drop route-top-bar-element">
              <option value="Standard">Standard</option>
              <option value="Float">Float</option>
              <option value="Training">Training</option>
              <option value="Depot">Depot</option>
            </select>
            <input type="text" onChange={newRouteNameHandler} name="routeName" className="route-name-input route-top-bar-element" placeholder="Add route name..." ></input>  
            <button className="add-route-button route-top-bar-element" onClick={addNewRoute}>Add New Route</button>
            <button className="add-route-button route-top-bar-element" onClick={removeRoute}>Remove Route</button>
            <button className="save-button route-top-bar-element" onClick={saveTimesheet}>Save Schedule</button>
            <button className="publish-button">Publish Schedule</button>
          </div> 
          {timeSheet.length > 0 
            ?timeSheet.map((route, index) => {
              return makeRoute(route, index)
            })
            : <div>Loading</div>
          }
        </div>

      </div>
      
      
    </>
  )
}
export default NewScheduleBuilder