"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const buildQuery_1 = require("../buildQuery");
describe("Testing Utilities", () => {
    describe("Testing Query Builder", () => {
        describe("When passed correct object", () => {
            it("Should return correct Query Url", () => {
                const query = {
                    resource: "testObj__c",
                    version: "v33.0",
                    fields: ["testNum__C", "Name"]
                };
                const url = "https://spotlightdevelopment2-dev-ed.my.salesforce.com/services/data/v33.0/query?q=SELECT+testNum__C,+Name+from+testObj__c";
                expect((0, buildQuery_1.buildQuery)(query)).toEqual(url);
            });
        });
    });
});
