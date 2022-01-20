import Client from "./database/clients/Client"
import createDatabase from "./database"
import Config from "./config/config"
import { User } from "./database/models/User"
import usersRouteFactory from "./routes/users"
import authRouteFactory from "./routes/auth"
import appFactory from "./app"
import login from "./views/login"

export default async function inject() {
  const DB = await createDatabase({ Config })
  const usersClient = new Client("User", DB, User)
  const Routes = [
    usersRouteFactory({ usersClient }),
    authRouteFactory({ login })
  ]

  const app = appFactory({ Config, Routes })
}
