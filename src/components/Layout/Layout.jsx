import { useState } from 'react'
import {BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import App from '../../App'
import { Nav } from '../Nav/Nav'
import { Story } from '../Story/Story'

export default function Layout () {
  const [topic, setTopic] = useState('top') // 'best', 'new'
  return (
    <BrowserRouter>
      <Nav topic={topic} setTopic={setTopic} />
      <h1>React News App</h1>
      <Routes>
        <Route path='/' element={null}>
          <Route path='/top' element={<App topic={'top'} />}>
            <Route path=':storyId' element={<Story />} />
          </Route>
          <Route path='/best' element={<App topic={'best'} />} >
            <Route path=':storyId' element={<Story />} />
          </Route>
          <Route path='/new' element={<App topic={'new'} />} >
            <Route path=':storyId' element={<Story />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}