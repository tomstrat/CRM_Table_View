import inject from "../../registry"
import { createDatabase } from "../../database"
import request, { SuperAgentTest } from "supertest"
import Config from "../../config/config"
import cookieSession from "cookie-session"
import express, { Express } from "express"
import { Connection } from "typeorm"
import { testUser, correctUser, correctPostUser, incorrectPostUser, errorObject } from "../../testing/dummy-data/userdata"

let parentApp: Express
let DB: Connection
let agent: SuperAgentTest

beforeAll(async () => {
  DB = await createDatabase({ Config })
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
})

afterAll(async () => {
  DB.close()
})

describe("Routes for Users", () => {
  describe("GET /ops/users", () => {
    describe("Without Auth", () => {
      it("sends 401 code", async () => {
        await request(parentApp)
          .get("/ops/users")
          .expect(401)
      })
    })
    describe("With Auth", () => {
      it("sends 200 code", async () => {
        await agent
          .get("/ops/users")
          .expect(200)
      })
    })
  })
  describe("GET /ops/users/new", () => {
    describe("Without Auth", () => {
      it("sends 401 code", async () => {
        await request(parentApp)
          .get("/ops/users/new")
          .expect(401)
      })
    })
    describe("With Auth", () => {
      it("sends 200 code", async () => {
        await agent
          .get("/ops/users/new")
          .expect(200)
          .expect([testUser])
      })
    })
  })
  describe("POST /ops/users/new", () => {
    describe("Without Auth", () => {
      it("sends 401 code", async () => {
        await request(parentApp)
          .post("/ops/users/new")
          .send(correctPostUser)
          .expect(401)
      })
    })
    describe("With Auth", () => {
      describe("And correct data", () => {
        it("sends 200 code", async () => {
          await agent
            .post("/ops/users/new")
            .send(correctPostUser)
            .expect(200)
            .expect({ newUser: correctUser })
        })
      })
      describe("And incorrect data", () => {
        it("sends 400 code", async () => {
          await agent
            .post("/ops/users/new")
            .send(incorrectPostUser)
            .expect(400)
            .expect(errorObject)
        })
      })
      describe("And empty data", () => {
        it("sends 400 code", async () => {
          await agent
            .post("/ops/users/new")
            .send({})
            .expect(400)
        })
      })
    })
  })
})