import Client from "./Client"
import { User } from "../models/User"
import { Connection } from "typeorm"
import crypto from "crypto"
import { NotFound, BadRequest } from "../../models/error"
import pipeWithPromise from "../../utilities/pipeWithPromise"
import * as R from "ramda"

export default class UserClient extends Client<User> {
  constructor(private db: Connection) {
    super("User", db, User)
  }

  async addRecord(record: User): Promise<User | void> {
    try {
      return await pipeWithPromise([
        R.bind(this.repository.create, this.repository),
        R.bind(this.encrypt, this),
        R.bind(this.repository.save, this.repository)
      ])(record)
    } catch (err) {
      if (err instanceof Error) throw new BadRequest(err.message)
    }
  }

  async getOneByUsername(username: string): Promise<User | undefined> {
    return await pipeWithPromise([
      R.bind(this.repository.findOne, this.repository),
      R.bind(this.checkUserExists, this)
    ])({ username })
  }

  async updateRecord(id: number, fieldsToUpdate: Partial<User>): Promise<User> {
    const isHashed = (password: string) => /\w{128}\.\w{32}/.test(password)
    return await pipeWithPromise([
      R.bind(this.repository.findOne, this.repository),
      R.bind(this.checkUserExists, this),
      R.mergeLeft(fieldsToUpdate),
      R.ifElse(
        R.pathSatisfies(isHashed, ["password"]),
        (user) => user,
        R.bind(this.encrypt, this)
      ),
      R.bind(this.repository.save, this.repository)
    ])({ id })
  }

  async comparePasswords(username: string, supplied: string): Promise<boolean> {
    const record = await pipeWithPromise([
      R.bind(this.getOneByUsername, this),
      R.bind(this.checkUserExists, this),
    ])(username)
    const [hashed, salt] = record.password.split(".")
    const compare = (supplied: string): boolean => R.equals(supplied, hashed)
    const hex = (pass: Buffer): string => pass.toString("hex")
    return await pipeWithPromise([
      crypto.scryptSync,
      hex,
      compare
    ])(supplied, salt, 64)
  }

  private async encrypt(user: User): Promise<User> {
    const salt = crypto.randomBytes(16).toString("hex")
    const buf = await crypto.scryptSync(user.password, salt, 64)
    return R.assoc("password", `${buf.toString("hex")}.${salt}`, user)
  }

  private checkUserExists(user: User | undefined): User {
    if (!user) {
      throw new NotFound(`${this.clientName} could not be found`)
    } else {
      console.log(`Found User: ${user}`)
      return user
    }
  }
}