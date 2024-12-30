import React from "react";

const PatientTable = ({ patients }) => {
  return (
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr style={{ background: "#f9f9f9" }}>
          <th style={styles.header}>Patient Name</th>
          <th style={styles.header}>Phone</th>
          <th style={styles.header}>Age</th>
          <th style={styles.header}>Gender</th>
          <th style={styles.header}>Action</th>
        </tr>
      </thead>
      <tbody>
        {patients.map((patient, index) => (
          <tr key={patient.id || index} style={styles.row}>
            <td style={styles.cell}>{patient.name}</td>
            <td style={styles.cell}>{patient.phone}</td>
            <td style={styles.cell}>{patient.age}</td>
            <td style={styles.cell}>{patient.gender}</td>
            <td style={styles.cell}>
              <button style={styles.button}>Generate</button>
              <button style={styles.button}>View</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const styles = {
  header: { border: "1px solid #ddd", padding: "8px", textAlign: "left" },
  cell: { border: "1px solid #ddd", padding: "8px" },
  row: { background: "#fff" },
  button: { margin: "0 5px", padding: "5px 10px", cursor: "pointer" },
};

export default PatientTable;