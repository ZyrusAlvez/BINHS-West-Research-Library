import React, { useState } from "react";
import axios from "axios";

const FileUploader = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]); // Store the single uploaded file
  };

  const handleSubmit = async () => {
    if (!file) {
      alert("Please select a file first.");
      return;
    }

    // Create a FormData object to include the file
    const formData = new FormData();
    formData.append("file", file); // Add the file with a "file" key

    try {
      // Send the file to the backend via API
      const response = await axios.post(
        "http://localhost:5000/api/research/grade12/capstone/postFile",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Required for file uploads
          },
        }
      );

      alert("File uploaded successfully!");
      console.log(response.data); // Handle response from backend
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Failed to upload file.");
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleSubmit}>Upload File</button>
    </div>
  );
};

export default FileUploader;
