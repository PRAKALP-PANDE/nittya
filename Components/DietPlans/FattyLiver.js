import React from 'react'
import { whatsappMessage } from '@/constants';
import Link from 'next/link';
import { IoMdCheckmark } from "react-icons/io";
import Image from 'next/image';

const FattyLiver = () => {

    const message = whatsappMessage.fattyLiverPlan
    const whatsappLink = `https://wa.me/9922015121?text=${message}`;

    return (
        <section className="relative py-8 md:py-12">
            {/* Decorative elements */}
            <div className="absolute inset-0 opacity-10 overflow-hidden">
                <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-green-300 mix-blend-multiply filter blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-green-200 mix-blend-multiply filter blur-3xl"></div>
            </div>

            {/* Heart icon decoration */}
            <svg
                className="absolute top-10 right-10 w-20 h-20 text-green-100 hidden md:block"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
            >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>

            <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                    <div className="flex flex-col lg:flex-row">
                        {/* Left side - Image and intro */}
                        <div className="lg:w-1/2 p-8 md:p-10">

                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#166534] to-[#2d9155]">
                                        Fatty Liver Weight
                                    </span>
                                    <br />
                                    Weight Loss Diet Plan
                                </h2>
                                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                    Heal Your Liver Naturally
                                </p>
                            </div>
                            <div className="flex flex-col md:flex-row items-center gap-6">
                                <div className="relative w-full md:w-48 h-48 flex-shrink-0 rounded-2xl overflow-hidden shadow-md">
                                    <Image
                                        width={500}
                                        height={500}
                                        src="/nutiitionplan/fatty liver.png"
                                        alt="Heart-healthy nutrition"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flex-grow">
                                    <p className="text-lg text-gray-700 mb-6">
                                        Support liver health and reduce fat accumulation with an anti-inflammatory, low-carb diet.
                                    </p>
                                    <div className="bg-green-50 p-4 rounded-xl mb-6">
                                        <div className="flex items-center justify-between">
                                            <span className="font-medium">3 Months Plan (13 Weeks)</span>
                                            <span className="font-bold text-[#166534]">₹5,499</span>
                                        </div>
                                    </div>
                                    <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                                        <button className="w-full py-3 px-6 bg-gradient-to-r from-[#166534] to-[#2d9155] text-white rounded-lg font-semibold hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2">
                                            Start Your Heart-Healthy Journey
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                            </svg>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Right side - Features */}
                        <div className="lg:w-1/2 p-8 md:p-10 bg-gray-50">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <svg className="w-6 h-6 text-[#2d9155]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Key Benefits of Our Plan
                            </h3>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-6 h-6 bg-[#2d9155] text-white rounded-full flex items-center justify-center mt-1">
                                            <IoMdCheckmark className="text-sm" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-1">Low-Sugar, Low-Carb Diet</h4>
                                            <p className="text-gray-600 text-sm">Reduce refined carbs and added sugars.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-6 h-6 bg-[#2d9155] text-white rounded-full flex items-center justify-center mt-1">
                                            <IoMdCheckmark className="text-sm" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-1">Healthy Fats</h4>
                                            <p className="text-gray-600 text-sm">Include omega-3s (fish, flaxseeds), limit trans fats</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-6 h-6 bg-[#2d9155] text-white rounded-full flex items-center justify-center mt-1">
                                            <IoMdCheckmark className="text-sm" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-1">Increase Fiber</h4>
                                            <p className="text-gray-600 text-sm">Whole grains, legumes, and vegetables to support liver function.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-6 h-6 bg-[#2d9155] text-white rounded-full flex items-center justify-center mt-1">
                                            <IoMdCheckmark className="text-sm" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-1">No Supplements</h4>
                                            <p className="text-gray-600 text-sm">Only whole, natural foods.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-6 h-6 bg-[#2d9155] text-white rounded-full flex items-center justify-center mt-1">
                                            <IoMdCheckmark className="text-sm" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-1">Fatty Liver Care Sheet</h4>
                                            <p className="text-gray-600 text-sm">Comprehensive tips for liver detox and repair.</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FattyLiver