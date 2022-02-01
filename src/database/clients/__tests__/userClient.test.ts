import { Connection } from "typeorm"
import Config from "../../../config/config"
import { createDatabase } from "../../"
import UserClient from "../UserClient"
import { User, Role, Contract, EmployeeType, Location } from "../../models/User"
import { RosterStatus } from "../../models/Roster"

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
    const joined = new Date("2018-07-22")
    const correctUser: User = {
      username: "Tom",
      password: "password",
      employeeType: [EmployeeType.driver, EmployeeType.navigator],
      role: Role.user,
      contract: Contract.fullTime,
      certified: true,
      injured: false,
      joinDate: joined,
      location: Location.cbd,
      roster: {
        monday: RosterStatus.working,
        tuesday: RosterStatus.working,
        wednesday: RosterStatus.working,
        thursday: RosterStatus.working,
        friday: RosterStatus.working,
        saturday: RosterStatus.working,
      }
    }
    describe("Passing correct parameters", () => {
      it("Should return the new user", async () => {
        testUser = await userClient.addRecord(correctUser)
        if (testUser) {
          expect(typeof testUser.id).toBe("number")
          expect(testUser.username).toBe("Tom")
          expect(testUser.password).toBe("")
          expect(testUser.role).toBe("user")
          expect(testUser.employeeType).toEqual(["driver", "navigator"])
          expect(testUser.joinDate).toEqual(joined)
          expect(testUser.location).toEqual("cbd")
        }
      })
    })
  })
  describe("When getting a user", () => {
    describe("By Username", () => {
      it("Should return correct User", async () => {
        const returnedUser = await userClient.getOne(testUser!.username)
        expect(returnedUser).toEqual(testUser)
      })
    })
    describe("By Id", () => {
      it("Should return correct User", async () => {
        const returnedUser = await userClient.getOne(testUser!.id!)
        expect(returnedUser).toEqual(testUser)
      })
    })
    describe("With incorrect User", () => {
      it("Expect not found error on id", async () => {
        expect(await userClient.getOne(600)).toEqual(undefined)
      })
      it("Expect not found error on username", async () => {
        expect(await userClient.getOne("Bobby")).toEqual(undefined)
      })
    })
  })
  describe("When updating a user", () => {
    describe("Passing correct parameters", () => {
      const correctEdit: Partial<User> = { username: "Billy", password: "NewPassword", role: Role.operations }
      it("Should return edited user on full change", async () => {
        const updatedUser = await userClient.updateRecord(testUser!.id!, correctEdit)
        if (updatedUser) {
          expect(typeof updatedUser.id).toBe("number")
          expect(updatedUser.username).toBe("Billy")
          expect(updatedUser.password).toBe("")
          expect(updatedUser.role).toBe("operations")
        }
      })
      it("Should return edited user on partial change", async () => {
        const updatedUser = await userClient.updateRecord(testUser!.id!, { username: "Luke" })
        if (updatedUser) {
          expect(typeof updatedUser.id).toBe("number")
          expect(updatedUser.username).toBe("Luke")
          expect(updatedUser.password).toBe("")
          expect(updatedUser.role).toBe("operations")
        }
      })
    })
  })
  describe("When comparing passwords", () => {
    it("And they match", async () => {
      expect(await userClient.comparePasswords("Luke", "NewPassword")).toEqual(true)
    })
    it("And they dont match", async () => {
      expect(await userClient.comparePasswords("Luke", "WrongPass")).toEqual(false)
    })
    it("Expect not found error on wrong username", async () => {
      expect(await userClient.comparePasswords("Bob", "WrongPass")).toEqual(undefined)
    })
  })
})