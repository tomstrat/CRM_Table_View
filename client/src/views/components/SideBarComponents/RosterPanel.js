import React from "react"
import PropTypes from "prop-types"
import * as R from "ramda"


const RosterPanel = (props) => {
  return (
    <div className="user-button-container avail-display-box new-user-element" id="roster-container">
      <RosterButton title={"rosterMonday"} rosterButtons={props.rosterButtons} setRosterButtons={props.setRosterButtons}/>
      <RosterButton title={"rosterTuesday"} rosterButtons={props.rosterButtons} setRosterButtons={props.setRosterButtons}/>
      <RosterButton title={"rosterWednesday"} rosterButtons={props.rosterButtons} setRosterButtons={props.setRosterButtons}/>
      <RosterButton title={"rosterThursday"} rosterButtons={props.rosterButtons} setRosterButtons={props.setRosterButtons}/>
      <RosterButton title={"rosterFriday"} rosterButtons={props.rosterButtons} setRosterButtons={props.setRosterButtons}/>
      <RosterButton title={"rosterSaturday"} rosterButtons={props.rosterButtons} setRosterButtons={props.setRosterButtons}/>
    </div>
  )     
  
}
    
export default RosterPanel


const RosterButton = (props) => {
  
  const titleParsed = props.title.charAt(6)
  
  const classSelect = (props) => {
    if(props.rosterButtons[props.title] == "unselected"){
      return "avail-none"
    } else if(props.rosterButtons[props.title] == "working"){
      return "avail-green"
    } else if (props.rosterButtons[props.title] == "contactable"){
      return "avail-yellow"
    }
  } 
  
  const classSelected = classSelect(props) + " availability-button new-user-element"

  const clickHandler = () => {
    if(props.rosterButtons[props.title] == "unselected") {
      props.setRosterButtons(values => {
        return R.assocPath([props.title], "working", values)
      })
    } 
    else if(props.rosterButtons[props.title] == "working") {
      props.setRosterButtons(values => {
        return R.assocPath([props.title], "contactable", values)
      })
    } 
    else if(props.rosterButtons[props.title] == "contactable") {
      props.setRosterButtons(values => {
        return R.assocPath([props.title], "unselected", values)
      })
    }
  }

  return (
    <div
      onClick={clickHandler}
      className={classSelected}
    >
      {titleParsed}
    </div>
  )
}

RosterButton.propTypes = {
  title: PropTypes.string,
  rosterButtons: PropTypes.object,
  setRosterButtons: PropTypes.func
}

RosterPanel.propTypes = {
  title: PropTypes.string,
  rosterButtons: PropTypes.object,
  setRosterButtons: PropTypes.func
}


  
