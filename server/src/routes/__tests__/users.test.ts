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
import { makeTestEnvironment, TestEnvironment } from "../../testing/utilities/environment"

let testEnv: TestEnvironment

beforeAll(async () => {
  testEnv = await makeTestEnvironment()
})

afterAll(async () => {
  testEnv.closeEnvironment()
})

describe("Routes for Users", () => {
  describe("GET /api/users/:id", () => {
    describe("Without Auth", () => {
      it("sends 401 code", async () => {
        await testEnv.request()
          .get("/api/users/1")
          .expect(401)
      })
    })
    describe("With Auth", () => {
      describe("And existing user", () => {
        it("sends 200 code and user", async () => {
          await testEnv.authRequest()
            .get("/api/users/1")
            .expect(200)
            .expect("Content-Type", /json/)
            .expect(testUser)
        })
      })
      describe("And non-existent user", () => {
        it("sends 404 code", async () => {
          await testEnv.authRequest()
            .get("/api/users/100")
            .expect(404)
        })
      })
    })
  })

  describe("POST /api/users/new", () => {
    describe("Without Auth", () => {
      it("sends 401 code", async () => {
        await testEnv.request()
          .post("/api/users/new")
          .send(correctPostUser)
          .expect(401)
      })
    })
    describe("With Auth", () => {
      describe("And correct data", () => {
        it("sends 200 code", async () => {
          await testEnv.authRequest()
            .post("/api/users/new")
            .send(correctPostUser)
            .expect(200)
            .expect("Content-Type", /json/)
            .expect(correctCreatedUser)
        })
      })
      describe("And incorrect data", () => {
        it("sends 400 code", async () => {
          await testEnv.authRequest()
            .post("/api/users/new")
            .send(incorrectPostUser)
            .expect(400)
            .expect(errorObject)
        })
      })
      describe("And empty data", () => {
        it("sends 400 code", async () => {
          await testEnv.authRequest()
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
        await testEnv.request()
          .get("/api/users")
          .expect(401)
      })
    })
    describe("With Auth", () => {
      it("sends 200 code and users", async () => {
        await testEnv.authRequest()
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
        await testEnv.request()
          .patch("/api/users/2")
          .send(correctPatchUser)
          .expect(401)
      })
    })
    describe("With Auth", () => {
      describe("And correct data", () => {
        it("sends 200 code", async () => {
          await testEnv.authRequest()
            .patch("/api/users/2")
            .send(correctPatchUser)
            .expect(200)
            .expect("Content-Type", /json/)
            .expect(updatedUser)
        })
      })
      describe("And incorrect data", () => {
        it("sends 400 code", async () => {
          await testEnv.authRequest()
            .patch("/api/users/2")
            .send(incorrectPostUser)
            .expect(400)
            .expect(patchErrorObject)
        })
      })
      describe("And empty data", () => {
        it("sends 400 code", async () => {
          await testEnv.authRequest()
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
        await testEnv.request()
          .delete("/api/users/2")
          .expect(401)
      })
    })
    describe("With Auth", () => {
      describe("And existing user", () => {
        it("sends 200 code and deletes user", async () => {
          await testEnv.authRequest()
            .delete("/api/users/2")
            .expect(200)
            .expect("Content-Type", /json/)
            .expect("true")
          await testEnv.authRequest()
            .get("/api/users/2")
            .expect(404)
            .expect("Content-Type", /json/)
        })
      })
      describe("And non-existent user", () => {
        it("sends 401 code", async () => {
          await testEnv.authRequest()
            .get("/api/users/100")
            .expect(404)
            .expect("Content-Type", /json/)
        })
      })
    })
  })
})