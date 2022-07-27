import { ValidationChain } from "express-validator"

export default interface TimesheetValType {
  requireBody: ValidationChain
  requireRoute: ValidationChain
  validateRouteType: ValidationChain
  requirePlannedStart: ValidationChain
  requireOpsMessage: ValidationChain
  validateEdited: ValidationChain
  validateTimes: ValidationChain
  validateComments: ValidationChain
  validateStartTruck: ValidationChain
  validateSickLate: ValidationChain
  requireEditBody: ValidationChain
  requireId: ValidationChain
  validateEditRoute: ValidationChain
  validateEditPlannedStart: ValidationChain
  validateEditOpsMessage: ValidationChain
}