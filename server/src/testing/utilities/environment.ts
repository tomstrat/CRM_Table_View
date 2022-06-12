import inject from "../../registry"
import { createDatabase } from "../../database"
import request, { SuperAgentTest, SuperTest } from "supertest"
import Config from "../../config/config"
import cookieSession from "cookie-session"
import express from "express"
import TimesheetClient from "../../database/clients/TimesheetClient"


export interface TestEnvironment {
  closeEnvironment: () => void
  authRequest: () => SuperAgentTest
  request: () => SuperTest<request.Test>
  timesheetClient: () => TimesheetClient
}

export async function makeTestEnvironment(): Promise<TestEnvironment> {
  const DB = await createDatabase({ Config })
  const tsClient = new TimesheetClient(DB)
  const app = await inject(DB)
  const parentApp = express()
  parentApp.use(cookieSession({
    name: "session",
    keys: ["WPOIJADad'#/]11"],
  }))
  parentApp.use(app)
  const agent = request.agent(parentApp)
  await agent
    .post("/auth/login")
    .send({ username: "test", password: "test" })


  return {
    closeEnvironment() {
      DB.close()
    },
    authRequest() {
      return agent
    },
    request() {
      return request(parentApp)
    },
    timesheetClient() {
      return tsClient
    }
  }
}

