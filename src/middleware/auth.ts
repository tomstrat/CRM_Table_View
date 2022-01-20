import { Request, Response, NextFunction } from "express"
import { BadRequest } from "../models/error"

export default function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (req.session && req.session.token) {
    next()
  } else {
    throw new BadRequest("You dont have the correct authorisation")
  }
}