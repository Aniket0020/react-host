import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className='d-flex'>
        <ul>
            <li><NavLink to={"/"}>Home</NavLink></li>
            <li><NavLink to={"About/"}>About</NavLink></li>
            <li><NavLink to={"post/"}>post</NavLink></li>
    
         

        </ul>
    </nav>
  
)
}
export default Navbar;