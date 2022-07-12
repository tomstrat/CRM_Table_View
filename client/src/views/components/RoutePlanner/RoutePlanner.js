import React, { useEffect, useState } from "react"
import RouteBox from "./RouteBox"
import uniqid from "uniqid"
import PropTypes from "prop-types"
import formatSchedule from "./formatSchedule"
import postSchedule from "./postSchedule"

const RoutePlanner = (props) => {
  //top bar state for adding routes 
  const [addRouteState, SetAddRouteState] = useState({routeName: "", routeType: "Standard", toggleState: false})
  //main state holding all route info
  const [routePlannerState, setRoutePlannerState] = useState(props.defaultRoutes)
 
  function removeRoute (e) {
    const indexExtracted = parseInt(e.target.id)
    let copyState = routePlannerState
    copyState.splice(indexExtracted, 1)
    setRoutePlannerState(copyState)
  }
  
  //runs on every render, generates and formats a list of all current names attached to routes and compares it against 
  //the addedNames state (held in the page), which is a list that recieves a name each time one is added to the route.
  //the lists are compared, and if a difference is found, it is returned to the page, and removed from added names. Although
  //names are techcially only removed one by one currently, this does not seem to stop multiple names being removed, for example, 
  //when an entire route is removed, as the function will run until there is no difference in the lists. 
  useEffect(() => {
    const namesCheckList = []
    routePlannerState.map((obj) => {
      namesCheckList.push(obj.name1, obj.name2, obj.name3)
    })
    const namesFiltered = namesCheckList.filter((name) => {
      if(name !== "Unassigned"  && name) return true
    })
    const difference = props.addedNames.filter(x => !namesFiltered.includes(x)).concat(namesFiltered.filter(x => !props.addedNames.includes(x)))
    const removedName = difference.filter((elem) => {
      if(elem !== "Unassigned" && elem) return true
    })
    if(removedName){
      props.nameWasRemoved(removedName[0])
    }
  }), []


  function saveOnClick() {
    postSchedule(formatSchedule(props.currDay, routePlannerState, props.idMap))
  }
  
  function addNameClick () {
    if (props.insertName){
      props.nameWasAdded()
      return setRoutePlannerState(values => {
        return values.map((obj) => {
          if(obj.toggleState && obj.name3 == "" ){
            if(obj.name1 == "" || obj.name1 == "Unassigned") {  
              return {...obj, name1: props.insertName}
            } 
            else if(obj.name2 == "" || obj.name2 == "Unassigned") {
              return {...obj, name2: props.insertName}
            }
            else if(obj.name3 == "" || obj.name3 == "Unassigned") {
              return {...obj, name3: props.insertName}
            }
          }
          else return obj
        })
      })
    }
  }

  function routePlannerGetRoutes (routeState, routeIndex) {
    
    return setRoutePlannerState(values => {
      return values.map((obj, index) => {
        if(routeIndex == index)
          return  {
            routeName: routePlannerState[routeIndex].routeName,
            routeType: routePlannerState[routeIndex].routeType,
            startHours: routeState.startHours,
            startMins: routeState.startMins,
            name1: routeState.name1,
            name2: routeState.name2,
            name3: routeState.name3,
            routeNotes: routeState.routeNotes,
            toggleState: routePlannerState[routeIndex].toggleState
          } 
        else return {
          routeName: routePlannerState[index].routeName,
          routeType: routePlannerState[index].routeType,
          startHours: routePlannerState[index].startHours,
          startMins: routePlannerState[index].startMins,
          name1: routePlannerState[index].name1,
          name2: routePlannerState[index].name2,
          name3: routePlannerState[index].name3,
          routeNotes: routePlannerState[index].routeNotes,
          toggleState: false
        }
      })
    })}
  
  function addRoutehandleClick () {
    setRoutePlannerState([
      ...routePlannerState,
      {
        routeName: addRouteState.routeName,
        routeType: addRouteState.routeType,
        startHours: "07",
        startMins: "00",
        name1: "Unassigned",
        name2: "",
        name3: "",
        routeNotes: "",
        toggleState: addRouteState.toggleState,
        
      }]) 
    
    SetAddRouteState({routeName: "", routeType: addRouteState.routeType, toggleState: false})
  }
  
  function toggleOnClick (event) {
    const { id } = event.target
    const targetIndex = parseInt(id.split("x")[1])
    setRoutePlannerState(values => {
      return values.map((obj, index) => {
        if(targetIndex == index)
          if(obj.toggleState) {
            return {
              routeName: routePlannerState[targetIndex].routeName,
              routeType: routePlannerState[targetIndex].routeType,
              startHours: routePlannerState[targetIndex].startHours,
              startMins: routePlannerState[targetIndex].startMins,
              name1: routePlannerState[targetIndex].name1,
              name2: routePlannerState[targetIndex].name2,
              name3: routePlannerState[targetIndex].name3,
              routeNotes: routePlannerState[targetIndex].routeNotes,
              toggleState: false
            }} else {
            return {
              routeName: routePlannerState[targetIndex].routeName,
              routeType: routePlannerState[targetIndex].routeType,
              startHours: routePlannerState[targetIndex].startHours,
              startMins: routePlannerState[targetIndex].startMins,
              name1: routePlannerState[targetIndex].name1,
              name2: routePlannerState[targetIndex].name2,
              name3: routePlannerState[targetIndex].name3,
              routeNotes: routePlannerState[targetIndex].routeNotes,
              toggleState: true
            }
          } if(targetIndex !== index) {
          return {
            routeName: routePlannerState[index].routeName,
            routeType: routePlannerState[index].routeType,
            startHours: routePlannerState[index].startHours,
            startMins: routePlannerState[index].startMins,
            name1: routePlannerState[index].name1,
            name2: routePlannerState[index].name2,
            name3: routePlannerState[index].name3,
            routeNotes: routePlannerState[index].routeNotes,
            toggleState: false
          }
        }
      }) 
    })
  }

  function handleChange (event) {
    const { target } = event
    SetAddRouteState({
      ...addRouteState,
      [target.name]: target.value,
      toggleState: false 
    })
  }

  function makeRoute(routeInfo, index){
    const {routeName, routeType, startHours, startMins, name1, name2, name3, routeNotes, toggleState} = routeInfo
    return (

      <RouteBox
        parentState={routePlannerState[index]}
        index={index}
        key={uniqid("routebox-")}
        routeName={routeName}
        routeType={routeType}
        startHours={startHours}
        startMins={startMins}
        name1={name1}
        name2={name2}
        name3={name3}
        routeNotes={routeNotes}
        toggleState={toggleState}
        onClick={toggleOnClick}
        routePlannerGetRoutes={routePlannerGetRoutes}
        removeRoute={removeRoute}
        nameWasRemoved={props.nameWasRemoved}
        
      />
    )
  }

  return (
    <div className="route-planner-container">
      <div className="route-top-bar">
        <select placeholder="Standard" name="routeType" id="routeType"  onChange={handleChange} className="new-route-drop route-top-bar-element">
          <option value="Standard">Standard</option>
          <option value="Float">Float</option>
          <option value="Training">Training</option>
          <option value="Depot">Depot</option>
        </select>
        <input type="text" name="routeName" value={addRouteState.routeName} className="route-name-input route-top-bar-element" onChange={handleChange} placeholder="Add route name..." ></input>  
        <button className="add-route-button route-top-bar-element" onClick={addRoutehandleClick}>Add New Route</button>
        <button className="add-staff-button route-top-bar-element" onClick={addNameClick}>Add Staff</button>
        <button className="save-button route-top-bar-element" onClick={saveOnClick}>Save Schedule (P)</button>
        <button className="publish-button">Publish Schedule (P)</button>
      </div> 
      <div className="container-of-the-routes">
        {
          routePlannerState !== []
            ? routePlannerState.map((route, index) => {
              return makeRoute(route, index)
            })
            :  
            <div>Add Routes</div>
            
        }
      </div> 
    </div>
  )
}

export default RoutePlanner

RoutePlanner.propTypes = {
  idMap: PropTypes.array,
  currDay: PropTypes.instanceOf(Date),
  defaultRoutes: PropTypes.array,
  insertName: PropTypes.string,
  nameWasAdded: PropTypes.func,
  nameWasRemoved: PropTypes.func,
  addedNames: PropTypes.array,
  data: PropTypes.array
}