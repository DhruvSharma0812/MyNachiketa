import React from 'react'
import { Link } from 'react-router-dom'
import Profile from './Profile'
import Leaderboards from './Leaderboards'
import Tournaments from './Tournaments'

const home = () => {
  return (
    <div>
        <Link to='/Profile' >
            <button> Profile </button>
        </Link>
        <Link to='/Leaderboad' >
      <button> Leaderboard </button>
        </Link>

      <Link to='/Tournaments' >
      <button> Tournamets </button>
      </Link>
    </div>
  )
}

export default home


