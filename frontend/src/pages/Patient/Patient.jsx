import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import PatientSummary from '../../components/PatientSummary/PatientSummary'
const Patient = () => {
  return (
    <div className='app-content'>
            <Sidebar/>


               <div className='flex-col' >
                     <PatientSummary/>
              </div>
    </div>
  )
}

export default Patient
