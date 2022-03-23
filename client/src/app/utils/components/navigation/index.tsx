import { Link } from 'react-router-dom'

const MainNavigation = () => {
  return <nav>
      <ul>
          <li>
              <Link to='/'>Landing</Link>
          </li>
          <li>
              <Link to='/login'>Auth login</Link>
          </li>
          <li>
              <Link to='/protected'>Protected App</Link>
          </li>
      </ul>
  </nav>
}

export default MainNavigation