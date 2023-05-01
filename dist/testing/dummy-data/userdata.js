"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patchErrorObject = exports.errorObject = exports.correctPatchUser = exports.incorrectPostUser = exports.correctPostUser = exports.updatedUser = exports.correctUser = exports.testUser = void 0;
const User_1 = require("../../database/models/User");
const Roster_1 = require("../../database/models/Roster");
exports.testUser = {
    id: 1,
    username: "test",
    password: "",
    employeeType: [User_1.EmployeeType.operations],
    role: User_1.Role.admin,
    contract: User_1.Contract.fullTime,
    certified: true,
    injured: false,
    location: User_1.Location.cbd,
    joinDate: "2018-07-22T00:00:00.000Z",
    roster: {
        id: 1,
        monday: Roster_1.RosterStatus.working,
        tuesday: Roster_1.RosterStatus.working,
        wednesday: Roster_1.RosterStatus.working,
        thursday: Roster_1.RosterStatus.working,
        friday: Roster_1.RosterStatus.working,
        saturday: Roster_1.RosterStatus.working,
    }
};
exports.correctUser = {
    id: 2,
    username: "newUser",
    password: "",
    employeeType: [User_1.EmployeeType.operations, User_1.EmployeeType.driver],
    role: User_1.Role.admin,
    contract: User_1.Contract.fullTime,
    certified: true,
    injured: true,
    location: User_1.Location.innerEast,
    joinDate: "2018-07-22T00:00:00.000Z",
    roster: {
        id: 2,
        monday: Roster_1.RosterStatus.working,
        tuesday: Roster_1.RosterStatus.notWorking,
        wednesday: Roster_1.RosterStatus.working,
        thursday: Roster_1.RosterStatus.notWorking,
        friday: Roster_1.RosterStatus.contactable,
        saturday: Roster_1.RosterStatus.working,
    }
};
exports.updatedUser = {
    id: 2,
    username: "editUser",
    password: "",
    employeeType: [User_1.EmployeeType.operations, User_1.EmployeeType.driver, User_1.EmployeeType.trainer],
    role: User_1.Role.operations,
    contract: User_1.Contract.partTime,
    certified: false,
    injured: false,
    location: User_1.Location.cbd,
    joinDate: "2018-09-22T00:00:00.000Z",
    roster: {
        id: 2,
        monday: Roster_1.RosterStatus.working,
        tuesday: Roster_1.RosterStatus.notWorking,
        wednesday: Roster_1.RosterStatus.working,
        thursday: Roster_1.RosterStatus.working,
        friday: Roster_1.RosterStatus.contactable,
        saturday: Roster_1.RosterStatus.working,
    }
};
exports.correctPostUser = {
    username: "newUser",
    password: "password",
    confirmPassword: "password",
    employeeType: "operations,driver",
    role: User_1.Role.admin,
    contract: User_1.Contract.fullTime,
    certified: "true",
    injured: "true",
    location: User_1.Location.innerEast,
    joinDate: "2018-07-22",
    rosterMonday: Roster_1.RosterStatus.working,
    rosterTuesday: Roster_1.RosterStatus.notWorking,
    rosterWednesday: Roster_1.RosterStatus.working,
    rosterThursday: Roster_1.RosterStatus.notWorking,
    rosterFriday: Roster_1.RosterStatus.contactable,
    rosterSaturday: Roster_1.RosterStatus.working,
};
exports.incorrectPostUser = {
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
};
exports.correctPatchUser = {
    username: "editUser",
    password: "password2",
    confirmPassword: "password2",
    employeeType: "operations,driver,trainer",
    role: User_1.Role.operations,
    contract: User_1.Contract.partTime,
    certified: "false",
    injured: "false",
    location: User_1.Location.cbd,
    joinDate: "2018-09-22",
    rosterMonday: Roster_1.RosterStatus.working,
    rosterTuesday: Roster_1.RosterStatus.notWorking,
    rosterWednesday: Roster_1.RosterStatus.working,
    rosterThursday: Roster_1.RosterStatus.working,
    rosterFriday: Roster_1.RosterStatus.contactable,
    rosterSaturday: Roster_1.RosterStatus.working,
};
exports.errorObject = {
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
};
exports.patchErrorObject = {
    errors: [
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
};
