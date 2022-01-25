import { Result, ValidationError } from "express-validator"

export type ViewWithErrors = ({ errors }: { errors?: Result<ValidationError> }) => string