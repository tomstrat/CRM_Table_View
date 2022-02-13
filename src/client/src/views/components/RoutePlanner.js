import React, {useState} from "react"
import RouteBox from "./RouteBox"
import uniqid from "uniqid"
import PropTypes from "prop-types"

// import * as R from "ramda"

const RoutePlanner = (props) => {
  const [addRouteState, SetAddRouteState] = useState({routeName: null, routeType: "Standard", toggleState: false})
  const [routePlannerState, setRoutePlannerState] = useState(props.defaultRoutes)
  function addRoutehandleClick () {
    setRoutePlannerState([
      ...routePlannerState,
      {
        routeName: addRouteState.routeName,
        routeType: addRouteState.routeType,
        startTime: "startTime",
        name1: "name1",
        name2: "name2",
        routeNotes: "routeNotes",
        toggleState: addRouteState.toggleState,
        
      }]) 
    
    SetAddRouteState({routeName: null, routeType: addRouteState.routeType, toggleState: false})
  }
  
  //Toggles route boxes, index passed through value of routebox,
  //the routebox component is currently a button although this will have to change,
  //as we would need buttons within buttons, and buttonception returns undefined.
  //currently getting error when either changing from button, or removing toggleState artifact,
  //which is still currently being passed into value, however is no longer neccessary. 
  //will look into it. Oss.
  function toggleOnClick (event) {
    const { value } = event.target
    const targetIndex = parseInt(value.split(",")[0])
    setRoutePlannerState(values => {
      return values.map((obj, index) => {
        if(targetIndex == index)
          if(obj.toggleState) {
            return {
              routeName: routePlannerState[targetIndex].routeName,
              routeType: routePlannerState[targetIndex].routeType,
              startTime: routePlannerState[targetIndex].startTime,
              name1: routePlannerState[targetIndex].name1,
              name2: routePlannerState[targetIndex].name2,
              routeNotes: routePlannerState[targetIndex].routeNotes,
              toggleState: false
            }} else {
            return {
              routeName: routePlannerState[targetIndex].routeName,
              routeType: routePlannerState[targetIndex].routeType,
              startTime: routePlannerState[targetIndex].startTime,
              name1: routePlannerState[targetIndex].name1,
              name2: routePlannerState[targetIndex].name2,
              routeNotes: routePlannerState[targetIndex].routeNotes,
              toggleState: true
            }
          } if(targetIndex !== index) {
          return {
            routeName: routePlannerState[index].routeName,
            routeType: routePlannerState[index].routeType,
            startTime: routePlannerState[index].startTime,
            name1: routePlannerState[index].name1,
            name2: routePlannerState[index].name2,
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
    const {routeName, routeType, toggleState} = routeInfo
    return (

      <RouteBox
        index={index}
        key={uniqid("routebox-")}
        routeName={routeName}
        routeType={routeType}
        startTime="startTime"
        name1="name1"
        name2="name2"
        routeNotes="routeNotes"
        onClick={toggleOnClick}
        toggleState={toggleState}
      />
    )
  }




  return (
    <div className="route-planner-container">
      <div className="route-top-bar">
        <select placeholder="Standard" name="routeType" id="routeType" onChange={handleChange} className="new-user-drop route-top-bar-element">
          <option value="Standard">Standard</option>
          <option value="Float">Float</option>
          <option value="Training">Training</option>
          <option value="Depot">Depot</option>
        </select>
        <input type="text" name="routeName" className="route-name-input route-top-bar-element" onChange={handleChange} placeholder="Add route name"></input>  
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