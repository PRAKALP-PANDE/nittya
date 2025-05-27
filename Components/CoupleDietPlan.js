import { whatsappMessage } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { IoMdCheckmark } from "react-icons/io";

const CoupleDietPlan = () => {
    const message = whatsappMessage.coupleDietPlan
    const whatsappLink = `https://wa.me/9172683827?text=${message}`;

    return (
        <section id='coupleDiet' className="relative py-16 md:py-28 bg-gradient-to-br from-[#f0fdf4] to-[#e6f7ed] overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 opacity-10 overflow-hidden">
                <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[#2d9155] mix-blend-multiply filter blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#4ade80] mix-blend-multiply filter blur-3xl"></div>
            </div>

            {/* Heart decoration */}
            <svg
                className="absolute top-10 right-10 w-24 h-24 text-[#2d9155] opacity-20 hidden md:block"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
            >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>

            <div className="container px-5 mx-auto max-w-6xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#166534] to-[#2d9155]">
                            Couple's Wellness Journey
                        </span><br />
                        <span className="text-gray-800">Shared Nutrition, Double Results</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Transform your health together with nutrition meal plans designed for couples
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row bg-white rounded-3xl overflow-hidden shadow-2xl">
                    {/* Left side - Image and intro */}
                    <div className="lg:w-1/2 p-8 md:p-12 flex flex-col">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="relative w-full md:w-56 h-56 flex-shrink-0 rounded-2xl overflow-hidden shadow-lg group">
                                <div className="absolute inset-0 bg-gradient-to-b from-[#2d9155]/20 to-[#166534]/10 z-10"></div>
                                <Image
                                    width={600}
                                    height={600}
                                    src="/nutiitionplan/couple.png"
                                    alt="Couple's nutrition plan"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
                                />
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-2xl font-bold text-gray-900 mb-3">At Nittya – Your Daily Nutrition</h2>
                                <p className="text-lg text-gray-700">
                                    We create simple, balanced diet plans specifically designed for couples to achieve their health goals together.
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
                                <span className="font-bold text-[#166534]">₹2,999</span>
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
                                <span className="font-bold text-[#166534]">₹7,499</span>
                            </div>
                        </div>

                        <Link href={whatsappLink} target="_blank" rel="noopener noreferrer" className="mt-8">
                            <button className="w-full py-4 px-6 bg-gradient-to-r from-[#166534] to-[#2d9155] hover:from-[#1a6938] hover:to-[#166534] text-white rounded-xl font-bold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group">
                                Start Your Journey Together!
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
                            <span>Benefits for Couples</span>
                        </h3>

                        <div className="grid md:grid-cols-2 gap-5">
                            {[
                                {
                                    title: "Dual Nutrition Plans",
                                    description: "Customized for both partners' unique needs",
                                    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                },
                                {
                                    title: "Shared Meal Times",
                                    description: "Enjoy delicious meals together",
                                    icon: "M12 6v6m0 0v6m0-6h6m-6 0H6"
                                },
                                {
                                    title: "Mutual Motivation",
                                    description: "Stay accountable and encouraged",
                                    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                },
                                {
                                    title: "Healthier Lifestyle",
                                    description: "Develop sustainable habits together",
                                    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                },
                                {
                                    title: "Energy & Vitality",
                                    description: "Feel more energetic in your daily life",
                                    icon: "M13 10V3L4 14h7v7l9-11h-7z"
                                },
                                {
                                    title: "Expert Guidance",
                                    description: "Nutritionist support for both of you",
                                    icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
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

export default CoupleDietPlan