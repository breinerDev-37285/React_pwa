import { Link } from 'react-router-dom'

export const Navigation = () => {
  return <nav>
      <ul>
          <li><Link to='/login'>Sign In</Link></li>
          <li><Link to='/login/register'>Register</Link></li>
      </ul>
  </nav>
}

export default Navigation
