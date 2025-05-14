import { Apple } from 'lucide-react';
import React from 'react';

const About = () => {
    return (
        <section id="aboutUs" className="relative py-12 px-6 md:px-16 overflow-hidden">

            {/* Nature-inspired decorations */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-20 right-20 w-32 h-32 opacity-20">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#2d9155" d="M45.5,-47.1C59.1,-30.5,70.6,-15.2,69.9,-0.6C69.1,14,56.1,28,42.5,41.1C29,54.2,15,66.4,-1.5,67.9C-18,69.4,-36,60.2,-48.5,47.1C-61,34,-68,17,-67.9,0.1C-67.8,-16.8,-60.6,-33.6,-48.1,-50.2C-35.6,-66.8,-17.8,-83.2,-0.3,-82.9C17.2,-82.6,34.3,-65.6,45.5,-47.1Z" transform="translate(100 100)" />
                    </svg>
                </div>
                <div className="absolute bottom-10 left-10 w-24 h-24 opacity-15">
                    <Apple className='text-green-700'/>
                </div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    {/* Profile Image with Decorative Frame */}
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
                    <div className="w-full lg:w-7/12">
                        <div className="mb-4 flex items-center gap-3">
                            <div className="w-10 h-1 bg-gradient-to-r from-[#2d9155] to-[#4ade80] rounded-full"></div>
                            <span className="text-sm font-semibold text-[#2d9155] uppercase tracking-wider">Our Philosophy</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                            Transforming Lives Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#166534] to-[#2d9155]">Holistic Nutrition</span>
                        </h2>

                        <div className="mb-8 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full border-2 border-white shadow-md overflow-hidden">
                                <img 
                                    src="https://www.mightymillets.com/assets/images/home_about_meena.jpg" 
                                    alt="Vidya Sawant" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <p className="text-lg font-semibold text-[#2d9155]">Vidya Sawant</p>
                                <p className="text-gray-600">Founder & Chief Nutritionist</p>
                            </div>
                        </div>

                        <div className="space-y-5 text-gray-700">
                            <p className="text-lg leading-relaxed">
                                At <span className="font-semibold text-[#2d9155]">Nittya Nutrition</span>, we revolutionize women's health through <span className="font-semibold text-gray-900">science-backed, personalized nutrition</span> that harmonizes with your lifestyle while addressing <span className="font-semibold text-gray-900">hormonal balance, weight management, and nutrient deficiencies</span>.
                            </p>

                            <div className="p-5 bg-white rounded-xl shadow-sm border border-gray-100">
                                <p className="text-lg leading-relaxed">
                                    Our <span className="font-semibold text-gray-900">evidence-based approach</span> combines modern nutritional research with time-tested wisdom, creating sustainable eating patterns that deliver real results without deprivation.
                                </p>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-gray-900 mb-3">Our Signature Products:</h4>
                                <ul className="grid grid-cols-2 gap-3">
                                    {[
                                        'Kids Nutrimix Powder',
                                        'Women\'s Nuts & Seeds Blend',
                                        'Sugar-Free Laddoos',
                                        'Daily Superfood Seed Mix',
                                        'Hormone Balance Tea',
                                        'Gut Health Prebiotic'
                                    ].map((product, index) => (
                                        <li key={index} className="flex items-start">
                                            <svg className="w-5 h-5 mr-2 text-[#2d9155] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-700">{product}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <button className="px-8 py-3.5 bg-gradient-to-r from-[#2d9155] to-[#4ade80] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 group">
                                <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                                Book Consultation
                            </button>
                            <button className="px-8 py-3.5 bg-white text-gray-800 border border-gray-200 rounded-xl font-semibold shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-3 group">
                                <svg className="w-5 h-5 text-[#2d9155] group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                                </svg>
                                Our Methodology
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;