import { Request, Response, NextFunction, RequestHandler } from "express"
import { Role, RolePermission } from "../database/models/User"
import { Unauthorised } from "../models/error"
import jwt from "jsonwebtoken"

export default function requireAuth(requiredRole?: Role): RequestHandler {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!requiredRole) {
      next()
    } else if (req.session && req.session.jwt) {
      const decoded = jwt.verify(req.session.jwt, process.env.JWT_SECRET_KEY!)
      if (getAccessLevel((<any>decoded).role) >= getAccessLevel(requiredRole!)) {
        next()
      } else {
        throw new Unauthorised("You dont have the correct authorisation")
      }
    } else {
      throw new Unauthorised("You dont have the correct authorisation")
    }
  }
}

function getAccessLevel(role: Role): RolePermission {
  return RolePermission[role]
}