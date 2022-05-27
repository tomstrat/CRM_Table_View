import getCurrentDate from "../../../utilities/getCurrentDate"

export default function formatSchedule(currDay, routes){
  const formattedSchedule = []
  routes.map((route => {
    if (route.name1 && route.name2 && route.name3) {
      formattedSchedule.push({
        date: getCurrentDate("date", currDay),
        username: route.name1,
        route: route.routeName,
        plannedStart: route.startHours + route.startMins,
        opsMessage: route.routeNotes,
        edited: false
      },
      {
        date: getCurrentDate("date", currDay),
        username: route.name2,
        route: route.routeName,
        plannedStart: route.startHours + route.startMins,
        opsMessage: route.routeNotes,
        edited: false
      },
      {
        date: getCurrentDate("date", currDay),
        username: route.name3,
        route: route.routeName,
        plannedStart: route.startHours + route.startMins,
        opsMessage: route.routeNotes,
        edited: false
      })
    } 
    else if (route.name1 && route.name2) {
      formattedSchedule.push({
        date: getCurrentDate("date", currDay),
        username: route.name1,
        route: route.routeName,
        plannedStart: route.startHours + route.startMins,
        opsMessage: route.routeNotes,
        edited: false
      },
      {
        date: getCurrentDate("date", currDay),
        username: route.name2,
        route: route.routeName,
        plannedStart: route.startHours + route.startMins,
        opsMessage: route.routeNotes,
        edited: false
      }
      )
    }
    else if (route.name1) {
      formattedSchedule.push({
        date: getCurrentDate("date", currDay),
        username: route.name1,
        route: route.routeName,
        plannedStart: route.startHours + route.startMins,
        opsMessage: route.routeNotes,
        edited: false
      }
      )
    }}))
  console.log(formattedSchedule)
  return formattedSchedule
}

