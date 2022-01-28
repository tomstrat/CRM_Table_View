import { Router, Request, Response } from "express"
import Client from "../../database/clients/Client"
import { User } from "../../database/models/User"
import { RouteDefinition } from "../../models/route"
import UserValType from "../../middleware/validation/types/users"
import { Role } from "../../database/models/User"


export default function usersRouteFactory({ userClient, userValidators, manageusers }:
  { userClient: Client<User>, userValidators: UserValType, manageusers: (data: User[] | undefined) => string }): RouteDefinition {
  const usersRouter = Router()

  usersRouter.get("/", async (req: Request, res: Response) => {
    return res.send(manageusers(await userClient.getAll()))
  })
  usersRouter.get("/:id", (req: Request, res: Response) => {

  })
  usersRouter.get("/new", async (req: Request, res: Response) => {
    return res.json(await userClient.getAll())
  })
  usersRouter.post("/new", (req: Request, res: Response) => {
    console.log(req)
    res.status(200).json({ success: "Success" })
  })
  usersRouter.patch("/:id", (req: Request, res: Response) => {

  })
  usersRouter.delete("/:id", (req: Request, res: Response) => {

  })

  return ["/ops/users", usersRouter, Role.operations]
}