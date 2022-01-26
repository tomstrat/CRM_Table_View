import { Router, Request, Response, RequestHandler } from "express"
import { RouteDefinition } from "../../models/route"
import { Role } from "../../database/models/User"

export default function opstimesheetsRouteFactory({ opsoverview, scheduler, edithours, dataviewer, requests, manageusers }:
  { opsoverview: () => string, scheduler: () => string, edithours: () => string, dataviewer: () => string, requests: () => string, manageusers: () => string }): RouteDefinition {
  const opstimesheetsRouter = Router()

  opstimesheetsRouter.get("/", (req: Request, res: Response) => {
    res.redirect("/ops/timesheets/opsoverview")
  })

  opstimesheetsRouter.get("/opsoverview", (req: Request, res: Response) => {
    return res.send(opsoverview())
  })

  opstimesheetsRouter.get("/scheduler", (req: Request, res: Response) => {
    return res.send(scheduler())
  })

  opstimesheetsRouter.get("/edithours", (req: Request, res: Response) => {
    return res.send(edithours())
  })

  opstimesheetsRouter.get("/dataviewer", (req: Request, res: Response) => {
    return res.send(dataviewer())
  })

  opstimesheetsRouter.get("/requests", (req: Request, res: Response) => {
    return res.send(requests())
  })

  opstimesheetsRouter.get("/manageusers", (req: Request, res: Response) => {
    return res.send(manageusers())
  })
  return ["/ops/timesheets", opstimesheetsRouter, Role.admin]
}