import axios from "axios"

export default function getSchedule(date) {
  
  return axios.get(`/api/timesheets/${date}`)
    .then(res => {
      return res
    })
    .catch((err) => {
      return err
    })
}

