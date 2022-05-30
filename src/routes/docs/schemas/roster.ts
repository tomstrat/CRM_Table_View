const roster = ["unselected", "notWorking", "contactable", "working"]

export default {
  type: "object",
  properties: {
    monday: {
      type: "string",
      enum: roster
    },
    tuesday: {
      type: "string",
      enum: roster
    },
    wednesday: {
      type: "string",
      enum: roster
    },
    thursday: {
      type: "string",
      enum: roster
    },
    friday: {
      type: "string",
      enum: roster
    },
    saturday: {
      type: "string",
      enum: roster
    },
  }
}