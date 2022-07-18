/* eslint-disable no-unused-vars */
import React from "react"
import PropTypes from "prop-types"
import NewTimeBox from "./NewTimeBox"
import NewTextBox from "./NewTextBox"
import NewNameBox from "./NewNameBox"

export default function NewRouteBox(props){
  
  function toggle(){
    props.toggleRoute(props.index)
  }

  function makeNameBox (names, routeIndex) {
    return names.map((name, index) => {
      return (
        <NewNameBox
          routeIndex={routeIndex}
          toggleState={props.toggleState}
          key={routeIndex + "NameBox" + index}
          name={name}
          index={index}
          removeName={props.removeName}
        />
      )
    })

   
    
  }


  return(
    <div className="new-route-box">
      <div className="route-name-box"  onClick={toggle} >{props.routeName}</div>
      <div className="new-time-container">{
        props.toggleState
          ? <NewTimeBox
            key={"timebox" + props.index}
            index={props.index}
            startHours={props.startHours}
            startMins={props.startMins}
            timeChange={props.timeChange}
          />
          :props.startHours + ":" + props.startMins
      }</div>
      <div className="new-name-container">{
        props.names.length > 0
          ? makeNameBox(props.names, props.index)
          :"Unassigned"
      
      }</div>
      <div>{
        props.toggleState
          ? <NewTextBox
            key={"textbox" + props.index}
            index={props.index}
            currVal={props.routeNotes}
            valChange={props.notesChange}
          />
          : props.routeNotes
      }</div>
    </div>
  )
}
NewRouteBox.propTypes = {
  onClick: PropTypes.func,
  index: PropTypes.number,
  toggleState: PropTypes.bool,
  routeType: PropTypes.string,
  routeName: PropTypes.string,
  startHours: PropTypes.string,
  startMins: PropTypes.string,
  names: PropTypes.array,
  routeNotes: PropTypes.string,
  toggleRoute: PropTypes.func,
  timeChange: PropTypes.func,
  notesChange: PropTypes.func,
  removeName: PropTypes.func
}