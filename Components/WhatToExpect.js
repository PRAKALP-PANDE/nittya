import React from 'react'
import { Apple, CalendarClock, Plane, Target, Brain, HeartPulse, Utensils, Leaf } from 'lucide-react'
import { whatToExpect } from "../public/what_to_expect.png"
import Image from 'next/image'

const features = [
    {
        icon: <Apple className="w-8 h-8" />,
        text: 'Simple, Home-Cooked Meals',
        color: 'text-green-500',
        bg: 'bg-green-50'
    },
    {
        icon: <CalendarClock className="w-8 h-8" />,
        text: 'No Fancy Powders or Supplements',
        color: 'text-blue-500',
        bg: 'bg-blue-50'
    },
    {
        icon: <Plane className="w-8 h-8" />,
        text: "Sustainable & Practical Diet",
        color: 'text-purple-500',
        bg: 'bg-purple-50'
    },
    {
        icon: <Target className="w-8 h-8" />,
        text: 'Wholesome & Fulfilling Meals',
        color: 'text-red-500',
        bg: 'bg-red-50'
    },
    {
        icon: <Brain className="w-8 h-8" />,
        text: 'Focus on Nutritional Deficiencies',
        color: 'text-yellow-500',
        bg: 'bg-yellow-50'
    },
    {
        icon: <HeartPulse className="w-8 h-8" />,
        text: 'Fat Loss & Inch Loss, Naturally',
        color: 'text-pink-500',
        bg: 'bg-pink-50'
    }
]

const WhatToExpect = () => {
    return (
        <section className="relative py-20 px-4 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-green-300 mix-blend-multiply filter blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-green-200 mix-blend-multiply filter blur-3xl"></div>
            </div>

            {/* Leaf decorations */}
            <Leaf className="absolute top-10 left-10 w-24 h-24 text-green-100 hidden md:block" />
            <Leaf className="absolute bottom-10 right-10 w-24 h-24 text-green-100 transform rotate-180 hidden md:block" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 cookie-regular">
                        What to Expect From Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800">Consultation</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                        Real Food. Real Results. No Gimmicks.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Image with decorative frame */}
                    <div className="relative flex justify-center">
                        <div className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl group">
                            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-green-700/10 z-10"></div>
                            <Image
                                src="/what_to_expect.png"
                                width={500}
                                height={500}
                                alt="Nutrition Consultation"
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-700"
                            />
                        </div>

                        {/* Floating badge */}
                        <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-xl shadow-lg border border-gray-100 hidden lg:block">
                            <div className="flex items-center gap-3">
                                <div className="p-3 bg-green-100 rounded-lg">
                                    <Utensils className="w-6 h-6 text-green-600" />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">100+ Recipes</p>
                                    <p className="text-xs text-gray-500">Customized for you</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Features grid */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className={`p-6 rounded-2xl ${feature.bg} border border-white transition-all duration-300 hover:shadow-md hover:-translate-y-1`}
                            >
                                <div className={`w-12 h-12 ${feature.bg} rounded-lg flex items-center justify-center mb-4 ${feature.color}`}>
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-medium text-gray-800">{feature.text}</h3>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Testimonial snippet */}
                {/* <div className="mt-16 bg-white p-8 rounded-2xl shadow-sm max-w-4xl mx-auto border border-gray-100">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-green-100">
                            <img
                                src="https://randomuser.me/api/portraits/women/43.jpg"
                                alt="Happy client"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="text-center md:text-left">
                            <div className="flex justify-center md:justify-start mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-lg italic text-gray-700 mb-2">
                                "The personalized plan completely changed my relationship with food. I've never felt better!"
                            </p>
                            <p className="font-medium text-gray-900">- Priya M., Lost 12kg in 3 months</p>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    )
}

export default WhatToExpect