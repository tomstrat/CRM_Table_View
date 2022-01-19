import { Router, Request, Response } from "express"
import { requireAuth } from "../../middleware/auth"
import layout from "../../views/layout"
import timepage from "../../views/timepage"

// Timesheets

const timeGetRouter = Router()

timeGetRouter.get("/", requireAuth, (req: Request, res: Response) => {
    res.send(layout(timepage()))
})

export default timeGetRouter