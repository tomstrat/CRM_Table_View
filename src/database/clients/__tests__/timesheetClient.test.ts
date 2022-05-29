import { Connection } from "typeorm"
import Config from "../../../config/config"
import { createDatabase } from "../../"
import Client from "../Client"
import UserClient from "../UserClient"
import { Timesheet } from "../../models/Timesheet"
import { User } from "../../models/User"
import { correctDatabaseUser } from "../../../testing/dummy-data/userdata"


describe("UserClient Methods", () => {

  let DB: Connection
  let tsClient: Client<Timesheet>
  let userClient: UserClient
  let testTS: Timesheet | void
  let testUser: User | void
  let fullTimesheet: Timesheet
  let minimalTimesheet: Timesheet

  beforeAll(async () => {
    DB = await createDatabase({ Config })
    tsClient = new Client("Timesheet", DB, Timesheet)
    userClient = new UserClient(DB)
    testUser = await userClient.addRecord(correctDatabaseUser)
    const date = new Date()
    fullTimesheet = {
      user: testUser!,
      route: "test",
      startTime: date,
      endTime: date,
      breakStart: date,
      plannedStart: date,
      ttmComments: "test ttm comments",
      opsComments: "test ops comments",
      opsMessage: "test ops message",
      startTruck: "test",
      sick: false,
      late: false,
      edited: false
    }
    minimalTimesheet = {
      user: testUser!,
      route: "newTest",
      plannedStart: date,
      opsMessage: "test Ops Message",
      edited: false
    }
  })

  afterAll(async () => {
    await DB.close()
  })

  describe("When adding a timesheet", () => {
    describe("Passing full parameters", () => {
      it("Should return the new timesheet", async () => {
        testTS = await tsClient.addRecord(fullTimesheet)
        if (testTS) {
          expect(testTS.user.id).toBe(1)
          expect(testTS.sick).toBe(false)
        }
      })
    })
    describe("Passing minimal parameters", () => {
      it("Should return the new timesheet", async () => {
        testTS = await tsClient.addRecord(minimalTimesheet)
        if (testTS) {
          expect(testTS.user.id).toBe(1)
          expect(testTS.sick).toBe(null)
          expect(testTS.endTime).toBe(null)
        }
      })
    })
  })
})