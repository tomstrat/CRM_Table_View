import { NextFunction, Request, Response, RequestHandler } from "express"
import { validationResult } from "express-validator"
import { ViewWithErrors } from "../../views/types/views"

export default function handleValErrors(template?: ViewWithErrors): RequestHandler {
  return (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      console.log(`Errors: ${JSON.stringify(errors)}`)
      return template
        ? res.status(400).send(template({ errors }))
        : res.status(400).send(errors)
    }
    next()
  }
}