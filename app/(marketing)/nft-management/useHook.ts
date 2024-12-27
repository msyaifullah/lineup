import { useEffect, useState } from "react"

const useFetch = (url) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    
  }, [url])

  return [data]
}

export default useFetch
