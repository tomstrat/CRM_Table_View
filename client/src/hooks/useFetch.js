import { useEffect, useState } from "react"
import axios from "axios"

function useFetch(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  
  useEffect(() => {
    setLoading(true)
    axios.get(url)
      .then((response) => {
        setData(response.data)
        setError(null)
      })
      .catch((err) => {
        setError(err.message)
        setData(null)
        
      })
      .finally(() => {
        setLoading(false)
      })
  }, [url])

  return {data, loading, error}
}

export default useFetch