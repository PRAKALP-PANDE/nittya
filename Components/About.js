import React from 'react'

const About = () => {
    return (
        <section className="text-gray-600 body-font lg:h-screen about-wave bg-gray-100 py-12">
            <div className="container mx-auto flex px-6 lg:px-16 lg:py-12 md:flex-row flex-col justify-between items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 flex justify-center">
                    <img className="object-cover object-center rounded-full shadow-lg border-4 border-[#2d9155]" alt="hero" src="https://www.mightymillets.com/assets/images/home_about_meena.jpg" />
                </div>
                <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="max-w-2xl mb-4 md:mb-10 text-4xl sm:text-5xl md:text-8xl cookie-regular font-semibold tracking-tight leading-tight text-[#2d9155] inline-flex items-center drop-shadow-md">
                        About Us
                    </h1>
                    <div className="mb-8 leading-relaxed inline-flex items-center">
                        <p className='font-semibold text-lg leading-5 text-gray-800'>Nittya</p>
                        <div className="h-px w-24 bg-[#2d9155] rounded mt-2 ml-4"></div>
                        <p className='font-semibold text-lg leading-5 ml-2 text-gray-800'>Owner_Name</p>
                    </div>
                    <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-2xl">
                        <span className="font-semibold text-gray-900">Owner_Name</span>, nutritionist and founder of <span className="font-semibold text-[#2d9155]">Nittya</span>, believes that there is no "One Size Fits All" approach when it comes to your health. We provide you with a nutrition plan, which is unique for YOU, based on your health conditions, food preferences, culture, cooking convenience, and lifestyle.
                        We aim to change the perception of the word 'diet'. Eating healthy should be a lifestyle, not a FAD! Our goal is to make healthy living more pleasurable and attainable.
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