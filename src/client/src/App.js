import React from "react"
import Login from "./views/pages/login"
import Profile from "./views/pages/profile"
import "./views/styles/App.css"
import { Switch, Redirect, BrowserRouter } from "react-router-dom"
import PrivateRoute from "./views/components/privateRoute"
import PublicRoute from "./views/components/publicRoute"
import ManageUsers from "./views/pages/operations/ManageUsers"
import OpsOverview from "./views/pages/operations/OpsOverview"

function App() {

  return (
    <div className="app-container bg-light">
      <BrowserRouter>
        <div className="container pt-4 pb-4">
          <Switch>
            <PrivateRoute exact path="/" component={Profile} />
            <PrivateRoute exact path="/ops/overview" component={OpsOverview} />
            <PrivateRoute exact path="/ops/manageusers" component={ManageUsers} />
            <PublicRoute path="/login" component={Login} />
            <Redirect from="*" to="/" />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
