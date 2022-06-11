export default function recodeSchedule(schedule){
  const formattedSchedule = []
  const routes = []

  schedule.map(row => {
    if (!routes.includes(row.route)){
      const tempDate = new Date(row.plannedStart)
      const allNames = schedule.filter(elem => elem.route === row.route).map(thing => thing.user.username)

      formattedSchedule.push(
        {
          routeName: row.route, 
          routeType: row.routeType,
          startHours: tempDate.getHours(),
          startMins: tempDate.getMinutes(),
          routeNotes: row.opsMessage,
          toggleState: false,
          name1: allNames[0],
          name2: allNames[1],
          name3: allNames[2]
        }
      )
      routes.push(row.route)
    }
  })
  console.log(schedule)
  return formattedSchedule
}

// {
//   routeName: "N1",
//   routeType: "Standard",
//   startHours: "07",
//   startMins: "00",
//   name1: "Unassigned",
//   name2: "",
//   name3: "",
//   routeNotes: "",
//   toggleState: false
// },

