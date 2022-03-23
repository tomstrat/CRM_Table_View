import { ValidationChain } from "express-validator"

export default interface TimesheetValType {
  requireUserId: ValidationChain
  requireRoute: ValidationChain
  requirePlannedStart: ValidationChain
  requireOpsMessage: ValidationChain
  requireEdited: ValidationChain
  requireTimes: ValidationChain
  requireComments: ValidationChain
  requireStartTruck: ValidationChain
  requireSickLate: ValidationChain
}