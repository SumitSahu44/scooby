import React from 'react'
import { Doughnut } from "react-chartjs-2";
import Sidebar from '../../components/Sidebar/Sidebar'
import './Dashboard.css'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);


// create data for charts 
const data = {
    labels: ["No DR", "Mild", "Moderate", "Severe", "Proliferate"],
    datasets: [
      {
        label: "Composition",
        data: [14, 17, 23, 27, 19], // Values for each section
        backgroundColor: [
          "#36A2EB", // Blue for "No DR"
          "#FFCE56", // Yellow for "Mild"
          "#FF6384", // Red for "Moderate"
          "#4BC0C0", // Teal for "Severe"
          "#9966FF", // Purple for "Proliferate"
        ],
        hoverOffset: 4, // Adds hover effect
      },
    ],
  };
  





// dashboard
const Dashboard = () => {
  return (
    <div className='app-content'>
          <Sidebar/>
              



    <div style={{ padding: "20px" }}  className='flex-col' >
      <h2>Dashboard</h2>
      
      <div className="main-container">
        {/* Total Patients */}
        <div className="patient-container">
          <h3 className="title">Total Patients</h3>
          <div className="patient-circle" style={{
              width: "150px",
              height: "150px",
              margin: "0 auto",
              borderRadius: "50%",
              border: "5px solid #36A2EB",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: "24px", fontWeight: "bold" }}>109</span>
          </div>
        </div>
        
        {/* Composition Doughnut Chart */}
        <div className="composite-container">
          <h3>Composition</h3>
          {
            console.log(data)
          }
          <Doughnut data={data} />
        </div>
        
        {/* Gender Breakdown */}
        <div className="gender-container">
          <h3>Gender</h3>
          <div>
            <div>Male: 128</div>
            <div style={{ background: "#36A2EB", height: "10px", width: "70%" }}></div>
          </div>
          <div>
            <div>Female: 105</div>
            <div style={{ background: "#FFCE56", height: "10px", width: "50%" }}></div>
          </div>
          <div>
            <div>Other: 25</div>
            <div style={{ background: "#FF6384", height: "10px", width: "15%" }}></div>
          </div>
        </div>
      </div>
    </div>

     </div>
  )
}

export default Dashboard
