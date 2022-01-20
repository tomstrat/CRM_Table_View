import { Router, Request, Response } from "express"
import { RouteDefinition } from "../../models/route"
import { requestToken } from "../requests"


export default function authRouteFactory({ loginPage, newlogin }: { loginPage: () => string, newlogin: () => string }): RouteDefinition {
  const authRouter = Router()

  authRouter.get("/login", (req: Request, res: Response) => {

    if (req.session && req.session.token) return res.redirect("/data")
    return res.send(loginPage())

  })
  authRouter.get("/callback", async (req: Request, res: Response) => {

    const code = req.query.code as string
    const authToken = await requestToken(code)
    req.session = { token: authToken }
    return res.redirect("/data")

  })

  authRouter.get("/newlogin", (req: Request, res: Response) => {
    return res.send(newlogin())
  })
  return ["/oauth2", authRouter]
}