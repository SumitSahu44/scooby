import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const Composite = ({ data }) => {
  const labels = data.labels || [];
  const colors = data.datasets[0].backgroundColor || [];

  const styles = {
    container: {
      width: '50%',
      margin: '20px auto',
      textAlign: 'center',
    //   border:"2px solid red",
      boxShadow: "rgba(217, 215, 215, 0.24) 0px 3px 8px",
      backgroundColor: "white",
      borderRadius:"12px",
      height: "300px",
      padding:"20px",
    },
    content: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',

    },
    chartContainer: {
      flex: 1,
      maxWidth: '50%',

    },
    labelsContainer: {
      flex: 1,
      maxWidth: '20%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      paddingRight: '20px',

    },
    labelItem: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '10px',
    },
    labelColor: (bgColor) => ({
      width: '15px',
      height: '15px',
      marginRight: '10px',
      borderRadius: '50%',
      backgroundColor: bgColor,
    }),
  };

  return (
    <div style={styles.container}>
      <h3>Composition</h3>
      {console.log(data)}
      <div style={styles.content}>
        <div style={styles.chartContainer}>
          <Doughnut data={data} />
        </div>
        <div style={styles.labelsContainer}>
          {labels.map((label, index) => (
            <div key={index} style={styles.labelItem}>
              <span style={styles.labelColor(colors[index])}></span>
              {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Composite;
