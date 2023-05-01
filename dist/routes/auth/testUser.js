"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../../database/models/User");
const Roster_1 = require("../../database/models/Roster");
async function makeTestUser({ userClient }) {
    const testUser = {
        username: "test",
        password: "test",
        employeeType: [User_1.EmployeeType.operations],
        role: User_1.Role.admin,
        contract: User_1.Contract.fullTime,
        certified: true,
        injured: false,
        location: User_1.Location.cbd,
        joinDate: new Date("2018-07-22"),
        roster: {
            monday: Roster_1.RosterStatus.working,
            tuesday: Roster_1.RosterStatus.working,
            wednesday: Roster_1.RosterStatus.working,
            thursday: Roster_1.RosterStatus.working,
            friday: Roster_1.RosterStatus.working,
            saturday: Roster_1.RosterStatus.working,
        }
    };
    await userClient.addRecord(testUser);
    console.log(testUser);
}
exports.default = makeTestUser;
