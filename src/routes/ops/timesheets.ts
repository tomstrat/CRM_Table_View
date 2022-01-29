import { Router, Request, Response } from "express"
import { RouteDefinition } from "../../models/route"
import { Role } from "../../database/models/User"
import { User } from "../../database/models/User"
import Client from "../../database/clients/Client"
import { ViewWithErrors } from "../../views/types/views"

export default function opstimesheetsRouteFactory({ userClient, opsoverview, scheduler, edithours, dataviewer, requests, manageusers }:
  { userClient: Client<User>, opsoverview: () => string, scheduler: () => string, edithours: () => string, dataviewer: () => string, requests: () => string, manageusers: ViewWithErrors }): RouteDefinition {
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

  // opstimesheetsRouter.get("/manageusers", async (req: Request, res: Response) => {
  //   return res.send(manageusers(await userClient.getAll()))
  // })
  return ["/ops/timesheets", opstimesheetsRouter, Role.operations]
}