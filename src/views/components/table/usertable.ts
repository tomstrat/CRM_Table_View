import { header } from "express-validator";
import { User } from "../../../database/models/User";

const testUser = {
  username: "test",
  password: "test",
  role: "Role.admin",
  contract: "Contract.fullTime",
  certified: true,
  injured: false,
  roster: {
    monday: "RosterStatus.working",
    tuesday: "RosterStatus.working",
    wednesday: "RosterStatus.working",
    thursday: "RosterStatus.working",
    friday: "RosterStatus.working",
    saturday: "RosterStatus.working",
  }
}


export function getHeaders(): string {
  return Object.keys(testUser).map(header => `<div class="column">${header.charAt(0).toUpperCase() + header.slice(1)}</div>`).join("") 
}

