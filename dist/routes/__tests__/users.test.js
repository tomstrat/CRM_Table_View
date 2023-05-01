"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const registry_1 = __importDefault(require("../../registry"));
const database_1 = require("../../database");
const supertest_1 = __importDefault(require("supertest"));
const config_1 = __importDefault(require("../../config/config"));
const cookie_session_1 = __importDefault(require("cookie-session"));
const express_1 = __importDefault(require("express"));
const userdata_1 = require("../../testing/dummy-data/userdata");
let parentApp;
let DB;
let agent;
beforeAll(async () => {
    DB = await (0, database_1.createDatabase)({ Config: config_1.default });
    const app = await (0, registry_1.default)(DB);
    parentApp = (0, express_1.default)();
    parentApp.use((0, cookie_session_1.default)({
        name: "session",
        keys: ["WPOIJADad'#/]11"],
    }));
    parentApp.use(app);
    agent = supertest_1.default.agent(parentApp);
    await agent
        .post("/auth/login")
        .send({ username: "test", password: "test" });
});
afterAll(async () => {
    DB.close();
});
describe("Routes for Users", () => {
    describe("GET /api/users/:id", () => {
        describe("Without Auth", () => {
            it("sends 401 code", async () => {
                await (0, supertest_1.default)(parentApp)
                    .get("/api/users/1")
                    .expect(401);
            });
        });
        describe("With Auth", () => {
            describe("And existing user", () => {
                it("sends 200 code and user", async () => {
                    await agent
                        .get("/api/users/1")
                        .expect(200)
                        .expect("Content-Type", /json/)
                        .expect(userdata_1.testUser);
                });
            });
            describe("And non-existent user", () => {
                it("sends 404 code", async () => {
                    await agent
                        .get("/api/users/100")
                        .expect(404);
                });
            });
        });
    });
    describe("POST /api/users/new", () => {
        describe("Without Auth", () => {
            it("sends 401 code", async () => {
                await (0, supertest_1.default)(parentApp)
                    .post("/api/users/new")
                    .send(userdata_1.correctPostUser)
                    .expect(401);
            });
        });
        describe("With Auth", () => {
            describe("And correct data", () => {
                it("sends 200 code", async () => {
                    await agent
                        .post("/api/users/new")
                        .send(userdata_1.correctPostUser)
                        .expect(200)
                        .expect("Content-Type", /json/)
                        .expect(userdata_1.correctUser);
                });
            });
            describe("And incorrect data", () => {
                it("sends 400 code", async () => {
                    await agent
                        .post("/api/users/new")
                        .send(userdata_1.incorrectPostUser)
                        .expect(400)
                        .expect(userdata_1.errorObject);
                });
            });
            describe("And empty data", () => {
                it("sends 400 code", async () => {
                    await agent
                        .post("/api/users/new")
                        .send({})
                        .expect(400);
                });
            });
        });
    });
    describe("GET /api/users", () => {
        describe("Without Auth", () => {
            it("sends 401 code", async () => {
                await (0, supertest_1.default)(parentApp)
                    .get("/api/users")
                    .expect(401);
            });
        });
        describe("With Auth", () => {
            it("sends 200 code and users", async () => {
                await agent
                    .get("/api/users")
                    .expect(200)
                    .expect("Content-Type", /json/)
                    .expect([userdata_1.testUser, userdata_1.correctUser]);
            });
        });
    });
    describe("PATCH /api/users/:id", () => {
        describe("Without Auth", () => {
            it("sends 401 code", async () => {
                await (0, supertest_1.default)(parentApp)
                    .patch("/api/users/2")
                    .send(userdata_1.correctPatchUser)
                    .expect(401);
            });
        });
        describe("With Auth", () => {
            describe("And correct data", () => {
                it("sends 200 code", async () => {
                    await agent
                        .patch("/api/users/2")
                        .send(userdata_1.correctPatchUser)
                        .expect(200)
                        .expect("Content-Type", /json/)
                        .expect(userdata_1.updatedUser);
                });
            });
            describe("And incorrect data", () => {
                it("sends 400 code", async () => {
                    await agent
                        .patch("/api/users/2")
                        .send(userdata_1.incorrectPostUser)
                        .expect(400)
                        .expect(userdata_1.patchErrorObject);
                });
            });
            describe("And empty data", () => {
                it("sends 400 code", async () => {
                    await agent
                        .patch("/api/users/2")
                        .send({})
                        .expect(400);
                });
            });
        });
    });
    describe("DELETE /api/users/:id", () => {
        describe("Without Auth", () => {
            it("sends 401 code", async () => {
                await (0, supertest_1.default)(parentApp)
                    .delete("/api/users/2")
                    .expect(401);
            });
        });
        describe("With Auth", () => {
            describe("And existing user", () => {
                it("sends 200 code and deletes user", async () => {
                    await agent
                        .delete("/api/users/2")
                        .expect(200)
                        .expect("Content-Type", /json/)
                        .expect("true");
                    await agent
                        .get("/api/users/2")
                        .expect(404)
                        .expect("Content-Type", /json/);
                });
            });
            describe("And non-existent user", () => {
                it("sends 401 code", async () => {
                    await agent
                        .get("/api/users/100")
                        .expect(404)
                        .expect("Content-Type", /json/);
                });
            });
        });
    });
});
