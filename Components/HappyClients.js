// components/TestimonialCarousel.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Sarah Johnson',
    image: 'https://i.ibb.co/Tq06zHgW/feedback-img.jpg',
    role: 'Oct 10, 2024',
    content: "Following this nutrition plan was the best decision I've made. I feel more confident and energized every single day.",
  },
  {
    name: 'Michael Lee',
    image: 'https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS3819-02_1_b49d3d6e-ec9f-4cd4-8bad-341ccb80e946.jpg?v=1741094253&quality=50',
    role: 'Fitness Enthusiast',
    content: "I didn't just lose weight — I gained a whole new lifestyle. The guidance was practical and sustainable.",
  },
  {
    name: 'Emily Carter',
    image: 'https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MST2718-01_1_654d9bd5-9bbc-4d1d-909e-3d15c5d5f4ab.jpg?v=1739287341&quality=50',
    role: 'Wellness Coach',
    content: "It was incredible to see the difference in just a few months. I feel like the best version of myself.",
  },
];

export default function HappyClients() {
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
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col md:flex-row items-center bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
                <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
                  <img
                    src={t.image}
                    alt={`${t.name} transformation`}
                    className="max-h-[300px] object-contain rounded-lg"
                  />
                </div>
                <div className="md:w-1/2 md:pl-10 text-center md:text-left">
                  <h3 className="text-xl font-bold text-gray-800">{t.name}</h3>
                  <p className="text-sm text-gray-500">{t.role}</p>
                  <p className="mt-4 text-gray-700 italic">"{t.content}"</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
