import axios from "axios"
import defaultRoutes2 from "./defaultRoutes2"
import recodeSchedule from "./recodeSchedule"

const getTimeSheet = async (date, setTimeSheet) => {
  const url = `/api/timesheets/${date}`
  axios.get(url)
    .then(res => {
      console.log(res)
      const formattedData = recodeSchedule(res.data)
      setTimeSheet(formattedData)
      return res
    })
    .catch((err) => {
      console.log(err)
      setTimeSheet(defaultRoutes2)
      return err
    })
}

export default getTimeSheet

