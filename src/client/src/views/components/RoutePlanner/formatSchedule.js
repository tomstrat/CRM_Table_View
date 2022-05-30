import formatStartTimes from "./formatStartTimes"

export default function formatSchedule(date, routes){
  const formattedSchedule = []
  routes.map((route => {
    if (route.name1 && route.name2 && route.name3) {
      formattedSchedule.push({
        plannedStart: formatStartTimes(date, route.startHours, route.startMins),
        username: route.name1,
        route: route.routeName,
        opsMessage: route.routeNotes,
        edited: false
      },
      {
        plannedStart: formatStartTimes(date, route.startHours, route.startMins),
        username: route.name2,
        route: route.routeName,
        opsMessage: route.routeNotes,
        edited: false
      },
      {
        plannedStart: formatStartTimes(date, route.startHours, route.startMins),
        username: route.name3,
        route: route.routeName,
        opsMessage: route.routeNotes,
        edited: false
      })
    } 
    else if (route.name1 && route.name2) {
      formattedSchedule.push({
        plannedStart: formatStartTimes(date, route.startHours, route.startMins),
        username: route.name1,
        route: route.routeName,
        opsMessage: route.routeNotes,
        edited: false
      },
      {
        plannedStart: formatStartTimes(date, route.startHours, route.startMins),
        username: route.name2,
        route: route.routeName,
        opsMessage: route.routeNotes,
        edited: false
      }
      )
    }
    else if (route.name1) {
      formattedSchedule.push({
        plannedStart: formatStartTimes(date, route.startHours, route.startMins),
        username: route.name1,
        route: route.routeName,
        opsMessage: route.routeNotes,
        edited: false
      }
      )
    }}))
  console.log(formattedSchedule)
  return formattedSchedule
}

