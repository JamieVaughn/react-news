import { useFetch } from './hooks/useFetch'
import { NavLink, Outlet } from 'react-router-dom'
import './App.css'

// https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty
// https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty
// beststories
// newstories

function App(props) {
  const { topic } = props
  const stories = useFetch(topic)
  console.log('stories', stories)
  
  // const {data, loading, error} = useGeneralFetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
  // if (loading) {
  //   return 'Loading...'
  // }

  return (
    <div className="App">
      <Outlet />

      <ul className="stories-list">
        {
          stories.map(story => {
            let path
            if('url' in story) {
              path = `/${topic}/${story.id}?url=${story.url}`
            } else if ('text' in story) {
              path = `/${topic}/${story.id}?text=${story.text}`
            }
          return (
            <li key={story.id}>
              <div>{story.score} : 
                <a href={`https://news.ycombinator.com/item?id=${story.id}`}>
                  {story.title}
                </a> -
                <NavLink to={path}>
                  [Show Source]
                </NavLink> -
                {story.by}
              </div>
            </li>
           )
          })
        }
      </ul>
    </div>
  )
}

export default App
