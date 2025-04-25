import React from 'react'
import { whatsappMessage } from '@/constants';
import Link from 'next/link';
import { IoMdCheckmark } from "react-icons/io";

const PCOS = () => {

    const message = whatsappMessage.pcosPlan
    const whatsappLink = `https://wa.me/9922015121?text=${message}`;

    return (
        <div>
            <div className="flex flex-wrap p-3 m-5 bg-white shadow-lg rounded-2xl shadow-gray-800">
                <h5 className="mb-5 md:mb-8 text-3xl sm:text-5xl md:text-4xl cookie-regular text-[#2f9457] text-center w-full">
                    PCOS/PCOD Weight Loss Diet Plan | Balance Hormones & Improve Fertility
                </h5>
                <div className="p-4 lg:w-1/2">
                    <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                        <img
                            alt="women's nutrition"
                            className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                            src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                        />
                        <div className="flex-grow sm:pl-8">
                            <p className="mb-4 text-lg">
                            Manage PCOS/PCOD naturally by focusing on hormone-balancing foods.</p>
                            <div className="flex flex-col space-y-2">
                                <div className="flex items-center">
                                    <span className="inline-block mr-2 text-[#31985a]">•</span>
                                    <span>Pricing: ₹4999 for 3 months (13 weeks)</span>
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
                <div className="p-2 lg:w-1/2 md:w-full flex flex-col">

                    <div className="p-2 md:w-full flex md:flex-grow md:flex-row flex-col">
                        <div className="flex lg:mx-2 lg:w-1/2 relative pb-6 items-start">
                            <div className="flex-shrink-0 w-6 h-6 text-2xl bg-[#31985a] text-white rounded-full inline-flex items-center justify-center relative z-10 mt-1">
                                <IoMdCheckmark />
                            </div>
                            <div className="flex-grow pl-4">
                                <h3 className="font-medium text-xl text-gray-900 mb-1">Low-Glycemic, High-Fiber Diet</h3>
                                <p className="text-lg leading-6 font-light">Control insulin resistance and blood sugar spikes.</p>
                            </div>
                        </div>
                        <div className="flex lg:mx-2 lg:w-1/2 relative pb-6 items-start">
                            <div className="flex-shrink-0 w-6 h-6 text-2xl bg-[#31985a] text-white rounded-full inline-flex items-center justify-center relative z-10 mt-1">
                                <IoMdCheckmark />
                            </div>
                            <div className="flex-grow pl-4">
                                <h3 className="font-medium text-xl text-gray-900 mb-1">Healthy Fats & Lean Proteins</h3>
                                <p className="text-lg leading-6 font-light">Support hormone regulation and reduce inflammation.</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-2 md:w-full flex md:flex-grow md:flex-row flex-col">
                        <div className="flex lg:mx-2 lg:w-1/2 relative pb-6 items-start">
                            <div className="flex-shrink-0 w-6 h-6 text-2xl bg-[#31985a] text-white rounded-full inline-flex items-center justify-center relative z-10 mt-1">
                                <IoMdCheckmark />
                            </div>
                            <div className="flex-grow pl-4">
                                <h3 className="font-medium text-xl text-gray-900 mb-1">Weight Management</h3>
                                <p className="text-lg leading-6 font-light">Sustainable fat loss strategies for long-term health.</p>
                            </div>
                        </div>
                        <div className="flex lg:mx-2 lg:w-1/2 relative pb-6 items-start">
                            <div className="flex-shrink-0 w-6 h-6 text-2xl bg-[#31985a] text-white rounded-full inline-flex items-center justify-center relative z-10 mt-1">
                                <IoMdCheckmark />
                            </div>
                            <div className="flex-grow pl-4">
                                <h3 className="font-medium text-xl text-gray-900 mb-1">PCOS Care Sheet</h3>
                                <p className="text-lg leading-6 font-light">Tips for managing symptoms, fertility, and cycle regularity.</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-2 md:w-full flex md:flex-grow md:flex-row flex-col">
                        <div className="flex lg:mx-2 lg:w-1/2 relative pb-6 items-start">
                            <div className="flex-shrink-0 w-6 h-6 text-2xl bg-[#31985a] text-white rounded-full inline-flex items-center justify-center relative z-10 mt-1">
                                <IoMdCheckmark />
                            </div>
                            <div className="flex-grow pl-4">
                                <h3 className="font-medium text-xl text-gray-900 mb-1">No Supplements</h3>
                                <p className="text-lg leading-6 font-light">Only fresh, home-cooked meals.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PCOS