import { getUsers, getUser, deleteUser, postUser, patchUser } from "./routes/docs/users.swagger"
import { getTimesheet, getTimesheets, postTimesheet } from "./routes/docs/timesheets.swagger"

export const swaggerDocument = {
  openapi: "3.0.1",
  info: {
    version: "1.0.0",
    title: "CRM API",
    description: "Docs for api access",
    termsOfService: "",
    contact: {
      name: "Tom Copestake",
      email: "tomstratfic@hotmail.com",
      url: ""
    },
  },
  servers: [
    {
      url: "http://localhost:3000/api",
      description: "Local server"
    },
    {
      url: "https://app-dev.herokuapp.com/api",
      description: "PROD Env"
    },
  ],
  components: {
    schemas: {},
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT"
      }
    }
  },
  tags: [
    {
      name: "Users"
    }
  ],
  paths: {
    "/users": {
      get: getUsers,
      post: postUser
    },
    "/users/{userId}": {
      get: getUser,
      delete: deleteUser,
      patch: patchUser
    },
    "/timesheets": {
      get: getTimesheets,
      post: postTimesheet
    },
    "/timesheets/{date}": {
      get: getTimesheet
    }
  }
}