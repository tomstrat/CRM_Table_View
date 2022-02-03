import "reflect-metadata"
import express, { Express, Request, ErrorRequestHandler, Response, RequestHandler } from "express"
import cookieSession from "cookie-session"
import helmet from "helmet"
import hpp from "hpp"
import csurf from "csurf"
import { rateLimit } from "express-rate-limit"
import bodyParser from "body-parser"
import ConfigType from "./config/type"
import { NotFound } from "./models/error"
import { RouteDefinition } from "./models/route"
import { Role } from "./database/models/User"
import { reverse } from "ramda"

export default function appFactory({ Config, Routes, handleErrors, requireAuth }:
  { Config: ConfigType, Routes: RouteDefinition[], handleErrors: ErrorRequestHandler, requireAuth: (role?: Role) => RequestHandler }):
  Express {

  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  })

  const { environment } = Config

  const app = express()

  app.use(helmet())
  app.use(hpp())
  app.use(cookieSession({
    name: "session",
    keys: [process.env.COOKIE_SECRET_KEY!],
    maxAge: 1 * 60 * 60 * 1000, // 1 Hour
    secure: environment.secure,
  }))
  // app.use(csurf({ cookie: false }))
  app.use(limiter)
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
  app.use(express.static(__dirname + "/public"))
  app.get("/favicon.ico", (req: Request, res: Response) => res.status(204))
  Routes.map(route => {
    route[1].use(requireAuth(route[2]))
    route[1].stack = reverse(route[1].stack) // Reverse stack to put auth on top
    app.use(route[0], route[1])
  })

  app.get("/", (req: Request, res: Response) => {
    res.redirect("/auth/login")
  })

  app.all("*", (req: Request, res: Response) => {
    throw new NotFound("Page does not exist")
  })

  app.use(handleErrors)

  return app
}



