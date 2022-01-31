import { User, Role, Contract, EmployeeType } from "../../database/models/User"
import Client from "../../database/clients/Client"
import { RosterStatus } from "../../database/models/Roster"

export default async function makeTestUser({ userClient }: { userClient: Client<User> }): Promise<void> {
  const testUser = {
    username: "test",
    password: "test",
    employeeType: [EmployeeType.operations],
    role: Role.admin,
    contract: Contract.fullTime,
    certified: true,
    injured: false,
    roster: {
      monday: RosterStatus.working,
      tuesday: RosterStatus.working,
      wednesday: RosterStatus.working,
      thursday: RosterStatus.working,
      friday: RosterStatus.working,
      saturday: RosterStatus.working,
    }
  }
  await userClient.addRecord(testUser)
  console.log(testUser)
}