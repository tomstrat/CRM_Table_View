import { Request, Response, NextFunction, RequestHandler } from "express"
import { Role, RolePermission } from "../database/models/User"
import { Unauthorised } from "../models/error"

export default function requireAuth(role?: Role): RequestHandler {
  return (req: Request, res: Response, next: NextFunction) => {
    if (role === undefined || req.session && getAccessLevel(req.session.role) >= getAccessLevel(role)) {
      next()
    } else {
      throw new Unauthorised("You dont have the correct authorisation")
    }
  }
}

function getAccessLevel(role: Role): RolePermission {
  return RolePermission[role]
}