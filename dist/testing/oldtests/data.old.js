"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const registry_1 = __importDefault(require("../../registry"));
const database_1 = require("../../database");
const supertest_1 = __importDefault(require("supertest"));
const config_1 = __importDefault(require("../../config/config"));
const nock_1 = __importDefault(require("nock"));
const cookie_session_1 = __importDefault(require("cookie-session"));
const express_1 = __importDefault(require("express"));
describe("GET /data", () => {
    let parentApp;
    let DB;
    beforeAll(async () => {
        DB = await (0, database_1.createDatabase)({ Config: config_1.default });
        const app = await (0, registry_1.default)(DB);
        parentApp = (0, express_1.default)();
        parentApp.use((0, cookie_session_1.default)({
            name: "session",
            keys: ["WPOIJADad'#/]11"],
        }));
        parentApp.get("/api", (req, res) => {
            req.session = { token: "12345" };
            return res.send("Success");
        });
        parentApp.use(app);
        (0, nock_1.default)(config_1.default.urls.domain)
            .persist()
            .get("/services/data/v33.0/query?q=SELECT+Name,+Paid_Hours__c,+Revenue__c,+Total_Cost__c,+Waste__c,+AJS__c,+Total_Services__c,+%09RPH__c+from+Employee__c")
            .reply(200, {
            records: ["test", "test"]
        });
    });
    afterAll(async () => {
        DB.close();
    });
    it("sends 400 code when getting without auth token", async () => {
        await (0, supertest_1.default)(parentApp)
            .get("/data")
            .expect(401);
    });
    // it("sends 200 code when getting with an auth token", async () => {
    //   const agent = request.agent(parentApp)
    //   await agent
    //     .get("/api")
    //     .expect(200)
    //   await agent
    //     .get("/data")
    //     .expect(200)
    // })
});
