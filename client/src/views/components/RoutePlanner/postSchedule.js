import axios from "axios"

export default function postSchedule(schedule) {
  
  axios.post("/api/timesheets/new", schedule[0])
    .then(res => {
      console.log(res)
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
}