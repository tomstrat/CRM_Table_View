import { Connection } from "typeorm"
import Config from "../../../config/config"
import { createDatabase } from "../../"
import Client from "../Client"
import UserClient from "../UserClient"
import TimesheetClient from "../TimesheetClient"
import { Timesheet } from "../../models/Timesheet"
import { User } from "../../models/User"
import { correctDatabaseUser } from "../../../testing/dummy-data/userdata"


describe("UserClient Methods", () => {

  let DB: Connection
  let tsClient: TimesheetClient
  let userClient: UserClient
  let testTS: Timesheet | void
  let testTSs: Timesheet[] | void
  let testUser: User | void
  let fullTimesheet: Timesheet
  let minimalTimesheet: Timesheet

  const date = new Date()
  const justDate = new Date()
  justDate.setHours(0, 0, 0, 0)

  beforeAll(async () => {
    DB = await createDatabase({ Config })
    tsClient = new TimesheetClient(DB)
    userClient = new UserClient(DB)
    testUser = await userClient.addRecord(correctDatabaseUser)
    fullTimesheet = {
      user: testUser!,
      route: "test",
      startTime: date,
      endTime: date,
      breakStart: date,
      plannedStart: justDate,
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
      plannedStart: justDate,
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
  describe("When getting a timesheet by date", () => {
    it("Should return timesheets with that date", async () => {
      testTS = await tsClient.addRecord(fullTimesheet)
      testTSs = await tsClient.getAllByDate(justDate)
      if (testTSs) {
        expect(testTSs[0].sick).toBe(false)
        expect(testTSs[0].endTime).toStrictEqual(date)
      }
    })
  })
})