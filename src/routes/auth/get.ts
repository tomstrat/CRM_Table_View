import { Router, Request, Response } from "express"
import { requestToken } from "../requests"
import login from "../../views/login"



/*** /oauth2 */

const authGetRouter = Router()

authGetRouter.get("/login", (req: Request, res: Response) => {

  if (req.session && req.session.token) return res.redirect("/data")
  return res.send(login())

})

authGetRouter.get("/callback", async (req: Request, res: Response) => {

  const code = req.query.code as string
  const authToken = await requestToken(code)
  req.session = { token: authToken }
  return res.redirect("/data")

})

export default authGetRouter