import { Router, Request, Response, RequestHandler } from "express"
import Client from "../../database/clients/Client"
import { User } from "../../database/models/User"
import { RouteDefinition } from "../../models/route"
import UserValType from "../../middleware/validation/types/users"
import { Role } from "../../database/models/User"
import { ViewWithErrors } from "../../views/types/views"
import { formatUser } from "../formatters/user.formatters"
import usercard from "../../views/opsviews/timesheets/usercard"

export default function usersRouteFactory(
  {
    userClient,
    userValidators,
    handleValErrors,
    manageusers
  }: {
    userClient: Client<User>,
    userValidators: UserValType,
    handleValErrors: (template?: ViewWithErrors) => RequestHandler
    manageusers: ViewWithErrors
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
    requireEmployeeType
  } = userValidators

  usersRouter.get("/", async (req: Request, res: Response) => {
    return res.send(manageusers({}))
  })

  usersRouter.get("/:id", (req: Request, res: Response) => {
    return res.send(usercard())
  })

  usersRouter.get("/new", async (req: Request, res: Response) => {
    return res.json(await userClient.getAll())
  })

  usersRouter.post(
    "/new",
    [
      requireNewUsername, requireNewPassword,
      requirePasswordConfirmation,
      requireContract, requireRole,
      requireCert, requireInjured, requireRoster,
      requireEmployeeType
    ],
    handleValErrors(),
    async (req: Request, res: Response) => {

      const newUser = await userClient.addRecord(formatUser(req.body))
      res.status(200).json({ newUser })

    })

  usersRouter.patch("/:id", (req: Request, res: Response) => {

  })

  usersRouter.delete("/:id", (req: Request, res: Response) => {

  })

  return ["/ops/users", usersRouter, Role.operations]
}