import { NextFunction, Request, Response, RequestHandler } from "express"
import { validationResult } from "express-validator"

export default function handleValErrors(): RequestHandler {
  return (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      console.log(`Errors: ${JSON.stringify(errors)}`)
      return res.status(400).json(errors)
    }
    next()
  }
}