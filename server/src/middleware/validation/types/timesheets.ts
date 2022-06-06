import { ValidationChain } from "express-validator"

export default interface TimesheetValType {
  requireBody: ValidationChain
  requireUserId: ValidationChain
  requireRoute: ValidationChain
  requirePlannedStart: ValidationChain
  requireOpsMessage: ValidationChain
  validateEdited: ValidationChain
  validateTimes: ValidationChain
  validateComments: ValidationChain
  validateStartTruck: ValidationChain
  validateSickLate: ValidationChain
}