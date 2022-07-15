import axios from "axios"

const getTable = async (date, setTable) => {
  const url = `/api/timesheets/${date}`
  axios.get(url)
    .then(res => {
      console.log(res)
      const formattedData = res.data.map((elem) => {
        return {...elem, toggleState: false}
      })
      setTable(formattedData)
    })
    .catch((err) => {
      console.log(err)
      setTable(null)
      
      
    })
}

export default getTable

