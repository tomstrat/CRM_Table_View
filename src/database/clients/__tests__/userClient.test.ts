import { Connection } from "typeorm"
import Config from "../../../config/config"
import { createDatabase } from "../../"
import UserClient from "../UserClient"
import { User, Role } from "../../models/User"

describe("UserClient Methods", () => {

  let DB: Connection
  let userClient: UserClient
  let testUser: User | void
  beforeAll(async () => {
    DB = await createDatabase({ Config })
    userClient = new UserClient(DB)
  })

  afterAll(async () => {
    await DB.close()
  })

  describe("When adding a user", () => {
    const correctUser: User = { username: "Tom", password: "Password", role: Role.admin }
    describe("Passing correct parameters", () => {
      it("Should return the new user", async () => {
        testUser = await userClient.addRecord(correctUser)
        if (testUser) {
          expect(typeof testUser.id).toBe("number")
          expect(testUser.username).toBe("Tom")
          expect(testUser.password).not.toBe("password")
          expect(testUser.role).toBe("ADMIN")
        }
      })
    })
  })
  describe("When getting a user", () => {
    describe("By Username", () => {
      it("Should return correct User", async () => {
        const returnedUser = await userClient.getOneByUsername(testUser!.username)
        expect(returnedUser).toEqual(testUser)
      })
    })
    describe("By Id", () => {
      it("Should return correct User", async () => {
        const returnedUser = await userClient.getOne(testUser!.id!)
        expect(returnedUser).toEqual(testUser)
      })
    })
    describe("With incorrect Id", () => {
      it("Expect not found error on id", () => {
        userClient.getOne(600)
          .catch(err => {
            expect(err.getCode()).toEqual(404)
          })
      })
      it("Expect not found error on username", () => {
        userClient.getOneByUsername("Bobby")
          .catch(err => {
            expect(err.getCode()).toEqual(404)
          })
      })
    })
  })
})