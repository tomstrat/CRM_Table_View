import React from "react"
import Login from "./views/pages/login"
// import Profile from "./views/pages/profile"
import "./views/styles/App.css"
import { Switch, Redirect, BrowserRouter } from "react-router-dom"
import PrivateRoute from "./views/components/privateRoute"
import PublicRoute from "./views/components/publicRoute"
import ManageUsers from "./views/pages/operations/ManageUsers"
import OpsOverview from "./views/pages/operations/OpsOverview"
import Logout from "./views/pages/logout"
import UserCard from "./views/pages/operations/UserCard"
import ScheduleBuilder from "./views/pages/operations/ScheduleBuilder"
import EditHours from "./views/pages/operations/EditHours"
import DataViewer from "./views/pages/operations/DataViewer"
import Requests from "./views/pages/operations/Requests"
import Overview from "./views/pages/user/Overview"
import AddHours from "./views/pages/user/AddHours"
import TimeOff from "./views/pages/user/TimeOff"
import Forms from "./views/pages/user/Forms"

function App() {

  return (
    
    <BrowserRouter>
      <div className="container pt-4 pb-4">
        <Switch>
          <PrivateRoute exact path="/" component={OpsOverview} />
          <PrivateRoute exact path="/ops/overview" component={OpsOverview} />
          <PrivateRoute exact path="/ops/scheduler" component={ScheduleBuilder} />
          <PrivateRoute exact path="/ops/edithours" component={EditHours} />
          <PrivateRoute exact path="/ops/dataviewer" component={DataViewer} />
          <PrivateRoute exact path="/ops/requests" component={Requests} />
          <PrivateRoute exact path="/ops/manageusers" component={ManageUsers} />
          <PrivateRoute exact path="/ops/users/:id" component={UserCard} />
          <PrivateRoute exact path="/logout" component={Logout} />
          <PrivateRoute exact path="/overview" component={Overview} />
          <PrivateRoute exact path="/addhours" component={AddHours} />
          <PrivateRoute exact path="/timeoff" component={TimeOff} />
          <PrivateRoute exact path="/forms" component={Forms} />
          <PublicRoute path="/login" component={Login} />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    </BrowserRouter>

  )
}

export default App
