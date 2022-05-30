// ! Currently has + 10 to account for timezone - need a better solution - setutchours????

//Takes date object, hours string, mins string
//Modifies the datetime object and returns it


export default function formatStartTimes(date, hours, mins) {
  const tempDate = new Date(date)
  tempDate.setHours(parseInt(hours) + 10)
  tempDate.setMinutes(parseInt(mins))
  tempDate.setSeconds(0)
  tempDate.setMilliseconds(0)
  
  const dateString = tempDate.toISOString()
  
  return dateString
}