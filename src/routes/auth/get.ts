import { Router, Request, Response } from "express"
import dotenv from "dotenv"
import Config from "../../config/config"
import {requestToken, requestResources} from "./requests"

dotenv.config()
const authGetRouter = Router()

authGetRouter.get("/login", (req: Request, res: Response) => {

  const {authorize, redirect} = Config.urls 
  const authLink = `${authorize}?client_id=${process.env.CONSUMER_KEY}&redirect_uri=${redirect}&response_type=code`

  res.send(`<button onclick="window.location.replace('${authLink}')">Login</button>`)
})

authGetRouter.get("/callback", async (req: Request, res: Response) => {

  const id = process.env.CONSUMER_KEY as string
  const secret = process.env.CONSUMER_SECRET as string
  const {token, redirect, data} = Config.urls
  const code = req.query.code as string

  if(!code) {
    return res.send("error")
  }

  const authToken = await requestToken(token, code, id, secret, redirect)

  const path = `${data}v33.0/sobjects/Account/describe/compactLayouts`

  const resources = await requestResources(path, authToken)


  res.send(resources)

})

export default authGetRouter