import React from 'react';
import Image from 'next/image';

const testimonials = [
    {
        name: "Sarah Johnson",
        image: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MST2637-01_1_e9b0fc84-8c6d-4b80-a31d-4f65dc9016ba.jpg?v=1739973534&quality=50",
        role: "Nutrition Client",
        content: "Following this nutrition plan was the best decision I've made. I feel more confident and energized every single day.",
        rating: 5
    },
    {
        name: "Michael Lee",
        image: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS3819-02_1_b49d3d6e-ec9f-4cd4-8bad-341ccb80e946.jpg?v=1741094253&quality=50",
        role: "Fitness Enthusiast",
        content: "I didn't just lose weight — I gained a whole new lifestyle. The guidance was practical and sustainable.",
        rating: 4
    },
    {
        name: "Emily Carter",
        image: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MST2718-01_1_654d9bd5-9bbc-4d1d-909e-3d15c5d5f4ab.jpg?v=1739287341&quality=50",
        role: "Wellness Coach",
        content: "It was incredible to see the difference in just a few months. I feel like the best version of myself.",
        rating: 5
    },
];

const StarRating = ({ rating }) => {
    return (
        <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
                <svg
                    key={i}
                    className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
};

export default function HappyClients() {
    return (
        <section className="bg-gradient-to-b from-white to-green-50 py-24 px-4">
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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={testimonial.image}
                                    alt={`${testimonial.name} transformation`}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    quality={90}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                            </div>

                            <div className="p-6">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                                    </div>
                                    <StarRating rating={testimonial.rating} />
                                </div>

                                <blockquote className="mt-4">
                                    <p className="text-gray-600 italic">"{testimonial.content}"</p>
                                </blockquote>

                                <div className="mt-6 pt-4 border-t border-gray-100">
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="ml-2 text-sm text-gray-600">Verified Transformation</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 transition-colors duration-300">
                        Read More Success Stories
                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}