import Client from "./Client"
import { User } from "../models/User"
import { Connection } from "typeorm"
import crypto from "crypto"

export class UserClient extends Client<User> {

  constructor(private name: string, private db: Connection) {
    super(name, db, User)
  }

  async addRecord(record: User) {
    try {
      const recordToAdd = this.repository.create(record)
      await this.repository.save(recordToAdd)
      console.log(`${this.clientName} has been saved`)
    } catch (err) {
      console.log(err)
    }
  }

  private async encrypt(password: string): Promise<string> {
    const salt = crypto.randomBytes(16).toString("hex")
    const buf = await crypto.scryptSync(password, salt, 64)
    return `${buf.toString("hex")}.${salt}`
  }
}