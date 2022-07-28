import getISOTimezone from "../../../utilities/getISOTimezone"

export default function formatForPost(routes){
  
  const formattedSchedule = []
  
  routes.map((route) => {
    
    route.names.map((name) => {
      formattedSchedule.push(
        {
          plannedStart: getISOTimezone(route.startTime),
          username: name,
          route: route.routeName,
          routeType: route.routeType.toLowerCase(),
          opsMessage: route.routeNotes,
        }
      )
    })
  })
  console.log(formattedSchedule)
 
  return formattedSchedule
}

