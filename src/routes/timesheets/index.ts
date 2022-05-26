import { Router, Request, Response, RequestHandler } from "express"
import { RouteDefinition } from "../../models/route"
import { Role } from "../../database/models/User"
import { ViewWithErrors } from "../../views/types/views"
import TimesheetValType from "../../middleware/validation/types/timesheets"
import Client from "../../database/clients/Client"
import { Timesheet } from "../../database/models/Timesheet"
import { User } from "../../database/models/User"
import { formatTimesheet } from "../formatters/timesheet.formatters"

export default function timesheetsRouteFactory(
  {
    timesheetClient,
    userClient,
    timesheetValidators,
    handleValErrors
  }: {
    timesheetClient: Client<Timesheet>,
    userClient: Client<User>,
    timesheetValidators: TimesheetValType,
    handleValErrors: (template?: ViewWithErrors) => RequestHandler
  }): RouteDefinition {

  const timesheetsRouter = Router()
  const {
    requireUserId,
    requireRoute,
    requirePlannedStart,
    requireOpsMessage,
    requireEdited,
    requireTimes,
    requireComments,
    requireStartTruck,
    requireSickLate
  } = timesheetValidators

  timesheetsRouter.get("/", async (req: Request, res: Response) => {
    const timesheets = await timesheetClient.getAll()
    return res.status(200).json(timesheets)
  })

  timesheetsRouter.get("/:id", async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const timesheet = await timesheetClient.getOne(id)
    if (timesheet) {
      return res.status(200).json(timesheet)
    } else {
      return res.status(404).json(undefined)
    }
  })

  timesheetsRouter.post(
    "/new",
    [
      requireUserId,
      requireRoute, requirePlannedStart,
      requireOpsMessage, requireEdited,
      requireTimes, requireComments,
      requireStartTruck, requireSickLate
    ],
    handleValErrors(),
    async (req: Request, res: Response) => {
      const { userId } = req.body
      const user = await userClient.getOne(userId)
      if (user) {
        const timesheet = await timesheetClient.addRecord(formatTimesheet(req.body, user))
        res.status(200).json(timesheet)
      } else {
        return res.status(404).json(undefined)
      }
    })


  return ["/api/timesheets", timesheetsRouter, Role.operations]
}