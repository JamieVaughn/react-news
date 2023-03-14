import { useState, useEffect } from 'react'
import './App.css'

// https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty
// https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty
// beststories
// newstories

function App() {
  const [topic, setTopic] = useState('top') // 'best', 'new'
  const [ids, setIds] = useState([])
  const [stories, setStories] = useState([])

  useEffect(() => {
    async function fetchIds (topic) {
      const response = await fetch(`https://hacker-news.firebaseio.com/v0/${topic}stories.json?print=pretty`)
      const data = await response.json()
      setIds(data.slice(0, 20))
      console.log('ids', ids)
    }
    fetchIds(topic)
  }, [])

  useEffect(() => {
    async function fetchStories () {
      const promisesArray = await ids.map(id => fetch(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
        ).then(resp => resp.json()))
    
      const storiesArray = await Promise.all(promisesArray)
      
      setStories(storiesArray)
      console.log('stories', storiesArray)
    }
    fetchStories()
  }, [ids])

  return (
    <div className="App">
      <h1>React News App</h1>
      <ul>
        {
          stories.map(story => (
          <li key={story.id}>
            <div>{story.score} : <a href={`https://news.ycombinator.com/item?id=${story.id}`}>{story.title}</a> - {story.by}</div>
          </li>
          ))
        }
      </ul>
    </div>
  )
}

export default App
