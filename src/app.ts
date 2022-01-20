import "reflect-metadata"
import express, { Express, Request, ErrorRequestHandler, Response } from "express"
import cookieSession from "cookie-session"
import ConfigType from "./config/type"
import { NotFound } from "./models/error"
import { RouteDefinition } from "./models/route"

export default function appFactory({ Config, Routes, handleErrors }:
  { Config: ConfigType, Routes: RouteDefinition[], handleErrors: ErrorRequestHandler }):
  Express {

  const { environment } = Config

  const app = express()

  app.use(cookieSession({
    name: "session",
    keys: ["WPOIJADad'#/]11"],
    maxAge: 1 * 60 * 60 * 1000, // 1 Hour
    secure: environment.secure,
    httpOnly: true
  }))
  app.use(express.static(__dirname + "/public"))
  app.get("/favicon.ico", (req: Request, res: Response) => res.status(204))
  Routes.map(route => {
    app.use(route[0], route[1])
  })

  app.get("/", (req: Request, res: Response) => {
    res.redirect("/oauth2/login")
  })

  app.all("*", (req: Request, res: Response) => {
    console.log(req)
    throw new NotFound("Page does not exist")
  })

  app.use(handleErrors)

  return app
}



