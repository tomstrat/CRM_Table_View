"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../../../config/config"));
const __1 = require("../../");
const UserClient_1 = __importDefault(require("../UserClient"));
const User_1 = require("../../models/User");
const Roster_1 = require("../../models/Roster");
describe("UserClient Methods", () => {
    let DB;
    let userClient;
    let testUser;
    beforeAll(async () => {
        DB = await (0, __1.createDatabase)({ Config: config_1.default });
        userClient = new UserClient_1.default(DB);
    });
    afterAll(async () => {
        await DB.close();
    });
    describe("When adding a user", () => {
        const joined = new Date("2018-07-22");
        const correctUser = {
            username: "Tom",
            password: "password",
            employeeType: [User_1.EmployeeType.driver, User_1.EmployeeType.navigator],
            role: User_1.Role.user,
            contract: User_1.Contract.fullTime,
            certified: true,
            injured: false,
            joinDate: joined,
            location: User_1.Location.cbd,
            roster: {
                monday: Roster_1.RosterStatus.working,
                tuesday: Roster_1.RosterStatus.working,
                wednesday: Roster_1.RosterStatus.working,
                thursday: Roster_1.RosterStatus.working,
                friday: Roster_1.RosterStatus.working,
                saturday: Roster_1.RosterStatus.working,
            }
        };
        describe("Passing correct parameters", () => {
            it("Should return the new user", async () => {
                testUser = await userClient.addRecord(correctUser);
                if (testUser) {
                    expect(typeof testUser.id).toBe("number");
                    expect(testUser.username).toBe("Tom");
                    expect(testUser.password).toBe("");
                    expect(testUser.role).toBe("user");
                    expect(testUser.employeeType).toEqual(["driver", "navigator"]);
                    expect(testUser.joinDate).toEqual(joined);
                    expect(testUser.location).toEqual("cbd");
                }
            });
        });
    });
    describe("When getting a user", () => {
        describe("By Username", () => {
            it("Should return correct User", async () => {
                const returnedUser = await userClient.getOne(testUser.username);
                expect(returnedUser).toEqual(testUser);
            });
        });
        describe("By Id", () => {
            it("Should return correct User", async () => {
                const returnedUser = await userClient.getOne(testUser.id);
                expect(returnedUser).toEqual(testUser);
            });
        });
        describe("With incorrect User", () => {
            it("Expect not found error on id", async () => {
                expect(await userClient.getOne(600)).toEqual(undefined);
            });
            it("Expect not found error on username", async () => {
                expect(await userClient.getOne("Bobby")).toEqual(undefined);
            });
        });
    });
    describe("When updating a user", () => {
        describe("Passing correct parameters", () => {
            const correctEdit = { username: "Billy", password: "NewPassword", role: User_1.Role.operations };
            it("Should return edited user on full change", async () => {
                const updatedUser = await userClient.updateRecord(testUser.id, correctEdit);
                if (updatedUser) {
                    expect(typeof updatedUser.id).toBe("number");
                    expect(updatedUser.username).toBe("Billy");
                    expect(updatedUser.password).toBe("");
                    expect(updatedUser.role).toBe("operations");
                }
            });
            it("Should return edited user on partial change", async () => {
                const updatedUser = await userClient.updateRecord(testUser.id, { username: "Luke" });
                if (updatedUser) {
                    expect(typeof updatedUser.id).toBe("number");
                    expect(updatedUser.username).toBe("Luke");
                    expect(updatedUser.password).toBe("");
                    expect(updatedUser.role).toBe("operations");
                }
            });
        });
    });
    describe("When comparing passwords", () => {
        it("And they match", async () => {
            expect(await userClient.comparePasswords("Luke", "NewPassword")).toEqual(true);
        });
        it("And they dont match", async () => {
            expect(await userClient.comparePasswords("Luke", "WrongPass")).toEqual(false);
        });
        it("Expect not found error on wrong username", async () => {
            expect(await userClient.comparePasswords("Bob", "WrongPass")).toEqual(undefined);
        });
    });
});
