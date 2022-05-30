import { userResponse, userRequest, userRequestPatch } from "./schemas/user"
export const getUsers = {
  tags: ["Users"],
  description: "Returns all users from the database",
  operationId: "getUsers",
  security: [
    {
      bearerAuth: []
    }
  ],
  responses: {
    "200": {
      description: "A successful response",
      "content": {
        "application/json": {
          schema: {
            type: "array",
            items: userResponse
          }
        }
      }
    }
  }
}

export const getUser = {
  tags: ["Users"],
  description: "Returns specified user from the database",
  operationId: "getUser",
  security: [
    {
      bearerAuth: []
    }
  ],
  parameters: [
    {
      name: "userId",
      in: "path",
      required: "true",
      description: "Users id to search against",
      schema: {
        type: "number"
      }
    }
  ],
  responses: {
    "200": {
      description: "A successful response",
      "content": {
        "application/json": {
          schema: userResponse
        }
      }
    },
    "404": {
      description: "User could not be found",
    }
  }
}

export const postUser = {
  tags: ["Users"],
  description: "Posts user to the database",
  operationId: "postUser",
  security: [
    {
      bearerAuth: []
    }
  ],
  requestBody: {
    required: true,
    "content": {
      "application/json": {
        schema: userRequest
      }
    }
  },
  responses: {
    "200": {
      description: "A successful response, created user is returned",
      "content": {
        "application/json": {
          schema: userResponse
        }
      }
    },
    "400": {
      description: "Unsuccessful Response - Bad request - Missing query parameters - Missing body properties",
    },
  },

}

export const patchUser = {
  tags: ["Users"],
  description: "Updates user to the database",
  operationId: "patchUser",
  security: [
    {
      bearerAuth: []
    }
  ],
  requestBody: {
    required: true,
    "content": {
      "application/json": {
        schema: userRequestPatch
      }
    }
  },
  responses: {
    "200": {
      description: "A successful response, updated user is returned",
      "content": {
        "application/json": {
          schema: userResponse
        }
      }
    },
    "400": {
      description: "Unsuccessful Response - Bad request - Missing query parameters - Missing body properties",
    },
  },

}

export const deleteUser = {
  tags: ["Users"],
  description: "Deletes specified user from the database",
  operationId: "deleteUser",
  security: [
    {
      bearerAuth: []
    }
  ],
  parameters: [
    {
      name: "userId",
      in: "path",
      required: "true",
      description: "Users id to search against",
      schema: {
        type: "number"
      }
    }
  ],
  responses: {
    "200": {
      description: "A successful response, deleted user is returned",
      "content": {
        "application/json": {
          schema: userResponse
        }
      }
    },
    "404": {
      description: "User could not be found",
    }
  }
}