import { whatsappMessage } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { IoMdCheckmark } from "react-icons/io";

const WomenDietPlan = () => {
    const message = whatsappMessage.womenDietPlan
    const whatsappLink = `https://wa.me/9922015121?text=${message}`;

    return (
        <section id='womenDiet' className="relative py-16 md:py-28 overflow-hidden">
            <div className="container px-5 mx-auto max-w-6xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#166534] to-[#2d9155]">
                            Women's Weight Loss
                        </span><br />
                        <span className="text-gray-800">Simple & Balanced Nutrition</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Scientifically designed meal plans for sustainable results
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row bg-white rounded-3xl overflow-hidden shadow-xl">
                    {/* Left side - Image and intro */}
                    <div className="lg:w-1/2 p-8 md:p-12 flex flex-col">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="relative w-full md:w-48 h-48 flex-shrink-0 rounded-2xl overflow-hidden shadow-md">
                                <Image
                                    width={500}
                                    height={500}
                                    alt="women's nutrition"
                                    className="w-full h-full object-cover"
                                    src="/nutiitionplan/woman diet.png"
                                />
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-2xl font-bold text-gray-900 mb-3">At Nittya – Your Daily Nutrition</h2>
                                <p className="text-lg text-gray-700 mb-6">
                                    Easy-to-follow, homemade diet plans tailored for women's health and wellness.
                                </p>
                            </div>
                        </div>

                        <div className="mt-6 space-y-4">
                            <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
                                <span className="font-medium">4 Weeks Plan</span>
                                <span className="font-bold text-[#166534]">₹1,799</span>
                            </div>
                            <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
                                <span className="font-medium">3 Months (13 Weeks) Plan</span>
                                <span className="font-bold text-[#166534]">₹4,499</span>
                            </div>
                        </div>

                        <Link href={whatsappLink} target="_blank" rel="noopener noreferrer" className="mt-8">
                            <button className="w-full py-4 px-6 bg-gradient-to-r from-[#166534] to-[#2d9155] text-white rounded-xl font-bold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
                                Start Your Journey Today!
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </button>
                        </Link>
                    </div>

                    {/* Right side - Features */}
                    <div className="lg:w-1/2 p-8 md:p-12 bg-gray-50">
                        <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                            <svg className="w-6 h-6 text-[#2d9155]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            What You'll Achieve
                        </h3>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex-shrink-0 w-8 h-8 bg-[#2d9155] text-white rounded-full flex items-center justify-center mt-1">
                                    <IoMdCheckmark className="text-xl" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-gray-900 mb-1">Simple, Homemade Meals</h4>
                                    <p className="text-gray-700">Nutritious & easy-to-cook recipes that fit your lifestyle</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex-shrink-0 w-8 h-8 bg-[#2d9155] text-white rounded-full flex items-center justify-center mt-1">
                                    <IoMdCheckmark className="text-xl" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-gray-900 mb-1">Fix Nutritional Deficiencies</h4>
                                    <p className="text-gray-700">Boost iron, calcium, hemoglobin & essential vitamins naturally</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex-shrink-0 w-8 h-8 bg-[#2d9155] text-white rounded-full flex items-center justify-center mt-1">
                                    <IoMdCheckmark className="text-xl" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-gray-900 mb-1">Hormonal Balance</h4>
                                    <p className="text-gray-700">Supports PCOS, thyroid & menstrual health through nutrition</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex-shrink-0 w-8 h-8 bg-[#2d9155] text-white rounded-full flex items-center justify-center mt-1">
                                    <IoMdCheckmark className="text-xl" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-gray-900 mb-1">Sustainable Weight Management</h4>
                                    <p className="text-gray-700">Achieve lasting fat & inch loss without extreme diets</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WomenDietPlan