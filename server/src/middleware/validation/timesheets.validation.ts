import { body } from "express-validator"
import TimesheetClient from "../../database/clients/TimesheetClient"
import UserClient from "../../database/clients/UserClient"
import { BadRequest } from "../../schemas/error"
import { ExternalInputTimesheet } from "../../schemas/external.interfaces"
import * as R from "ramda"
import { RouteType, Timesheet } from "../../database/models/Timesheet"

export default function timesheetValidatorFactory({ timesheetClient, userClient }:
  { timesheetClient: TimesheetClient, userClient: UserClient }) {
  return {
    requireBody: body().isArray().withMessage("Body must be an array")
      .custom(async timesheets => {
        const conflicts = await R.pipe(
          R.map(async (timesheet: ExternalInputTimesheet) => (
            timesheetClient.getAllByDate(new Date(timesheet.plannedStart))
              .then(R.filter((exTimesheet: Timesheet) => exTimesheet.user.username === timesheet.username))
          )),
          R.bind(Promise.all, Promise),
          R.andThen(R.flatten),
          R.andThen(R.length),
        )(timesheets)

        if (conflicts > 0) throw new BadRequest("User already has a timesheet on this date")
        return true
      }),
    requireRoute: body("*.route").trim().escape(),
    requirePlannedStart: body("*.plannedStart").trim().escape().isISO8601(),
    requireOpsMessage: body("*.opsMessage").trim().escape(),
    requireEditBody: body().isArray().withMessage("Body must be an array"),
    requireId: body("*.id").trim().escape().isNumeric().withMessage("Must have an id"),
    validateEditRoute: body("*.route").trim().escape().optional(),
    validateEditPlannedStart: body("*.plannedStart").trim().escape().isISO8601().optional(),
    validateEditOpsMessage: body("*.opsMessage").trim().escape().optional(),
    validateRouteType: body("*.routeType").optional()
      .custom(type => {
        if (!(type in RouteType)) throw new Error("RouteType not valid")
        return true
      }),
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