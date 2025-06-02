import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    
    <nav>
       <NavLink to="/">
        <span><i className="fa-sharp fa-solid fa-ticket"></i></span>
        <span>Events</span>
       </NavLink>
    </nav>
  )
}

export default Nav