import { Request, Response, NextFunction } from "express"
import { BaseError } from "../models/error"
import errorPage from "../views/error"

export function handleErrors(err: BaseError, req: Request, res: Response, next: NextFunction) {
  console.log(err)
  if (err instanceof BaseError) {
    return res.status(err.getCode()).send(errorPage(err))
  }
}