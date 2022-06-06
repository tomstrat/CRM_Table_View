import Client from "./Client"
import { Timesheet } from "../models/Timesheet"
import { Connection, Like } from "typeorm"
import { map, dissocPath } from "ramda"


export default class TimesheetClient extends Client<Timesheet> {
  constructor(private db: Connection) {
    super("Timesheet", db, Timesheet)
  }

  async getAll(): Promise<Timesheet[]> {
    return await this.find({ relations: ["user", "user.roster"] })
      .then(map(dissocPath(["user", "password"])))
  }

  async getAllByDate(date: Date): Promise<Timesheet[]> {
    const newDate = date.toISOString().split("T")[0]
    return await this.find({
      where: {
        plannedStart: Like(`%${newDate}%`)
      },
      relations: ["user", "user.roster"]
    }).then(map(dissocPath(["user", "password"])))
  }
}