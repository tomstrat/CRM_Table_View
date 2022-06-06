import { RosterStatus } from "../database/models/Roster"
import { Timesheet } from "../database/models/Timesheet"
import { Contract, EmployeeType, Location, Role, User } from "../database/models/User"

export interface AccessToken {
  access_token: string
  signature: string
  scope: string,
  id_token: string
  instance_url: string
  id: string
  token_type: "Bearer"
  issued_at: string
}

export interface ExternalRecord {
  attributes: {
    type: string
    url: string
  }
  Name: string
  Paid_Hours__c: number
  Revenue__c: number
  Total_Cost__c: number
  Waste__c: number
  AJS__c: number
  Total_Services__c: number
  RPH__c: number
}

export interface ExternalDataFormat {
  totalSize: number
  done: boolean
  records: ExternalRecord[]
}

export interface ExternalInputUser {
  username: string
  password: string
  confirmPassword: string
  employeeType?: string
  contract: Contract
  role: Role
  certified: string
  injured: string
  location?: Location
  joinDate?: string
  rosterMonday: RosterStatus
  rosterTuesday: RosterStatus
  rosterWednesday: RosterStatus
  rosterThursday: RosterStatus
  rosterFriday: RosterStatus
  rosterSaturday: RosterStatus
  timesheets?: Timesheet[]
}

export interface ExternalOutputUser {
  id: number
  username: string
  password: ""
  employeeType?: EmployeeType[]
  contract: Contract
  role: Role
  certified?: boolean
  injured?: boolean
  location?: Location
  joinDate?: string
  roster: {
    id: number
    monday: RosterStatus
    tuesday: RosterStatus
    wednesday: RosterStatus
    thursday: RosterStatus
    friday: RosterStatus
    saturday: RosterStatus
  },
  timesheets?: Timesheet[]
}

export interface ExternalInputTimesheet {
  userId: number
  route: string
  startTime?: string
  endTime?: string
  breakStart?: string
  plannedStart: string
  ttmComments?: string
  opsComments?: string
  opsMessage: string
  startTruck?: string
  sick?: boolean
  late?: boolean
  edited: boolean
}
