import React, { useState } from "react";
import PatientTable from "../PatientTable/PatientTable";

const PatientSummary = () => {
  const [patients, setPatients] = useState([
    {
      id: 1,
      name: "Janet Adebayo",
      phone: "+2348065560633",
      age: 23,
      gender: "Male",
    },
    // Add more patient data here as needed
  ]);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Patient's Summary</h1>
      <div style={{ marginBottom: "20px", display: "flex", justifyContent: "space-between" }}>
        <span>All Patients: {patients.length}</span>
        <div>
          <button style={{ marginRight: "10px" }}>Import CSV File</button>
          <button>Add New Patient</button>
        </div>
      </div>
      <PatientTable patients={patients} />
    </div>
  );
};

export default PatientSummary;