
import React, {useState} from "react"
import RouteBox from "./RouteBox"
import uniqid from "uniqid"
import PropTypes from "prop-types"


const RoutePlanner = (props) => {
  const [addRouteState, SetAddRouteState] = useState({routeName: "", routeType: "Standard", toggleState: false})
  const [routePlannerState, setRoutePlannerState] = useState(props.defaultRoutes)
  
  function removeRoute (e) {
    const indexExtracted = parseInt(e.target.id)
    let copyState = routePlannerState
    copyState.splice(indexExtracted, 1)
    setRoutePlannerState(copyState)
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
        routeNotes: "routeNotes",
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
        
      />
    )
  }




  return (
    <div className="route-planner-container">
      <div className="route-top-bar">
        <select placeholder="Standard" name="routeType" id="routeType"  onChange={handleChange} className="new-user-drop route-top-bar-element">
          <option value="Standard">Standard</option>
          <option value="Float">Float</option>
          <option value="Training">Training</option>
          <option value="Depot">Depot</option>
        </select>
        <input type="text" name="routeName" value={addRouteState.routeName} className="route-name-input route-top-bar-element" onChange={handleChange} placeholder="Add route name" ></input>  
        <button className="add-route-button route-top-bar-element" onClick={addRoutehandleClick}>Add Route</button>
      </div>  
      {
        routePlannerState !== []
          ? routePlannerState.map((route, index) => {
            return makeRoute(route, index)
          })
          :  
          <div>Add Routes</div>
          
      }
    </div>
  )
}

export default RoutePlanner

RoutePlanner.propTypes = {
  defaultRoutes: PropTypes.array
}