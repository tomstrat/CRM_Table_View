import axios from "axios"

export default function postSchedule(schedule) {
  
  axios.post("/api/timesheets/new", schedule)
    .then(res => {
      console.log(res)
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
}