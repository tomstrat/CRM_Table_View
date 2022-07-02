import axios from "axios"

export default function getStaff() {
  
  return axios.get("/api/users/")
    .then(res => {
      console.log(res)
      return res
    })
    .catch((err) => {
      console.log(err)
      return err
      
    })
}
