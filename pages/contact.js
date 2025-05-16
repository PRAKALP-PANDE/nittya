import { GOOGLE_FORM_LINK } from '@/constants';
import React from 'react';

const Contact = () => {
    return (
        <section className="relative py-20 overflow-hidden">
            {/* Decorative elements */}
            {/* <div className="absolute inset-0 opacity-10 overflow-hidden">
                <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-green-300 mix-blend-multiply filter blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-green-200 mix-blend-multiply filter blur-3xl"></div>
            </div> */}

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#166534] to-[#2d9155]">
                            Get In Touch
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Connect with us for personalized nutrition guidance and support
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Map and Contact Info */}
                    <div className="lg:w-2/3 w-full relative rounded-2xl overflow-hidden shadow-xl h-[400px] lg:h-auto">
                        {/* Gradient overlay */}
                        {/* <div className="absolute inset-0 bg-gradient-to-br from-[#2d9155]/20 to-[#166534]/10 z-10"></div> */}

                        {/* Map iframe with responsive sizing */}
                        <iframe
                            width="100%"
                            height="100%"
                            className="absolute inset-0 w-full h-full"
                            frameBorder="0"
                            title="Nittya Nutrition Location"
                            marginHeight="0"
                            marginWidth="0"
                            scrolling="no"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.9913815980126!2d73.90831867523808!3d18.574427282529612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1367304bc4d%3A0x1acb344b0342c406!2sROHAN%20MITHILA%20LOWER%20PARIJAT%20BLOCK%2C%20Mhada%20Colony%2C%20Viman%20Nagar%2C%20Pune%2C%20Maharashtra%20411014!5e0!3m2!1sen!2sin!4v1709131621981!5m2!1sen!2sin"
                            style={{ filter: 'grayscale(0.3) contrast(1.1) opacity(0.9)' }}
                        ></iframe>

                        {/* Contact info card - responsive positioning */}
                        <div className="absolute bottom-4 left-4 right-4 lg:bottom-8 lg:left-8 lg:right-8 bg-white p-4 lg:p-6 rounded-xl shadow-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                                <div>
                                    <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-2 lg:mb-3 flex items-center gap-2">
                                        <svg className="w-4 h-4 lg:w-5 lg:h-5 text-[#2d9155]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        </svg>
                                        Our Location
                                    </h3>
                                    <p className="text-sm lg:text-base text-gray-700">
                                        Rohan Mithila, Lower Parijat Block,<br />
                                        Viman Nagar, Pune,<br />
                                        Maharashtra 411014
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-base lg:text-lg font-semibold text-gray-900 mb-2 lg:mb-3 flex items-center gap-2">
                                        <svg className="w-4 h-4 lg:w-5 lg:h-5 text-[#2d9155]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                        </svg>
                                        Contact Info
                                    </h3>
                                    <p className="text-sm lg:text-base text-gray-700 mb-2">
                                        <a href="tel:+919922015121" className="hover:text-[#2d9155] transition-colors">+91 99220 15121</a>
                                    </p>
                                    <p className="text-sm lg:text-base text-gray-700">
                                        <a href="mailto:info@nittyanutrition.com" className="hover:text-[#2d9155] transition-colors">info@nittyanutrition.com</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Enrollment Information */}
                    <div className="lg:w-1/3 bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                        <div className="text-center mb-6">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to Begin Your Journey?</h3>
                            <p className="text-gray-600">Complete our enrollment form to get started with personalized nutrition</p>
                        </div>

                        <div className="space-y-6">
                            <div className="p-4 bg-green-50 rounded-xl border border-green-100">
                                <h4 className="font-semibold text-[#2d9155] mb-2 flex items-center gap-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    Enrollment Process
                                </h4>
                                <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                                    <li>Fill out our Google Form</li>
                                    <li>We'll contact you within 24 hours</li>
                                    <li>Initial consultation session</li>
                                    <li>Personalized plan creation</li>
                                </ol>
                            </div>

                            <a
                                href={GOOGLE_FORM_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full py-3 px-6 bg-gradient-to-r from-[#2d9155] to-[#4ade80] text-white rounded-xl font-semibold text-center shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                Access Enrollment Form
                            </a>

                            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                                    <svg className="w-6 h-6 text-[#2d9155]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900">Consultation Hours</p>
                                    <p className="text-sm text-gray-600">Mon-Sat: 10AM - 6PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;