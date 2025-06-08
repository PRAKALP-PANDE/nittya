import React from 'react'
import WomenDietPlan from '@/Components/WomenDietPlan'
import Link from 'next/link'

const Journey = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 py-12 sm:py-16 text-center">
            {/* Gradient Header */}
            <div className="max-w-4xl mx-auto">
                <div className="inline-flex items-center justify-center bg-[#e8f5ee] rounded-full px-5 py-2 mb-6">
                    <svg className="w-5 h-5 mr-2 text-[#166534]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm font-medium text-[#166534]">COMING SOON</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent leading-tight bg-clip-text bg-gradient-to-r from-[#145c2d] to-[#2d9155] mb-6">
                    Page Coming Soon
                </h1>

                {/* Subheading */}
                <p className="text-lg sm:text-xl text-[#3a7d55] mb-12 max-w-2xl mx-auto leading-relaxed">
                    We're working hard to bring you this page. Please check back shortly!
                </p>
            </div>

            {/* Card Component */}
            <div className="bg-white shadow-[0_10px_30px_rgba(0,0,0,0.05)] rounded-2xl p-8 sm:p-10 w-full max-w-2xl mb-16">
                <div className="flex flex-col items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-20 w-20 text-[#2d9155] mb-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                    <p className="text-[#247a46] text-lg sm:text-xl mb-8 leading-relaxed">
                        Thank you for your patience. We're building something great for your health journey.
                    </p>
                </div>
            </div>

            {/* Plans Section */}
            <div className="w-full max-w-6xl mx-auto">
                <h2 className="text-2xl sm:text-3xl border-t border-[#e0f2e9] font-semibold text-[#1e7e34] mb-8">
                    In the meantime, explore our plans
                </h2>
                <WomenDietPlan />
            </div>

            <div className="text-center">
                <Link href="/nutritionplan" className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-white transition-all duration-500 bg-gradient-to-r from-[#166534] to-[#2d9155] rounded-xl shadow-lg group hover:shadow-[0_10px_25px_-10px_rgba(45,145,85,0.4)] hover:translate-y-[-2px]">
                    View All Plans
                </Link>
            </div>

        </div>
    )
}

export default Journey