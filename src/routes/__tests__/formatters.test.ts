import { formatUser } from "../formatters/user.formatters"
import { correctPostUser } from "../../testing/dummy-data/userdata"

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
})