// ! Currently has + 10 to account for timezone - need a better solution

//Takes date object, hours string, mins string
//Modifies the datetime object and returns it


export default function formatStartTimes(date, hours, mins) {
  console.log(hours, mins)
  const tempDate = new Date(date)
  tempDate.setHours(parseInt(hours) + 10)
  tempDate.setMinutes(parseInt(mins))
  
  const dateString = tempDate.toISOString()
  return dateString
}