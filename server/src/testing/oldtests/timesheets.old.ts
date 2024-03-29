import inject from "../../registry"
import { createDatabase } from "../../database"
import request from "supertest"
import Config from "../../config/config"
import cookieSession from "cookie-session"
import express, { Express, Request, Response } from "express"
import { Connection } from "typeorm"

describe("GET /data", () => {
  let parentApp: Express
  let DB: Connection

  beforeAll(async () => {
    DB = await createDatabase({ Config })
    const app = await inject(DB)
    parentApp = express()
    parentApp.use(cookieSession({
      name: "session",
      keys: ["WPOIJADad'#/]11"],
    }))
    parentApp.get("/api", (req: Request, res: Response) => {
      req.session = { token: "12345" }
      return res.send("Success")
    })
    parentApp.use(app)
  })

  afterAll(async () => {
    DB.close()
  })

  it("sends 400 code when getting without auth token", async () => {
    await request(parentApp)
      .get("/timesheets")
      .expect(401)
  })

  // it("sends 200 code when getting with an auth token", async () => {
  //   const agent = request.agent(parentApp)
  //   await agent
  //     .get("/api")
  //     .expect(200)
  //   await agent
  //     .get("/timesheets")
  //     .expect(302)
  // })

})