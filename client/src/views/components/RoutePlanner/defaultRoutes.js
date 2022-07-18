
export default function defaultRoutes(currDay) {
  const defaultTime = new Date(currDay)
  defaultTime.setHours(7, 0, 0, 0)
  return (
    [
      {
        routeName: "N1",
        routeType: "Standard",
        startTime: defaultTime,
        names: [],
        routeNotes: "",
        toggleState: false
      },
      {
        routeName: "N2",
        routeType: "Standard",
        startTime: defaultTime,
        names: [],
        routeNotes: "",
        toggleState: false
      },
      {
        routeName: "S1",
        routeType: "Standard",
        startTime: defaultTime,
        names: [],
        routeNotes: "",
        toggleState: false
      },
      {
        routeName: "S2",
        routeType: "Standard",
        startTime: defaultTime,
        names: [],
        routeNotes: "",
        toggleState: false
      },
      {
        routeName: "S3",
        routeType: "Standard",
        startTime: defaultTime,
        names: [],
        routeNotes: "",
        toggleState: false
      },
      {
        routeName: "E1",
        routeType: "Standard",
        startTime: defaultTime,
        names: [],
        routeNotes: "",
        toggleState: false
      },
      {
        routeName: "E2",
        routeType: "Standard",
        startTime: defaultTime,
        names: [],
        routeNotes: "",
        toggleState: false
      },
      {
        routeName: "W1",
        routeType: "Standard",
        startTime: defaultTime,
        names: [],
        routeNotes: "",
        toggleState: false
      },
      {
        routeName: "W2",
        routeType: "Standard",
        startTime: defaultTime,
        names: [],
        routeNotes: "",
        toggleState: false
      },
      {
        routeName: "D1",
        routeType: "Standard",
        startTime: defaultTime,
        names: [],
        routeNotes: "",
        toggleState: false
      }
    ]
  )
}