import React from 'react'
import { whatsappMessage } from '@/constants';
import Link from 'next/link';
import { IoMdCheckmark } from "react-icons/io";
import Image from 'next/image';

const PostNatal = () => {

    const message = whatsappMessage.postNatalplan
    const whatsappLink = `https://wa.me/9922015121?text=${message}`;

    return (
        <section className="relative py-8 md:py-12">
            <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                    <div className="flex flex-col lg:flex-row">
                        {/* Left side - Image and intro */}
                        <div className="lg:w-1/2 p-8 md:p-10">

                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#166534] to-[#2d9155]">
                                        Post-Natal
                                    </span>
                                    <br />
                                    Weight Loss Diet Plan
                                </h2>
                                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                    Nutrition for Recovery & Breastfeeding
                                </p>
                            </div>
                            <div className="flex flex-col md:flex-row items-center gap-6">
                                <div className="relative w-full md:w-48 h-48 flex-shrink-0 rounded-2xl overflow-hidden shadow-md">
                                    <Image
                                        width={500}
                                        height={500}
                                        src="/nutiitionplan/post_natal.png"
                                        alt="Heart-healthy nutrition"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flex-grow">
                                    <p className="text-lg text-gray-700 mb-6">
                                        Replenish nutrients and support postpartum recovery & lactation with the right diet.
                                    </p>
                                    <div className="bg-green-50 p-4 rounded-xl mb-6">
                                        <div className="flex items-center justify-between">
                                            <span className="font-medium">3 Months Plan (13 Weeks)</span>
                                            <span className="font-bold text-[#166534]">₹5,999</span>
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
                                            <h4 className="font-semibold text-gray-900 mb-1">Protein-Rich Foods</h4>
                                            <p className="text-gray-600 text-sm">Lean meats, eggs, dairy, and legumes to support recovery.</p>
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
                                            <p className="text-gray-600 text-sm">Omega-3-rich foods to improve milk quality.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-6 h-6 bg-[#2d9155] text-white rounded-full flex items-center justify-center mt-1">
                                            <IoMdCheckmark className="text-sm" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-1">Iron & Calcium Support</h4>
                                            <p className="text-gray-600 text-sm">Essential for energy and bone health.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-6 h-6 bg-[#2d9155] text-white rounded-full flex items-center justify-center mt-1">
                                            <IoMdCheckmark className="text-sm" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-1">Oats & Whole Grains</h4>
                                            <p className="text-gray-600 text-sm">Support breast milk supply and sustained energy.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-6 h-6 bg-[#2d9155] text-white rounded-full flex items-center justify-center mt-1">
                                            <IoMdCheckmark className="text-sm" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-1">Post-Natal Care Sheet</h4>
                                            <p className="text-gray-600 text-sm">Tips for postpartum recovery and lactation.</p>
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

export default PostNatal