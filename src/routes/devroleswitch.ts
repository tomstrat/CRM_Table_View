import { Router, Request, Response, RequestHandler } from "express"
import { RouteDefinition } from "../models/route"


export default function devRouteFactory({ requireAuth, ttmoverview }:
  { ttmoverview: () => string, requireAuth: RequestHandler }): RouteDefinition {
  const devtimesheetsRouter = Router()

  devtimesheetsRouter.get("/ops/timesheets/opsoverview", requireAuth, (req: Request, res: Response) => {
    res.redirect("/ops/timesheets/opsoverview")
  })
  return ["/timesheets", devtimesheetsRouter]
}