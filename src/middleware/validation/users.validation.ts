import { body } from "express-validator"
import UserClient from "../../database/clients/UserClient"
import { Contract, Role } from "../../database/models/User"


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
      }),
    requireNewUsername: body("username")
      .trim()
      .escape()
      .exists()
      .isLength({ min: 3, max: 20 })
      .custom(async username => {
        const user = await userClient.getOne(username)
        if (user) throw new Error("Username already exists")
      }),
    requireNewPassword: body("password")
      .trim()
      .escape()
      .exists()
      .isLength({ min: 5, max: 30 }),
    requirePasswordConfirmation: body("confirmPassword")
      .trim()
      .escape()
      .exists()
      .isLength({ min: 5, max: 30 })
      .custom((password, { req }) => {
        if (password != req.body.password) throw new Error("Passwords dont match")
      }),
    requireContract: body("contract")
      .custom(contract => {
        if (!Object.keys(Contract).includes(contract)) throw new Error("Contract not valid")
      }),
    requireRole: body("role")
      .custom(role => {
        if (!Object.keys(Role).includes(role)) throw new Error("Role not valid")
      })
  }
}