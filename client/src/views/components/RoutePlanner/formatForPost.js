
export default function formatForPost(routes){
  
  const formattedSchedule = []
  
  routes.map((route) => {
    const tempDate = new Date(route.startTime)
    route.names.map((name) => {
      formattedSchedule.push(
        {
          plannedStart: tempDate,
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

