import React from "react"
import Login from "./views/pages/login"
import Profile from "./views/pages/profile"
import "./views/styles/App.css"
import { Switch, Redirect, BrowserRouter } from "react-router-dom"
import PrivateRoute from "./views/components/privateRoute"
import PublicRoute from "./views/components/publicRoute"
import ManageUsers from "./views/pages/operations/ManageUsers"
import OpsOverview from "./views/pages/operations/OpsOverview"
import Logout from "./views/pages/logout"
import UserCard from "./views/pages/operations/UserCard"

function App() {

  return (

    <BrowserRouter>
      <div className="container pt-4 pb-4">
        <Switch>
          <PrivateRoute exact path="/" component={Profile} />
          <PrivateRoute exact path="/ops/overview" component={OpsOverview} />
          <PrivateRoute exact path="/ops/manageusers" component={ManageUsers} />
          <PrivateRoute exact path="/ops/users/:id" component={UserCard} />
          <PrivateRoute exact path="/logout" component={Logout} />
          <PublicRoute path="/login" component={Login} />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    </BrowserRouter>

  )
}

export default App
