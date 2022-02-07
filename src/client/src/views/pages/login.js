import React, {useEffect, useState} from "react"
import { handleSubmitFactory } from "../../utilities/requests"
import { formatErrors } from "../../utilities/errors"
import ValError from "../components/valError"
import "../styles/Login.css"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAsterisk, faIdBadge } from "@fortawesome/free-solid-svg-icons"

export default function Login(props) {

  const [errors, setErrors] = useState({})
  const [auth, setAuth] = useState({role: false})
  const [values, setValues] = useState({
    username: "",
    password: ""
  })

  const handleOnChange = (event) => {
    event.persist()
    setValues(values => {
      return {
        ...values,
        [event.target.name]: event.target.value,
      }
    })
  }

  const handleSubmit = handleSubmitFactory(values, async response => {
    const auth = await response.json()
    if(auth.errors) {
      setErrors(formatErrors(auth.errors))
    } else {
      setAuth(auth)
    }
  })

  useEffect(() => {
    if(auth.role) {
      props.history.push("/")
    }
  }, [auth, props])

  return (
    <div className="outer-login-container">
      <div className="login-container">
        <div className="login-logo" style={{backgroundImage: "url('/junk_logo.png')"}}></div>
        <h2>LOG IN</h2>
        <form method="POST" action="/auth/login" onSubmit={handleSubmit}>
          <div className="input-container">
            <div className="icon-container">
              <FontAwesomeIcon icon={faIdBadge} size="xs" />
            </div>
            <input value={values.username} onChange={handleOnChange} className="login-input user-name" type="text" placeholder="Enter Username" name="username" required />
          </div>
          <br />
          <div className="input-container">
            <div className="icon-container">
              <FontAwesomeIcon icon={faAsterisk} size="xs" />
            </div>
            <input value={values.password} onChange={handleOnChange} className="login-input password" type="password" placeholder="Enter Password" name="password" required />
          </div>
          <ValError message={
            errors["password"] ? errors["password"] : errors["username"]
          }/>
          <label className="remember-me-container">
            <input className="remember-me" type="checkbox" name="remember" /> Remember me
          </label>
          <input className="submit-button" type="submit" value="Login" /><br/>
        </form>
      </div>
    </div>
  )
}

Login.propTypes = {
  history: PropTypes.object
}
