import React from 'react'
import logo from '../../assets/Group 1.png'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='nav'>
       <div className='nav-items'>
         <img src={logo} alt="logo" />
       </div>
    </div>
  )
}

export default Navbar
