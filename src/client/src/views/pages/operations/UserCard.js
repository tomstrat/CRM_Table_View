import Nav from "../../components/Nav"
import React, { useState, useEffect } from "react"
import "../../styles/User_card/userCard.css"
import UserField from "../../components/User_Card/UserField"
import UserTypeField from "../../components/User_Card/UserTypeField"
import UserRosterField from "../../components/User_Card/UserRosterField"
import { initialUserState } from "../../../utilities/userdata"
import * as R from "ramda"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserEdit, faEye, faTimesCircle, faCheckCircle, faBan, faCalendarCheck, faCalendarTimes } from "@fortawesome/free-solid-svg-icons"
import uniqid from "uniqid"
import { formatUser } from "../../../utilities/formatters/users.formatters"
import getCurrentDate from "../../../utilities/getCurrentDate"


const UserCard = (props) => {

  const {id} = props.match.params
  const [edit, setEdit] = useState(false)
  const [values, setValues] = useState({
    data: initialUserState,
    populated: false
  })

  useEffect(() => {
    const getData = async () => {
      const result = await fetch(`/ops/users/${id}`)
      const parsedResult = await result.json()
      const formattedResult = formatUser(parsedResult)
      setValues({data: formattedResult, populated: true})
    }
    if(!values.populated) getData()
  })

  function getTypeIcon(type) {
    return type
      ? <FontAwesomeIcon className="user-card-icon user-icon-green" icon={faCheckCircle} size="lg" />
      : <FontAwesomeIcon className="user-card-icon user-icon-red" icon={faTimesCircle} size="lg" />
  }

  function getRosterIcon(roster) {
    switch(roster) {
    case "notWorking":
      return <FontAwesomeIcon className="user-card-icon user-icon-red" icon={faCalendarTimes} size="lg" />
    case "working":
      return <FontAwesomeIcon className="user-card-icon user-icon-green" icon={faCalendarCheck} size="lg" />
    default:
      return <FontAwesomeIcon className="user-card-icon user-icon-grey" icon={faBan} size="lg" />
    }
  }

  function makeTextInput(name){
    return (
      <input
        type="text"
        value={values.data[name]}
        onChange={handleOnChange}
        className="edit-user-input"
        placeholder={values.data[name]}
        name={name}
      />
    )
  }

  function makeDateInput(name){
    return (
      <input
        type="date"
        value={getCurrentDate(values.data[name])}
        onChange={handleOnChange}
        className="edit-user-input"
        min="2005-01-01"
        max={getCurrentDate()}
        name={name}
      />
    )
  }

  function makeCheckboxInput(name){
    return (
      <input
        type="checkbox"
        checked={(values.data[name] === "true")}
        onChange={handleOnChange}
        className="edit-user-checkbox"
        name={name}
      />
    )
  }

  function makeEmpTypeInput(name){
    return (
      <input
        type="checkbox"
        checked={R.includes(name, values.data.employeeType)}
        onChange={handleEmpTypeOnChange}
        className="edit-user-checkbox"
        name={name}
      />
    )
  }

  function makeSelectInput(name, options){
    return (
      <div className="select">
        <select
          type="text"
          value={values.data[name]}
          onChange={handleOnChange}
          className="edit-user-select"
          name={name}
        >
          {options.map(option => {
            return <option key={uniqid("option-")} value={option.value}>{option.value}</option>
          })}
        </select>
        <span className="focus"></span>
      </div>
    )
  }

  function makeRosterInput(name){
    const options = ["unselected", "working", "notWorking"]
    return (options.map(option => {
      return <input
        type="radio"
        key={uniqid("radio-")}
        checked={(values.data[name] === option)}
        onChange={handleOnChange}
        className="edit-user-radio"
        value={option}
        name={name}
      />
    })
    )
  }

  const handleEmpTypeOnChange = (event) => {
    event.persist()
    const { target } = event
    setValues(values => {
      const newTypes = target.checked
        ? R.append(target.name, values.data.employeeType)
        : R.without(target.name, values.data.employeeType)

      return R.mergeDeepLeft(
        {populated: values.populated, data:{
          employeeType: newTypes
        }},
        values
      )
    })
  }
  
  const handleOnChange = (event) => {
    event.persist()
    const { target } = event
    const value = target.type === "checkbox"
      ? target.checked.toString()
      : target.value
    setValues(values => {
      return R.mergeDeepLeft(
        {populated: values.populated, data:{
          [target.name]: value
        }},
        values
      )
    })
  }

  return (
    <>
      <Nav auth={true}/>
      <div className="user-card-outer-container">
        <div className="user-card-container">
          <div className="user-card-controls" onClick={edit ? () => setEdit(false) : () => setEdit(true)}>    
            {edit
              ? <h2>View User</h2>
              : <h2>Edit User</h2>
            }
            {edit
              ? <FontAwesomeIcon className="user-card-icon" icon={faEye} size="lg" />
              : <FontAwesomeIcon className="user-card-icon" icon={faUserEdit} size="lg" />
            }
          </div>
          <UserField 
            title="Username" 
            content={values.data.username}
            edit={edit}
            input={makeTextInput("username")}
          />
          <UserField 
            title="Contract" 
            content={values.data.contract}
            edit={edit}
            input={makeSelectInput("contract", [
              {value:"Full Time"},
              {value:"Part Time"},
              {value:"Casual"},
              {value:"Temp"},
            ])}
          />
          <UserField 
            title="Role" 
            content={values.data.role}
            edit={edit}
            input={makeSelectInput("role", [
              {value:"User"},
              {value:"Operations"},
              {value:"Admin"},
            ])}
          />
          <UserField 
            title="Location" 
            content={values.data.location || "Unspecified"}
            edit={edit}
            input={makeSelectInput("location", [
              {value:"cbd"},
              {value:"innerNorth"},
              {value:"outerNorth"},
              {value:"innerEast"},
              {value:"outerEast"},
              {value:"innerSouth"},
              {value:"outerSouth"},
              {value:"innerWest"},
              {value:"outerWest"}
            ])}
          />
          <UserField 
            title="Certified" 
            content={getTypeIcon((values.data.certified === "true"))}
            edit={edit}
            input={makeCheckboxInput("certified")}
          />
          <UserField 
            title="Injured" 
            content={getTypeIcon((values.data.injured === "true"))}
            edit={edit}
            input={makeCheckboxInput("injured")}
          />
          <UserField 
            title="Join Date" 
            content={values.data.joinDate}
            edit={edit}
            input={makeDateInput("joinDate")}
          />
          <h3>User Types</h3>
          <div className="user-employee-types">
            <UserTypeField 
              title="OP" 
              content={getTypeIcon(R.includes("operations", values.data.employeeType))}
              edit={edit}
              input={makeEmpTypeInput("operations")}
            />
            <UserTypeField 
              title="DR" 
              content={getTypeIcon(R.includes("driver", values.data.employeeType))}
              edit={edit}
              input={makeEmpTypeInput("driver")}
            />
            <UserTypeField 
              title="NA" 
              content={getTypeIcon(R.includes("navigator", values.data.employeeType))}
              edit={edit}
              input={makeEmpTypeInput("navigator")}
            />
            <UserTypeField 
              title="TR" 
              content={getTypeIcon(R.includes("trainer", values.data.employeeType))}
              edit={edit}
              input={makeEmpTypeInput("trainer")}
            />
            <UserTypeField 
              title="TE" 
              content={getTypeIcon(R.includes("temp", values.data.employeeType))}
              edit={edit}
              input={makeEmpTypeInput("temp")}
            />
          </div>
          <h3>Roster</h3>
          <div className="user-employee-types">
            {edit
              ? <div className="roster-key-container">
                <div className="roster-spacer"></div>
                <div className="roster-key">Unselected</div>
                <div className="roster-key">Working</div>
                <div className="roster-key">Not Working</div>
              </div>
              : ""
            }
            <UserRosterField 
              title="M"
              content={getRosterIcon(values.data.rosterMonday)}
              edit={edit}
              input={makeRosterInput("rosterMonday")}
            />
            <UserRosterField 
              title="T"
              content={getRosterIcon(values.data.rosterTuesday)}
              edit={edit}
              input={makeRosterInput("rosterTuesday")}
            />
            <UserRosterField 
              title="W"
              content={getRosterIcon(values.data.rosterWednesday)}
              edit={edit}
              input={makeRosterInput("rosterWednesday")}
            />
            <UserRosterField 
              title="T"
              content={getRosterIcon(values.data.rosterThursday)}
              edit={edit}
              input={makeRosterInput("rosterThursday")}
            />
            <UserRosterField 
              title="F"
              content={getRosterIcon(values.data.rosterFriday)}
              edit={edit}
              input={makeRosterInput("rosterFriday")}
            />
            <UserRosterField 
              title="S"
              content={getRosterIcon(values.data.rosterSaturday)}
              edit={edit}
              input={makeRosterInput("rosterSaturday")}
            />
          </div>
        </div>
      </div>
    </>
  )
  
}

export default UserCard

UserCard.propTypes = {
  match: PropTypes.object,
}