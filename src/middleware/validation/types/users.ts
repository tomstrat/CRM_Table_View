import { ValidationChain } from "express-validator"

export default interface UserValType {
  requireUsername: ValidationChain
  requirePassword: ValidationChain
  requireNewUsername: ValidationChain
  requireNewPassword: ValidationChain
  requirePasswordConfirmation: ValidationChain
  requireContract: ValidationChain
  requireRole: ValidationChain
  requireCert: ValidationChain
  requireInjured: ValidationChain
}