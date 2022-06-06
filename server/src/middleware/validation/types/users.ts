import { ValidationChain } from "express-validator"

export default interface UserValType {
  requireUsername: ValidationChain
  requirePassword: ValidationChain
  requireNewUsername: ValidationChain
  validateEditUsername: ValidationChain
  requireNewPassword: ValidationChain
  validateEditPassword: ValidationChain
  requirePasswordConfirmation: ValidationChain
  validateEditPasswordConfirmation: ValidationChain
  requireContract: ValidationChain
  requireRole: ValidationChain
  validateCert: ValidationChain
  validateInjured: ValidationChain
  validateRoster: ValidationChain
  validateEmployeeType: ValidationChain
  validateLocation: ValidationChain
  validateJoinDate: ValidationChain
}