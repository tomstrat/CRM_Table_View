import Client from "./Client"
import { User } from "../models/User"
import { Connection } from "typeorm"
import crypto from "crypto"
import { NotFound, BadRequest } from "../../models/error"

export default class UserClient extends Client<User> {

  constructor(private db: Connection) {
    super("User", db, User)
  }

  async addRecord(record: User): Promise<User | void> {
    try {
      const recordToAdd = this.repository.create(record)
      recordToAdd.password = await this.encrypt(recordToAdd.password)
      const savedRecord = await this.repository.save(recordToAdd)
      console.log(`${this.clientName} has been saved`)
      return savedRecord
    } catch (err) {
      if (err instanceof Error) throw new BadRequest(err.message)
    }
  }

  async getOneByUsername(username: string): Promise<User | void> {
    console.log(username)
    const record = await this.repository.findOne({ username })
    if (!record) throw new NotFound(`${this.clientName} could not be found`)
    console.log(`Found User: ${record}`)
    return record
  }

  async comparePasswords(username: string, supplied: string): Promise<boolean | void> {
    try {
      const record = await this.getOneByUsername(username)
      const encryptSupplied = await this.encrypt(supplied)
      if (record) return record.password === encryptSupplied ? true : false
    } catch (err) {
      if (err instanceof Error) throw new Error(err.message)
    }
  }

  private async encrypt(password: string): Promise<string> {
    const salt = crypto.randomBytes(16).toString("hex")
    const buf = await crypto.scryptSync(password, salt, 64)
    return `${buf.toString("hex")}.${salt}`
  }
}