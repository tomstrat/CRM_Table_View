import inject from "../../registry"
import { createDatabase } from "../../database"
import request, { SuperAgentTest } from "supertest"
import Config from "../../config/config"
import cookieSession from "cookie-session"
import express, { Express } from "express"
import { Connection } from "typeorm"

describe("Authentication Routes", () => {
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

  describe("POST /auth/login", () => {
    describe("Posting correct data", () => {
      it("Returns the role and jwt token", async () => {
        await request(parentApp)
          .post("/auth/login")
          .send({ username: "test", password: "test" })
          .expect("Content-Type", /json/)
          .expect("set-cookie", /.*/)
          .expect(200)
          .expect(res => res.body = { role: "admin" })
      })
    })
    describe("Posting wrong password", () => {
      it("sends back errors", async () => {
        await request(parentApp)
          .post("/auth/login")
          .send({ username: "test", password: "wrong" })
          .expect(400)
          .expect(res => {
            res.text.includes("Incorrect Username or Password")
          })
      })
    })
    describe("Posting wrong username", () => {
      it("sends back errors", async () => {
        await request(parentApp)
          .post("/auth/login")
          .send({ username: "wrong", password: "test" })
          .expect(400)
          .expect(res => {
            res.text.includes("Incorrect Username or Password")
          })
      })
    })
    describe("Posting no username", () => {
      it("sends back errors", async () => {
        await request(parentApp)
          .post("/auth/login")
          .send({ username: "", password: "test" })
          .expect(400)
          .expect(res => {
            res.text.includes("Incorrect Username or Password")
          })
      })
    })
    describe("Posting no password", () => {
      it("sends back errors", async () => {
        await request(parentApp)
          .post("/auth/login")
          .send({ username: "test", password: "" })
          .expect(400)
          .expect(res => {
            res.text.includes("Incorrect Username or Password")
          })
      })
    })
  })
  describe("GET /current-session", () => {
    describe("Requesting with auth", () => {
      it("sends back role with json", async () => {
        await agent
          .get("/auth/current-session")
          .expect("Content-Type", /json/)
          .expect(200)
          .expect(res => res.body = { role: "admin" })
      })
    })
    describe("Requesting without auth", () => {
      it("sends back false in role with json", async () => {
        await request(parentApp)
          .get("/auth/current-session")
          .expect("Content-Type", /json/)
          .expect(200)
          .expect(res => res.body = { role: false })
      })
    })
  })
  describe("GET /auth/logout", () => {
    it("logs the user out", async () => {
      await agent
        .get("/auth/logout")
        .expect("Content-Type", /json/)
        .expect(res => res.body = { role: false })
    })
  })
})