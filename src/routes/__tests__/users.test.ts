import inject from "../../registry"
import { createDatabase } from "../../database"
import request, { SuperAgentTest } from "supertest"
import Config from "../../config/config"
import cookieSession from "cookie-session"
import express, { Express } from "express"
import { Connection } from "typeorm"
import { User, Role, Contract } from "../../database/models/User"
import { RosterStatus } from "../../database/models/Roster"

let parentApp: Express
let DB: Connection
let agent: SuperAgentTest
const testUser: User = {
  id: 1,
  username: "test",
  password: "",
  role: Role.admin,
  contract: Contract.fullTime,
  certified: true,
  injured: false,
  roster: {
    id: 1,
    monday: RosterStatus.working,
    tuesday: RosterStatus.working,
    wednesday: RosterStatus.working,
    thursday: RosterStatus.working,
    friday: RosterStatus.working,
    saturday: RosterStatus.working,
  }
}
const correctUser = {
  username: "newUser",
  password: "password",
  passwordConfirm: "password",
  role: "admin",
  contract: "fullTime",
  certified: "on",
  injured: "on",
  rosterMonday: "working",
  rosterTuesday: "working",
  rosterWednesday: "working",
  rosterThursday: "working",
  rosterFriday: "working",
  rosterSaturday: "working",
}
const incorrectUser = {
  username: "test",
  password: "dd",
  passwordConfirm: "pissword",
  role: "admin",
  contract: "fullTime",
  certified: "on",
  injured: "on",
  rosterMonday: "working",
  rosterTuesday: "working",
  rosterWednesday: "working",
  rosterThursday: "working",
  rosterFriday: "working",
  rosterSaturday: "working",
}

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
      it("sends 200 code", async () => {
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
})