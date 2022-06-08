import { Timesheet } from "../../database/models/Timesheet"
import { ExternalInputTimesheet } from "../../schemas/external.interfaces"
import { User } from "../../database/models/User"
import { convertDate, justDate } from "./helper"

export function formatTimesheet(timesheet: ExternalInputTimesheet, user: User): Timesheet {
  return {
    user,
    route: timesheet.route,
    startTime: convertDate(timesheet.startTime),
    endTime: convertDate(timesheet.endTime),
    breakStart: convertDate(timesheet.breakStart),
    plannedStart: convertDate(timesheet.plannedStart)!,
    workingDate: justDate(timesheet.plannedStart),
    ttmComments: timesheet.ttmComments,
    opsComments: timesheet.opsComments,
    opsMessage: timesheet.opsMessage,
    startTruck: timesheet.startTruck,
    sick: timesheet.sick,
    late: timesheet.late,
    edited: timesheet.edited,
  }
}