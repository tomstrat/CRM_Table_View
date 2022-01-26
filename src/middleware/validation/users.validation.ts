import { body } from "express-validator"
import UserClient from "../../database/clients/UserClient"


export default function userValidatorFactory({ userClient }:
  { userClient: UserClient }) {
  return {
    requireUsername: body("username")
      .trim()
      .escape()
      .custom(async username => {
        const user = await userClient.getOne(username)
        if (!user) throw new Error("Incorrect Username or Password")
      }),
    requirePassword: body("password")
      .trim()
      .escape()
      .custom(async (password, { req }) => {
        const isCorrect = await userClient.comparePasswords(req.body.username, password)
        if (!isCorrect) throw new Error("Incorrect Username or Password")
      })
  }
}