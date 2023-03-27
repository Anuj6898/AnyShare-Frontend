import React from 'react'
import "./css/Navbar.css"

export default function Navbar() {

  return (
    <div className='navbar'>
        <div className='logo'>
        </div>
        <ul className='nav-list'>
          <li>About Us</li>          
          <li>Ships</li>          
          <li>Contact</li>          
          <li>User</li>          
        </ul>
        {/* <div className=' open-menu'></div>
        <div className=' close-menu'></div> */}
    </div>
  )
}
