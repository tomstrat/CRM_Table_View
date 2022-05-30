import UserClient from "./database/clients/UserClient"
import TimesheetClient from "./database/clients/TimesheetClient"
import dotenv from "dotenv"
import { Connection } from "typeorm"
import { createDatabase } from "./database"
import Config from "./config/config"
import usersRouteFactory from "./routes/users"
import authRouteFactory from "./routes/auth"
import appFactory from "./app"
import { requireAuth, handleErrors, handleValErrors } from "./middleware"
import { tableViewBuilder } from "./views"
import dataRouteFactory from "./routes/data"
import timesheetsRouteFactory from "./routes/timesheets"
import opstimesheetsRouteFactory from "./routes/ops/timesheets"
import { opsoverview, scheduler, edithours, dataviewer, requests, manageusers } from "./views/opsviews/timesheets"
import userValidatorFactory from "./middleware/validation/users.validation"
import timesheetValidatorFactory from "./middleware/validation/timesheets.validation"
import makeTestUser from "./routes/auth/testUser"


export default async function inject(testDB?: Connection) {
  dotenv.config()
  const notProduction = (process.env.PROD_DATABASE !== "true")
  const DB = testDB || await createDatabase({ Config, testdb: notProduction })
  const userClient = new UserClient(DB)
  const timesheetClient = new TimesheetClient(DB)
  const userValidators = userValidatorFactory({ userClient })
  const timesheetValidators = timesheetValidatorFactory({ timesheetClient })
  const Routes = [
    usersRouteFactory({ userClient, userValidators, handleValErrors }),
    authRouteFactory({ userValidators, handleValErrors, userClient }),
    dataRouteFactory({ tableViewBuilder }),
    timesheetsRouteFactory({ timesheetClient, userClient, timesheetValidators, handleValErrors }),
    opstimesheetsRouteFactory({ userClient, opsoverview, scheduler, edithours, dataviewer, requests, manageusers }),
  ]

  const app = appFactory({ notProduction, Config, Routes, handleErrors, requireAuth })
  if (notProduction) await makeTestUser({ userClient })
  return app


}
