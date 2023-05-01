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
describe("Authentication Routes", () => {
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
    describe("POST /auth/login", () => {
        describe("Posting correct data", () => {
            it("Returns the role and jwt token", async () => {
                await (0, supertest_1.default)(parentApp)
                    .post("/auth/login")
                    .send({ username: "test", password: "test" })
                    .expect("Content-Type", /json/)
                    .expect("set-cookie", /.*/)
                    .expect(200)
                    .expect(res => res.body === { role: "admin" });
            });
        });
        describe("Posting wrong password", () => {
            it("sends back errors", async () => {
                await (0, supertest_1.default)(parentApp)
                    .post("/auth/login")
                    .send({ username: "test", password: "wrong" })
                    .expect(400)
                    .expect(res => {
                    res.text.includes("Incorrect Username or Password");
                });
            });
        });
        describe("Posting wrong username", () => {
            it("sends back errors", async () => {
                await (0, supertest_1.default)(parentApp)
                    .post("/auth/login")
                    .send({ username: "wrong", password: "test" })
                    .expect(400)
                    .expect(res => {
                    res.text.includes("Incorrect Username or Password");
                });
            });
        });
        describe("Posting no username", () => {
            it("sends back errors", async () => {
                await (0, supertest_1.default)(parentApp)
                    .post("/auth/login")
                    .send({ username: "", password: "test" })
                    .expect(400)
                    .expect(res => {
                    res.text.includes("Incorrect Username or Password");
                });
            });
        });
        describe("Posting no password", () => {
            it("sends back errors", async () => {
                await (0, supertest_1.default)(parentApp)
                    .post("/auth/login")
                    .send({ username: "test", password: "" })
                    .expect(400)
                    .expect(res => {
                    res.text.includes("Incorrect Username or Password");
                });
            });
        });
    });
    describe("GET /current-session", () => {
        describe("Requesting with auth", () => {
            it("sends back role with json", async () => {
                await agent
                    .get("/auth/current-session")
                    .expect("Content-Type", /json/)
                    .expect(200)
                    .expect(res => res.body === { role: "admin" });
            });
        });
        describe("Requesting without auth", () => {
            it("sends back false in role with json", async () => {
                await (0, supertest_1.default)(parentApp)
                    .get("/auth/current-session")
                    .expect("Content-Type", /json/)
                    .expect(200)
                    .expect(res => res.body === { role: false });
            });
        });
    });
    describe("GET /auth/logout", () => {
        it("logs the user out", async () => {
            await agent
                .get("/auth/logout")
                .expect("Content-Type", /json/)
                .expect(res => res.body === { role: false });
        });
    });
});
