import { createConnection } from "typeorm"
import ConfigType from "../config/type"


export async function createDatabase({ Config, testdb = true }: { Config: ConfigType, testdb?: boolean }) {
  const { database, testDatabase } = Config
  if (testdb) {
    return await createConnection({ type: "sqlite", ...testDatabase })
  } else {
    return await createConnection({ type: "postgres", ...database })
  }
}

