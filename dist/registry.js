"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserClient_1 = __importDefault(require("./database/clients/UserClient"));
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = require("./database");
const config_1 = __importDefault(require("./config/config"));
const users_1 = __importDefault(require("./routes/users"));
const auth_1 = __importDefault(require("./routes/auth"));
const app_1 = __importDefault(require("./app"));
const middleware_1 = require("./middleware");
const views_1 = require("./views");
const data_1 = __importDefault(require("./routes/data"));
const timesheets_1 = __importDefault(require("./routes/timesheets"));
const timesheets_2 = __importDefault(require("./routes/ops/timesheets"));
const timesheets_3 = require("./views/opsviews/timesheets");
const users_validation_1 = __importDefault(require("./middleware/validation/users.validation"));
const testUser_1 = __importDefault(require("./routes/auth/testUser"));
async function inject(testDB) {
    dotenv_1.default.config();
    const notProduction = (process.env.PROD_DATABASE !== "true");
    const DB = testDB || await (0, database_1.createDatabase)({ Config: config_1.default, testdb: notProduction });
    const userClient = new UserClient_1.default(DB);
    const userValidators = (0, users_validation_1.default)({ userClient });
    const Routes = [
        (0, users_1.default)({ userClient, userValidators, handleValErrors: middleware_1.handleValErrors }),
        (0, auth_1.default)({ userValidators, handleValErrors: middleware_1.handleValErrors, userClient }),
        (0, data_1.default)({ tableViewBuilder: views_1.tableViewBuilder }),
        (0, timesheets_1.default)({ ttmoverview: views_1.ttmoverview, ttmhours: views_1.ttmhours, ttmavailability: views_1.ttmavailability }),
        (0, timesheets_2.default)({ userClient, opsoverview: timesheets_3.opsoverview, scheduler: timesheets_3.scheduler, edithours: timesheets_3.edithours, dataviewer: timesheets_3.dataviewer, requests: timesheets_3.requests, manageusers: timesheets_3.manageusers }),
    ];
    const app = (0, app_1.default)({ notProduction, Config: config_1.default, Routes, handleErrors: middleware_1.handleErrors, requireAuth: middleware_1.requireAuth });
    if (notProduction)
        await (0, testUser_1.default)({ userClient });
    return app;
}
exports.default = inject;
