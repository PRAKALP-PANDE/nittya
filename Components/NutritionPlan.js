import React from 'react'

const NutritionPlan = () => {
    return (
        <section className="flex justify-around lg:h-screen bg-[#31985a]">
            <div className="md:w-full mx-auto px-4 mt-16">
                <h2 className="mb-4 md:mb-10 text-4xl sm:text-5xl md:text-8xl cookie-regular font-normal tracking-tight leading-tight text-white text-center">Nutrition plans</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Plan 1 */}
                    <div className="overflow-hidden transition-transform duration-300 hover:scale-105 lg:border-r-2 border-dotted border-b-0 mb-10 md:mb-0 border-white">
                        <div className="p-6 items-center justify-center">
                            <div className="overflow-hidden">
                                <img
                                    alt="content"
                                    className="w-full h-48 object-contain object-center"
                                    src="https://www.mightymillets.com/assets/images/icon_writing_pad.png"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-white mt-6 mb-20 text-center">Fitnews and lifestyle</h3>
                            <button className="flex mx-auto mt-6 border-0 py-2 px-5 focus:outline-none rounded-full bg-white text-gray-800 hover:bg-black hover:text-gray-300 transition-all shadow-lg">
                                READ MORE
                            </button>
                        </div>
                    </div>

                    {/* Plan 2 */}
                    <div className="overflow-hidden transition-transform duration-300 hover:scale-105 lg:border-r-2 border-dotted border-b-0 mb-10 md:mb-0 border-white">
                        <div className="p-6 items-center justify-center">
                            <div className="overflow-hidden">
                                <img
                                    alt="content"
                                    className="w-full h-48 object-contain object-center"
                                    src="https://www.mightymillets.com/assets/images/icon_bottle.png"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-white mt-6 mb-20 text-center">Detox + Weight Loss</h3>
                            <button className="flex mx-auto mt-6 border-0 py-2 px-5 focus:outline-none rounded-full bg-white text-gray-800 hover:bg-black hover:text-gray-300 transition-all shadow-lg">
                                READ MORE
                            </button>
                        </div>
                    </div>

                    {/* Plan 3 */}
                    <div className="overflow-hidden transition-transform duration-300 hover:scale-105 lg:border-r-2 border-dotted border-b-0 mb-10 md:mb-0 border-white">
                        <div className="p-6 items-center justify-center">
                            <div className="overflow-hidden">
                                <img
                                    alt="content"
                                    className="w-full h-48 object-contain object-center"
                                    src="https://www.mightymillets.com/assets/images/icon_alarm.png"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-white mt-6 mb-20 text-center">Weight Management and Inch Loss</h3>
                            <button className="flex mx-auto mt-6 border-0 py-2 px-5 focus:outline-none rounded-full bg-white text-gray-800 hover:bg-black hover:text-gray-300 transition-all shadow-lg">
                                READ MORE
                            </button>
                        </div>
                    </div>

                    {/* Plan 4 */}
                    <div className="overflow-hidden transition-transform duration-300 hover:scale-105">
                        <div className="p-6 items-center justify-center">
                            <div className="overflow-hidden">
                                <img
                                    alt="content"
                                    className="w-full h-48 object-contain object-center"
                                    src="https://www.mightymillets.com/assets/images/icon_heart_beats.png"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-white mt-6 mb-20 text-center">Health Condition Management</h3>
                            <button className="flex mx-auto mt-6 border-0 py-2 px-5 focus:outline-none rounded-full bg-white text-gray-800 hover:bg-black hover:text-gray-300 transition-all shadow-lg">
                                READ MORE
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NutritionPlan