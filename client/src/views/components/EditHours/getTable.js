import axios from "axios"

const getTable = async (date, setTable) => {
  const url = `/api/timesheets/${date}`
  axios.get(url)
    .then(res => {
      const formattedData = res.data.map((elem) => {
        return {...elem, toggleState: false}
      })
      setTable(formattedData)
    })
    .catch(() => {
      setTable(null)
      
      
    })
}

export default getTable

