export default function fixMonth(month) {
  if(month < 12) month = month + 1
  else if(month == 12) month = 1
  if(month.toString().length == 1){
    return "0" + month.toString()
  }
  else return month.toString()
}