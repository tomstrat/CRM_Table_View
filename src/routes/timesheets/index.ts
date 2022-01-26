import { Router, Request, Response, RequestHandler } from "express"
import { RouteDefinition } from "../../models/route"


export default function timesheetsRouteFactory({ ttmoverview, ttmhours, ttmavailability }:
  { ttmoverview: () => string, ttmhours: () => string, ttmavailability: () => string }): RouteDefinition {
  const timesheetsRouter = Router()

  timesheetsRouter.get("/", (req: Request, res: Response) => {
    res.redirect("timesheets/ttmoverview")
  })
  timesheetsRouter.get("/ttmoverview", (req: Request, res: Response) => {
    return res.send(ttmoverview())
  })  
  timesheetsRouter.get("/ttmhours", (req: Request, res: Response) => {
    return res.send(ttmhours())
  })  
  timesheetsRouter.get("/ttmavailability", (req: Request, res: Response) => {
    return res.send(ttmavailability())
  })  

  return ["/timesheets", timesheetsRouter]
}