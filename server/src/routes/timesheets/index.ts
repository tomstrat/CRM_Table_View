import { Router, Request, Response, RequestHandler } from "express"
import { RouteDefinition } from "../../schemas/route"
import { Role } from "../../database/models/User"
import TimesheetValType from "../../middleware/validation/types/timesheets"
import TimesheetClient from "../../database/clients/TimesheetClient"
import { ExternalInputTimesheet } from "../../schemas/external.interfaces"
import UserClient from "../../database/clients/UserClient"
import { formatTimesheet, formatPatchTimesheet } from "../formatters/timesheet.formatters"
import { includes, map } from "ramda"
import { cleanObject } from "../formatters/helper"


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
    handleValErrors: () => RequestHandler
  }): RouteDefinition {

  const timesheetsRouter = Router()
  const {
    requireBody,
    requireEditBody,
    requireId,
    requireRoute,
    requirePlannedStart,
    validateRouteType,
    requireOpsMessage,
    validateEdited,
    validateTimes,
    validateComments,
    validateStartTruck,
    validateSickLate,
    validateEditRoute,
    validateEditOpsMessage,
  } = timesheetValidators

  timesheetsRouter.get("/", async (req: Request, res: Response) => {
    const timesheets = await timesheetClient.getAll()
    return res.status(200).json(timesheets)
  })

  timesheetsRouter.get("/:date", async (req: Request, res: Response) => {
    const date = req.params.date
    const formatDate = new Date(date)
    const timesheet = await timesheetClient.getAllByDate(formatDate)
    if (timesheet.length) {
      return res.status(200).json(timesheet)
    } else {
      return res.status(404).json(undefined)
    }
  })

  timesheetsRouter.post(
    "/new",
    [
      requireBody, validateRouteType,
      requireRoute, requirePlannedStart,
      requireOpsMessage, validateEdited,
      validateTimes, validateComments,
      validateStartTruck, validateSickLate
    ],
    handleValErrors(),
    async (req: Request, res: Response) => {
      const timesheets = map(async (timesheet: ExternalInputTimesheet) => {
        const { username } = timesheet
        console.log(timesheet)
        const user = await userClient.getOne(username)
        if (user) {
          return await timesheetClient.addRecord(formatTimesheet(timesheet, user))
        }
      })(req.body)
      return Promise.all(timesheets).then(data => {
        if (includes(undefined, data)) {
          return res.status(404).json(undefined)
        }
        return res.status(200).json(data)
      })
    })

  timesheetsRouter.patch(
    "/",
    [
      requireEditBody, validateEditRoute,
      requireId, validateEditOpsMessage, validateRouteType,
      validateEdited, validateTimes, validateComments,
      validateStartTruck, validateSickLate
    ],
    handleValErrors(),
    async (req: Request, res: Response) => {
      const timesheets = map(async (timesheet: ExternalInputTimesheet) => {
        const { id } = timesheet
        return await timesheetClient.updateRecord(id!, cleanObject(formatPatchTimesheet(timesheet)))
      })(req.body)
      return Promise.all(timesheets).then(data => {
        if (includes(undefined, data)) {
          return res.status(404).json(undefined)
        }
        return res.status(200).json(data)
      })
    })


  return ["/api/timesheets", timesheetsRouter, Role.operations]
}