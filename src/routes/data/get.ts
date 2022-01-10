import { Router, Request, Response } from "express"
import { requestResources } from "../requests"
import { requireAuth } from "../../middleware/auth"
import { buildQuery } from "../../utilities/buildQuery"


// /data
const dataGetRouter = Router()

dataGetRouter.get("/", requireAuth, async (req: Request, res: Response) => {

  const token = req.session ? req.session.token : "undefined"

  const query = {
    resource: "testObj__c",
    version: "v33.0",
    fields: ["testNum__C", "Name"]
  }

  // const path = `${data}v33.0/sobjects/testObj__c`
  // const path = `${data}v33.0/query?q=SELECT+testNum__c,+Name+from+testObj__c`

  const url = buildQuery(query)
  console.log(url)

  const resources = await requestResources(url, token)
  res.json(resources)
})

export default dataGetRouter