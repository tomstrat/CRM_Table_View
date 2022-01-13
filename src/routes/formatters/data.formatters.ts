import { ExternalDataFormat, ExternalRecord } from "../../models/external.interfaces"
import { InternalDataFormat, InternalRecord } from "../../models/internal.interfaces"
import * as R from "ramda"


function formatRecord(externalRecord: ExternalRecord): InternalRecord {
  return {
    sfObject: R.path(["attributes", "type"], externalRecord),
    recordUrl: R.path(["attributes", "url"], externalRecord),
    name: externalRecord.Name,
    paidHours: externalRecord.Paid_Hours__c,
    revenue: externalRecord.Revenue__c,
    totalCost: externalRecord.Total_Cost__c,
    waste: externalRecord.Waste__c,
    AJS: externalRecord.AJS__c,
    totalServices: externalRecord.Total_Services__c,
    RPH: externalRecord.RPH__c
  }
}


export function formatRecords(externalData: ExternalDataFormat): InternalDataFormat {
  const { records } = externalData
  return {
    records: records.map((record) => {
      return formatRecord(record)
    })
  }
}