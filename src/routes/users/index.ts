import { Router, Request, Response, RequestHandler } from "express"
import Client from "../../database/clients/Client"
import { User } from "../../database/models/User"
import { RouteDefinition } from "../../models/route"
import UserValType from "../../middleware/validation/types/users"
import { Role } from "../../database/models/User"
import { ViewWithErrors } from "../../views/types/views"
import { formatUser } from "../formatters/user.formatters"

export default function usersRouteFactory(
  {
    userClient,
    userValidators,
    handleValErrors,
  }: {
    userClient: Client<User>,
    userValidators: UserValType,
    handleValErrors: (template?: ViewWithErrors) => RequestHandler
  }): RouteDefinition {

  const usersRouter = Router()
  const {
    requireNewUsername,
    requireNewPassword,
    requirePasswordConfirmation,
    requireContract,
    requireRole,
    requireCert,
    requireInjured,
    requireRoster,
    requireEmployeeType,
    requireJoinDate,
    requireLocation
  } = userValidators

  usersRouter.get("/", async (req: Request, res: Response) => {
    const users = await userClient.getAll()
    return res.status(200).json(users)
  })

  usersRouter.get("/:id", async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const user = await userClient.getOne(id)
    return res.status(200).json(user)
  })

  usersRouter.post(
    "/new",
    [
      requireNewUsername, requireNewPassword,
      requirePasswordConfirmation,
      requireContract, requireRole,
      requireCert, requireInjured, requireRoster,
      requireEmployeeType, requireJoinDate,
      requireLocation
    ],
    handleValErrors(),
    async (req: Request, res: Response) => {
      const user = await userClient.addRecord(formatUser(req.body))
      res.status(200).json(user)
    })

  usersRouter.patch("/:id", (req: Request, res: Response) => {

  })

  usersRouter.delete("/:id", (req: Request, res: Response) => {

  })

  return ["/ops/users", usersRouter, Role.operations]
}