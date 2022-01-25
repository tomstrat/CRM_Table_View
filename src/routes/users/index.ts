import { Router, Request, Response } from "express"
import Client from "../../database/clients/Client"
import { User } from "../../database/models/User"
import { RouteDefinition } from "../../models/route"
import UserValType from "../../middleware/validation/types/users"


export default function usersRouteFactory({ userClient, userValidators }:
  { userClient: Client<User>, userValidators: UserValType }): RouteDefinition {
  const usersRouter = Router()

  usersRouter.get("/", (req: Request, res: Response) => {

  })
  usersRouter.get("/:id", (req: Request, res: Response) => {

  })
  usersRouter.post("/new", (req: Request, res: Response) => {

  })
  usersRouter.patch("/:id", (req: Request, res: Response) => {

  })
  usersRouter.delete("/:id", (req: Request, res: Response) => {

  })

  return ["/users", usersRouter]
}