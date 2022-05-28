import { ValidationChain } from "express-validator"

export default interface TimesheetValType {
  requireUserId: ValidationChain
  requireRoute: ValidationChain
  requirePlannedStart: ValidationChain
  requireOpsMessage: ValidationChain
  requireEdited: ValidationChain
  validateTimes: ValidationChain
  validateComments: ValidationChain
  validateStartTruck: ValidationChain
  validateSickLate: ValidationChain
}