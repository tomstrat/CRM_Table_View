import "reflect-metadata"
import express, { Request, Response } from "express"
import cookieSession from "cookie-session"
import authGetRouter from "./routes/auth/get"
import dataGetRouter from "./routes/data/get"
import Config from "./config/config"
import { handleErrors } from "./middleware/handleErrors"
import { NotFound } from "./models/error"

const app = express()

app.use(cookieSession({
  name: "session",
  keys: ["WPOIJADad'#/]11"],
  maxAge: 1 * 60 * 60 * 1000, // 1 Hour
  secure: Config.environment.secure,
  httpOnly: true
}))
app.use(express.static(__dirname + "/public"))
app.get("/favicon.ico", (req: Request, res: Response) => res.status(204))
app.use("/oauth2", authGetRouter)
app.use("/data", dataGetRouter)

app.get("/", (req: Request, res: Response) => {
  res.redirect("/oauth2/login")
})

app.all("*", (req: Request, res: Response) => {
  console.log(req)
  throw new NotFound("Page does not exist")
})

app.use(handleErrors)

export default app

// process.on("SIGINT", () => { console.log("exiting…"); process.exit() })
// process.on("exit", () => { console.log("exiting…"); process.exit() })

