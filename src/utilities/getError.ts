import { Result, ValidationError } from "express-validator"

export default function getError(errors: Result<ValidationError> | undefined, prop: string): string {
  try {
    if (errors) return errors.mapped()[prop].msg
    return ""
  } catch (err) {
    return ""
  }
}