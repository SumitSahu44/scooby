import React from 'react'
import logo from '../../assets/Group 1.png'
import './Navbar.css'

// basic navbar component 
const Navbar = () => {
  return (
    <div className='nav'>
       <div className='nav-items'>
         <img src={logo} alt="logo" />
          <p>Ratino Care</p>
       </div>
    </div>
  )
}

export default Navbar
