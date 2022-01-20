import { Router, Request, Response } from "express"
import { RouteDefinition } from "../../models/route"
import { requestToken } from "../requests"


export default function authRouteFactory({ login }: { login: () => string }): RouteDefinition {
  const authRouter = Router()

  authRouter.get("/login", (req: Request, res: Response) => {

    if (req.session && req.session.token) return res.redirect("/data")
    return res.send(login())

  })
  authRouter.get("/callback", async (req: Request, res: Response) => {

    const code = req.query.code as string
    const authToken = await requestToken(code)
    req.session = { token: authToken }
    return res.redirect("/data")

  })

  return ["/users", authRouter]
}