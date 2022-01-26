import inject from "../../registry"
import { createDatabase } from "../../database"
import request from "supertest"
import Config from "../../config/config"
import cookieSession from "cookie-session"
import express, { Express } from "express"
import { Connection } from "typeorm"

describe("GET /login", () => {
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
    parentApp.use(app)

  })

  afterAll(async () => {
    DB.close()
  })

  describe("GET /auth/login", () => {
    it("sends 200 code", async () => {
      await request(parentApp)
        .get("/auth/login")
        .expect(200)
    })
  })

  describe("POST /auth/login", () => {
    describe("Posting correct data", () => {
      it("allows login with correct user and redirects", async () => {
        await request(parentApp)
          .post("/auth/login")
          .send({ username: "test", password: "test" })
          .expect(302)
      })
    })
    describe("Posting incorrect data", () => {
      it("sends back layout with errors", async () => {
        await request(parentApp)
          .post("/auth/login")
          .send({ username: "wrong", password: "wrong" })
          .expect(400)
      })
    })
  })

  // describe("GET /auth/logout", () => {
  //   it("logs the user out", async () => {
  //     const agent = request.agent(parentApp)
  //     await agent
  //       .post("/auth/login")
  //       .send({ username: "test", password: "test" })
  //       .expect("set-cookie", /session=.*; Path=\/; expires=.*; httponly, session\.sig=.*; Path=\/; expires=.* httponly/)
  //       .expect(302)
  //   })
  // })
})