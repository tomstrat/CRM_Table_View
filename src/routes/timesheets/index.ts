import { Router, Request, Response } from "express"
import { requireAuth } from "../../middleware/auth"
import { RouteDefinition } from "../../models/route"


export default function timesheetsRouteFactory({ timePage }: { timePage: () => string }): RouteDefinition {
  const timesheetsRouter = Router()

  timesheetsRouter.get("/", requireAuth, (req: Request, res: Response) => {
    res.send(timePage())
  })


  return ["/timesheets", timesheetsRouter]
}