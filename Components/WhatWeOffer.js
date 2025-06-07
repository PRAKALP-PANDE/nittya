import React from 'react'
import { Apple, HeartPulse, Utensils, Leaf, Baby, Activity, Shield, VenusAndMars } from 'lucide-react'
import Image from 'next/image'

const features = [
    {
        icon: <Apple className="w-8 h-8" />,
        text: 'Men’s & Women’s Diet',
        color: 'text-green-500',
        bg: 'bg-green-50'
    },
    {
        icon: <VenusAndMars className="w-8 h-8" />,
        text: 'Couples Diet',
        color: 'text-blue-500',
        bg: 'bg-blue-50'
    },
    {
        icon: <HeartPulse className="w-8 h-8" />,
        text: "Diabetes Care",
        color: 'text-purple-500',
        bg: 'bg-purple-50'
    },
    {
        icon: <Activity className="w-8 h-8" />,
        text: 'Cholesterol & Blood Pressure Care',
        color: 'text-red-500',
        bg: 'bg-red-50'
    },
    {
        icon: <Shield className="w-8 h-8" />,
        text: 'Fatty Liver Care',
        color: 'text-yellow-500',
        bg: 'bg-yellow-50'
    },
    {
        icon: <HeartPulse className="w-8 h-8" />,
        text: 'Thyroid Support',
        color: 'text-pink-500',
        bg: 'bg-pink-50'
    },
    {
        icon: <Leaf className="w-8 h-8" />,
        text: 'PCOS/PCOD Diet',
        color: 'text-sky-500',
        bg: 'bg-sky-50'
    },
    {
        icon: <Baby className="w-8 h-8" />,
        text: 'Pregnancy & Postnatal Care',
        color: 'text-violet-500',
        bg: 'bg-violet-50'
    }
]

const WhatWeOffer = () => {
    return (
        <section className="relative py-20 px-4 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-green-300 mix-blend-multiply filter blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-green-200 mix-blend-multiply filter blur-3xl"></div>
            </div>

            {/* Leaf decorations */}
            <Leaf className="absolute top-10 left-10 w-24 h-24 text-green-100 hidden md:block" />
            <Leaf className="absolute bottom-10 right-10 w-24 h-24 text-green-100 transform rotate-180 hidden md:block" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 cookie-regular">
                        What we <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800">offer</span>
                    </h2>
                    <p className="text-md md:text-xl text-gray-600 max-w-3xl mx-auto">
                    Simple Diet Plans for Common Health Concerns.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Image with decorative frame */}
                    <div className="relative flex justify-center order-1 lg:order-2">
                        <div className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl group">
                            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-green-700/10 z-10"></div>
                            <Image
                                width={500}
                                height={500}
                                src="/homepage/what_we_offer.png"
                                alt="Nutrition Consultation"
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-700"
                            />
                        </div>

                        {/* Floating badge */}
                        <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-xl shadow-lg border border-gray-100 hidden lg:block">
                            <div className="flex items-center gap-3">
                                <div className="p-3 bg-green-100 rounded-lg">
                                    <Utensils className="w-6 h-6 text-green-600" />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">100+</p>
                                    <p className="text-xs text-gray-500">Achieving Wellness</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Features grid */}
                    <div className="grid md:grid-cols-2 gap-2 md:gap-6 order-2 lg:order-1">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className={`p-4 md:p-6 rounded-full md:rounded-2xl ${feature.bg} border border-white transition-all duration-300 hover:shadow-md hover:-translate-y-1`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`w-12 h-12 ${feature.bg} rounded-lg flex items-center justify-center ${feature.color}`}>
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-lg font-medium text-gray-800">{feature.text}</h3>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>


            </div>
        </section>
    )
}

export default WhatWeOffer