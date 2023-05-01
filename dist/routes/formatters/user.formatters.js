"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanObject = exports.formatUser = void 0;
const User_1 = require("../../database/models/User");
const ramda_1 = require("ramda");
function formatUser(user) {
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
    };
}
exports.formatUser = formatUser;
function cleanObject(user) {
    return (0, ramda_1.filter)((n) => n !== undefined, user);
}
exports.cleanObject = cleanObject;
function convertCheckBox(result) {
    return (result === "true");
}
function convertDate(date) {
    return date ? new Date(date) : undefined;
}
function formatTypes(types) {
    if (types === undefined)
        return types;
    const newTypes = (typeof types === "string")
        ? types.split(",")
        : types;
    return newTypes.filter(type => {
        return type in User_1.EmployeeType;
    });
}
