import { RosterStatus } from "../database/models/Roster"
import { Contract, Role } from "../database/models/User"

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

export interface ExternalUser {
  username: string
  password: string
  confirmPassword: string
  contract: Contract
  role: Role
  certified: boolean
  injured: boolean
  rosterMonday: RosterStatus
  rosterTuesday: RosterStatus
  rosterWednesday: RosterStatus
  rosterThursday: RosterStatus
  rosterFriday: RosterStatus
  rosterSaturday: RosterStatus
}
