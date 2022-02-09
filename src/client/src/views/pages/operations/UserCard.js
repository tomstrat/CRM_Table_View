import Nav from "../../components/Nav"
import React, { useState, useEffect } from "react"
import "../../styles/User_card/userCard.css"
import UserField from "../../components/User_Card/UserField"
import { initialUserState } from "../../../utilities/userdata"
import * as R from "ramda"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserEdit, faEye } from "@fortawesome/free-solid-svg-icons"
import uniqid from "uniqid"
import { formatUser } from "../../../utilities/formatters/users.formatters"


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
            title="Certified" 
            content={values.data.certified}
            edit={edit}
            input={makeCheckboxInput("certified")}
          />
          <UserField 
            title="Injured" 
            content={values.data.injured}
            edit={edit}
            input={makeCheckboxInput("injured")}
          />
          
          
        </div>
      </div>
    </>
  )
  
}

export default UserCard

UserCard.propTypes = {
  match: PropTypes.object,
}