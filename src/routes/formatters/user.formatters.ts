import { ExternalInputUser } from "../../models/external.interfaces"
import { EmployeeType, User } from "../../database/models/User"
import { convertCheckBox, convertDate } from "./helper"

export function formatUser(user: ExternalInputUser): User {
  return {
    username: user.username,
    password: user.password,
    employeeType: formatTypes(user.employeeType),
    role: user.role,
    contract: user.contract,
    certified: convertCheckBox(user.certified),
    injured: convertCheckBox(user.injured),
    location: user.location,
    joinDate: convertDate(user.joinDate),
    roster: {
      monday: user.rosterMonday,
      tuesday: user.rosterTuesday,
      wednesday: user.rosterWednesday,
      thursday: user.rosterThursday,
      friday: user.rosterFriday,
      saturday: user.rosterSaturday,
    }
  }
}

function formatTypes(types: string | string[] | undefined): EmployeeType[] | undefined {
  if (types === undefined) return types
  const newTypes: string[] = (typeof types === "string")
    ? types.split(",")
    : types
  return newTypes.filter(type => {
    return type in EmployeeType
  }) as EmployeeType[]
}