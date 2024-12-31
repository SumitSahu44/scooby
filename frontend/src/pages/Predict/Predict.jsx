import React, { useState } from "react";
import Sidebar from '../../components/Sidebar/Sidebar'
import { useDropzone } from "react-dropzone";

const Predict = () => {
  const [file, setFile] = useState(null);

  const onDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleRemoveFile = () => {
    setFile(null);
  };

  const handleGenerate = () => {
    if (file) {
      console.log("File submitted:", file.name);
    } else {
      alert("Please upload a file before generating.");
    }
  };

  return (

    <div  className='app-content'>
            <Sidebar/>    







     <div style={styles.container}  className='flex-col' >
      {/* <button style={styles.backButton} onClick={() => console.log("Back clicked")}>
        Back
      </button> */}
      <div style={styles.uploadContainer}>
        <div
          {...getRootProps()}
          style={styles.dropzone}
        >
          <input {...getInputProps()} />
          {file ? (
            <div style={styles.fileInfo}>
              <span>{file.name}</span>
              <button onClick={handleRemoveFile} style={styles.removeButton}>
                🗑️
              </button>
            </div>
          ) : (
            <p>Choose File or drop file here</p>
          )}
        </div>
        <button style={styles.generateButton} onClick={handleGenerate}>
          Generate
        </button>
      </div>
    </div>
   </div>





  
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f9fafb",
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
    padding: "5px 10px",
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "5px",
    cursor: "pointer",
  },
  uploadContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  dropzone: {
    width: "200px",
    height: "200px",
    border: "2px dashed #ddd",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#aaa",
    cursor: "pointer",
  },
  fileInfo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  removeButton: {
    marginLeft: "10px",
    border: "none",
    background: "transparent",
    cursor: "pointer",
    fontSize: "16px",
  },
  generateButton: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Predict;
