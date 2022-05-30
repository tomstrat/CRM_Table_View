import formatStartTimes from "./formatStartTimes"

export default function formatSchedule(date, routes, idMap){
  const formattedSchedule = []
  
  function getId(idMap, name) {
    const entry = idMap.find(entry => entry.username == name)
    return entry.id
    
  }
  routes.map((route => {
    if (route.name1 && route.name2 && route.name3) {
      formattedSchedule.push({
        plannedStart: formatStartTimes(date, route.startHours, route.startMins),
        userId: getId(idMap, route.name1),
        route: route.routeName,
        opsMessage: route.routeNotes,
        edited: false
      },
      {
        plannedStart: formatStartTimes(date, route.startHours, route.startMins),
        userId: getId(idMap, route.name2),
        route: route.routeName,
        opsMessage: route.routeNotes,
        edited: false
      },
      {
        plannedStart: formatStartTimes(date, route.startHours, route.startMins),
        userId: getId(idMap, route.name3),
        route: route.routeName,
        opsMessage: route.routeNotes,
        edited: false
      })
    } 
    else if (route.name1 && route.name2) {
      formattedSchedule.push({
        plannedStart: formatStartTimes(date, route.startHours, route.startMins),
        userId: getId(idMap, route.name1),
        route: route.routeName,
        opsMessage: route.routeNotes,
        edited: false
      },
      {
        plannedStart: formatStartTimes(date, route.startHours, route.startMins),
        userId: getId(idMap, route.name2),
        route: route.routeName,
        opsMessage: route.routeNotes,
        edited: false
      }
      )
    }
    else if (route.name1 && route.name1 != "Unassigned") {
      formattedSchedule.push({
        plannedStart: formatStartTimes(date, route.startHours, route.startMins),
        userId: getId(idMap, route.name1),
        route: route.routeName,
        opsMessage: route.routeNotes,
        edited: false
      }
      )
    }}))
  console.log(formattedSchedule)
  return formattedSchedule
}

