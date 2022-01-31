import { ExternalUser } from "../../models/external.interfaces"
import { EmployeeType, User } from "../../database/models/User"

export function formatUser(user: ExternalUser): User {
  return {
    username: user.username,
    password: user.password,
    employeeType: formatTypes(user.employeeType),
    role: user.role,
    contract: user.contract,
    certified: convertCheckBox(user.certified),
    injured: convertCheckBox(user.injured),
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

function formatTypes(types: string | undefined): EmployeeType[] | undefined {
  if (types === undefined) return types
  return types.split(",").filter(type => {
    return type in EmployeeType
  }) as EmployeeType[]
}