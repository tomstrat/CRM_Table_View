import roster from "./roster"

export const userResponse = {
  type: "object",
  properties: {
    id: {
      type: "number",
    },
    username: {
      type: "string",
    },
    employeeType: {
      type: "string",
      enum: ["driver", "trainer", "temp", "navigator", "operations"]
    },
    role: {
      type: "string",
      description: "The users permissions on the app",
      enum: ["user", "operations", "admin"]
    },
    contract: {
      type: "string",
      description: "The users permissions on the app",
      enum: ["fullTime", "partTime", "casual", "temp"]
    },
    certified: {
      type: "boolean",
    },
    injured: {
      type: "boolean",
    },
    joinDate: {
      type: "string",
      format: "date",
      example: "2022-05-30T15:23:08.486Z"
    },
    location: {
      type: "string",
      enum: ["cbd", "innerNorth", "outerNorth", "innerEast", "outerEast", "innerSouth", "outerSouth", "innerWest", "outerWest"]
    },
    roster: roster
  }
}

export const userRequest = {
  type: "object",
  properties: {
    username: {
      type: "string",
      required: true,
      example: "LukeB"
    },
    password: {
      type: "string",
      required: true,
    },
    confirmPassword: {
      type: "string",
      required: true,
    },
    contract: {
      type: "string",
      description: "The users permissions on the app",
      enum: ["fullTime", "partTime", "casual", "temp"],
      required: true
    },
    role: {
      type: "string",
      description: "The users permissions on the app",
      enum: ["user", "operations", "admin"],
      required: true
    },
    certified: {
      type: "boolean",
    },
    injured: {
      type: "boolean",
    },
    joinDate: {
      type: "string",
      format: "date",
      example: "2022-05-30T15:23:08.486Z"
    },
    employeeType: {
      type: "string",
      enum: ["driver", "trainer", "temp", "navigator", "operations"]
    },
    location: {
      type: "string",
      enum: ["cbd", "innerNorth", "outerNorth", "innerEast", "outerEast", "innerSouth", "outerSouth", "innerWest", "outerWest"]
    },
    rosterMonday: {
      type: "string",
      enum: roster,
    },
    rosterTuesday: {
      type: "string",
      enum: roster,
    },
    rosterWednesday: {
      type: "string",
      enum: roster,
    },
    rosterThursday: {
      type: "string",
      enum: roster,
    },
    rosterFriday: {
      type: "string",
      enum: roster,
    },
    rosterSaturday: {
      type: "string",
      enum: roster,
    },
  }

}

export const userRequestPatch = {
  type: "object",
  properties: {
    username: {
      type: "string",
      example: "LukeB"
    },
    password: {
      type: "string",
    },
    confirmPassword: {
      type: "string",
    },
    contract: {
      type: "string",
      description: "The users permissions on the app",
      enum: ["fullTime", "partTime", "casual", "temp"],
    },
    role: {
      type: "string",
      description: "The users permissions on the app",
      enum: ["user", "operations", "admin"],
    },
    certified: {
      type: "boolean",
    },
    injured: {
      type: "boolean",
    },
    joinDate: {
      type: "string",
      format: "date",
      example: "2022-05-30T15:23:08.486Z"
    },
    employeeType: {
      type: "string",
      enum: ["driver", "trainer", "temp", "navigator", "operations"]
    },
    location: {
      type: "string",
      enum: ["cbd", "innerNorth", "outerNorth", "innerEast", "outerEast", "innerSouth", "outerSouth", "innerWest", "outerWest"]
    },
    rosterMonday: {
      type: "string",
      enum: roster,
    },
    rosterTuesday: {
      type: "string",
      enum: roster,
    },
    rosterWednesday: {
      type: "string",
      enum: roster,
    },
    rosterThursday: {
      type: "string",
      enum: roster,
    },
    rosterFriday: {
      type: "string",
      enum: roster,
    },
    rosterSaturday: {
      type: "string",
      enum: roster,
    },
  }

}