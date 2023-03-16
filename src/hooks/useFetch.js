import { useState, useEffect } from 'react'

export const useFetch = (topic) => {
  const [ids, setIds] = useState([])
  const [stories, setStories] = useState([])

  useEffect(() => {
    async function fetchIds (topic) {
      const response = await fetch(`https://hacker-news.firebaseio.com/v0/${topic}stories.json?print=pretty`)
      const data = await response.json()
      setIds(data.slice(0, 20))
    }
    fetchIds(topic)
  }, [topic])

  useEffect(() => {
    async function fetchStories () {
      const promisesArray = await ids.map(id => fetch(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
        ).then(resp => resp.json()))
    
      const storiesArray = await Promise.all(promisesArray)
      
      setStories(storiesArray)
    }
    fetchStories()
  }, [ids])

  return stories
}