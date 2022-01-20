import { Router, Request, Response, RequestHandler } from "express"
import { RouteDefinition } from "../../models/route"


export default function timesheetsRouteFactory({ timePage, requireAuth }:
  { timePage: () => string, requireAuth: RequestHandler }): RouteDefinition {
  const timesheetsRouter = Router()

  timesheetsRouter.get("/", requireAuth, (req: Request, res: Response) => {
    res.send(timePage())
  })


  return ["/timesheets", timesheetsRouter]
}