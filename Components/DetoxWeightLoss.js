import { detoxAndWeightLoss } from '@/constants'
import React from 'react'
import { IoMdCheckmark } from 'react-icons/io'

const DetoxWeightLoss = () => {
    return (
        <section className="py-20 bg-[#31985a]">
            <div className="container px-5 mx-auto flex flex-wrap">
                <h2 className="mb-10 md:mb-10 text-4xl sm:text-5xl md:text-6xl cookie-regular font-normal leading-16 text-white text-center w-full">Detox + Weight Loss</h2>
                <div className="flex flex-wrap -m-4">
                    <div class="p-4 lg:w-1/2">
                        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/200x200" />
                            <div class="flex-grow sm:pl-8">
                                <h2 class="title-font font-medium text-lg text-white">Duration: 2 months</h2>
                                <h2 class="title-font font-medium text-lg text-white">Sessions: 2 face to face and 1 on-call</h2>
                                <h2 class="title-font font-medium text-lg text-white">Plans: 2</h2>
                                <h2 class="title-font font-medium text-lg text-white">Investment: Rs. 2500</h2>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/2 md:w-full">
                        {detoxAndWeightLoss && detoxAndWeightLoss.map((item, index) => (
                            <div key={index} class="flex relative pb-2.5 items-center">
                                <div class="flex-shrink-0 w-4 h-4 text-2xl text-[#31985a] bg-white rounded-full inline-flex items-center justify-center relative z-10">
                                    <IoMdCheckmark />
                                </div>
                                <div class="flex-grow pl-4">
                                    <p class="text-lg leading-6 font-light text-white">{item.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DetoxWeightLoss