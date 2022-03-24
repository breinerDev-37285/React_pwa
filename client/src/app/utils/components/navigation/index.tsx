import { Link } from 'react-router-dom'

const MainNavigation = () => {
  return <nav>
      <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
            <li>
                <Link to='/contacts'>Contacts</Link>
            </li>
            <li>
                <Link to='/services'>Services</Link>
            </li>
            <li>
                <Link to='/login'>Login</Link>
            </li>
      </ul>
  </nav>
}

export default MainNavigation