import React from 'react'

const About = () => {
    return (
        <section id='aboutUs' className="text-gray-600 body-font lg:h-screen about-wave bg-gray-100 py-12">
            <div className="container mx-auto flex px-6 lg:px-16 lg:py-12 md:flex-row flex-col justify-between items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 flex justify-center">
                    <img className="object-cover object-center rounded-full shadow-lg border-4 border-[#2d9155]" alt="hero" src="https://www.mightymillets.com/assets/images/home_about_meena.jpg" />
                </div>
                <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="max-w-2xl mb-4 md:mb-6 text-4xl sm:text-5xl md:text-8xl cookie-regular font-semibold tracking-tight leading-tight text-[#2d9155] inline-flex items-center drop-shadow-md">
                        About Us
                    </h1>
                    <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-2xl">
                        At <span className="font-semibold text-[#2d9155]">Nittya – Your Daily Nutrition</span>, we specialize in <span className="font-semibold text-gray-900">home-cooked, balanced meals </span>that support <span className="font-semibold text-gray-900">women’s health, hormonal balance, weight and inch loss </span>and <span className="font-semibold text-gray-900">correction of nutritional deficiencies </span>like iron, calcium, hemoglobin etc— without extreme diets, supplements, or shortcuts. Founded by <span className="font-semibold text-gray-900">Nutritionist Vidya Sawant</span>, our diet plans are <span className="font-semibold text-gray-900">scientifically crafted </span>easy to follow, and built for real people with real routines. With a strong focus on daily nourishment and lifestyle wellness, we aim to make healthy eating simple, enjoyable, and sustainable. We also offer clean, natural products like <span className="font-semibold text-gray-900">Kids Nutrimix Powder, Women’s Nuts & Seeds Powder, Sugar-Free Laddoos, and a Daily Seed Mix </span>to complement your journey. At Nittya, we believe good food is not just fuel — it’s your foundation
                        for lifelong health.
                    </p>
                    <div className="flex justify-center gap-4">
                        <button className="inline-flex text-white bg-[#2d9155] border-0 py-3 px-8 focus:outline-none hover:bg-[#237a45] rounded-lg text-lg shadow-md transition-all">
                            Learn More
                        </button>
                        <button className="inline-flex text-[#2d9155] bg-white border border-[#2d9155] py-3 px-8 focus:outline-none hover:bg-[#2d9155] hover:text-white rounded-lg text-lg shadow-md transition-all">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About