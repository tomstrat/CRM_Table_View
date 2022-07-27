import { testTimesheet, correctPostTimesheet, correctPatchTimesheet, minimumPostTimesheet, incorrectPostTimesheet } from "../../testing/dummy-data/timesheetdata"
import { correctPostUser } from "../../testing/dummy-data/userdata"
import { type } from "ramda"
import { makeTestEnvironment, TestEnvironment } from "../../testing/utilities/environment"


let testEnv: TestEnvironment

beforeAll(async () => {
  testEnv = await makeTestEnvironment()
  await testEnv.timesheetClient().addRecord(minimumPostTimesheet)
  await testEnv.authRequest()
    .post("/api/users/new")
    .send(correctPostUser)
})

afterAll(async () => {
  testEnv.closeEnvironment()
})

describe("Routes for Timesheets", () => {
  describe("GET /api/timesheets/:date", () => {
    describe("Without Auth", () => {
      it("sends 401 code", async () => {
        await testEnv.request()
          .get("/api/timesheets/1")
          .expect(401)
      })
    })
    describe("With Auth", () => {
      describe("And existing timesheet", () => {
        it("sends 200 code and user", async () => {
          await testEnv.authRequest()
            .get("/api/timesheets/2019-07-22")
            .expect(200)
            .expect("Content-Type", /json/)
            .expect([testTimesheet])
        })
      })
      describe("And non-existent timesheet", () => {
        it("sends 404 code", async () => {
          await testEnv.authRequest()
            .get("/api/timesheets/2020-12-14")
            .expect(404)
        })
      })
    })
  })

  describe("POST /api/timesheets/new", () => {
    describe("Without Auth", () => {
      it("sends 401 code", async () => {
        await testEnv.request()
          .post("/api/timesheets/new")
          .send(correctPostTimesheet)
          .expect(401)
      })
    })
    describe("With Auth", () => {
      describe("And correct data", () => {
        it("sends 200 code", async () => {
          await testEnv.authRequest()
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
          await testEnv.authRequest()
            .post("/api/timesheets/new")
            .send([
              {
                username: "test",
                route: "N1",
                plannedStart: "2022-06-08T07:00:00.000Z",
                opsMessage: ""
              },
              {
                username: "newUser",
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
          await testEnv.authRequest()
            .post("/api/timesheets/new")
            .send(correctPostTimesheet)
            .expect(400)
        })
      })
      describe("And incorrect userId", () => {
        it("sends 404 code", async () => {
          await testEnv.authRequest()
            .post("/api/timesheets/new")
            .send(incorrectPostTimesheet)
            .expect(404)
        })
      })
      describe("And empty data", () => {
        it("sends 400 code", async () => {
          await testEnv.authRequest()
            .post("/api/timesheets/new")
            .send({})
            .expect(400)
        })
      })
    })
  })

  describe("PATCH /api/timesheets", () => {
    describe("Without Auth", () => {
      it("sends 401 code", async () => {
        await testEnv.request()
          .patch("/api/timesheets")
          .send(correctPatchTimesheet)
          .expect(401)
      })
    })
    describe("With Auth", () => {
      describe("And correct data", () => {
        it("sends 200 code", async () => {
          await testEnv.authRequest()
            .patch("/api/timesheets")
            .send(correctPatchTimesheet)
            .expect(200)
            .expect("Content-Type", /json/)
            .expect(res => {
              console.log(res.body[0])
              expect(type(res.body)).toBe("Array")
              expect(res.body.length).toBe(2)
              expect(res.body[0]).toHaveProperty("route", "routeChange")
              expect(res.body[0]).toHaveProperty("plannedStart", "2019-07-22T00:00:00.000Z")
              expect(res.body[1]).toHaveProperty("ttmComments", "ttmcomments2")
            })
        })
      })
      describe("And minimal data", () => {
        it("sends 200 code", async () => {
          await testEnv.authRequest()
            .patch("/api/timesheets")
            .send([
              {
                id: 1,
                route: "N1",
              },
              {
                id: 2,
                plannedStart: "2022-06-08T07:00:00.000Z",
              },
            ])
            .expect(200)
            .expect("Content-Type", /json/)
            .expect(res => {
              expect(type(res.body)).toBe("Array")
              expect(res.body.length).toBe(2)
              expect(res.body[0]).toHaveProperty("route", "N1")
              expect(res.body[1]).toHaveProperty("plannedStart", "2018-07-23T00:00:00.000Z")
            })
        })
      })
      describe("And empty data", () => {
        it("sends 400 code", async () => {
          await testEnv.authRequest()
            .patch("/api/timesheets")
            .send({})
            .expect(400)
        })
      })
    })
  })

  describe("GET /api/timesheets", () => {
    describe("Without Auth", () => {
      it("sends 401 code", async () => {
        await testEnv.request()
          .get("/api/timesheets")
          .expect(401)
      })
    })
    describe("With Auth", () => {
      it("sends 200 code and timesheets", async () => {
        await testEnv.authRequest()
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