import { createConnection } from "typeorm"
import ConfigType from "../config/type"


export default async function createDatabase({ Config }: { Config: ConfigType }) {
  const { database } = Config
  return await createConnection({ type: "sqlite", ...database })
}
