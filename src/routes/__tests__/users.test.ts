import inject from "../../registry"
import { createDatabase } from "../../database"
import request, { SuperAgentTest } from "supertest"
import Config from "../../config/config"
import cookieSession from "cookie-session"
import express, { Express } from "express"
import { Connection } from "typeorm"
import {
  testUser, correctUser,
  correctCreatedUser,
  updatedUser,
  correctPostUser,
  incorrectPostUser,
  correctPatchUser,
  errorObject,
  patchErrorObject
} from "../../testing/dummy-data/userdata"

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
  describe("GET /api/users/:id", () => {
    describe("Without Auth", () => {
      it("sends 401 code", async () => {
        await request(parentApp)
          .get("/api/users/1")
          .expect(401)
      })
    })
    describe("With Auth", () => {
      describe("And existing user", () => {
        it("sends 200 code and user", async () => {
          await agent
            .get("/api/users/1")
            .expect(200)
            .expect("Content-Type", /json/)
            .expect(testUser)
        })
      })
      describe("And non-existent user", () => {
        it("sends 404 code", async () => {
          await agent
            .get("/api/users/100")
            .expect(404)
        })
      })
    })
  })

  describe("POST /api/users/new", () => {
    describe("Without Auth", () => {
      it("sends 401 code", async () => {
        await request(parentApp)
          .post("/api/users/new")
          .send(correctPostUser)
          .expect(401)
      })
    })
    describe("With Auth", () => {
      describe("And correct data", () => {
        it("sends 200 code", async () => {
          await agent
            .post("/api/users/new")
            .send(correctPostUser)
            .expect(200)
            .expect("Content-Type", /json/)
            .expect(correctCreatedUser)
        })
      })
      describe("And incorrect data", () => {
        it("sends 400 code", async () => {
          await agent
            .post("/api/users/new")
            .send(incorrectPostUser)
            .expect(400)
            .expect(errorObject)
        })
      })
      describe("And empty data", () => {
        it("sends 400 code", async () => {
          await agent
            .post("/api/users/new")
            .send({})
            .expect(400)
        })
      })
    })
  })

  describe("GET /api/users", () => {
    describe("Without Auth", () => {
      it("sends 401 code", async () => {
        await request(parentApp)
          .get("/api/users")
          .expect(401)
      })
    })
    describe("With Auth", () => {
      it("sends 200 code and users", async () => {
        await agent
          .get("/api/users")
          .expect(200)
          .expect("Content-Type", /json/)
          .expect([testUser, correctUser])
      })
    })
  })

  describe("PATCH /api/users/:id", () => {
    describe("Without Auth", () => {
      it("sends 401 code", async () => {
        await request(parentApp)
          .patch("/api/users/2")
          .send(correctPatchUser)
          .expect(401)
      })
    })
    describe("With Auth", () => {
      describe("And correct data", () => {
        it("sends 200 code", async () => {
          await agent
            .patch("/api/users/2")
            .send(correctPatchUser)
            .expect(200)
            .expect("Content-Type", /json/)
            .expect(updatedUser)
        })
      })
      describe("And incorrect data", () => {
        it("sends 400 code", async () => {
          await agent
            .patch("/api/users/2")
            .send(incorrectPostUser)
            .expect(400)
            .expect(patchErrorObject)
        })
      })
      describe("And empty data", () => {
        it("sends 400 code", async () => {
          await agent
            .patch("/api/users/2")
            .send({})
            .expect(400)
        })
      })
    })
  })

  describe("DELETE /api/users/:id", () => {
    describe("Without Auth", () => {
      it("sends 401 code", async () => {
        await request(parentApp)
          .delete("/api/users/2")
          .expect(401)
      })
    })
    describe("With Auth", () => {
      describe("And existing user", () => {
        it("sends 200 code and deletes user", async () => {
          await agent
            .delete("/api/users/2")
            .expect(200)
            .expect("Content-Type", /json/)
            .expect("true")
          await agent
            .get("/api/users/2")
            .expect(404)
            .expect("Content-Type", /json/)
        })
      })
      describe("And non-existent user", () => {
        it("sends 401 code", async () => {
          await agent
            .get("/api/users/100")
            .expect(404)
            .expect("Content-Type", /json/)
        })
      })
    })
  })
})