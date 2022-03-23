import React from 'react'
import { Link } from 'react-router-dom'

export const NotMatch = () => {
  return (
    <div>
        <h1>Are you lost? ...</h1>
        <Link to='/'>Go to home page</Link>
    </div>
  )
}

export default NotMatch
