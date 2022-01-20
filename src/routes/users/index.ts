import { Router, Request, Response } from "express"
import Client from "../../database/clients/Client"
import { User } from "../../database/models/User"
import { RouteDefinition } from "../../models/route"


export default function usersRouteFactory({ usersClient }: { usersClient: Client<User> }): RouteDefinition {
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