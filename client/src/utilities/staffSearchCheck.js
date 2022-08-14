export default function staffSearchCheck (searchState, user, dayName) {
  if(searchState[0].state) {
    if(user.roster[dayName] == "working") return true
    else return false
  }
  else return true
}