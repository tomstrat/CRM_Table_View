import React, {useState} from "react"
import getCurrentDate from "../../../utilities/getCurrentDate"
import "../../styles/NewUserPanel.css"
import { handleSubmitFactory } from "../../../utilities/requests"
import { formatErrors } from "../../../utilities/errors"
import ValError from "../../components/valError"
import PropTypes from "prop-types"
import { initialUserState } from "../../../utilities/userdata"
import RosterPanel from "./RosterPanel"
import * as R from "ramda"


const NewUserPanel = (props) => {

  const [errors, setErrors] = useState({})
  const [values, setValues] = useState(initialUserState)

  const handleOnChange = (event) => {
    event.persist()
    const { target } = event
    const empTypes = ["operations", "trainer", "driver", "navigator", "temp"]
    const value = target.type === "checkbox"
      ? target.checked
      : target.value
    const typeTarget = R.includes(target.name, empTypes)
      ? true
      : false


    setValues(values => {
      const refreshed = typeTarget
        ? refreshEmployeeType(
          values.employeeType, target.name, value
        )
        : values.employeeType
      return {
        ...values,
        [target.name]: value,
        employeeType: refreshed
      }
    })
  }

  const refreshEmployeeType = (types, type, value) => {
    const arr = types.length ? types.split(",") : []
    if(value && R.not(R.includes(type, arr))) {
      return R.join(",", R.append(type, arr))
    } else{
      return R.join(",", R.without(type, arr))
    }
  }



  const handleSubmit = handleSubmitFactory(values, async response => {
    const data = await response.json()
    if(data.errors) {
      setErrors(formatErrors(data.errors))
    } else {
      props.setData((values) => {
        return {
          ...values,
          populated: false
        }
      })
    }
  })


  return (
    <>
      <div className="new-user-container">
        <form method="POST" action="users/new" className="new-user-form" id="new-user-form" onSubmit={handleSubmit}>
          <div className="user-button-container">
            <select onChange={handleOnChange} value={values.contract} name="contract" id="contract" className="new-user-drop new-user-element">
              <option value="fullTime">Full-time</option>
              <option value="partTime">Part-time</option>
              <option value="casual">Casual</option>
              <option value="temp">Temp</option>
            </select>
            <select onChange={handleOnChange} value={values.role} name="role" id="role" className="new-user-drop new-user-element">
              <option value="user">User</option>
              <option value="operations">Operations</option>
              <option value="admin">Admin</option>
            </select>
          </div>
        
          <input onChange={handleOnChange} value={values.username} className="user-name new-user-element new-user-auth-form" type="text" placeholder="Enter Username" name="username" autoComplete="off" required/>
          <ValError message={errors["username"]}/>
          
          <input onChange={handleOnChange} value={values.password} className="password new-user-element new-user-auth-form" type="password" placeholder="Enter Password" name="password" autoComplete="off" required/>
          <ValError message={errors["password"]}/>
          
          <input onChange={handleOnChange} value={values.confirmPassword} className="password new-user-element new-user-auth-form" type="password" placeholder="Confirm Password" name="confirmPassword" autoComplete="off" required/>
          <ValError message={errors["confirmPassword"]}/>

          <div className="basic-column avail-display-box new-user-element">
            <div className="basic-row">
              
              <div className="new-user-button-container">
                <label className="checkbox-label new-user-element">Ops</label>
                <input onChange={handleOnChange} name="operations" type="checkbox" className="new-user-element controls-checkbox"  value={values.operations}/>
                <span className="checkmark"></span>
              </div>
              <div className="new-user-button-container">
                <label className="checkbox-label new-user-element">Trainer</label>
                <input onChange={handleOnChange} name="trainer" type="checkbox" className="new-user-element controls-checkbox"  value={values.trainer}/>
                <span className="checkmark"></span>
              </div>
              <div className="new-user-button-container">
                <label className="checkbox-label new-user-element">Driver</label>
                <input onChange={handleOnChange} name="driver" type="checkbox" className="new-user-element controls-checkbox"  value={values.driver}/>
                <span className="checkmark"></span>
              </div>
              <div className="new-user-button-container">
                <label className="checkbox-label new-user-element">Navi</label>
                <input onChange={handleOnChange} name="navigator" type="checkbox" className="new-user-element controls-checkbox"  value={values.navigator}/>
                <span className="checkmark"></span>
              </div>
              <div className="new-user-button-container">
                <label className="checkbox-label new-user-element">Temp</label>
                <input onChange={handleOnChange} name="temp" type="checkbox" className="new-user-element controls-checkbox"  value={values.temp}/>
                <span className="checkmark"></span>
              </div>
            
            </div>
            <div className="basic-row inj-cert">
              <div className="new-user-button-container">
                <label className="checkbox-label new-user-element">Certified</label>
                <input name="certified" type="checkbox" className="new-user-element controls-checkbox"  value={values.certified}/>
                <span className="checkmark"></span>
              </div>
              <div className="new-user-button-container">
                <label className="checkbox-label new-user-element">Injured</label>
                <input onChange={handleOnChange} name="injured" type="checkbox" className="new-user-element controls-checkbox"  value={values.injured}/>
                <span className="checkmark"></span>
              </div>
              
            </div>
            
            
          </div>
          <div className="basic-column">
            <label className="checkbox-label">Location</label>
            <select onChange={handleOnChange} value={values.location} name="location" id="location" className="new-user-drop new-user-element">
              <option value="cbd">CBD</option>
              <option value="innerEast">Inner-east</option>
              <option value="outerEast">Outer-east</option>
              <option value="innerNorth">Inner-north</option>
              <option value="outerNorth">Outer-north</option>
              <option value="innerWest">Inner-west</option>
              <option value="outerWest">Outer-west</option>
              <option value="innerSouth">Inner-south</option>
              <option value="outerSouth">Outer-south</option>
            </select>   
          </div>
          <div className="basic-column">
            <label className="checkbox-label">Join date</label>
            <input className="new-user-element new-user-date-select" type="date" id="join-date-select" name="joinDate"
              onChange={handleOnChange} 
              value={values.joinDate} 
              min="2005-01-01" max={getCurrentDate("form")}></input>
          </div>
          
          <RosterPanel rosterButtons={props.rosterButtons} setRosterButtons={props.setRosterButtons}/>
          <div className="search-button-container new-user-element">
            <input className="new-user-submit-button" type="submit"  value={"submit"}/>
          </div>
        </form>
      </div>
    </>
  )
}

NewUserPanel.propTypes = {
  props: PropTypes.object,
  setData: PropTypes.func,
  rosterButtons: PropTypes.object,
  setRosterButtons: PropTypes.func
}

export default NewUserPanel