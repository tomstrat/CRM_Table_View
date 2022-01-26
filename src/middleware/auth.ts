import { Request, Response, NextFunction, RequestHandler } from "express"
import { Role } from "../database/models/User"
import { Unauthorised } from "../models/error"

export default function requireAuth(role?: Role): RequestHandler {
  return (req: Request, res: Response, next: NextFunction) => {
    console.log("ROLE IS", role)
    if (!role === undefined || req.session && req.session.role === role) {
      next()
    } else {
      throw new Unauthorised("You dont have the correct authorisation")
    }
  }
}