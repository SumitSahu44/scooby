import React from 'react'
import './Sidebar.css'
import { HiShoppingBag } from "react-icons/hi2";
import { IoMdPeople } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import {NavLink} from 'react-router-dom'


const Sidebar = () => {
  return (
    <div className='sidebar'>
       <div className="sidebar-options">
         <NavLink to='/dashboard' className="sidebar-option">
            <HiShoppingBag className='sidebar-icon'/>
           <p>Dashboard</p>
         </NavLink>
     
       
         <NavLink to='/patient' className="sidebar-option">
            <IoMdPeople className='sidebar-icon'/>
           <p>Patients</p>
         </NavLink>
       
         <NavLink to='/setting' className="sidebar-option">
         <IoSettingsOutline className='sidebar-icon'/>
           <p>Settings</p>
         </NavLink>
   
      </div>
    </div>
  )
}

export default Sidebar