import { NavLink } from "react-router-dom"

export function Nav (props) {
  const { topic, setTopic } = props
  return (
    <nav>
      <ul className="nav-list">
        <NavLink to="/top">
          <li 
          className={`${topic === 'top' && 'active'}`}
          onClick={() => setTopic('top')}>Top Stories</li>
        </NavLink>
        <NavLink to="/best">
          <li 
          className={`${topic === 'best' && 'active'}`}
          onClick={() => setTopic('best')}>Best Stories</li>
        </NavLink>
        <NavLink to="/new">
          <li 
          className={`${topic === 'new' && 'active'}`}
          onClick={() => setTopic('new')}>New Stories</li>
        </NavLink>
      </ul>
    </nav>
  )
}