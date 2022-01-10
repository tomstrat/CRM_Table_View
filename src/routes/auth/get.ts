import { Router, Request, Response } from "express"
import dotenv from "dotenv"
import Config from "../../config/config"
import { requestToken } from "../requests"

dotenv.config()

// /oauth2
const authGetRouter = Router()

authGetRouter.get("/login", (req: Request, res: Response) => {

  const { authorize, redirect } = Config.urls
  const authLink = `${authorize}?client_id=${process.env.CONSUMER_KEY}&redirect_uri=${redirect}&response_type=code`

  return res.send(`<button onclick="window.location.replace('${authLink}')">Login</button>`)
})

authGetRouter.get("/callback", async (req: Request, res: Response) => {

  const id = process.env.CONSUMER_KEY as string
  const secret = process.env.CONSUMER_SECRET as string
  const { token, redirect } = Config.urls
  const code = req.query.code as string
  const now = new Date()
  now.setHours(now.getHours() + 4)

  if (!code) {
    return res.send("error")
  }

  const authToken = await requestToken(token, code, id, secret, redirect)

  req.session = { token: authToken }

  return res.redirect("/data")

})

export default authGetRouter