//Function for getting current date information in various formats

//1st argument options include:

//"day" to return a string of the weekday for displaying to users
//"date" to return a date for displaying to users (DD-MM-YYYY)
//"form" to format for html input date elements

//2nd argument takes:

//An integer which increments the day of the date object by the integer value
//This can be a positive or negative value
//This modifies the entire date object
//Will change months correctly if sufficient days are incremented

//Feel free to add more formats here as required
//Note: the month property starts at index 0, hence the + 1

export default function getCurrentDate(format, incre) {
  
  if(!incre) incre = 0
  
  const increDate = new Date()
  increDate.setDate(increDate.getDate() + incre)
  const [day, month, year, weekDay] = 
  
  [
    increDate.getDate(), 
    increDate.getMonth() + 1,
    increDate.getFullYear(), 
    increDate.getDay(), 
  ]
  
  const weekDayArray = 
  [
    "Sunday", 
    "Monday", 
    "Tuesday", 
    "Wednesday", 
    "Thursday", 
    "Friday", 
    "Saturday"
  ]
  
  //prepends a '0' to the month if it is a single digit
  function fixMonth(month) {
    if(month.toString().length == 1){
      return "0" + month.toString()
    }
    else return month.toString()
  }
  
  switch (format){
  case "date": 
    return day + "-" + fixMonth(month) + "-" +  year
  case "day": 
    return weekDayArray[weekDay]
  case "form":
    return increDate.toISOString().slice(0,10)
  }
}
