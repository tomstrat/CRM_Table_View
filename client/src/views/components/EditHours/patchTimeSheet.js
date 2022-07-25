import axios from "axios"

export default function patchTimeSheet(data) {
  
  axios.patch(`/api/timesheets/${data.id}`, data)
    .then(res => {
      console.log(res)
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
}