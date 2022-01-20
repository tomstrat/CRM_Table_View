import { ExternalDataFormat, ExternalRecord } from "../../models/external.interfaces"
import { formatRecord, formatRecords } from "../formatters/data.formatters"

describe("Using formatters", () => {
  const external: ExternalRecord = {
    attributes: {
      type: "Employees",
      url: "/Employees",
    },
    Name: "Tom",
    Paid_Hours__c: 3000,
    Revenue__c: 60000,
    Total_Cost__c: 30,
    Waste__c: 50,
    AJS__c: 60,
    Total_Services__c: 25,
    RPH__c: 300,
  }
  const externals: ExternalDataFormat = {
    totalSize: 1,
    done: true,
    records: [external],
  }
  describe("When formatting external record", () => {
    it("Should return correct format", () => {
      expect(formatRecord(external)).toEqual({
        meta: {
          sfObject: "Employees",
          recordUrl: "/Employees",
        },
        name: "Tom",
        paidHours: 3000,
        revenue: 60000,
        totalCost: 30,
        waste: 50,
        AJS: 60,
        totalServices: 25,
        RPH: 300,
      })
    })
  })
  describe("When formatting external records", () => {
    it("Should return correct format", () => {
      expect(formatRecords(externals)).toEqual({
        records: [{
          meta: {
            sfObject: "Employees",
            recordUrl: "/Employees",
          },
          name: "Tom",
          paidHours: 3000,
          revenue: 60000,
          totalCost: 30,
          waste: 50,
          AJS: 60,
          totalServices: 25,
          RPH: 300,
        }]
      })
    })
  })
})