import React from 'react'

const Terms = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-16 px-6 sm:px-10 lg:px-24">
            {/* Header Section */}
            <div className="text-center mb-16">
                <h1 className="text-4xl sm:text-5xl font-bold text-transparent leading-tight bg-clip-text bg-gradient-to-r from-[#145c2d] to-[#2d9155] pb-2">
                    Terms & Conditions
                </h1>
                <p className="mt-6 text-lg sm:text-xl text-[#3a7d55] max-w-2xl mx-auto leading-relaxed">
                    Please read these terms carefully before beginning your diet plan with Nittya – Your Daily Nutrition.
                </p>
            </div>

            {/* Terms Card */}
            <div className="bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] p-8 sm:p-12 max-w-5xl mx-auto space-y-10 text-[#1a6938]">
                <section className="space-y-4">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 bg-[#e8f5ee] text-[#166534] font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4">
                            1
                        </div>
                        <h2 className="text-2xl font-semibold text-[#1e7e34]">
                            Medical Supervision
                        </h2>
                    </div>
                    <p className="leading-relaxed pl-12">
                        If you are currently under medical care or taking prescription medication, please consult with your doctor before following the provided diet plan.
                    </p>
                </section>

                <section className="space-y-4">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 bg-[#e8f5ee] text-[#166534] font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4">
                            2
                        </div>
                        <h2 className="text-2xl font-semibold text-[#1e7e34]">
                            Personal Use Only
                        </h2>
                    </div>
                    <p className="leading-relaxed pl-12">
                        Your diet plan is intended for your individual use only. Sharing, forwarding, or redistributing the plan to others is strictly prohibited.
                    </p>
                </section>

                <section className="space-y-4">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 bg-[#e8f5ee] text-[#166534] font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4">
                            3
                        </div>
                        <h2 className="text-2xl font-semibold text-[#1e7e34]">
                            Communication Guidelines
                        </h2>
                    </div>
                    <ul className="list-disc list-inside space-y-3 pl-16 marker:text-[#2d9155]">
                        <li className="pl-2 leading-relaxed">
                            <strong className="text-[#1e7e34]">Phone consultations</strong> are available between <strong className="text-[#1e7e34]">10:00 AM – 11:30 AM</strong> and <strong className="text-[#1e7e34]">3:00 PM – 6:00 PM</strong>.
                        </li>
                        <li className="pl-2 leading-relaxed">
                            <strong className="text-[#1e7e34]">WhatsApp queries</strong> are welcome between <strong className="text-[#1e7e34]">10:00 AM – 8:00 PM</strong>.
                        </li>
                    </ul>
                </section>

                <section className="space-y-4">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 bg-[#e8f5ee] text-[#166534] font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4">
                            4
                        </div>
                        <h2 className="text-2xl font-semibold text-[#1e7e34]">
                            Daily Check-ins
                        </h2>
                    </div>
                    <ul className="list-disc list-inside space-y-3 pl-16 marker:text-[#2d9155]">
                        <li className="pl-2 leading-relaxed">
                            A daily weight check on an empty stomach is mandatory and must be reported each morning.
                        </li>
                        <li className="pl-2 leading-relaxed">
                            Photos of your meals (breakfast, lunch, and dinner) must be shared by the end of each day.
                        </li>
                    </ul>
                </section>

                <section className="space-y-4">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 bg-[#e8f5ee] text-[#166534] font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4">
                            5
                        </div>
                        <h2 className="text-2xl font-semibold text-[#1e7e34]">
                            Health & Safety
                        </h2>
                    </div>
                    <ul className="list-disc list-inside space-y-3 pl-16 marker:text-[#2d9155]">
                        <li className="pl-2 leading-relaxed">
                            Inform us of any known allergies or medical conditions before starting the plan.
                        </li>
                        <li className="pl-2 leading-relaxed">
                            If you experience any side effects or discomfort, please notify us immediately. We will assess the situation and make necessary adjustments.
                        </li>
                    </ul>
                </section>

                <section className="text-sm text-[#166534] pt-8 border-t border-[#e0f2e9] italic flex justify-between items-center">
                    <span>Last updated: May 28, 2025</span>
                    <span className="hidden md:block font-medium">Nittya – Your Daily Nutrition</span>
                </section>
            </div>
        </div>
    )
}

export default Terms