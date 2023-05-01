"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDatabase = void 0;
const typeorm_1 = require("typeorm");
async function createDatabase({ Config, testdb = true }) {
    const { database, testDatabase } = Config;
    if (testdb) {
        return await (0, typeorm_1.createConnection)({ type: "sqlite", ...testDatabase });
    }
    else {
        return await (0, typeorm_1.createConnection)({ type: "postgres", ...database });
    }
}
exports.createDatabase = createDatabase;
