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

  private create = R.bind(this.repository.create, this.repository)
  private save = R.bind(this.repository.save, this.repository)
  private findOne = R.bind(this.repository.findOne, this.repository)

  async addRecord(record: User): Promise<User | void> {
    try {
      return await pipeWithPromise([
        this.create,
        this.encrypt,
        this.save
      ])(record)
    } catch (err) {
      if (err instanceof Error) throw new BadRequest(err.message)
    }
  }

  async getOneByUsername(username: string): Promise<User | undefined> {
    return await this.findOne({ username })
  }

  async updateRecord(id: number, fieldsToUpdate: Partial<User>): Promise<User | undefined> {
    const isHashed = (password: string) => /\w{128}\.\w{32}/.test(password)
    const user = await this.findOne({ id })
    if (!user) return user
    return await pipeWithPromise([
      R.mergeLeft(fieldsToUpdate),
      R.ifElse(
        R.pathSatisfies(isHashed, ["password"]),
        (user) => user,
        this.encrypt
      ),
      this.save
    ])(user)
  }

  async comparePasswords(username: string, supplied: string): Promise<boolean | undefined> {
    const user = await this.findOne({ username })
    if (!user) return user
    const [hashed, salt] = user.password.split(".")
    const compare = (supplied: string): boolean => R.equals(supplied, hashed)
    const hex = (pass: Buffer): string => pass.toString("hex")
    return await pipeWithPromise([
      crypto.scryptSync,
      hex,
      compare
    ])(supplied, salt, 64)
  }

  private encrypt = R.bind(async (user: User): Promise<User> => {
    const salt = crypto.randomBytes(16).toString("hex")
    const buf = await crypto.scryptSync(user.password, salt, 64)
    return R.assoc("password", `${buf.toString("hex")}.${salt}`, user)
  }, this)
}