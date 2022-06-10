import { body } from "express-validator"
import TimesheetClient from "../../database/clients/TimesheetClient"
import UserClient from "../../database/clients/UserClient"
import { BadRequest, NotFound } from "../../schemas/error"
import { ExternalInputTimesheet } from "../../schemas/external.interfaces"

export default function timesheetValidatorFactory({ timesheetClient, userClient }:
  { timesheetClient: TimesheetClient, userClient: UserClient }) {
  return {
    requireBody: body().isArray().withMessage("Body must be an array")
      .custom(async timesheets => {
        const pairs = timesheets.map((ts: ExternalInputTimesheet) => ({ user: ts.userId, date: ts.plannedStart }))
        pairs.map((pair: { user: number, date: string }) => {

        })
      }),
    requireUserId: body("*.userId").isNumeric()
      .custom(async userId => {
        const user = await userClient.getOne(userId)
        if (!user) throw new NotFound("Could not find user")
      }),
    requireUnique: body("*")
      .custom(async timesheet => {
        console.log("GOT IN HERE")
        const timesheets = await timesheetClient.getAllByDate(timesheet.plannedStart)
        timesheets.map(sheet => {
          console.log(sheet, timesheet)
          if (sheet.user.id === timesheet.userId)
            throw new BadRequest("User already has a timesheet on this date")
        })
      }),
    requireRoute: body("*.route").trim().escape(),
    requirePlannedStart: body("*.plannedStart").trim().escape().isISO8601(),
    requireOpsMessage: body("*.opsMessage").trim().escape(),
    validateEdited: body("*.edited").optional().isBoolean(),
    validateTimes: body(["*.startTime", "*.endTime", "*.breakStart"])
      .optional()
      .trim()
      .isISO8601()
      .withMessage("Must be a valid date"),
    validateComments: body(["*.ttmComments", "*.opsComments"])
      .optional()
      .trim()
      .escape(),
    validateStartTruck: body("*.startTruck").optional().trim().escape(),
    validateSickLate: body(["*.sick", "*.late"]).optional().isBoolean()
  }

}