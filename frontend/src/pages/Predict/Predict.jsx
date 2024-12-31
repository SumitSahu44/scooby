import React, { useState } from "react";
import axios from "axios";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useDropzone } from "react-dropzone";


const Predict = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false); // For loading animation
  const [prediction, setPrediction] = useState(null); // To display prediction
  const [progress, setProgress] = useState(0);


  const onDrop = (acceptedFiles) => {
    const uploadedFile = acceptedFiles[0];
    if (uploadedFile) {
      setFile(uploadedFile);

      // Create a preview URL for the image
      const previewUrl = URL.createObjectURL(uploadedFile);
      setPreview(previewUrl);
      setPrediction(null); // Reset the prediction when a new file is uploaded
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleRemoveFile = () => {
    setFile(null);
    setPreview(null);
    setPrediction(null); // Reset the prediction when the file is removed
  };

  const handleGenerate = async () => {
    if (!file) {
      alert("Please upload a file before generating.");
      return;
    }
  
    setLoading(true); // Show loading animation
  
    try {
      // Prepare the form data
      const formData = new FormData();
      formData.append("file", file);
  
      // Make the POST request using axios
      const response = await axios.post(
        "https://5000-patient-truth-71443484.in-ws1.runcode.io/predict",
        formData,
        {
          headers: {
            "x-api-key": "nawabBhaikamodel",
            "Content-Type": "multipart/form-data", // Axios automatically sets the boundary
          },
          onUploadProgress: (progressEvent) => {
            // Calculate and log the upload progress percentage
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            console.log(`Progress: ${percentCompleted}%`);
            setProgress(percentCompleted); // Update progress state for loading animation
          },
        }
      );
  
      // Assuming the API returns a "prediction" key
      const result = response.data;
      setPrediction(result.prediction);
      console.log("Server Response:", result);
    } catch (error) {
      console.error("Error:", error);
      
      alert("Something went wrong! Please try again.");
    } finally {
      setLoading(false); // Hide loading animation
      setProgress(0); // Reset progress
    }
  };

  return (
    <div className="app-content">
      <Sidebar />

      <div style={styles.container} className="flex-col">
        <div style={styles.uploadContainer}>
          <div style={styles.dropzoneContainer}>
            <div {...getRootProps()} style={styles.dropzone}>
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

            {/* Display the preview if an image is uploaded */}
            {preview && (
              <div style={styles.previewContainer}>
                <img src={preview} alt="Preview" style={styles.imagePreview} />
              </div>
            )}
          </div>

          <button style={styles.generateButton} onClick={handleGenerate}>
            Generate
          </button>
        </div>

        {/* Show loading animation */}
        {loading && <div style={styles.loader}>Loading...</div>}


        {/* // Add this in your JSX */}
                {loading && (
                <div style={styles.progressBarContainer}>
                    <div
                    style={{
                        ...styles.progressBar,
                        width: `${progress}%`,
                    }}
                    >
                    {progress}%
                    </div>
                </div>
                )}

        {/* Display prediction */}
        {prediction && (
          <div style={styles.predictionContainer}>
            <h3>Prediction:</h3>
            <p>{prediction}</p>
          </div>
        )}
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
    height: "400px",
    backgroundColor: "white",
    width: "70%",
    margin: "40px auto",
  },
  progressBarContainer: {
    width: "100%",
    backgroundColor: "#f3f3f3",
    borderRadius: "5px",
    marginTop: "20px",
    overflow: "hidden",
  },
  progressBar: {
    height: "10px",
    backgroundColor: "#4caf50",
    textAlign: "center",
    lineHeight: "10px",
    color: "white",
    transition: "width 0.3s",
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
  dropzoneContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "20px",
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
  previewContainer: {
    textAlign: "center",
    width: "200px",
  },
  imagePreview: {
    width: "200px",
    height: "auto",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  loader: {
    marginTop: "20px",
    fontSize: "16px",
    color: "#007bff",
  },
  predictionContainer: {
    marginTop: "20px",
    textAlign: "center",
    fontSize: "18px",
    color: "#333",
  },
};

export default Predict;
