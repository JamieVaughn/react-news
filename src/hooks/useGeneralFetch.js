import { useState, useEffect } from 'react'

export const useGeneralFetch = ({url}) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    setError(null)
    setLoading(true)
    try {
      const response = await fetch(url)
      if(!response.ok) throw new Error('fetch error')
      const json = await response.json()
      setData(json)
    } catch (err) {
      setError(err)
      console.error('catch error', err)
    } finally {
      setLoading(false)
    }
    
  }

  useEffect(() => {
    fetchData()
  }, [url])

  return { data, loading, error }
}