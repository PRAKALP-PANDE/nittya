import React from 'react';
import Diabetes from './DietPlans/Diabetes';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BloodPressure from './DietPlans/BloodPressure';
import FattyLiver from './DietPlans/FattyLiver';
import Thyroid from './DietPlans/Thyroid';
import PCOS from './DietPlans/Pcos';
import PregnancyDIetPlan from './DietPlans/PregnancyDIetPlan';
import PostNatal from './DietPlans/PostNatal';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const HealthConditionDiet = () => {
    const CustomPrevArrow = ({ onClick }) => (
        <button
            onClick={onClick}
            className="z-10 absolute left-2 md:left-[-40px] top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2 md:p-3 text-[#2f9457] hover:bg-[#2f9457] hover:text-white transition-all"
        >
            <FaChevronLeft size={20} />
        </button>
    );

    const CustomNextArrow = ({ onClick }) => (
        <button
            onClick={onClick}
            className="z-10 absolute right-2 md:right-[-40px] top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2 md:p-3 text-[#2f9457] hover:bg-[#2f9457] hover:text-white transition-all"
        >
            <FaChevronRight size={20} />
        </button>
    );

    const settings = {
        dots: true,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                },
            },
        ],
    };

    return (
        <section id='healthDiet' className="py-10 bg-gray-100">
            <div className="container mx-auto px- sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#166534] to-[#2d9155]">
                            Diet Plans According
                        </span><br />
                        <span className="text-gray-800">To Your Health Conditions</span>
                    </h2>
                    <p className="text-3xl text-gray-600 max-w-3xl mx-auto cookie-regular">
                        Scientifically designed nutrition plans tailored to your specific health needs
                    </p>
                </div>
                <div className="relative">
                    <Slider {...settings}>
                        <Diabetes />
                        <BloodPressure />
                        <FattyLiver />
                        <Thyroid />
                        <PCOS />
                        <PregnancyDIetPlan />
                        <PostNatal />
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default HealthConditionDiet;
