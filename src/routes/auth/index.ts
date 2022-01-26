import { Router, Request, Response, RequestHandler } from "express"
import UserValType from "../../middleware/validation/types/users"
import { ViewWithErrors } from "../../views/types/views"
import { RouteDefinition } from "../../models/route"
import UserClient from "../../database/clients/UserClient"
import { Role, User } from "../../database/models/User"


export default function authRouteFactory(
  { loginPage,
    userValidators,
    handleValErrors,
    userClient
  }: {
    loginPage: ViewWithErrors,
    userValidators: UserValType,
    handleValErrors: (template: ViewWithErrors) => RequestHandler,
    userClient: UserClient
  }): RouteDefinition {

  const authRouter = Router()
  const { requireUsername, requirePassword } = userValidators

  authRouter.get("/login", (req: Request, res: Response) => {
    return res.send(loginPage({}))
  })

  authRouter.post(
    "/login",
    [requireUsername, requirePassword],
    handleValErrors(loginPage), async (req: Request, res: Response) => {
      const { username, role } = await userClient.getOne(req.body.username) as User
      req.session = { username, role }
      return role === Role.driver
        ? res.redirect("/timesheets/ttmoverview")
        : res.redirect("/ops/timesheets/opsoverview")
    })

  authRouter.get("/logout", (req: Request, res: Response) => {
    req.session = {}
    res.redirect("/auth/login")
  })

  return ["/auth", authRouter] // NO ROLE NEEDED
}