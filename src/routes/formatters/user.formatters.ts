import { ExternalUser } from "../../models/external.interfaces"
import { User } from "../../database/models/User"

export function formatUser(user: ExternalUser): User {
  return {
    username: user.username,
    password: user.password,
    role: user.role,
    contract: user.contract,
    certified: user.certified || false,
    injured: user.injured || false,
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