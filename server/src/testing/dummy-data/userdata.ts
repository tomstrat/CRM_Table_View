import { User, Role, Contract, EmployeeType, Location } from "../../database/models/User"
import { RosterStatus } from "../../database/models/Roster"
import { ExternalInputUser, ExternalOutputUser } from "../../schemas/external.interfaces"

const joined = new Date("2018-07-22")
export const correctDatabaseUser: User = {
  username: "Tom",
  password: "password",
  employeeType: [EmployeeType.driver, EmployeeType.navigator],
  role: Role.user,
  contract: Contract.fullTime,
  certified: true,
  injured: false,
  joinDate: joined,
  location: Location.cbd,
  roster: {
    monday: RosterStatus.working,
    tuesday: RosterStatus.working,
    wednesday: RosterStatus.working,
    thursday: RosterStatus.working,
    friday: RosterStatus.working,
    saturday: RosterStatus.working,
  },
  timesheets: []
}

export const testUser: ExternalOutputUser = {
  id: 1,
  username: "test",
  password: "",
  employeeType: [EmployeeType.operations],
  role: Role.admin,
  contract: Contract.fullTime,
  certified: true,
  injured: false,
  location: Location.cbd,
  joinDate: "2018-07-22T00:00:00.000Z",
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
}

export const correctUser: ExternalOutputUser = {
  id: 2,
  username: "newUser",
  password: "",
  employeeType: [EmployeeType.operations, EmployeeType.driver],
  role: Role.admin,
  contract: Contract.fullTime,
  certified: true,
  injured: true,
  location: Location.innerEast,
  joinDate: "2018-07-22T00:00:00.000Z",
  roster: {
    id: 2,
    monday: RosterStatus.working,
    tuesday: RosterStatus.notWorking,
    wednesday: RosterStatus.working,
    thursday: RosterStatus.notWorking,
    friday: RosterStatus.contactable,
    saturday: RosterStatus.working,
  },
  timesheets: []
}

export const correctCreatedUser: ExternalOutputUser = {
  id: 2,
  username: "newUser",
  password: "",
  employeeType: [EmployeeType.operations, EmployeeType.driver],
  role: Role.admin,
  contract: Contract.fullTime,
  certified: true,
  injured: true,
  location: Location.innerEast,
  joinDate: "2018-07-22T00:00:00.000Z",
  roster: {
    id: 2,
    monday: RosterStatus.working,
    tuesday: RosterStatus.notWorking,
    wednesday: RosterStatus.working,
    thursday: RosterStatus.notWorking,
    friday: RosterStatus.contactable,
    saturday: RosterStatus.working,
  }
}

export const updatedUser: ExternalOutputUser = {
  id: 2,
  username: "editUser",
  password: "",
  employeeType: [EmployeeType.operations, EmployeeType.driver, EmployeeType.trainer],
  role: Role.operations,
  contract: Contract.partTime,
  certified: false,
  injured: false,
  location: Location.cbd,
  joinDate: "2018-09-22T00:00:00.000Z",
  roster: {
    id: 2,
    monday: RosterStatus.working,
    tuesday: RosterStatus.notWorking,
    wednesday: RosterStatus.working,
    thursday: RosterStatus.working,
    friday: RosterStatus.contactable,
    saturday: RosterStatus.working,
  },
  timesheets: []
}

export const correctPostUser: ExternalInputUser = {
  username: "newUser",
  password: "password",
  confirmPassword: "password",
  employeeType: "operations,driver",
  role: Role.admin,
  contract: Contract.fullTime,
  certified: "true",
  injured: "true",
  location: Location.innerEast,
  joinDate: "2018-07-22",
  rosterMonday: RosterStatus.working,
  rosterTuesday: RosterStatus.notWorking,
  rosterWednesday: RosterStatus.working,
  rosterThursday: RosterStatus.notWorking,
  rosterFriday: RosterStatus.contactable,
  rosterSaturday: RosterStatus.working,
  timesheets: []
}

export const incorrectPostUser = {
  username: "test",
  password: "dd",
  confirmPassword: "pissword",
  employeeType: "dongo, deeriver",
  role: "dodmin",
  contract: "frullTime",
  certified: "blah",
  injured: "blah",
  location: "nope",
  joinDate: "niiin-07-22",
  rosterMonday: "nope",
  rosterTuesday: "unselected",
  rosterWednesday: "unselected",
  rosterThursday: "unselected",
  rosterFriday: "unselected",
  rosterSaturday: "unselected",
}

export const correctPatchUser: ExternalInputUser = {
  username: "editUser",
  password: "password2",
  confirmPassword: "password2",
  employeeType: "operations,driver,trainer",
  role: Role.operations,
  contract: Contract.partTime,
  certified: "false",
  injured: "false",
  location: Location.cbd,
  joinDate: "2018-09-22",
  rosterMonday: RosterStatus.working,
  rosterTuesday: RosterStatus.notWorking,
  rosterWednesday: RosterStatus.working,
  rosterThursday: RosterStatus.working,
  rosterFriday: RosterStatus.contactable,
  rosterSaturday: RosterStatus.working,
}

export const errorObject = {
  errors: [
    {
      value: "test",
      msg: "Username already exists",
      param: "username",
      location: "body"
    },
    {
      value: "dd",
      msg: "Must be between 5 and 30 characters",
      param: "password",
      location: "body"
    },
    {
      value: "pissword",
      msg: "Passwords dont match",
      param: "confirmPassword",
      location: "body"
    },
    {
      value: "frullTime",
      msg: "Contract not valid",
      param: "contract",
      location: "body"
    },
    {
      value: "dodmin",
      msg: "Role not valid",
      param: "role",
      location: "body"
    },
    {
      value: "blah",
      msg: "Certified not valid",
      param: "certified",
      location: "body"
    },
    {
      value: "blah",
      msg: "Injured not valid",
      param: "injured",
      location: "body"
    },
    {
      value: "nope",
      msg: "Roster not valid",
      param: "rosterMonday",
      location: "body"
    },
    {
      value: "dongo, deeriver",
      msg: "Employee type not valid",
      param: "employeeType",
      location: "body"
    },
    {
      value: "niiin-07-22",
      msg: "Invalid date",
      param: "joinDate",
      location: "body"
    },
    {
      value: "nope",
      msg: "Location not valid",
      param: "location",
      location: "body"
    }
  ]
}
export const patchErrorObject = {
  errors: [
    {
      value: "test",
      msg: "Username already exists",
      param: "username",
      location: "body"
    },
    {
      value: "dd",
      msg: "Must be between 5 and 30 characters",
      param: "password",
      location: "body"
    },
    {
      value: "pissword",
      msg: "Passwords dont match",
      param: "confirmPassword",
      location: "body"
    },
    {
      value: "frullTime",
      msg: "Contract not valid",
      param: "contract",
      location: "body"
    },
    {
      value: "dodmin",
      msg: "Role not valid",
      param: "role",
      location: "body"
    },
    {
      value: "blah",
      msg: "Certified not valid",
      param: "certified",
      location: "body"
    },
    {
      value: "blah",
      msg: "Injured not valid",
      param: "injured",
      location: "body"
    },
    {
      value: "nope",
      msg: "Roster not valid",
      param: "rosterMonday",
      location: "body"
    },
    {
      value: "dongo, deeriver",
      msg: "Employee type not valid",
      param: "employeeType",
      location: "body"
    },
    {
      value: "niiin-07-22",
      msg: "Invalid date",
      param: "joinDate",
      location: "body"
    },
    {
      value: "nope",
      msg: "Location not valid",
      param: "location",
      location: "body"
    }
  ]
}
