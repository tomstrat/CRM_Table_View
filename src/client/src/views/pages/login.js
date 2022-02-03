import React, {useState} from 'react'
import { handleSubmitFactory } from '../../utilities/requests'
import { formatErrors } from '../../utilities/errors'
import ValError from '../components/valError'
import '../styles/Login.css'

function Login(props) {

  const [errors, setErrors] = useState({});

  const handleSubmit = handleSubmitFactory(async response => {
    const data = await response.json()
    if(data.errors) {
      setErrors(formatErrors(data.errors))
    } else {
      props.history.push("/")
    }
  })

  return (
    <>
    <div className="login-container">
      <form method="POST" action="/auth/login" onSubmit={handleSubmit}>
        <input className="user-name" type="text" placeholder="Enter Username" name="username" required /><br />
        <input className="password" type="password" placeholder="Enter Password" name="password" required />
        <ValError message={
          errors["password"] ? errors["password"] : errors["username"]
        }/>
        <input className="submit-button" type="submit" value="Login" />
        <label className="remember-me-container">
          <input className="remember-me" type="checkbox" name="remember" /> Remember me
        </label>
      </form>
    </div>
    </>
  )
}

export default Login;
