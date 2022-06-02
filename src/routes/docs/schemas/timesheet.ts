import { userResponse } from "./user"

export const timesheetResponse = {
  type: "object",
  properties: {
    id: {
      type: "number",
    },
    user: userResponse,
    route: {
      type: "string"
    },
    startTime: {
      type: "string",
      format: "datetime",
      example: "2022-05-30T15:23:08.486Z"
    },
    endTime: {
      type: "string",
      format: "datetime",
      example: "2022-05-30T15:23:08.486Z"
    },
    breakStart: {
      type: "string",
      format: "datetime",
      example: "2022-05-30T15:23:08.486Z"
    },
    plannedStart: {
      type: "string",
      format: "datetime",
      example: "2022-05-30T15:23:08.486Z"
    },
    ttmComments: {
      type: "string"
    },
    opsComments: {
      type: "string"
    },
    opsMessage: {
      type: "string"
    },
    startTruck: {
      type: "string"
    },
    sick: {
      type: "boolean"
    },
    late: {
      type: "boolean"
    },
    edited: {
      type: "boolean"
    }
  }
}

export const timesheetRequest = {
  type: "object",
  properties: {
    userId: {
      type: "number",
      required: true
    },
    route: {
      type: "string",
      required: true
    },
    startTime: {
      type: "string",
      format: "datetime",
      example: "2022-05-30T15:23:08.486Z"
    },
    endTime: {
      type: "string",
      format: "datetime",
      example: "2022-05-30T15:23:08.486Z"
    },
    breakStart: {
      type: "string",
      format: "datetime",
      example: "2022-05-30T15:23:08.486Z"
    },
    plannedStart: {
      type: "string",
      format: "datetime",
      example: "2022-05-30T15:23:08.486Z",
      required: true
    },
    ttmComments: {
      type: "string"
    },
    opsComments: {
      type: "string"
    },
    opsMessage: {
      type: "string",
      required: true
    },
    startTruck: {
      type: "string"
    },
    sick: {
      type: "boolean"
    },
    late: {
      type: "boolean"
    },
    edited: {
      type: "boolean"
    }
  }
}