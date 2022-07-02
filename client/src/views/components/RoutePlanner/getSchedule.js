import axios from "axios"

export default function getSchedule(date) {
  
  return axios.get(`/api/timesheets/${date}`)
    .then(res => {
      console.log(res)
      return res
    })
    .catch((err) => {
      console.log(err)
      return err
      
    })
}

