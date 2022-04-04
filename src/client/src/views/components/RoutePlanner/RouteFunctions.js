// Functions for route planner


function formatSchedule(state){
  const formattedState = []
  state.map((route) => {
    const concatTime = route.startHours + route.startMins
    if(route.name1){
      formattedState.push(
        {
          date: "add date",
          user: route.name1,
          route: route.routeName,
          plannedStart: concatTime,
          opsMessage: route.routeNotes
        }
      )
    }
    if(route.name2){
      formattedState.push(
        {
          date: "add date",
          user: route.name2,
          route: route.routeName,
          plannedStart: concatTime,
          opsMessage: route.routeNotes
        }
      )
    }
    if(route.name3){
      formattedState.push(
        {
          date: "add date",
          user: route.name3,
          route: route.routeName,
          plannedStart: concatTime,
          opsMessage: route.routeNotes
        }
      )
    }
  })
  // fetch("http://localhost:3001/api/timesheets", {
  //   method: "POST", 
  //   mode: "cors",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(formattedState)

  // }).then(() => {
  //   console.log("Timesheet Added")
  // })

}

export default formatSchedule
// user, route, plannedStart, opsMessage

//routeName: 
//routeType: 
//startHours: 
//startMins: 
//name1: 
//name2: 
//name3: 
//routeNotes:
//toggleState: 

// if(Object.keys(elem) == "name1" || (Object.keys(elem) == "name2") || Object.keys(elem) == "name3"){
//   return (
//     [
//       {
//         user: route[Object.values(elem)],
//         route: route.routeName,
//         plannedStart: concatTime,
//         opsMessage: route.routeNotes
//       }
//     ]
//   )