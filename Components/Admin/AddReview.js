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
    <section className="bg-gradient-to-br from-[#f0fdf4] to-[#e6f7ed] py-8 px-4">
      <div className="mx-auto max-w-2xl bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Form Header */}
        <div className="bg-[#2d9155] p-6 text-white">
          <h2 className="text-2xl font-bold">Share Your Experience</h2>
          <p className="opacity-90">We value your feedback about our services</p>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid gap-6">
            {/* Customer Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Your Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2d9155] focus:border-[#2d9155] transition duration-200"
                  placeholder="Enter your name"
                  required
                />
              </div>
            </div>

            {/* Image Upload */}
            <div>
              <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
                Your Photo <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-4">
                <label className="flex flex-col items-center justify-center w-full max-w-xs">
                  <div className={`flex flex-col items-center justify-center pt-5 pb-6 border-2 border-dashed rounded-lg cursor-pointer transition-all duration-200 hover:border-[#2d9155] ${imagePreview ? 'border-gray-300' : 'border-gray-300'}`}>
                    {imagePreview ? (
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="h-24 w-24 object-cover rounded-full border-2 border-[#2d9155]"
                      />
                    ) : (
                      <>
                        <svg className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-sm text-gray-500">Click to upload photo</p>
                      </>
                    )}
                    <input
                      id="image"
                      name="file"
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                      required
                    />
                  </div>
                </label>
                {uploading && (
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-[#2d9155]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Uploading...
                  </div>
                )}
              </div>
            </div>

            {/* Review Date */}
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                Review Date <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <input
                  type="text"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2d9155] focus:border-[#2d9155] transition duration-200"
                  required
                />
              </div>
            </div>

            {/* Review Content */}
            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
                Your Review <span className="text-red-500">*</span>
              </label>
              <textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                rows="6"
                className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2d9155] focus:border-[#2d9155] transition duration-200"
                placeholder="Share your experience with us..."
                required
              ></textarea>
            </div>

            {/* Featured Review */}
            <div>
              <label htmlFor="isTop" className="block text-sm font-medium text-gray-700 mb-1">
                Feature this review? <span className="text-red-500">*</span>
              </label>
              <select
                id="isTop"
                name="isTop"
                value={formData.isTop}
                onChange={handleChange}
                className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2d9155] focus:border-[#2d9155] transition duration-200"
                required
              >
                <option value="">Select an option</option>
                <option value="true">Yes, feature this review</option>
                <option value="false">No, keep as regular review</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={uploading}
                className={`w-full flex justify-center items-center py-3 px-6 rounded-lg text-lg font-medium text-white bg-[#2d9155] hover:bg-[#1a6938] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2d9155] transition-colors duration-300 ${uploading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {uploading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  'Submit Review'
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default AddReview;