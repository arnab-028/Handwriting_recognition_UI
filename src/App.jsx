// App.jsx
import React, { useState } from 'react';
import './App.css';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import Filter1Icon from '@mui/icons-material/Filter1'; // Changed import statement

function App() {
  const [imageFile, setImageFile] = useState(null);
  const [recognizedDigit, setRecognizedDigit] = useState('');
  const [previewImage, setPreviewImage] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setImageFile(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you would send the imageFile to your backend service or machine learning model
    // for digit recognition. For now, we'll just set a placeholder value.
    setRecognizedDigit('5');
  };

  return (
    <div className="App">
      <h1>Handwriting Digit Recognition</h1>
      <div className="container">
        <div className="upload-section">
          <div className="icon-container">
            <UploadFileIcon className="icon" />
            <h2>Upload Section</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <input type="file" accept="image/*" onChange={handleFileChange} id="file-input" />
            <label htmlFor="file-input" className="file-label">
              {imageFile ? imageFile.name : 'Choose an image'}
            </label>
            <button type="submit" className="submit-button">
              Recognize Digit
            </button>
          </form>
          {previewImage && <img src={previewImage} alt="Preview" className="preview-image" />}
        </div>
        <div className="output-section">
          <div className="icon-container">
            {/* Changed img tag to use MUI Filter1Icon */}
            <Filter1Icon className="icon" />
            <h2>Output Section</h2>
          </div>
          <div className="digit-container">
            <p className="recognized-digit">{recognizedDigit}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
