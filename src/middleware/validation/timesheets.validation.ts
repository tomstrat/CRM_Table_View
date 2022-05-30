import { body } from "express-validator"
import Client from "../../database/clients/Client"
import { Timesheet } from "../../database/models/Timesheet"

export default function timesheetValidatorFactory({ timesheetClient }:
  { timesheetClient: Client<Timesheet> }) {
  return {
    requireUserId: body("userId").isNumeric(),
    requireRoute: body("route").trim().escape(),
    requirePlannedStart: body("plannedStart").trim().escape(),
    requireOpsMessage: body("opsMessage").trim().escape(),
    requireEdited: body("edited").optional().isBoolean(),
    validateTimes: body(["startTime", "endTime", "breakStart"])
      .optional()
      .trim()
      .isDate()
      .withMessage("Must be a valid date"),
    validateComments: body(["ttmComments", "opsComments"])
      .optional()
      .trim()
      .escape(),
    validateStartTruck: body("startTruck").optional().trim().escape(),
    validateSickLate: body(["sick", "late"]).optional().isBoolean()
  }

}