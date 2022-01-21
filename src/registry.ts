import Client from "./database/clients/Client"
import { Connection } from "typeorm"
import createDatabase from "./database"
import Config from "./config/config"
import { User } from "./database/models/User"
import usersRouteFactory from "./routes/users"
import authRouteFactory from "./routes/auth"
import appFactory from "./app"
import { requireAuth, handleErrors } from "./middleware"
import { tableViewBuilder, loginPage, timePage, newlogin, ttmoverview, ttmhours, ttmavailability, opsoverview } from "./views"
import dataRouteFactory from "./routes/data"
import timesheetsRouteFactory from "./routes/timesheets"

export default async function inject(testDB?: Connection) {
  const DB = testDB || await createDatabase({ Config })
  const usersClient = new Client("User", DB, User)
  const Routes = [
    usersRouteFactory({ usersClient }),
    authRouteFactory({ loginPage, newlogin, ttmoverview, ttmhours, ttmavailability, opsoverview }),
    dataRouteFactory({ tableViewBuilder, requireAuth }),
    timesheetsRouteFactory({ timePage, requireAuth })
  ]

  const app = appFactory({ Config, Routes, handleErrors })

  return app
}
