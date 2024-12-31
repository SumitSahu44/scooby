import React, { useState } from "react";
import Sidebar from '../../components/Sidebar/Sidebar';
import { useDropzone } from "react-dropzone";

const Predict = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const onDrop = (acceptedFiles) => {
    const uploadedFile = acceptedFiles[0];
    if (uploadedFile) {
      setFile(uploadedFile);

      // Create a preview URL for the image
      const previewUrl = URL.createObjectURL(uploadedFile);
      setPreview(previewUrl);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleRemoveFile = () => {
    setFile(null);
    setPreview(null);
  };

  const handleGenerate = () => {
    if (file) {
      console.log("File submitted:", file.name);
    } else {
      alert("Please upload a file before generating.");
    }
  };

  return (
    <div className='app-content'>
      <Sidebar />

      <div style={styles.container} className='flex-col'>
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
    height: "500px",
    backgroundColor: "white",
    width: "70%",
    margin: "40px auto",
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
};

export default Predict;
