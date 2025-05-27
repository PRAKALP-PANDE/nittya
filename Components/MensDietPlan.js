import { whatsappMessage } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { IoMdCheckmark } from "react-icons/io";

const MensDietPlan = () => {
    const message = whatsappMessage.menDietPlan
    const whatsappLink = `https://wa.me/9922015121?text=${message}`;

    return (
        <section id='mensDiet' className="relative py-20 md:py-28 bg-gradient-to-br from-[#2d9155] to-[#1a6938] overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 opacity-10 overflow-hidden">
                <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white mix-blend-overlay filter blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-white mix-blend-overlay filter blur-3xl"></div>
            </div>

            <div className="container px-5 mx-auto max-w-6xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4 text-white">
                        Men's Weight Loss Diet Plan
                    </h2>
                    <p className="text-xl text-white/90 max-w-3xl mx-auto">
                        Scientifically designed meal plans for sustainable fat loss & muscle retention
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row bg-white rounded-3xl overflow-hidden shadow-2xl">
                    {/* Left side - Image and intro */}
                    <div className="lg:w-1/2 p-8 md:p-12 flex flex-col bg-gradient-to-br from-white to-gray-50">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="relative w-full md:w-56 h-56 flex-shrink-0 rounded-2xl overflow-hidden shadow-lg group">
                                <div className="absolute inset-0 bg-gradient-to-b from-[#2d9155]/20 to-[#1a6938]/10 z-10"></div>
                                <Image
                                    width={600}
                                    height={600}
                                    src="/nutiitionplan/men.png"
                                    alt="Men's nutrition plan"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
                                />
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-2xl font-bold text-gray-900 mb-3">At Nittya – Your Daily Nutrition</h2>
                                <p className="text-lg text-gray-700">
                                    We provide simple, balanced meal plans specifically designed for men's unique health and fitness needs.
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 space-y-4">
                            <div className="flex items-center justify-between p-5 bg-green-50 rounded-xl border border-green-100 hover:shadow-md transition-shadow">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-green-100 rounded-lg">
                                        <svg className="w-5 h-5 text-[#2d9155]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                    </div>
                                    <span className="font-medium">4 Weeks Plan</span>
                                </div>
                                <span className="font-bold text-[#166534]">₹1,799</span>
                            </div>
                            <div className="flex items-center justify-between p-5 bg-green-50 rounded-xl border border-green-100 hover:shadow-md transition-shadow">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-green-100 rounded-lg">
                                        <svg className="w-5 h-5 text-[#2d9155]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                        </svg>
                                    </div>
                                    <span className="font-medium">3 Months Plan</span>
                                </div>
                                <span className="font-bold text-[#166534]">₹4,499</span>
                            </div>
                        </div>

                        <Link href={whatsappLink} target="_blank" rel="noopener noreferrer" className="mt-8">
                            <button className="w-full py-4 px-6 bg-gradient-to-r from-[#166534] to-[#2d9155] hover:from-[#1a6938] hover:to-[#166534] text-white rounded-xl font-bold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group">
                                Start Your Transformation Today!
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </button>
                        </Link>
                    </div>

                    {/* Right side - Features */}
                    <div className="lg:w-1/2 p-8 md:p-12 bg-gray-50">
                        <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                            <div className="p-2 bg-[#2d9155] text-white rounded-lg">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                            <span>Key Benefits You'll Experience</span>
                        </h3>

                        <div className="grid md:grid-cols-2 gap-5">
                            {[
                                {
                                    title: "Muscle-Preserving Fat Loss",
                                    description: "Lose fat while maintaining lean muscle mass",
                                    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                },
                                {
                                    title: "Strength & Energy Boost",
                                    description: "Enhanced performance in workouts and daily life",
                                    icon: "M13 10V3L4 14h7v7l9-11h-7z"
                                },
                                {
                                    title: "Simple Meal Prep",
                                    description: "Easy-to-follow recipes with common ingredients",
                                    icon: "M12 6v6m0 0v6m0-6h6m-6 0H6"
                                },
                                {
                                    title: "Hormonal Balance",
                                    description: "Optimized testosterone and metabolic health",
                                    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                },
                                {
                                    title: "Sustainable Habits",
                                    description: "Lifestyle changes for long-term results",
                                    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                },
                                {
                                    title: "Support",
                                    description: "Nutritionist guidance throughout your journey",
                                    icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                }
                            ].map((feature, index) => (
                                <div key={index} className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-8 h-8 bg-[#2d9155] text-white rounded-full flex items-center justify-center mt-1">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={feature.icon}></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-900 mb-1">{feature.title}</h4>
                                            <p className="text-gray-600">{feature.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MensDietPlan