import { NextFunction, Request, Response } from "express"
import { validationResult } from "express-validator"
import { ViewWithErrors } from "../../views/types/views"

export default function handleValErrors(template: ViewWithErrors) {
  return (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      console.log(`Errors: ${JSON.stringify(errors)}`)
      return res.send(template({ errors }))
    }
    next()
  }
}