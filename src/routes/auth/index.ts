import { Router, Request, Response, RequestHandler } from "express"
import UserValType from "../../middleware/validation/types/users"
import { ViewWithErrors } from "../../views/types/views"
import { RouteDefinition } from "../../models/route"


export default function authRouteFactory({ loginPage, userValidators, handleValErrors }:
  { loginPage: ViewWithErrors, userValidators: UserValType, handleValErrors: (template: ViewWithErrors) => RequestHandler }): RouteDefinition {
  const authRouter = Router()
  const { requireUsername, requirePassword } = userValidators

  authRouter.get("/", (req: Request, res: Response) => {
    return res.send(loginPage({}))
  })

  authRouter.post(
    "/",
    [requireUsername, requirePassword],
    handleValErrors(loginPage), (req: Request, res: Response) => {
      //add cookies
      //redirect to home
      return res.send("success")
    })

  return ["/login", authRouter]
}