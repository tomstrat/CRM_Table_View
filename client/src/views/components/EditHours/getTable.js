import axios from "axios"

const getTable = async (date, setTable) => {
  const url = `/api/timesheets/${date}`
  axios.get(url)
    .then(res => {
      setTable(res.data)
    })
    .catch(() => {
      setTable(null)
    })
}

export default getTable

