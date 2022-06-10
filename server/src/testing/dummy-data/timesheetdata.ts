import { ExternalInputTimesheet } from "../../schemas/external.interfaces"
import { Timesheet } from "../../database/models/Timesheet"
import { RosterStatus } from "../../database/models/Roster"
import { Role, Contract, EmployeeType, Location } from "../../database/models/User"

const genDate = new Date("2019-07-22")
const userDate = new Date("2018-07-22")

export const minimumPostTimesheet: Timesheet = {
  user: {
    id: 1,
    username: "test",
    employeeType: [EmployeeType.operations],
    role: Role.admin,
    password: "",
    contract: Contract.fullTime,
    certified: true,
    injured: false,
    location: Location.cbd,
    joinDate: genDate,
    roster: {
      monday: RosterStatus.working,
      tuesday: RosterStatus.working,
      wednesday: RosterStatus.working,
      thursday: RosterStatus.working,
      friday: RosterStatus.working,
      saturday: RosterStatus.working,
    },
  },
  route: "route",
  startTime: undefined,
  endTime: undefined,
  breakStart: undefined,
  plannedStart: genDate,
  workingDate: genDate,
  ttmComments: undefined,
  opsComments: undefined,
  opsMessage: "test",
  startTruck: undefined,
  sick: undefined,
  late: undefined,
  edited: true
}


export const testTimesheet = {
  user: {
    id: 1,
    username: "test",
    employeeType: [EmployeeType.operations],
    role: Role.admin,
    contract: Contract.fullTime,
    certified: true,
    injured: false,
    location: Location.cbd,
    joinDate: userDate.toISOString(),
    roster: {
      id: 1,
      monday: RosterStatus.working,
      tuesday: RosterStatus.working,
      wednesday: RosterStatus.working,
      thursday: RosterStatus.working,
      friday: RosterStatus.working,
      saturday: RosterStatus.working,
    },
  },
  id: 1,
  route: "route",
  startTime: null,
  endTime: null,
  breakStart: null,
  plannedStart: genDate.toISOString(),
  workingDate: "2019-07-22",
  ttmComments: null,
  opsComments: null,
  opsMessage: "test",
  startTruck: null,
  sick: null,
  late: null,
  edited: true
}

export const correctCreatedTimesheet = [
  {
    user: {
      id: 1,
      username: "test",
      password: "",
      employeeType: [EmployeeType.operations],
      role: Role.admin,
      contract: Contract.fullTime,
      certified: true,
      injured: false,
      location: Location.cbd,
      joinDate: genDate.toISOString(),
      roster: {
        id: 1,
        monday: RosterStatus.working,
        tuesday: RosterStatus.working,
        wednesday: RosterStatus.working,
        thursday: RosterStatus.working,
        friday: RosterStatus.working,
        saturday: RosterStatus.working,
      },
      timesheets: []
    },
    route: "route",
    startTime: genDate.toISOString(),
    endTime: genDate.toISOString(),
    breakStart: genDate.toISOString(),
    plannedStart: genDate.toISOString(),
    ttmComments: "ttmcomments",
    opsComments: "comments",
    opsMessage: "message",
    startTruck: "test",
    sick: false,
    late: false,
    edited: true,
    id: 3
  },
  {
    user: {
      id: 1,
      username: "test",
      password: "",
      employeeType: [EmployeeType.operations],
      role: Role.admin,
      contract: Contract.fullTime,
      certified: true,
      injured: false,
      location: Location.cbd,
      joinDate: genDate.toISOString(),
      roster: {
        id: 1,
        monday: RosterStatus.working,
        tuesday: RosterStatus.working,
        wednesday: RosterStatus.working,
        thursday: RosterStatus.working,
        friday: RosterStatus.working,
        saturday: RosterStatus.working,
      },
      timesheets: []
    },
    route: "route",
    startTime: genDate.toISOString(),
    endTime: genDate.toISOString(),
    breakStart: genDate.toISOString(),
    plannedStart: genDate.toISOString(),
    ttmComments: "ttmcomments",
    opsComments: "comments",
    opsMessage: "message",
    startTruck: "test",
    sick: false,
    late: false,
    edited: true,
    id: 2
  },
]

export const correctPostTimesheet: ExternalInputTimesheet[] = [
  {
    userId: 1,
    route: "route",
    startTime: "2018-07-22T00:00:00.000Z",
    endTime: "2018-07-22T00:00:00.000Z",
    breakStart: "2018-07-22T00:00:00.000Z",
    plannedStart: "2018-07-22T11:23:42.023Z",
    ttmComments: "ttmcomments",
    opsComments: "comments",
    opsMessage: "message",
    startTruck: "test",
    sick: false,
    late: false,
    edited: true
  },
  {
    userId: 1,
    route: "route2",
    startTime: "2018-07-22T00:00:00.000Z",
    endTime: "2018-07-22T00:00:00.000Z",
    breakStart: "2018-07-22T00:00:00.000Z",
    plannedStart: "2018-07-23T00:00:00.000Z",
    ttmComments: "ttmcomments",
    opsComments: "comments",
    opsMessage: "message",
    startTruck: "test",
    sick: false,
    late: false,
    edited: true
  },
]

export const incorrectPostTimesheet: ExternalInputTimesheet[] = [
  {
    userId: 1,
    route: "route",
    startTime: "2018-07-22",
    endTime: "2018-07-22",
    breakStart: "2018-07-22",
    plannedStart: "2018-07-25",
    ttmComments: "ttmcomments",
    opsComments: "comments",
    opsMessage: "message",
    startTruck: "test",
    sick: false,
    late: false,
    edited: true
  },
  {
    userId: 50,
    route: "route",
    startTime: "2018-07-22",
    endTime: "2018-07-22",
    breakStart: "2018-07-22",
    plannedStart: "2018-07-22",
    ttmComments: "ttmcomments",
    opsComments: "comments",
    opsMessage: "message",
    startTruck: "test",
    sick: false,
    late: false,
    edited: true
  }
]