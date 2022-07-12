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
          startTime: tempDate,
          routeNotes: row.opsMessage,
          toggleState: false,
          names: allNames
        }
      )
      routes.push(row.route)
    }
  })
  return formattedSchedule
}

{/* <NewRouteBox
index={index}
key={"routebox" + index}
routeName={routeName}
routeType={routeType}
startHours={formattedTimes[0]}
startMins={formattedTimes[1]}
names={names}
routeNotes={routeNotes}
toggleState={toggleState}
toggleRoute={toggleRoute}
timeChange={timeChange}
notesChange={notesChange}
removeName={removeName}
/> */}

