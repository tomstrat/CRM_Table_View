import { formatUser } from "../formatters/user.formatters"
import { formatTimesheet } from "../formatters/timesheet.formatters"
import { correctPostUser, correctDatabaseUser } from "../../testing/dummy-data/userdata"
import { correctPostTimesheet } from "../../testing/dummy-data/timesheetdata"
import { RouteType } from "../../database/models/Timesheet"

describe("Using formatters", () => {
  describe("When formatting a User", () => {
    it("Should return correct format", () => {
      expect(formatUser(correctPostUser)).toEqual({
        username: "newUser",
        password: "password",
        employeeType: ["operations", "driver"],
        role: "admin",
        contract: "fullTime",
        certified: true,
        injured: true,
        location: "innerEast",
        joinDate: new Date("2018-07-22"),
        roster: {
          monday: "working",
          tuesday: "notWorking",
          wednesday: "working",
          thursday: "notWorking",
          friday: "contactable",
          saturday: "working"
        }
      })
    })
  })
  describe("When formatting a timesheet", () => {
    it("Should return correct format", () => {
      expect(formatTimesheet(correctPostTimesheet[0], correctDatabaseUser)).toEqual({
        user: correctDatabaseUser,
        route: correctPostTimesheet[0].route,
        routeType: RouteType.standard,
        startTime: new Date("2018-07-22T00:00:00.000Z"),
        endTime: new Date("2018-07-22T00:00:00.000Z"),
        breakStart: new Date("2018-07-22T00:00:00.000Z"),
        plannedStart: new Date("2018-07-22T11:23:42.023Z"),
        workingDate: new Date("2018-07-22T00:00:00.000Z"),
        ttmComments: correctPostTimesheet[0].ttmComments,
        opsComments: correctPostTimesheet[0].opsComments,
        opsMessage: correctPostTimesheet[0].opsMessage,
        startTruck: correctPostTimesheet[0].startTruck,
        sick: correctPostTimesheet[0].sick,
        late: correctPostTimesheet[0].late,
        edited: correctPostTimesheet[0].edited,
      })
    })
  })
})