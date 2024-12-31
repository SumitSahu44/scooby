import React, { useState } from "react";
import axios from "axios";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useDropzone } from "react-dropzone";
import './Predict.css'
import { use } from "react";
const Predict = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [prediction, setPrediction] = useState(null);
  const [confidence, setConfidence] = useState(null);
  const [progress, setProgress] = useState(0);

  const onDrop = (acceptedFiles) => {
    const uploadedFile = acceptedFiles[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      const previewUrl = URL.createObjectURL(uploadedFile);
      setPreview(previewUrl);
      setPrediction(null); // Reset prediction when a new file is uploaded
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleRemoveFile = () => {
    setFile(null);
    setPreview(null);
    setPrediction(null);
  };

  const handleGenerate = async () => {
    if (!file) {
      alert("Please upload a file before generating.");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await axios.post(
        "https://5000-patient-truth-71443484.in-ws1.runcode.io/predict",
        formData,
        {
          headers: {
            "x-api-key": "nawabBhaikamodel",
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setProgress(percentCompleted);
          },
        }
      );

      const result = response.data;
      setPrediction(result.prediction);
      setConfidence(result.confidence);
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong! Please try again.");
    } finally {
      setLoading(false);
      setProgress(0);
    }
  };

  return (
    <div className="app-content">
      <Sidebar />
      <div style={containerStyles}>
        <div style={leftContainerStyles}>
          <div style={uploadContainerStyles}>
            <div style={dropzoneContainerStyles}>
              <div {...getRootProps()} style={dropzoneStyles}>
                <input {...getInputProps()} />
                {file ? (
                  <div style={fileInfoStyles}>
                    <span>{file.name}</span>
                    <button onClick={handleRemoveFile} style={removeButtonStyles}>
                      🗑️
                    </button>
                  </div>
                ) : (
                  <p>Choose File or drop file here</p>
                )}
              </div>
              {preview && (
                <div style={previewContainerStyles}>
                  <img src={preview} alt="Preview" style={imagePreviewStyles} />
                </div>
              )}
            </div>
            <button style={generateButtonStyles} onClick={handleGenerate}>
              Generate
            </button>
          </div>
        </div>

        <div style={rightContainerStyles}>
          {!prediction ? (
            <div style={messageContainerStyles}>
              <p>Please upload a retina image and click on Generate</p>
            </div>
          ) : (
            <div style={predictionContainerStyles}>
              <h3>Prediction:</h3>
              <p>{prediction}</p>
              <br />

              <h3>confidence:</h3>
              <p>{confidence}</p>
            </div>
          )}
        </div>
      </div>

      {loading && (
        <div style={fullScreenLoaderStyles}>
          <div style={circularLoaderStyles}>
            <div style={{ ...circularSpinnerStyles, transform: `rotate(${progress}deg)` }} />
          </div>
        </div>
      )}
    </div>
  );
};

const containerStyles = {
  display: "flex",
  justifyContent: "space-around",
  padding: "30px",
  backgroundColor: "white",
  width: "75%",
  margin: "50px auto",
  height:"500px",
};

const leftContainerStyles = {
  // width: "30%",
};

const rightContainerStyles = {
  width: "30%",
  padding: "20px",
  backgroundColor: "white",
  borderRadius: "10px",
  boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
  height: "350px",
  // border: "2px solid red",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}
;

const uploadContainerStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderRadius: "10px",
  boxShadow:" rgba(0, 0, 0, 0.16) 0px 1px 4px",
  backgroundColor: "#fff",
  height:"350px",
  minWidth:"280px"
};

const dropzoneContainerStyles = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "20px",
};

const dropzoneStyles = {
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
};

const fileInfoStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
};

const removeButtonStyles = {
  marginLeft: "10px",
  border: "none",
  background: "transparent",
  cursor: "pointer",
  fontSize: "16px",
};

const generateButtonStyles = {
  padding: "10px 20px",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  marginTop:"15px",
};

const previewContainerStyles = {
  textAlign: "center",
  width: "200px",
};

const imagePreviewStyles = {
  width: "200px",
  height: "auto",
  borderRadius: "10px",
  boxShadow:" rgba(0, 0, 0, 0.16) 0px 1px 4px",
};

const predictionContainerStyles = {
  marginTop: "20px",
  textAlign: "center",
  fontSize: "18px",
  color: "#333",
};

const messageContainerStyles = {
  padding: "20px",
  textAlign: "center",
  color: "#666",
  fontSize: "16px",
  fontWeight:"bold",
  // border:"2px solid red",
};

const fullScreenLoaderStyles = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const circularLoaderStyles = {
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "4px solid #f3f3f3",
  borderTop: "4px solid #007bff",
  animation: "spin 1s linear infinite",
};

const circularSpinnerStyles = {
  width: "80%",
  height: "80%",
  borderRadius: "50%",
};

export default Predict;
