'use client'

import { useState } from 'react';
import axios from 'axios';

export default function ImageUploader() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState('');
  const [uploading, setUploading] = useState(false);
  const [uploadResult, setUploadResult] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpload = async () => {
    if (!image) return;

    setUploading(true);
    
    try {
      const formData = new FormData();
      formData.append('file', image);
      
      const response = await axios.post('/api/uploadImage', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      setUploadResult(response.data);
      console.log('Upload successful:', response.data);
    } catch (error) {
      console.error('Upload failed:', error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Upload Image to Cloudinary</h1>
      
      <div className="mb-4">
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleImageChange} 
          className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-md file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100"
        />
      </div>
      
      {preview && (
        <div className="mb-4">
          <img 
            src={preview} 
            alt="Preview" 
            className="max-w-full h-auto rounded-md"
            style={{ maxHeight: '300px' }}
          />
        </div>
      )}
      
      <button
        onClick={handleUpload}
        disabled={!image || uploading}
        className={`px-4 py-2 rounded-md text-white ${uploading || !image ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
      >
        {uploading ? 'Uploading...' : 'Upload Image'}
      </button>
      
      {uploadResult && (
        <div className="mt-4 p-3 bg-green-50 rounded-md">
          <h3 className="font-medium text-green-800">Upload Successful!</h3>
          <p className="text-sm text-green-600 mt-1">
            Image URL: <a href={uploadResult.secure_url} target="_blank" rel="noopener noreferrer" className="underline">
              {uploadResult.secure_url}
            </a>
          </p>
          <p className="text-sm text-green-600">Public ID: {uploadResult.public_id}</p>
        </div>
      )}
    </div>
  );
}