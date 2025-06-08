import React from 'react'

const Privacy = () => {
    return (
        <div className="min-h-screen bg-[#f8faf7] py-12 px-6 sm:px-10 lg:px-20">
            {/* Header Section */}
            <div className="text-center mb-12">
                <h1 className="text-4xl sm:text-5xl font-bold text-transparent leading-tight bg-clip-text bg-gradient-to-r from-[#145c2d] to-[#2d9155] pb-2">
                    Privacy Policy
                </h1>
                <p className="mt-6 text-lg sm:text-xl text-[#247a46] max-w-2xl mx-auto leading-relaxed">
                    Your privacy matters to us. Here's how we handle your data with care and responsibility.
                </p>
            </div>

            {/* Content Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 max-w-4xl mx-auto space-y-8 text-[#1a6938]">
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold mb-3 text-[#1e7e34] border-b border-[#e0f2e9] pb-2">
                        Our Commitment
                    </h2>
                    <p className="leading-relaxed">
                        At <strong className="text-[#1e7e34]">Nittya – Your Daily Nutrition</strong>, we are deeply committed to safeguarding your personal and health information. This policy explains how we collect, use, and protect your data.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold mb-3 text-[#1e7e34] border-b border-[#e0f2e9] pb-2">
                        What We Collect & How We Use It
                    </h2>
                    <ul className="list-disc list-inside space-y-3 pl-4 marker:text-[#2d9155]">
                        <li className="pl-2 leading-relaxed">
                            <strong className="text-[#1e7e34]">Personal details, health data, dietary preferences</strong>, and progress updates are used exclusively to craft and monitor your diet plan.
                        </li>
                        <li className="pl-2 leading-relaxed">
                            Meal photos and weight logs help us track your journey and improve your results.
                        </li>
                    </ul>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold mb-3 text-[#1e7e34] border-b border-[#e0f2e9] pb-2">
                        Your Information Stays Private
                    </h2>
                    <p className="leading-relaxed">
                        We do <strong className="text-[#1e7e34]">not</strong> share your data with third parties without your explicit consent. All your details are handled with strict confidentiality.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold mb-3 text-[#1e7e34] border-b border-[#e0f2e9] pb-2">
                        Medical Disclaimer
                    </h2>
                    <p className="leading-relaxed">
                        If you're currently under a doctor's care or taking medications, we highly recommend sharing your diet plan with your healthcare provider and following their guidance.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold mb-3 text-[#1e7e34] border-b border-[#e0f2e9] pb-2">
                        Policy Updates
                    </h2>
                    <p className="leading-relaxed">
                        We may update this policy from time to time to reflect improvements or legal requirements. Please revisit this page periodically for the latest version.
                    </p>
                </section>

                <section className="text-sm text-[#166534] pt-6 border-t border-[#e0f2e9] italic">
                    Last updated: May 28, 2025
                </section>
            </div>
        </div>
    )
}

export default Privacy