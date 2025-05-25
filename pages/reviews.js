import React, { useEffect, useState } from 'react';
import Image from 'next/image'; // Using Next.js Image component

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReview = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/getreview`);

        if (!res.ok) {
          throw new Error(`Failed to fetch: ${res.status}`);
        }

        const data = await res.json();
        setReviews(data.reviews || []);
      } catch (err) {
        console.error('Error fetching reviews:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReview();
  }, []);

  if (loading) {
    return (
      <div className="px-12 mt-10">
        <h2 className="font-bold text-4xl text-green-600 mb-6">Reviews</h2>
        <p>Loading reviews...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="px-12 mt-10">
        <h2 className="font-bold text-4xl text-green-600 mb-6">Reviews</h2>
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-6 lg:px-12 py-16 bg-[#f0fdf4]/30">
      {/* Section Header with Gradient */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="font-bold text-3xl sm:text-4xl text-transparent bg-gradient-to-r from-[#166534] to-[#2d9155] bg-clip-text mb-4">
          What Clients Are Saying
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#1a6938] to-[#2d9155] mx-auto rounded-full"></div>
      </div>

      {reviews.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-xl shadow-sm max-w-2xl mx-auto">
          <DocumentTextIcon className="mx-auto h-12 w-12 text-[#247a46]" />
          <p className="mt-4 text-gray-500">No reviews yet. Be the first to share your experience!</p>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto space-y-8">
          {reviews.map((item, index) => (
            <div
              key={item._id}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 p-8 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Image Section */}
              <div className="md:w-2/5 w-full relative">
                <div className="absolute -inset-2 rounded-xl blur-sm opacity-20"></div>
                <img
                  src={item.image || '/placeholder-user.jpg'}
                  alt={item.name || 'Customer'}
                  className="relative w-full max-w-xs h-64 object-contain rounded-xl shadow-md border-4 border-white"
                />
                {item.isTop && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-[#166534] to-[#2d9155] text-white px-3 py-1 rounded-full shadow-lg flex items-center">
                    {/* <StarIcon className="w-4 h-4 mr-1" /> */}
                    <span className="text-xs font-bold">TOP REVIEW</span>
                  </div>
                )}
              </div>

              {/* Text Section */}
              <div className="md:w-3/5 w-full space-y-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                  <h3 className="text-2xl font-bold text-gray-800">
                    {item.name || 'Anonymous'}
                  </h3>
                  <div className="flex items-center space-x-2">
                    {/* <div className="flex text-[#facc15]">
                      {[...Array(5)].map((_, i) => (
                        <StarIconSolid key={i} className={`w-5 h-5 ${i < (item.rating || 5) ? 'text-[#facc15]' : 'text-gray-300'}`} />
                      ))}
                    </div> */}
                    <p className="text-sm text-gray-500">{item.date}</p>
                  </div>
                </div>

                <div className="relative">
                  {/* <QuoteIcon className="absolute -top-6 -left-6 text-[#2d9155]/20 w-16 h-16" /> */}
                  <p className="text-gray-700 leading-relaxed text-lg relative z-10">
                    "{item.content || 'No review content provided'}"
                  </p>
                </div>

                {item.role && (
                  <p className="text-sm font-medium text-[#247a46]">
                    {item.role} • {item.company}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllReviews;