import { fitnessAndLifestyle } from '@/constants';
import React from 'react'
import { IoMdCheckmark } from "react-icons/io";

const FitnessnLifestyle = () => {
    return (
        <section className="py-10 md:py-40">
            <div className="container px-5 mx-auto flex flex-wrap">
                <h2 className="mb-10 md:mb-10 text-4xl sm:text-5xl md:text-6xl cookie-regular font-normal leading-16 text-[#2f9457] text-center w-full">Fitness & Lifestyle</h2>
                <div className="flex flex-wrap -m-4">
                    <div class="p-4 lg:w-1/2">
                        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/200x200" />
                            <div class="flex-grow sm:pl-8">
                                <h2 class="title-font font-medium text-lg text-gray-900">Duration: 2 months</h2>
                                <h2 class="title-font font-medium text-lg text-gray-900">Sessions: 2 face to face and 1 on-call</h2>
                                <h2 class="title-font font-medium text-lg text-gray-900">Plans: 2</h2>
                                <h2 class="title-font font-medium text-lg text-gray-900">Investment: Rs. 2500</h2>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/2 md:w-full">
                        {fitnessAndLifestyle && fitnessAndLifestyle.map((item, index) => (
                            <div key={index} class="flex relative pb-2.5 items-center">
                                <div class="flex-shrink-0 w-4 h-4 text-2xl bg-[#31985a] text-white rounded-full inline-flex items-center justify-center relative z-10">
                                    <IoMdCheckmark />
                                </div>
                                <div class="flex-grow pl-4">
                                    <p class="text-lg leading-6 font-light">{item.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FitnessnLifestyle