import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";

const AllReview = () => {
  const [reviews, setReviews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedReview, setSelectedReview] = useState(null);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [query, setQuery] = useState("");
  const reviewsPerPage = 10;

  useEffect(() => {
    fetchReviews();
  }, [currentPage]);

  const handleSearchInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    fetchSerchedReviews(value);
  };

  const fetchSerchedReviews = async (searchQuery) => {
    const queryString = new URLSearchParams({ q: searchQuery }).toString();
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/search-review?${queryString}`);
      const data = await response.json();
      setReviews(data.reviews);
    } catch (err) {
      console.error("Error fetching reviews:", err);
    }
  };

  const fetchReviews = async () => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/getreview`); // Replace with your API endpoint
    setReviews(res.data.reviews);
    setTotalPages(Math.ceil(res.data.reviews.length / reviewsPerPage));
  };

  const handleUpdate = (review) => {
    setSelectedReview(review);
    setShowUpdateModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedReview((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const handleDelete = (review) => {
    setSelectedReview(review);
    setShowDeleteModal(true);
  };

  const deleteReview = async () => {
    // await axios.delete(`/api/delete-review/${selectedReview._id}`); // Replace with your API endpoint
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/delete-review?id=${selectedReview._id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          "token": JSON.parse(localStorage.getItem('myuser')).token,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete review');
      }

      const data = await response.json();
      setShowDeleteModal(false);
      fetchReviews();
      return data;

    } catch (error) {
      console.error('Error deleting review:', error);
      throw error;
    }
  };

  const updateReview = async (updatedReview) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/update-review`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "token": JSON.parse(localStorage.getItem('myuser')).token,
        },
        body: JSON.stringify([updatedReview]),
      });

      if (!response.ok) {
        throw new Error('Failed to update review');
      }

      const data = await response.json();
      setShowUpdateModal(false);
      alert("Review updated successfully!");
      fetchReviews();
      return data;

    } catch (error) {
      console.error('Error updating review:', error);
      throw error;
    }
  };

  const paginatedReviews = reviews.slice(
    (currentPage - 1) * reviewsPerPage,
    currentPage * reviewsPerPage
  );

  return (
    <div className="p-4 bg-[#f0fdf4] rounded-xl shadow-md">
      {/* Header with search */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-[#166534] to-[#2d9155] bg-clip-text text-transparent">
          Reviews List
        </h1>

        <div className="relative w-full sm:w-64">
          <label htmlFor="Search" className="sr-only">Search</label>
          <input onChange={handleSearchInputChange} value={query} type="text" id="Search" placeholder="Search for..."
            className="w-full rounded-lg border border-[#1a6938] py-2 pl-3 pr-10 shadow-sm sm:text-sm focus:ring-2 focus:ring-[#2d9155] transition-all duration-300" />
          <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-[#1a6938]">
            <CiSearch className="text-xl" />
          </span>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow-lg border border-[#ccebdc]">
        <table className="table-auto w-full text-sm">
          <thead>
            <tr className="bg-gradient-to-r from-[#166534] to-[#2d9155] text-white">
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Period</th>
              <th className="px-4 py-2 text-left">Content</th>
              <th className="px-4 py-2 text-left">Is Top</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedReviews.map((review) => (
              <tr key={review._id} className="even:bg-[#f9fdfb] border-t">
                <td className="px-4 py-2 capitalize">{review.name}</td>
                <td className="px-4 py-2">{review.date}</td>
                <td className="px-4 py-2">
                  {review.content.split(" ").slice(0, 30).join(" ")}
                  {review.content.split(" ").length > 30 && "..."}
                </td>
                <td className="px-4 py-2">{review.isTop}</td>
                <td className="px-4 py-2 flex gap-2 flex-wrap">
                  <button onClick={() => handleUpdate(review)}
                    className="bg-[#f0fdf4] text-[#166534] border border-[#1a6938] px-3 py-1 rounded-lg hover:bg-[#2d9155]
              hover:text-white transition-all duration-300"
                  >
                    Update
                  </button>
                  <button onClick={() => handleDelete(review)}
                    className="bg-red-100 text-red-700 border border-red-300 px-3 py-1 rounded-lg hover:bg-red-600
              hover:text-white transition-all duration-300"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 gap-2">
        <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="px-4 py-2 rounded-lg border bg-white text-[#166534] hover:bg-[#2d9155] hover:text-white transition"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button key={index} onClick={() => setCurrentPage(index + 1)}
            className={`px-4 py-2 rounded-lg border ${currentPage === index + 1
              ? "bg-[#2d9155] text-white"
              : "bg-white text-[#166534] hover:bg-[#1a6938] hover:text-white transition"
              }`}
          >
            {index + 1}
          </button>
        ))}
        <button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          className="px-4 py-2 rounded-lg border bg-white text-[#166534] hover:bg-[#2d9155] hover:text-white transition"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

      <div className="flex justify-end text-sm text-gray-500 mt-2">
        <p>Showing {currentPage} of {totalPages} pages</p>
      </div>

      {showUpdateModal && (
        <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center px-4">
          <div
            className="bg-white rounded-xl shadow-lg w-full max-w-2xl p-6 overflow-y-auto max-h-[90vh] transition-all duration-300">
            <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-[#166534] to-[#2d9155] bg-clip-text text-transparent">
              Update Review
            </h2>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="name" className="block mb-1 text-sm font-medium text-[#1a6938]">
                  Customer Name
                </label>
                <input type="text" id="name" name="name" value={selectedReview.name || ""} onChange={handleInputChange}
                  placeholder="Type customer name"
                  className="w-full rounded-lg border border-[#ccebdc] p-2.5 text-sm focus:ring-[#2d9155] focus:border-[#2d9155] transition-all"
                  required />
              </div>

              <div>
                <label htmlFor="date" className="block mb-1 text-sm font-medium text-[#1a6938]">
                  Period
                </label>
                <input type="text" id="date" name="date" value={selectedReview.date || ""} onChange={handleInputChange}
                  placeholder="Customer time period"
                  className="w-full rounded-lg border border-[#ccebdc] p-2.5 text-sm focus:ring-[#2d9155] focus:border-[#2d9155]"
                  required />
              </div>

              <div>
                <label htmlFor="img" className="block mb-1 text-sm font-medium text-[#1a6938]">
                  Image Cannot be update.
                </label>
                <input type="text" id="img" name="img" value={selectedReview.img || ""} onChange={handleInputChange}
                  placeholder="Transformation image URL"
                  className="w-full rounded-lg border border-[#ccebdc] p-2.5 text-sm focus:ring-[#2d9155] focus:border-[#2d9155] cursor-not-allowed" disabled/>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="content" className="block mb-1 text-sm font-medium text-[#1a6938]">
                  Customer Review
                </label>
                <textarea id="content" name="content" rows="5" value={selectedReview.content || ""}
                  onChange={handleInputChange} placeholder="Write review content..."
                  className="w-full rounded-lg border border-[#ccebdc] p-2.5 text-sm focus:ring-[#2d9155] focus:border-[#2d9155]" />
              </div>

              <div>
                <label htmlFor="isTop" className="block mb-1 text-sm font-medium text-[#1a6938]">
                  Featured Review
                </label>
                <select id="isTop" name="isTop" value={selectedReview.isTop || ""} onChange={handleInputChange}
                  className="w-full rounded-lg border border-[#ccebdc] p-2.5 text-sm focus:ring-[#2d9155] focus:border-[#2d9155]">
                  <option value="">Select</option>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end gap-2 mt-6">
              <button onClick={() => setShowUpdateModal(false)}
                className="px-4 py-2 rounded-lg border border-[#1a6938] text-[#1a6938] bg-white hover:bg-[#f0fdf4]
          transition-all"
              >
                Cancel
              </button>
              <button onClick={() => updateReview(selectedReview)}
                className="px-4 py-2 rounded-lg bg-[#2d9155] text-white hover:bg-[#166534] transition-all"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {showDeleteModal && (
        <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md transition-all">
            <h2 className="text-lg font-semibold text-[#1a6938] mb-2">
              Confirm Deletion
            </h2>
            <p className="text-sm text-gray-700 mb-4">
              Are you sure you want to delete the review from <strong>{selectedReview.name}</strong>?
            </p>
            <div className="flex justify-end gap-2">
              <button onClick={() => setShowDeleteModal(false)}
                className="px-4 py-2 rounded-lg border border-[#1a6938] text-[#1a6938] bg-white hover:bg-[#f0fdf4] transition"
              >
                Cancel
              </button>
              <button onClick={deleteReview}
                className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition">
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default AllReview;
