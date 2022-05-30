import { timesheetResponse, timesheetRequest } from "./schemas/timesheet"
export const getTimesheets = {
  tags: ["Timesheets"],
  description: "Returns all timesheets from the database",
  operationId: "getTimesheets",
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
            items: timesheetResponse
          }
        }
      }
    }
  }
}

export const getTimesheet = {
  tags: ["Timesheets"],
  description: "Returns specified timesheet from the database",
  operationId: "getTimesheet",
  security: [
    {
      bearerAuth: []
    }
  ],
  parameters: [
    {
      name: "date",
      in: "path",
      required: "true",
      description: "Date to search timesheets against",
      schema: {
        type: "string",
        format: "date"
      }
    }
  ],
  responses: {
    "200": {
      description: "A successful response",
      "content": {
        "application/json": {
          schema: {
            type: "array",
            items: timesheetResponse
          }
        }
      }
    },
    "404": {
      description: "Timesheet could not be found with that date",
    }
  }
}

export const postTimesheet = {
  tags: ["Timesheets"],
  description: "Posts timesheet to the database",
  operationId: "postTimesheet",
  security: [
    {
      bearerAuth: []
    }
  ],
  requestBody: {
    required: true,
    "content": {
      "application/json": {
        schema: timesheetRequest
      }
    }
  },
  responses: {
    "200": {
      description: "A successful response, created timesheet is returned",
      "content": {
        "application/json": {
          schema: timesheetResponse
        }
      }
    },
    "400": {
      description: "Unsuccessful Response - Bad request - Missing query parameters - Missing body properties",
    },
  },
}
