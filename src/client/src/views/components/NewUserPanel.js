import React, {useState} from "react"
import getCurrentDate from "./getCurrentDate"
import "../styles/NewUserPanel.css"
import { handleSubmitFactory } from "../../utilities/requests"
import { formatErrors } from "../../utilities/errors"
import ValError from "../components/valError"
import PropTypes from "prop-types"
import { initialUserState } from "../../utilities/userdata"


const NewUserPanel = (props) => {

  const [errors, setErrors] = useState({})
  const [values, setValues] = useState(initialUserState)

  const handleOnChange = (event) => {
    event.persist()
    setValues(values => {
      return {
        ...values,
        [event.target.name]: event.target.value,
        employeeType:
        values.operations ? values.operations + "," : "" + 
        values.trainer ? values.trainer + "," : "" + 
        values.driver ? values.driver + "," : "" + 
        values.navigator ? values.navigator + "," : "" + 
        values.temp ? values.temp : ""
      }
    })
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
                <label className="checkbox-label">Temp</label>
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
          <div className="user-button-container">
            <label className="new-user-element">Join date:</label>
            <input type="date" id="join-date-select" name="joinDate"
              onChange={handleOnChange} 
              value={values.joinDate}
              min="2005-01-01" max={getCurrentDate()}></input>
          </div>
          <div className="user-button-container avail-display-box new-user-element" id="roster-container">
            <div className="availability-button new-user-element avail-none" id="avail-mon">M</div>
            <div className="availability-button new-user-element avail-none" id="avail-tue">T</div>
            <div className="availability-button new-user-element avail-none" id="avail-wed">W</div>
            <div className="availability-button new-user-element avail-none" id="avail-thu">T</div>
            <div className="availability-button new-user-element avail-none" id="avail-fri">F</div>
            <div className="availability-button new-user-element avail-none" id="avail-sat">S</div>
            <input onChange={handleOnChange} type="text" className="hidden-value" id="invis-mon" name="rosterMonday"  value={values.rosterMonday}></input>
            <input onChange={handleOnChange} type="text" className="hidden-value" id="invis-tue" name="rosterTuesday"  value={values.rosterTuesday}></input>
            <input onChange={handleOnChange} type="text" className="hidden-value" id="invis-wed" name="rosterWednesday"  value={values.rosterWednesday}></input>
            <input onChange={handleOnChange} type="text" className="hidden-value" id="invis-thu" name="rosterThursday"  value={values.rosterThursday}></input>
            <input onChange={handleOnChange} type="text" className="hidden-value" id="invis-fri" name="rosterFriday"  value={values.rosterFriday}></input>
            <input onChange={handleOnChange} type="text" className="hidden-value" id="invis-sat" name="rosterSaturday"  value={values.rosterSaturday}></input>
          </div>
          <div className="search-button-container">
            <input className="new-user-submit-button" type="submit"  value={"submit"}/>
          </div>
        </form>
      </div>
    </>
  )
}

NewUserPanel.propTypes = {
  props: PropTypes.object,
  setData: PropTypes.func
}

export default NewUserPanel