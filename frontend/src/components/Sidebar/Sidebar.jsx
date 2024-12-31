import React from 'react'
import './Sidebar.css'
import { HiShoppingBag } from "react-icons/hi2";
import { IoMdPeople } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import {NavLink} from 'react-router-dom'
import { MdOutlineOnlinePrediction } from "react-icons/md";


const Sidebar = () => {
  return (
    <div className='sidebar'>
       <div className="sidebar-options">
         <NavLink to='/dashboard' className="sidebar-option">
            <HiShoppingBag className='sidebar-icon'/>
           <p className="text">Dashboard</p>
         </NavLink>
     
       
         <NavLink to='/patient' className="sidebar-option">
            <IoMdPeople className='sidebar-icon'/>
           <p className="text">Patients</p>
         </NavLink>
       
         {/* <NavLink to='/setting' className="sidebar-option">
         <IoSettingsOutline className='sidebar-icon'/>
           <p>Settings</p>
         </NavLink> */}
   
         <NavLink to='/predict' className="sidebar-option">
         <MdOutlineOnlinePrediction className='sidebar-icon'/>
           <p className="text">Diagnosis</p>
         </NavLink>
   
      </div>
    </div>
  )
}

export default Sidebar
