import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Login from './pages/Login/Login'
import {Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard'
import Patient from './pages/Patient/Patient'
const App = () => {
 
  const url = "http://localhost:5000";
  return (
    <div>
          <Navbar/>

          <Routes>
          <Route path="/" element={<Login url={url}/>}/>
           <Route path="/dashboard" element={<Dashboard url={url}/>}/>
           <Route path="/patient" element={<Patient />}/>
        
        </Routes>
    </div>
  )
}

export default App
