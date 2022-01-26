import UserClient from "./database/clients/UserClient"
import { Connection } from "typeorm"
import { createDatabase } from "./database"
import Config from "./config/config"
import usersRouteFactory from "./routes/users"
import authRouteFactory from "./routes/auth"
import appFactory from "./app"
import { requireAuth, handleErrors, handleValErrors } from "./middleware"
import { tableViewBuilder, loginPage, ttmoverview, ttmhours, ttmavailability } from "./views"
import dataRouteFactory from "./routes/data"
import timesheetsRouteFactory from "./routes/timesheets"
import opstimesheetsRouteFactory from "./routes/ops/timesheets"
import { opsoverview, scheduler, edithours, dataviewer, requests, manageusers } from "./views/opsviews/timesheets"
import userValidatorFactory from "./middleware/validation/users.validation"

export default async function inject(testDB?: Connection) {
  const DB = testDB || await createDatabase({ Config, testdb: true })
  const userClient = new UserClient(DB)
  const userValidators = userValidatorFactory({ userClient })
  const Routes = [
    usersRouteFactory({ userClient, userValidators }),
    authRouteFactory({ loginPage, userValidators, handleValErrors, userClient }),
    dataRouteFactory({ tableViewBuilder }),
    timesheetsRouteFactory({ ttmoverview, ttmhours, ttmavailability }),
    opstimesheetsRouteFactory({ opsoverview, scheduler, edithours, dataviewer, requests, manageusers }),
  ]

  const app = appFactory({ Config, Routes, handleErrors, requireAuth })

  return app
}
