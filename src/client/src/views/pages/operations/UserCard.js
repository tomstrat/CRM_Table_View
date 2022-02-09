import Nav from "../../components/Nav"
import React, { useState, useEffect } from "react"
import "../../styles/User_card/userCard.css"
import UserField from "../../components/User_Card/UserField"
import { initialUserState } from "../../../utilities/userdata"
import * as R from "ramda"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserEdit, faEye } from "@fortawesome/free-solid-svg-icons"


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

  function formatUser(user) {
    return R.pipe(
      R.omit(["password"]),
      R.evolve({
        certified: R.toString,
        injured: R.toString,
        joinDate: (date) => {
          const newDate = new Date(date)
          return newDate.toLocaleDateString("en-GB")
        }
      }))(user)
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
  
  const handleOnChange = (event) => {
    event.persist()
    setValues(values => {
      return R.mergeDeepLeft(
        {populated: values.populated, data:{
          [event.target.name]: event.target.value
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
            title="Certified" 
            content={values.data.certified}
            edit={edit}
            input={makeCheckboxInput("certified")}
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