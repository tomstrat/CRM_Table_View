import { ExternalInputUser } from "../../models/external.interfaces"
import { EmployeeType, User } from "../../database/models/User"

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

function convertCheckBox(result: string | undefined): boolean {
  return result ? true : false
}

function convertDate(date: string | undefined): Date | undefined {
  return date ? new Date(date) : undefined
}

function formatTypes(types: string | undefined): EmployeeType[] | undefined {
  if (types === undefined) return types
  return types.split(",").filter(type => {
    return type in EmployeeType
  }) as EmployeeType[]
}