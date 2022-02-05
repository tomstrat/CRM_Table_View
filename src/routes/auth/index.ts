import { Router, Request, Response, RequestHandler } from "express"
import UserValType from "../../middleware/validation/types/users"
import { ViewWithErrors } from "../../views/types/views"
import { RouteDefinition } from "../../models/route"
import UserClient from "../../database/clients/UserClient"
import { User } from "../../database/models/User"
import jwt from "jsonwebtoken"


export default function authRouteFactory(
  { userValidators,
    handleValErrors,
    userClient
  }: {
    userValidators: UserValType,
    handleValErrors: (template?: ViewWithErrors) => RequestHandler,
    userClient: UserClient
  }): RouteDefinition {

  const authRouter = Router()
  const { requireUsername, requirePassword } = userValidators


  authRouter.post(
    "/login",
    [requireUsername, requirePassword],
    handleValErrors(), async (req: Request, res: Response) => {
      const { username, role } = await userClient.getOne(req.body.username) as User
      req.session = {
        jwt: jwt.sign({ username, role }, process.env.JWT_SECRET_KEY!),
      }
      return res.json({ role })
    })

  authRouter.get("/current-session", (req: Request, res: Response) => {
    if (req.session && req.session.jwt) {
      const decoded = jwt.verify(req.session!.jwt, process.env.JWT_SECRET_KEY!)
      return ((<any>decoded).role)
        ? res.json({ role: (<any>decoded).role })
        : res.json({ role: false })
    }
    return res.json({ role: false })
  })

  authRouter.get("/logout", (req: Request, res: Response) => {
    req.session = null
    return res.json({ role: false })
  })

  return ["/auth", authRouter] // NO ROLE NEEDED
}