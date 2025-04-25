import { whatsappMessage } from '@/constants';
import Link from 'next/link';
import React from 'react'
import { IoMdCheckmark } from "react-icons/io";

const CoupleDietPlan = () => {
    const message = whatsappMessage.coupleDietPlan
    const whatsappLink = `https://wa.me/9922015121?text=${message}`;

    return (
        <section className="py-10 md:py-20 bg-gray-50">
            <div className="container px-5 mx-auto flex flex-wrap">
                <h2 className="mb-10 md:mb-16 text-4xl sm:text-5xl md:text-6xl cookie-regular font-normal leading-16 text-[#2f9457] text-center w-full">
                Couple Weight Loss Diet Plan – Eat Healthy, Stay Strong Together
                </h2>
                <div className="flex flex-wrap shadow-lg rounded-2xl">
                    <div className="p-4 lg:w-1/2">
                        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <img 
                                alt="women's nutrition" 
                                className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" 
                                src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                            />
                            <div className="flex-grow sm:pl-8">
                                <h2 className="title-font font-medium text-2xl text-gray-900 mb-4">At Nittya – Your Daily Nutrition</h2>
                                <p className="mb-4 text-lg">
                                we offer simple and balanced diet plans for couples who want to get healthier together.
                                </p>
                                <div className="flex flex-col space-y-2">
                                    <div className="flex items-center">
                                        <span className="inline-block mr-2 text-[#31985a]">•</span>
                                        <span>4 Weeks – ₹2,500</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="inline-block mr-2 text-[#31985a]">•</span>
                                        <span>3 Months (13 Weeks) – ₹6,500</span>
                                    </div>
                                </div>
                                <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                                <button className="mt-6 px-6 py-2 bg-[#2f9457] text-white rounded-lg hover:bg-[#247a46] transition-colors">
                                    Start your journey today!
                                </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/2 md:w-full">
                        <div className="flex relative pb-6 items-start">
                            <div className="flex-shrink-0 w-6 h-6 text-2xl bg-[#31985a] text-white rounded-full inline-flex items-center justify-center relative z-10 mt-1">
                                <IoMdCheckmark />
                            </div>
                            <div className="flex-grow pl-4">
                                <h3 className="font-medium text-xl text-gray-900 mb-1">Plans for Both</h3>
                                <p className="text-lg leading-6 font-light">Designed to meet his & her unique health needs.</p>
                            </div>
                        </div>
                        <div className="flex relative pb-6 items-start">
                            <div className="flex-shrink-0 w-6 h-6 text-2xl bg-[#31985a] text-white rounded-full inline-flex items-center justify-center relative z-10 mt-1">
                                <IoMdCheckmark />
                            </div>
                            <div className="flex-grow pl-4">
                                <h3 className="font-medium text-xl text-gray-900 mb-1">Home-Cooked Simplicity</h3>
                                <p className="text-lg leading-6 font-light">Easy, tasty & nutritious meals you can enjoy together.</p>
                            </div>
                        </div>
                        <div className="flex relative pb-6 items-start">
                            <div className="flex-shrink-0 w-6 h-6 text-2xl bg-[#31985a] text-white rounded-full inline-flex items-center justify-center relative z-10 mt-1">
                                <IoMdCheckmark />
                            </div>
                            <div className="flex-grow pl-4">
                                <h3 className="font-medium text-xl text-gray-900 mb-1">Shared Health Goals</h3>
                                <p className="text-lg leading-6 font-light">Fat loss, energy boost, fitness & overall wellness.</p>
                            </div>
                        </div>
                        <div className="flex relative pb-6 items-start">
                            <div className="flex-shrink-0 w-6 h-6 text-2xl bg-[#31985a] text-white rounded-full inline-flex items-center justify-center relative z-10 mt-1">
                                <IoMdCheckmark />
                            </div>
                            <div className="flex-grow pl-4">
                                <h3 className="font-medium text-xl text-gray-900 mb-1">Nutritional Balance</h3>
                                <p className="text-lg leading-6 font-light">Iron, calcium, protein, vitamins & hormone support.</p>
                            </div>
                        </div>
                        <div className="flex relative pb-6 items-start">
                            <div className="flex-shrink-0 w-6 h-6 text-2xl bg-[#31985a] text-white rounded-full inline-flex items-center justify-center relative z-10 mt-1">
                                <IoMdCheckmark />
                            </div>
                            <div className="flex-grow pl-4">
                                <h3 className="font-medium text-xl text-gray-900 mb-1">Support Each Other</h3>
                                <p className="text-lg leading-6 font-light">Stay motivated and accountable as a team.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CoupleDietPlan