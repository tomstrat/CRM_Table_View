import { body } from "express-validator"
import UserClient from "../../database/clients/UserClient"
import { RosterStatus } from "../../database/models/Roster"
import { Contract, EmployeeType, Location, Role } from "../../database/models/User"


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
      .withMessage("Must be between 3 and 20 characters")
      .custom(async username => {
        const user = await userClient.getOne(username)
        if (user) throw new Error("Username already exists")
      }),
    requireNewPassword: body("password")
      .trim()
      .escape()
      .exists()
      .isLength({ min: 5, max: 30 })
      .withMessage("Must be between 5 and 30 characters"),
    requirePasswordConfirmation: body("confirmPassword")
      .trim()
      .escape()
      .exists()
      .isLength({ min: 5, max: 30 })
      .withMessage("Must be between 5 and 30 characters")
      .custom((password, { req }) => {
        if (password != req.body.password) throw new Error("Passwords dont match")
        return true
      }),
    requireContract: body("contract")
      .custom(contract => {
        if (!(contract in Contract)) throw new Error("Contract not valid")
        return true
      }),
    requireRole: body("role")
      .custom(role => {
        if (!(role in Role)) throw new Error("Role not valid")
        return true
      }),
    requireCert: body("certified")
      .optional()
      .custom(cert => {
        if (cert != "true") throw new Error("Certified not valid")
        return true
      }),
    requireInjured: body("injured")
      .optional()
      .custom(inj => {
        if (inj != "true") throw new Error("Injured not valid")
        return true
      }),
    requireRoster: body(["rosterMonday", "rosterTuesday", "rosterWednesday", "rosterThursday", "rosterFriday", "rosterSaturday"])
      .custom(roster => {
        if (!(roster in RosterStatus)) throw new Error("Roster not valid")
        return true
      }),
    requireEmployeeType: body("employeeType")
      .optional()
      .custom(types => {
        const typesArr: string[] = types.split(",")
        typesArr.forEach(type => {
          if (!(type in EmployeeType)) throw new Error("Employee type not valid")
        })
        return true
      }),
    requireLocation: body("location")
      .optional()
      .custom(location => {
        if (!(location in Location)) throw new Error("Location not valid")
        return true
      }),
    requireJoinDate: body("joinDate")
      .optional()
      .trim()
      .custom(date => {
        const workingDate = new Date(date)
        if (
          date.match(/^\d{4}-\d{2}-\d{2}$/) &&
          workingDate.getTime() &&
          workingDate.toISOString().slice(0, 10) === date
        ) return true
        throw new Error("Invalid date")
      })
  }
}