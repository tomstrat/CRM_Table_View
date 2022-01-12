import { Router, Request, Response } from "express"
import { requestResources } from "../requests"
import { requireAuth } from "../../middleware/auth"
import { buildQuery } from "../../utilities/buildQuery"
import { tableViewBuilder } from "../../views/table"


// /data
const dataGetRouter = Router()

dataGetRouter.get("/", requireAuth, async (req: Request, res: Response) => {

  const token = req.session ? req.session.token : "undefined"


  const query_b = {
    resource: "Employee__c",
    version: "v33.0",
    fields: ["Name", "Paid_Hours__c", "Revenue__c", "Total_Cost__c", "Waste__c", "AJS__c", "Total_Services__c", "	RPH__c"]
  }

  const url = buildQuery(query_b)
  console.log(url)

  const resources = await requestResources(url, token)
  res.send(tableViewBuilder(resources))
})

export default dataGetRouter