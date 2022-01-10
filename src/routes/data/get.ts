import { Router, Request, Response } from "express"
import Config from "../../config/config"
import { requestResources } from "../requests"
import { requireAuth } from "../../middleware/auth"


// /data
const dataGetRouter = Router()

dataGetRouter.get("/", requireAuth, async (req: Request, res: Response) => {

  const { data } = Config.urls
  const token = req.session ? req.session.token : "undefined"

  // const path = `${data}v33.0/sobjects/testObj__c`
  const path = `${data}v33.0/query?q=SELECT+testNum__c,+Name+from+testObj__c`

  const resources = await requestResources(path, token)
  res.json(resources)
})

export default dataGetRouter