import { Request, Response, NextFunction } from "express"
import { BaseError } from "../schemas/error"

export default function handleErrors(err: Error, req: Request, res: Response, next: NextFunction) {
  console.log(err)
  console.log("Hello", err)
  if (err instanceof BaseError) {
    return res.status(err.getCode()).send(err)
  }
  return res.status(500).send(err)
}