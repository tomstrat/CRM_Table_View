import { ValidationChain } from "express-validator"

export default interface UserValType {
  requireUsername: ValidationChain
  requirePassword: ValidationChain
  requireNewUsername: ValidationChain
  requireEditUsername: ValidationChain
  requireNewPassword: ValidationChain
  requireEditPassword: ValidationChain
  requirePasswordConfirmation: ValidationChain
  requireEditPasswordConfirmation: ValidationChain
  requireContract: ValidationChain
  requireRole: ValidationChain
  requireCert: ValidationChain
  requireInjured: ValidationChain
  requireRoster: ValidationChain
  requireEmployeeType: ValidationChain
  requireLocation: ValidationChain
  requireJoinDate: ValidationChain
}