import React, { useEffect, useState } from 'react';
import { CiSearch } from "react-icons/ci";

const AllUsers = () => {
  const [users, setUsers] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [query, setQuery] = useState("");
  const usersPerPage = 10;

  useEffect(() => {
    fetchUsers();
  }, [currentPage]);

  const fetchUsers = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/admin/getallusers`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "token": `${JSON.parse(localStorage.getItem('myuser'))?.token}`,
        },
      });

      if (!res.ok) throw new Error(`Error: ${res.status} - ${res.statusText}`);

      const data = await res.json();

      setUsers(data.users || []); // Ensure users is an array
    } catch (error) {
      console.error("Failed to fetch users:", error);
      setUsers([]); // Set an empty array on failure
    }
  };

  const fetchSerchedUsers = async (searchQuery) => {
    const queryString = new URLSearchParams({ q: searchQuery }).toString();
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/searchuser?${queryString}`);
      const data = await response.json();
      setUsers(data.users);
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };

  const handleSearchInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    fetchSerchedUsers(value);
  };

  const paginatedUsers = (users || []).slice(
    (currentPage - 1) * usersPerPage,
    currentPage * usersPerPage
  );

  const handleDelete = (user) => {
    setSelectedUser(user);
    setShowDeleteModal(true);
  };

  const deleteUser = async () => {
    // await axios.delete(`/api/deleteproduct/${selectedProduct._id}`); // Replace with your API endpoint
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/admin/deleteUser?id=${selectedUser._id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          "token": JSON.parse(localStorage.getItem('myuser')).token,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete user');
      }

      const data = await response.json();
      setShowDeleteModal(false);
      fetchUsers();
      return data;

    } catch (error) {
      console.error('Error deleting user:', error);
      throw error;
    }
  };

  return (
    <div className="p-4 max-w-6xl mx-auto">
      {/* Header & Search */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3">
        <h1 className="text-2xl font-semibold text-slate-800">User Management</h1>
        <div className="relative w-full sm:w-64">
          <label htmlFor="Search" className="sr-only">Search users</label>
          <input
            id="Search"
            type="text"
            value={query}
            onChange={handleSearchInputChange}
            placeholder="Search by name or email"
            className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-3 pr-10 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            aria-label="Search users"
          />
          <div className="absolute inset-y-0 right-2 flex items-center text-gray-500">
            <CiSearch />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg shadow-sm border border-gray-200">
        <table className="min-w-full bg-white text-sm text-left">
          <thead className="bg-sky-50 text-gray-700 text-sm">
            <tr>
              <th className="px-4 py-3 font-medium border-b">First Name</th>
              <th className="px-4 py-3 font-medium border-b">E-mail</th>
              <th className="px-4 py-3 font-medium border-b">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {paginatedUsers.map((user) => (
              <tr key={user._id} className="hover:bg-sky-50">
                <td className="px-4 py-3">{user.name}</td>
                <td className="px-4 py-3">{user.email}</td>
                <td className="px-4 py-3">
                  <button
                    onClick={() => handleDelete(user)}
                    className="text-red-600 hover:text-white hover:bg-red-600 border border-red-600 px-3 py-1.5 rounded transition duration-200"
                    aria-label={`Delete user ${user.name}`}
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
      <div className="flex flex-wrap justify-center mt-6 gap-1 text-sm">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="px-3 py-1.5 border rounded-l bg-white hover:bg-blue-100 disabled:opacity-50"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-3 py-1.5 border-t border-b ${currentPage === index + 1 ? "bg-blue-600 text-white" : "bg-white hover:bg-blue-100"}`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          className="px-3 py-1.5 border rounded-r bg-white hover:bg-blue-100 disabled:opacity-50"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

      <div className="mt-2 text-right text-xs text-gray-500">
        Showing page {currentPage} of {totalPages}
      </div>

      {showDeleteModal && (
        <div className="fixed inset-0 z-50 bg-white/70 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-sm p-6">
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-800">Confirm Deletion</h2>
              <p className="text-gray-600">
                Are you sure you want to delete <strong>{selectedUser.name}</strong>?
              </p>
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
                >
                  Cancel
                </button>
                <button
                  onClick={deleteUser}
                  className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>

  )
}

export default AllUsers