import React, { useEffect, useState } from 'react'

const Dashboard = () => {
  const [reviews, setReviews] = useState();
  const [users, setUsers] = useState();
  const [isTop, setIsTop] = useState()

  const fetchStats = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/admin/stats`);
    const data = await res.json();
    setReviews(data.totalReviews);
    setUsers(data.totalUser);
    setIsTop(data.totalTopReviews);
  };

  useEffect(() => {
    fetchStats();
  }, [])


  return (
    <div className="bg-[#f0fdf4] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-[#166534] to-[#2d9155] bg-clip-text text-transparent">
            Empowering Health Through Nutrition
          </h2>
          <p className="mt-4 text-gray-600 sm:text-lg">
            With years of expertise in holistic nutrition, I help individuals achieve lasting wellness
            through customized diet plans and compassionate support.
          </p>
        </div>

        <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white rounded-xl shadow-md px-6 py-8 text-center transition-all duration-300 hover:shadow-lg border border-gray-100">
            <dd className="text-4xl font-extrabold text-[#2d9155]">{reviews}</dd>
            <dt className="mt-2 text-lg font-medium text-gray-700">Total Reviews</dt>
          </div>

          <div className="bg-white rounded-xl shadow-md px-6 py-8 text-center transition-all duration-300 hover:shadow-lg border border-gray-100">
            <dd className="text-4xl font-extrabold text-[#2d9155]">{users}</dd>
            <dt className="mt-2 text-lg font-medium text-gray-700">Total Users</dt>
          </div>

          <div className="bg-white rounded-xl shadow-md px-6 py-8 text-center transition-all duration-300 hover:shadow-lg border border-gray-100">
            <dd className="text-4xl font-extrabold text-[#2d9155]">{isTop}</dd>
            <dt className="mt-2 text-lg font-medium text-gray-700">Total Top Reviews</dt>
          </div>
        </dl>
      </div>
    </div>

  )
}

export default Dashboard