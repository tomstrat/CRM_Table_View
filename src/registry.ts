import UserClient from "./database/clients/UserClient"
import { Connection } from "typeorm"
import { createDatabase } from "./database"
import Config from "./config/config"
import usersRouteFactory from "./routes/users"
import authRouteFactory from "./routes/auth"
import appFactory from "./app"
import { requireAuth, handleErrors } from "./middleware"
import { tableViewBuilder, loginPage, timePage, newlogin } from "./views"
import dataRouteFactory from "./routes/data"
import timesheetsRouteFactory from "./routes/timesheets"

export default async function inject(testDB?: Connection) {
  const DB = testDB || await createDatabase({ Config, testdb: true })
  const usersClient = new UserClient(DB)
  const Routes = [
    usersRouteFactory({ usersClient }),
    authRouteFactory({ loginPage, newlogin }),
    dataRouteFactory({ tableViewBuilder, requireAuth }),
    timesheetsRouteFactory({ timePage, requireAuth })
  ]

  const app = appFactory({ Config, Routes, handleErrors })

  return app
}
