import { Router, Request, Response } from "express"
import Config from "../../config/config"
import { requestToken } from "../requests"
import layout from "../../views/layout"



/*** /oauth2 */

const authGetRouter = Router()

authGetRouter.get("/login", (req: Request, res: Response) => {

  if (req.session && req.session.token) res.redirect("/data")
  const { authorizeFull } = Config.urls
  return res.send(layout(`<button onclick="window.location.replace('${authorizeFull}')">Login</button>`))

})

authGetRouter.get("/callback", async (req: Request, res: Response) => {

  const code = req.query.code as string
  const authToken = await requestToken(code)
  req.session = { token: authToken }
  return res.redirect("/data")

})

export default authGetRouter