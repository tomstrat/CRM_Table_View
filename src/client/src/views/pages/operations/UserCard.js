import Nav from "../../components/Nav/Nav.js"
import React, { useState, useEffect } from "react"
import "../../styles/User_card/userCard.css"
import UserField from "../../components/User_Card/UserField"
import UserTypeField from "../../components/User_Card/UserTypeField"
import UserRosterField from "../../components/User_Card/UserRosterField"
import HiddenUserField from "../../components/User_Card/HiddenUserField"
import { initialUserState } from "../../../utilities/userdata"
import * as R from "ramda"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserEdit, faEye, faCheck } from "@fortawesome/free-solid-svg-icons"
import { formatUser } from "../../../utilities/formatters/users.formatters"
import { getTypeIcon, getRosterIcon } from "../../components/User_Card/getIcons"
import { makeInputFactory } from "../../components/User_Card/makeInputs"
import { handleSubmitFactory } from "../../../utilities/requests"
import { formatErrors } from "../../../utilities/errors"


const UserCard = (props) => {
  const {id} = props.match.params
  const [errors, setErrors] = useState({})
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

  const handleOnSubmit = handleSubmitFactory(values.data, async response => {
    const data = await response.json()
    if(data.errors) {
      setErrors(formatErrors(data.errors))
    } else {
      setValues((values) => {
        return {
          ...values,
          populated: true
        }
      })
    }
  })

  const getSubmitButton = () => {
    return (
      <div className="user-card-submit" onClick={() => handleOnSubmit()}>    
        <input type="submit" value={"Submit"} />
        <FontAwesomeIcon className="user-card-icon" icon={faCheck} size="lg" />
      </div>
    )
  }

  const {
    makeTextInput,
    makeDateInput,
    makeCheckboxInput,
    makeEmpTypeInput,
    makeSelectInput,
    makeRosterInput
  } = makeInputFactory({values, handleOnChange, handleEmpTypeOnChange})

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
          <form method="POST" action={`users/${id}`}  onSubmit={handleOnSubmit}>
            <UserField 
              title="Username" 
              content={values.data.username}
              edit={edit}
              input={makeTextInput("username")}
              error={errors["username"]}
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
            <HiddenUserField
              title="Password"
              edit={edit}
              input={makeTextInput("password")}
              error={errors["password"]}
            />
            <HiddenUserField
              title="Confirm Password"
              edit={edit}
              input={makeTextInput("passwordConfirm")}
              error={errors["passwordConfirm"]}
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
            {edit
              ? getSubmitButton()
              : ""
            }
          </form>
        </div>
      </div>
    </>
  )
  
}

export default UserCard

UserCard.propTypes = {
  match: PropTypes.object,
}