import { ValidationChain } from "express-validator"

export default interface UserValType {
  requireUsername: ValidationChain
  requirePassword: ValidationChain
}