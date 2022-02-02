import React, {useState, useEffect} from 'react'
import Login from "./views/pages/login"
import Profile from './views/pages/profile'
import './views/styles/App.css'
import { Switch, Redirect, BrowserRouter } from 'react-router-dom';
import PrivateRoute from './views/components/privateRoute'
import PublicRoute from "./views/components/publicRoute"

function App() {

  const [auth, setAuth] = useState(false);
  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    const response = await fetch("/auth/current-session")
    const role = await response.text()
    setAuth(role)
  }

  return (
    <div className="app-container bg-light">
      <BrowserRouter>
        <div className="container pt-4 pb-4">
          <Switch>
            <PrivateRoute exact path="/" auth={auth} component={Profile} />
            <PublicRoute path="/login" auth={auth} component={Login} />
            <Redirect from="*" to="/" />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
