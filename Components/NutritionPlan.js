import React from 'react'
import NutritionPlanCarousel from './NutritionPlanCarousel'
import { nutritionPlans } from '@/constants'

const NutritionPlan = () => {
    return (
        <section className="flex justify-center lg:h-screen bg-[#31985a] px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-7xl mx-auto mt-16">
                <h2 className="mb-4 md:mb-10 text-4xl sm:text-5xl md:text-8xl cookie-regular font-normal tracking-tight leading-tight text-white text-center">Nutrition plans</h2>

                {/* Grid for Medium & Large Screens */}
                <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {nutritionPlans && nutritionPlans.map((plan, index) => (
                        <div key={index} className="overflow-hidden transition-transform duration-300 hover:scale-105 border-white border-dotted lg:border-r-2 last:border-r-0">
                            <div className="p-6 flex flex-col items-center">
                                <div className="w-full h-40 sm:h-48 overflow-hidden">
                                    <img
                                        alt={plan.title}
                                        className="w-full h-full object-contain"
                                        src={`https://www.mightymillets.com/assets/images/${plan.image}`}
                                    />
                                </div>
                                <h3 className="text-lg sm:text-xl font-semibold text-white mt-4 sm:mt-6 mb-6 text-center">
                                    {plan.title}
                                </h3>
                                <button className="px-4 py-2 sm:px-5 sm:py-3 bg-white text-gray-800 hover:bg-black hover:text-gray-300 transition-all rounded-full shadow-lg">
                                    READ MORE
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile Carousel */}
                <div className="md:hidden mt-6">
                    <NutritionPlanCarousel />
                </div>
            </div>
        </section>
    )
}

export default NutritionPlan