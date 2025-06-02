// components/TestimonialCarousel.js
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';
import axios from 'axios';

const HappyClients = () => {
  const [reviews, setReviews] = useState([]);

  const fetchReviews = async () => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/get-top-reviews`); // Replace with your API endpoint
    setReviews(res.data.reviews);
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <section id='happyCustomers' className="py-24 px-4 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium text-green-700 bg-green-100 rounded-full mb-4">
            Client Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Real People, <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800">Real Results</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Don't just take our word for it. Here's what our clients say about their transformations.
          </p>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
        >
          {reviews.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col md:flex-row items-center bg-white p-8 rounded-2xl shadow-lg max-w-6xl mx-auto">
                <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
                  <img
                    src={item.image}
                    alt={`${item.name} transformation`}
                    className="max-h-[300px] object-contain rounded-lg"
                  />
                </div>
                <div className="md:w-1/2 md:pl-10 text-center md:text-left">
                  <h3 className="text-xl font-bold text-gray-800 capitalize">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.date}</p>
                  <p className="mt-4 text-gray-700 italic" dangerouslySetInnerHTML={{ __html: item.content }}></p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="text-center mt-16">
        <Link href="/reviews" className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-white transition-all duration-500 bg-gradient-to-r from-[#166534] to-[#2d9155] rounded-xl shadow-lg group hover:shadow-[0_10px_25px_-10px_rgba(45,145,85,0.4)] hover:translate-y-[-2px]">
          View All
        </Link>
      </div>
    </section>
  );
};

export default HappyClients;
