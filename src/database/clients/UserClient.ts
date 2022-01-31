import Client from "./Client"
import { User } from "../models/User"
import { Connection } from "typeorm"
import crypto from "crypto"
import { BadRequest } from "../../models/error"
import pipeWithPromise from "../../utilities/pipeWithPromise"
import * as R from "ramda"

export default class UserClient extends Client<User> {
  constructor(private db: Connection) {
    super("User", db, User)
  }

  async addRecord(record: User): Promise<User | undefined> {
    try {
      return await pipeWithPromise([
        this.create,
        this.encrypt,
        this.save,
        this.hidePassword
      ])(record)
    } catch (err) {
      if (err instanceof Error) throw new BadRequest(err.message)
    }
  }

  async getOne(unameOrId: string | number): Promise<User | undefined> {
    const key = typeof unameOrId === "string"
      ? "username"
      : "id"

    return await pipeWithPromise([
      this.findOne,
      R.ifElse(
        R.has("username"),
        this.hidePassword,
        (user) => user
      )
    ])({ [key]: unameOrId }, { relations: ["roster"] })
  }

  async getAll(): Promise<User[] | undefined> {
    const users = await this.find({ relations: ["roster"] })
    if (!users) return users
    return R.map(this.hidePassword, users)
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
      this.save,
      this.hidePassword
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

  private hidePassword = (user: User): User => {
    return R.assoc("password", "", user)
  }
}