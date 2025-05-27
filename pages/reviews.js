import Head from 'next/head';
import React, { useEffect, useState } from 'react';

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
      <Head>
        <title>Best Nutritionist in Pune | Weightloss Diet Plans & Natural Nutrition</title>
        <meta name="description" content="Read real client reviews and success stories from Nittya’s weightloss diet plans and nutrition products. Discover how a trusted nutritionist in Pune is transforming lives." />
      </Head>
      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="font-bold text-3xl sm:text-4xl text-transparent bg-gradient-to-r from-[#166534] to-[#2d9155] bg-clip-text mb-4">
          Client Testimonials
        </h2>
        <p className="text-lg text-gray-600 mt-3">Hear what others say about their experience</p>
        <div className="w-24 h-1 bg-gradient-to-r from-[#1a6938] to-[#2d9155] mx-auto rounded-full mt-6"></div>
      </div>

      {reviews.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-xl shadow-sm max-w-2xl mx-auto">
          {/* <DocumentTextIcon className="mx-auto h-12 w-12 text-[#247a46]" /> */}
          <p className="mt-4 text-gray-500">No reviews yet. Be the first to share your experience!</p>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto space-y-12">
          {reviews.map((item, index) => (
            <div
              key={item._id}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12 p-8 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300`}
            >
              {/* Image Container - Now with object-contain */}
              <div className="md:w-2/5 w-full">
                <div className="relative h-80 w-full bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
                  <img
                    src={item.image || '/placeholder-user.jpg'}
                    alt={item.name || 'Customer'}
                    className="object-contain h-full w-full p-2"
                    style={{ maxHeight: '100%', maxWidth: '100%' }}
                  />
                  {item.isTop && (
                    <div className="absolute top-3 right-3 bg-gradient-to-r from-[#166534] to-[#2d9155] text-white px-3 py-1 rounded-full shadow-lg flex items-center">
                      {/* <StarIcon className="w-4 h-4 mr-1" /> */}
                      <span className="text-xs font-bold">TOP</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Text Content */}
              <div className="md:w-3/5 w-full space-y-5">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-3">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 capitalize">
                      {item.name || 'Anonymous'}
                    </h3>
                    {item.role && (
                      <p className="text-sm font-medium text-[#247a46]">
                        {item.role}{item.company && ` • ${item.company}`}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center space-x-3">
                    {/* <div className="flex text-[#facc15]">
                      {[...Array(5)].map((_, i) => (
                        <StarIconSolid
                          key={i}
                          className={`w-5 h-5 ${i < (item.rating || 5) ? 'text-[#facc15]' : 'text-gray-300'}`}
                        />
                      ))}
                    </div> */}
                    <p className="text-sm text-gray-500 whitespace-nowrap">
                      {item.date}
                    </p>
                  </div>
                </div>

                <div className="relative">
                  {/* <QuoteIcon className="absolute -top-6 -left-6 text-[#2d9155]/10 w-16 h-16" /> */}
                  <p className="text-gray-700 leading-relaxed text-lg relative z-10 pl-2">
                    "{item.content || 'No review content provided'}"
                  </p>
                </div>

                {/* {item.tags?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {item.tags.map(tag => (
                      <span
                        key={tag}
                        className="inline-block px-3 py-1 text-xs font-medium bg-[#f0fdf4] text-[#1a6938] rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )} */}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllReviews;