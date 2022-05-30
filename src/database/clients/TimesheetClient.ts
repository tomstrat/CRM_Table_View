import Client from "./Client"
import { Timesheet } from "../models/Timesheet"
import { Connection, Like } from "typeorm"

export default class TimesheetClient extends Client<Timesheet> {
  constructor(private db: Connection) {
    super("Timesheet", db, Timesheet)
  }

  async getAllByDate(date: Date): Promise<Timesheet[] | undefined> {
    const newDate = date.toISOString().split("T")[0]
    return await this.find({ plannedStart: Like(`%${newDate}%`) })
  }
}