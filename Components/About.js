import React from 'react'

const About = () => {
    return (<section
        id="aboutUs"
        className="relative py-20 px-6 md:px-16 bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0] overflow-hidden">

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-[#2d9155] mix-blend-multiply filter blur-xl"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-[#4ade80] mix-blend-multiply filter blur-xl"></div>
            <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-[#86efac] mix-blend-multiply filter blur-xl"></div>
        </div>

        {/* Leaf SVG decoration */}
        <img
            className="absolute top-10 right-10 w-24 h-24 text-[#2d9155] opacity-50 hidden md:block mix-blend-color-burn"
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzw7A-G0lFW-jm9X782tVRexVdfol64vuNnA&s'
        />

        <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                {/* Owner Image with decorative frame */}
                <div className="w-full lg:w-80 relative">
                    <div className="relative group">
                        <div className="absolute -inset-2 bg-gradient-to-r from-[#2d9155] to-[#4ade80] rounded-full blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
                        <div className="relative overflow-hidden rounded-full shadow-2xl border-4 border-white">
                            <img
                                src="https://www.mightymillets.com/assets/images/home_about_meena.jpg"
                                alt="Nutritionist Vidya Sawant"
                                width={600}
                                height={600}
                                className="object-cover w-full h-full rounded-lg transform group-hover:scale-105 transition duration-500"
                            />
                        </div>
                    </div>

                    {/* Floating stats */}
                    <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 hidden md:block">
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-green-50 rounded-lg">
                                <svg className="w-6 h-6 text-[#2d9155]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-500">Years Experience</p>
                                <p className="text-xl font-bold text-gray-800">10+</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* About Content */}
                <div className="w-full lg:w-7/12 text-gray-800">
                    <div className="mb-2 flex items-center gap-2">
                        <div className="w-8 h-1 bg-[#2d9155] rounded-full"></div>
                        <span className="text-sm font-medium text-[#2d9155] uppercase tracking-wider">About Us</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                        Nourishing Lives Through <span className="text-[#2d9155]">Balanced Nutrition</span>
                    </h2>

                    <p className="text-xl font-semibold text-[#2d9155] mb-4">Vidya Sawant – Founder & Chief Nutritionist</p>

                    <div className="space-y-4 text-gray-700">
                        <p className="text-lg leading-relaxed">
                            At <span className="font-semibold text-[#2d9155]">Nittya – Your Daily Nutrition</span>, we specialize in <span className="font-semibold text-gray-900">home-cooked, balanced meals</span> that support <span className="font-semibold text-gray-900">women's health, hormonal balance, weight management</span>, and <span className="font-semibold text-gray-900">correction of nutritional deficiencies</span> — without extreme diets or shortcuts.
                        </p>

                        <p className="text-lg leading-relaxed">
                            Our <span className="font-semibold text-gray-900">scientifically crafted</span> diet plans are easy to follow and designed for real people with busy routines. We combine modern nutritional science with traditional wisdom to create sustainable eating habits.
                        </p>

                        <p className="text-lg leading-relaxed">
                            Complementing our meal plans, we offer clean, natural products including:
                        </p>

                        <ul className="grid grid-cols-2 gap-2 mt-4">
                            <li className="flex items-center">
                                <svg className="w-4 h-4 mr-2 text-[#2d9155]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>Kids Nutrimix Powder</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-4 h-4 mr-2 text-[#2d9155]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>Women's Nuts & Seeds Powder</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-4 h-4 mr-2 text-[#2d9155]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>Sugar-Free Laddoos</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-4 h-4 mr-2 text-[#2d9155]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>Daily Seed Mix</span>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <button className="px-6 py-3 bg-[#2d9155] hover:bg-[#247a47] text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                            </svg>
                            Contact Us
                        </button>
                        <button className="px-6 py-3 bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-2">
                            <svg className="w-5 h-5 text-[#2d9155]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                            </svg>
                            Our Approach
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default About