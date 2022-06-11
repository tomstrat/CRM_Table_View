import inject from "../../registry"
import { createDatabase } from "../../database"
import request, { SuperAgentTest } from "supertest"
import Config from "../../config/config"
import cookieSession from "cookie-session"
import express, { Express } from "express"
import { Connection } from "typeorm"
import { testTimesheet, correctPostTimesheet, minimumPostTimesheet, incorrectPostTimesheet } from "../../testing/dummy-data/timesheetdata"
import { correctPostUser } from "../../testing/dummy-data/userdata"
import TimesheetClient from "../../database/clients/TimesheetClient"
import { type } from "ramda"


let parentApp: Express
let DB: Connection
let agent: SuperAgentTest

beforeAll(async () => {
  DB = await createDatabase({ Config })
  const tsClient = new TimesheetClient(DB)
  const app = await inject(DB)
  parentApp = express()
  parentApp.use(cookieSession({
    name: "session",
    keys: ["WPOIJADad'#/]11"],
  }))
  parentApp.use(app)
  agent = request.agent(parentApp)
  await agent
    .post("/auth/login")
    .send({ username: "test", password: "test" })
  await tsClient.addRecord(minimumPostTimesheet)
  await agent
    .post("/api/users/new")
    .send(correctPostUser)
})

afterAll(async () => {
  DB.close()
})

describe("Routes for Timesheets", () => {
  describe("GET /api/timesheets/:date", () => {
    describe("Without Auth", () => {
      it("sends 401 code", async () => {
        await request(parentApp)
          .get("/api/timesheets/1")
          .expect(401)
      })
    })
    describe("With Auth", () => {
      describe("And existing timesheet", () => {
        it("sends 200 code and user", async () => {
          await agent
            .get("/api/timesheets/2019-07-22")
            .expect(200)
            .expect("Content-Type", /json/)
            .expect([testTimesheet])
        })
      })
      describe("And non-existent timesheet", () => {
        it("sends 404 code", async () => {
          await agent
            .get("/api/timesheets/2020-12-14")
            .expect(404)
        })
      })
    })
  })

  describe("POST /api/timesheets/new", () => {
    describe("Without Auth", () => {
      it("sends 401 code", async () => {
        await request(parentApp)
          .post("/api/timesheets/new")
          .send(correctPostTimesheet)
          .expect(401)
      })
    })
    describe("With Auth", () => {
      describe("And correct data", () => {
        it("sends 200 code", async () => {
          await agent
            .post("/api/timesheets/new")
            .send(correctPostTimesheet)
            .expect(200)
            .expect("Content-Type", /json/)
            .expect(res => {
              expect(type(res.body)).toBe("Array")
              expect(res.body.length).toBe(2)
              expect(res.body[0]).toHaveProperty("user")
              expect(res.body[0].user).toHaveProperty("timesheets")
            })
        })
      })
      describe("And minimal data", () => {
        it("sends 200 code", async () => {
          await agent
            .post("/api/timesheets/new")
            .send([
              {
                userId: 1,
                route: "N1",
                plannedStart: "2022-06-08T07:00:00.000Z",
                opsMessage: ""
              },
              {
                userId: 2,
                route: "N5",
                plannedStart: "2022-06-08T07:00:00.000Z",
                opsMessage: ""
              },
            ])
            .expect(200)
            .expect("Content-Type", /json/)
            .expect(res => {
              expect(type(res.body)).toBe("Array")
              expect(res.body.length).toBe(2)
              expect(res.body[0]).toHaveProperty("user")
              expect(res.body[0].user).toHaveProperty("timesheets")
            })
        })
      })
      describe("And duplicate userId", () => {
        it("sends 400 code", async () => {
          await agent
            .post("/api/timesheets/new")
            .send(correctPostTimesheet)
            .expect(400)
        })
      })
      describe("And incorrect userId", () => {
        it("sends 404 code", async () => {
          await agent
            .post("/api/timesheets/new")
            .send(incorrectPostTimesheet)
            .expect(404)
        })
      })
      describe("And empty data", () => {
        it("sends 400 code", async () => {
          await agent
            .post("/api/timesheets/new")
            .send({})
            .expect(400)
        })
      })
    })
  })

  describe("GET /api/timesheets", () => {
    describe("Without Auth", () => {
      it("sends 401 code", async () => {
        await request(parentApp)
          .get("/api/timesheets")
          .expect(401)
      })
    })
    describe("With Auth", () => {
      it("sends 200 code and timesheets", async () => {
        await agent
          .get("/api/timesheets")
          .expect(200)
          .expect("Content-Type", /json/)
          .expect(res => {
            expect(type(res.body)).toBe("Array")
            expect(res.body.length).toBe(6)
            expect(res.body[0]).toHaveProperty("user")
            expect(res.body[0].user).toHaveProperty("roster")
          })
      })
    })
  })
})