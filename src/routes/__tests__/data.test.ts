import app from "../../index"
import request from "supertest"
import Config from "../../config/config"
import nock from "nock"
import cookieSession from "cookie-session"
import express, { Express, Request, Response } from "express"

describe("GET /data", () => {
  let parentApp: Express
  beforeEach(() => {
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

    nock(Config.urls.domain)
      .persist()
      .get("/services/data/v33.0/query?q=SELECT+Name,+Paid_Hours__c,+Revenue__c,+Total_Cost__c,+Waste__c,+AJS__c,+Total_Services__c,+%09RPH__c+from+Employee__c")
      .reply(200, {
        records: ["test", "test"]
      })
  })

  it("sends 400 code when getting without auth token", async () => {
    const response = await request(parentApp)
      .get("/data")

    expect(response.statusCode).toEqual(400)
  })

  it("sends 200 code when getting with an auth token", async () => {
    const agent = request.agent(parentApp)
    await agent
      .get("/api")
      .expect(200)
    await agent
      .get("/data")
      .expect(200)
  })
})