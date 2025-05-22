import React, { useState } from 'react';

const AddReview = () => {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    date: "",
    content: "",
    isTop: "",
  });
  const [imagePreview, setImagePreview] = useState("");
  const [uploading, setUploading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, 
      [name]: name === 'name' || name === 'lastname' || name === 'date'
        ? value.toLowerCase()
        : value
    });
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Set preview
    setImagePreview(URL.createObjectURL(file));
    setUploading(true);

    try {
      const formData = new FormData();
      formData.append('file', file);
      
      // Upload to Cloudinary via your API
      const uploadRes = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/upload`, {
        method: 'POST',
        body: formData,
        headers: {
          'token': JSON.parse(localStorage.getItem('myuser')).token,
        },
      });

      const uploadData = await uploadRes.json();
      console.log("Upload data", uploadData)
      
      if (uploadData.secure_url) {
        setFormData(prev => ({
          ...prev,
          image: uploadData.secure_url
        }));
      } else {
        throw new Error('Image upload failed');
      }
    } catch (error) {
      console.error('Upload error:', error);
      alert('Image upload failed. Please try again.');
      setImagePreview("");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.image) {
      alert("Please upload a customer image");
      return;
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/addreview`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "token": JSON.parse(localStorage.getItem('myuser')).token,
      },
      body: JSON.stringify([formData]),
    });

    const data = await res.json();
    if (data.success) {
      alert("Review added successfully!");
      setFormData({
        name: "",
        image: "",
        date: "",
        content: "",
        isTop: "",
      });
      setImagePreview("");
    } else {
      alert(data.error || "Failed to add Review!");
    }
  };

  return (
    <section className="bg-white">
      <div className="py-2 px-4 mx-auto max-w-2xl lg:py-4">
        <h2 className="mb-4 text-xl font-bold text-gray-900">Add a new Review</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Customer Name</label>
              <input type='text' id='name' name='name' value={formData.name} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" placeholder="Type customer name" required />
            </div>
            
            <div className="sm:col-span-2">
              <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900">Customer Image</label>
              <input 
                type="file" 
                id="image" 
                name="file" 
                accept="image/*" 
                onChange={handleImageChange}
                className="block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-md file:border-0
                  file:text-sm file:font-semibold
                  file:bg-blue-50 file:text-blue-700
                  hover:file:bg-blue-100"
                required
              />
              {uploading && <p className="text-sm text-gray-500 mt-1">Uploading image...</p>}
              {imagePreview && (
                <div className="mt-2">
                  <img 
                    src={imagePreview} 
                    alt="Preview" 
                    className="h-24 w-24 object-cover rounded-full border border-gray-200"
                  />
                </div>
              )}
            </div>
            
            <div className="w-full">
              <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900">Date</label>
              <input type='text' id='date' name='date' value={formData.date} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" placeholder="Review date" required />
            </div>            
            
            <div className="sm:col-span-2">
              <label htmlFor="content" className="block mb-2 text-sm font-medium text-gray-900">Customer Review</label>
              <textarea type='text' id='content' name='content' value={formData.content} onChange={handleChange} rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Your description here" required></textarea>
            </div>
            
            <div>
              <label htmlFor="isTop" className="block mb-2 text-sm font-medium text-gray-900">Is Top</label>
              <select id='isTop' name='isTop' value={formData.isTop} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
                <option value="">Select Top Review</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>
          </div>
          <button 
            type="submit" 
            disabled={uploading}
            className={`inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-gray-800 hover:text-gray-200 border bg-gray-100 border-gray-800 text-black uppercase ${uploading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {uploading ? 'Uploading...' : 'Add Review'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default AddReview;