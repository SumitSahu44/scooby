import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Login from './pages/Login/Login'
import {Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard'
import Patient from './pages/Patient/Patient'
import Predict from './pages/Predict/Predict'
const App = () => {
 
 
  return (
    <div>
          <Navbar/>

          <Routes>
          <Route path="/" element={<Login/>}/>
           <Route path="/dashboard" element={<Dashboard/>}/>
           <Route path="/patient" element={<Patient />}/>
           <Route path="/predict" element={<Predict  />}/>
        </Routes>
    </div>
  )
}

export default App
