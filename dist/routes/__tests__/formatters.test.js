"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_formatters_1 = require("../formatters/user.formatters");
const userdata_1 = require("../../testing/dummy-data/userdata");
describe("Using formatters", () => {
    describe("When formatting a User", () => {
        it("Should return correct format", () => {
            expect((0, user_formatters_1.formatUser)(userdata_1.correctPostUser)).toEqual({
                username: "newUser",
                password: "password",
                employeeType: ["operations", "driver"],
                role: "admin",
                contract: "fullTime",
                certified: true,
                injured: true,
                location: "innerEast",
                joinDate: new Date("2018-07-22"),
                roster: {
                    monday: "working",
                    tuesday: "notWorking",
                    wednesday: "working",
                    thursday: "notWorking",
                    friday: "contactable",
                    saturday: "working"
                }
            });
        });
    });
});
