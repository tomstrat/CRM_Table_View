import React from 'react'
import { handleSubmitFactory } from '../../utilities/requests'
import '../styles/Login.css'

function Login(props) {

  const handleSubmit = handleSubmitFactory(async response => {
    const role = await response.text()
    if(role) props.history.push("/")
  })

  return (
    <>
    <div class="login-container">
      <form method="POST" action="/auth/login" onSubmit={handleSubmit}>
        <input class="user-name" type="text" placeholder="Enter Username" name="username" required />
        <div class="valError">${/*getError(errors, "username")*/}</div>
        <input class="password" type="password" placeholder="Enter Password" name="password" required />
        <div class="valError">${/*getError(errors, "password")*/}</div>
        <input class="submit-button" type="submit" value="Login" />
        <label class="remember-me-container">
          <input class="remember-me" type="checkbox" name="remember" /> Remember me
        </label>
      </form>
    </div>
    </>
  )
}

export default Login;
