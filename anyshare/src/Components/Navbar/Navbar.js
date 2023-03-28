import React from 'react'
import "./css/Navbar.css"

export default function Navbar() {

  return (
    <div className='navbar'>
        <div className='logo'>
        </div>
        <ul className='nav-list'>
          <li><a href='/'> About Us</a></li>          
          <li><a href='/'> Ships</a></li>          
          <li><a href='/'> Contact</a></li>          
          <li><a href='/'> User</a></li>          
        </ul>
        {/* <div className=' open-menu'></div>
        <div className=' close-menu'></div> */}
    </div>
  )
}
