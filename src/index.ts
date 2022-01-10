import express, { Request, Response } from "express"
import cookieSession from "cookie-session"
import authGetRouter from "./routes/auth/get"
import dataGetRouter from "./routes/data/get"
import Config from "./config/config"

const app = express()

app.use(cookieSession({
  name: "session",
  keys: ["WPOIJADad'#/]11"],
  maxAge: 1 * 60 * 60 * 1000, // 1 Hour
  secure: Config.environment.secure,
  httpOnly: true
}))
app.use("/oauth2", authGetRouter)
app.use("/data", dataGetRouter)


app.get("/", (req: Request, res: Response) => {
  res.redirect("/oauth2/login")
})

app.listen(
  3000,
  () => console.log("Server has started on http://localhost:3000")
)

