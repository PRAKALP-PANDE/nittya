import React from 'react'

const Refund = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-16 px-6 sm:px-10 lg:px-24">
            {/* Header Section */}
            <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center bg-[#e8f5ee] rounded-full px-5 py-2 mb-6">
                    <svg className="w-5 h-5 mr-2 text-[#166534]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm font-medium text-[#166534]">PAYMENT POLICY</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold text-transparent leading-tight bg-clip-text bg-gradient-to-r from-[#145c2d] to-[#2d9155] pb-2">
                    Refund Policy
                </h1>
                <p className="mt-6 text-lg sm:text-xl text-[#3a7d55] max-w-2xl mx-auto leading-relaxed">
                    Please review our refund terms carefully before enrolling in any of our programs.
                </p>
            </div>

            {/* Content Card */}
            <div className="bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] p-8 sm:p-12 max-w-5xl mx-auto space-y-10 text-[#1a6938]">
                <section className="space-y-4">
                    <div className="flex items-start">
                        <div className="flex-shrink-0 bg-[#e8f5ee] text-[#166534] font-bold rounded-lg w-10 h-10 flex items-center justify-center mr-4 mt-1">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold text-[#1e7e34] mb-3">
                                No Refund Policy
                            </h2>
                            <p className="leading-relaxed">
                                At <strong className="text-[#1e7e34]">Nittya – Your Daily Nutrition</strong>, we follow a strict <strong className="text-[#1e7e34]">no-refund policy</strong> for all our services and plans.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="space-y-4">
                    <div className="flex items-start">
                        <div className="flex-shrink-0 bg-[#e8f5ee] text-[#166534] font-bold rounded-lg w-10 h-10 flex items-center justify-center mr-4 mt-1">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold text-[#1e7e34] mb-3">
                                Payment Terms
                            </h2>
                            <ul className="list-disc list-inside space-y-3 pl-2 marker:text-[#2d9155]">
                                <li className="pl-2 leading-relaxed">
                                    Once a payment has been made, it is <strong className="text-[#1e7e34]">non-refundable under any circumstances</strong>, including partial usage or early withdrawal.
                                </li>
                                <li className="pl-2 leading-relaxed">
                                    We strongly encourage all users to carefully review the <strong className="text-[#1e7e34]">program details, rules, and terms</strong> before confirming enrollment.
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="text-sm text-[#166534] pt-8 border-t border-[#e0f2e9] italic flex justify-between items-center">
                    <span>Last updated: May 28, 2025</span>
                    <span className="hidden md:block font-medium">Nittya – Your Daily Nutrition</span>
                </section>
            </div>
        </div>
    )
}

export default Refund