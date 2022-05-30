import { Router, Request, Response, RequestHandler } from "express"
import { RouteDefinition } from "../../models/route"
import { Role } from "../../database/models/User"
import { ViewWithErrors } from "../../views/types/views"
import TimesheetValType from "../../middleware/validation/types/timesheets"
import TimesheetClient from "../../database/clients/TimesheetClient"
import UserClient from "../../database/clients/UserClient"
import { formatTimesheet } from "../formatters/timesheet.formatters"

export default function timesheetsRouteFactory(
  {
    timesheetClient,
    userClient,
    timesheetValidators,
    handleValErrors
  }: {
    timesheetClient: TimesheetClient,
    userClient: UserClient,
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
    validateTimes,
    validateComments,
    validateStartTruck,
    validateSickLate
  } = timesheetValidators

  timesheetsRouter.get("/", async (req: Request, res: Response) => {
    const timesheets = await timesheetClient.getAll()
    return res.status(200).json(timesheets)
  })

  timesheetsRouter.get("/:date", async (req: Request, res: Response) => {
    const date = parseInt(req.params.date)
    const formatDate = new Date(date)
    const timesheet = await timesheetClient.getAllByDate(formatDate)
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
      validateTimes, validateComments,
      validateStartTruck, validateSickLate
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