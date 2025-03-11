import React from 'react'
import { motion } from 'framer-motion';
import Head from 'next/head';

const Hero = () => {

    const textVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } }
    };

    const imageVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } }
    };

    return (
        <div>
            <Head>
                <title>Nittya.com - Your Daily Nutrition</title>
                <meta name="description" content="Nittya: Your Daily Nutrition" />
            </Head>

            <section className="lg:h-screen flex justify-center items-center bg-gradient-to-b from-[#2d9155] to-[#2f9457]">
                <div className="absolute inset-0 bg-gray-300 clip-wave"></div>
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 justify-center items-center">
                    {/* Text Content */}
                    <motion.div className="mr-auto place-self-center lg:col-span-7" initial="hidden" animate="visible" variants={textVariants}>
                        <h2 className="max-w-2xl mb-4 text-4xl sm:text-5xl md:text-6xl cookie-regular font-normal tracking-tight leading-tight text-black inline-flex items-center">
                            Welcome
                            <div className="h-px w-32 bg-black rounded mt-2 ml-4"></div>
                        </h2>
                        <h1 className="max-w-2xl mb-4 text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-tight">
                            Your Health
                        </h1>
                        <h5 className="max-w-2xl mb-4 text-2xl sm:text-3xl md:text-4xl font-normal text-white tracking-tight leading-tight">
                            In Our Profi Hand
                        </h5>
                        <p className="max-w-2xl mb-6 text-base sm:text-lg md:text-xl font-normal text-white lg:mb-8">
                            From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.
                        </p>
                        <button className="px-8 py-3 bg-white text-[#2d9155] font-semibold rounded-lg hover:bg-gray-100 transition duration-300">
                            Get Started
                        </button>
                    </motion.div>

                    {/* Image */}
                    <motion.div className="hidden lg:mt-0 lg:col-span-5 lg:flex" initial="hidden" animate="visible" variants={imageVariants}>
                        <img
                            src="https://www.mightymillets.com/assets/images/min-slider/prod-1.png"
                            alt="mockup"
                            className="w-1/2 h-1/2 transform hover:scale-105 transition-transform duration-300"
                        />
                        <img
                            src="https://www.mightymillets.com/assets/images/min-slider/prod-2.png"
                            alt="mockup"
                            className="w-1/2 h-1/2 transform hover:scale-105 transition-transform duration-300"
                        />
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default Hero