import { whatsappMessage } from '@/constants';
import Link from 'next/link';
import React from 'react'
import { IoMdCheckmark } from "react-icons/io";

const DetoxWeightLoss = () => {
    const message = whatsappMessage.menDietPlan
    const whatsappLink = `https://wa.me/9922015121?text=${message}`;

    return (
        <section className="py-20 bg-[#31985a] md:py-20">
            <div className="container px-5 mx-auto flex flex-wrap">
                <h2 className="mb-10 md:mb-16 text-4xl sm:text-5xl md:text-6xl cookie-regular font-normal leading-16 text-white text-center w-full">
                    Men’s Diet Plan – Fuel Your Health & Strength
                </h2>
                <div className="flex flex-wrap shadow-lg rounded-2xl shadow-gray-800">
                    <div className="p-4 lg:w-1/2">
                        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <img
                                alt="women's nutrition"
                                className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                                src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                            />
                            <div className="flex-grow sm:pl-8 text-white">
                                <h2 className="title-font font-medium text-2xl text-gray-50 mb-4">At Nittya – Your Daily Nutrition</h2>
                                <p className="mb-4 text-lg">
                                    we provide simple, balanced meal plans designed for men’s unique health needs.
                                </p>
                                <div className="flex flex-col space-y-2">
                                    <div className="flex items-center">
                                        <span className="inline-block mr-2 text-white">•</span>
                                        <span>4 Weeks – ₹1,499</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="inline-block mr-2 text-white">•</span>
                                        <span>3 Months (13 Weeks) – ₹3,999</span>
                                    </div>
                                </div>
                                <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                                    <button className="mt-6 px-6 py-2 bg-white text-[#2f9457] rounded-lg hover:bg-[#247a46] transition-colors">
                                        Start your journey today!
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/2 md:w-full">
                        <div className="flex relative pb-6 items-start">
                            <div className="flex-shrink-0 w-6 h-6 text-2xl bg-white text-[#31985a] rounded-full inline-flex items-center justify-center relative z-10 mt-1">
                                <IoMdCheckmark />
                            </div>
                            <div className="flex-grow pl-4">
                                <h3 className="font-medium text-xl text-gray-50 mb-1">Easy, Homemade Meals</h3>
                                <p className="text-lg text-green-50 leading-6 font-light">Nutritious & hassle-free.</p>
                            </div>
                        </div>
                        <div className="flex relative pb-6 items-start">
                            <div className="flex-shrink-0 w-6 h-6 text-2xl bg-white text-[#31985a] rounded-full inline-flex items-center justify-center relative z-10 mt-1">
                                <IoMdCheckmark />
                            </div>
                            <div className="flex-grow pl-4">
                                <h3 className="font-medium text-xl text-gray-50 mb-1">Muscle Growth & Recovery </h3>
                                <p className="text-lg text-green-50 leading-6 font-light">Supports strength & fitness.</p>
                            </div>
                        </div>
                        <div className="flex relative pb-6 items-start">
                            <div className="flex-shrink-0 w-6 h-6 text-2xl bg-white text-[#31985a] rounded-full inline-flex items-center justify-center relative z-10 mt-1">
                                <IoMdCheckmark />
                            </div>
                            <div className="flex-grow pl-4">
                                <h3 className="font-medium text-xl text-gray-50 mb-1">Boost Energy Levels</h3>
                                <p className="text-lg text-green-50 leading-6 font-light">Stay active & energized all day.</p>
                            </div>
                        </div>
                        <div className="flex relative pb-6 items-start">
                            <div className="flex-shrink-0 w-6 h-6 text-2xl bg-white text-[#31985a] rounded-full inline-flex items-center justify-center relative z-10 mt-1">
                                <IoMdCheckmark />
                            </div>
                            <div className="flex-grow pl-4">
                                <h3 className="font-medium text-xl text-gray-50 mb-1">Fat Loss & Weight Management</h3>
                                <p className="text-lg text-green-50 leading-6 font-light">Achieve a healthy body weight.</p>
                            </div>
                        </div>
                        <div className="flex relative pb-6 items-start">
                            <div className="flex-shrink-0 w-6 h-6 text-2xl bg-white text-[#31985a] rounded-full inline-flex items-center justify-center relative z-10 mt-1">
                                <IoMdCheckmark />
                            </div>
                            <div className="flex-grow pl-4">
                                <h3 className="font-medium text-xl text-gray-50 mb-1">Balanced Nutrition</h3>
                                <p className="text-lg text-green-50 leading-6 font-light">Optimal protein, vitamins & minerals.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DetoxWeightLoss