import { makeTestEnvironment, TestEnvironment } from "../../testing/utilities/environment"

let testEnv: TestEnvironment

beforeAll(async () => {
  testEnv = await makeTestEnvironment()
})

afterAll(async () => {
  testEnv.closeEnvironment()
})

describe("Routes for Auth", () => {
  describe("POST /auth/login", () => {
    describe("Posting correct data", () => {
      it("Returns the role and jwt token", async () => {
        await testEnv.request()
          .post("/auth/login")
          .send({ username: "test", password: "test" })
          .expect("Content-Type", /json/)
          .expect("set-cookie", /.*/)
          .expect(200)
          .expect(res => res.body === { role: "admin" })
      })
    })
    describe("Posting wrong password", () => {
      it("sends back errors", async () => {
        await testEnv.request()
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
        await testEnv.request()
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
        await testEnv.request()
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
        await testEnv.request()
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
        await testEnv.authRequest()
          .get("/auth/current-session")
          .expect("Content-Type", /json/)
          .expect(200)
          .expect(res => res.body === { role: "admin" })
      })
    })
    describe("Requesting without auth", () => {
      it("sends back false in role with json", async () => {
        await testEnv.request()
          .get("/auth/current-session")
          .expect("Content-Type", /json/)
          .expect(200)
          .expect(res => res.body === { role: false })
      })
    })
  })
  describe("GET /auth/logout", () => {
    it("logs the user out", async () => {
      await testEnv.authRequest()
        .get("/auth/logout")
        .expect("Content-Type", /json/)
        .expect(res => res.body === { role: false })
    })
  })
})