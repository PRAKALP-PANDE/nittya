import React from 'react'
import Diabetes from './DietPlans/Diabetes'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BloodPressure from './DietPlans/BloodPressure';
import FattyLiver from './DietPlans/FattyLiver';
import Thyroid from './DietPlans/Thyroid';
import PCOS from './DietPlans/PCOS';

const HealthConditionDiet = () => {
    const settings = {
        dots: true,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 1, // Number of slides to show at a time
        slidesToScroll: 1, // Number of slides to scroll on navigation
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <section className="py-10 md:py-20 bg-gray-200">
            <div className="container px-5 mx-auto flex flex-wrap">
                <h2 className="mb-10 md:mb-16 text-4xl sm:text-5xl md:text-6xl cookie-regular font-normal leading-16 text-[#2f9457] text-center w-full">
                    Diet Plans According To Health Conditions
                </h2>
                <div className="w-full m-5 px-5">
                    <Slider {...settings}>
                        <Diabetes />
                        <BloodPressure />
                        <FattyLiver />
                        <Thyroid />
                        <PCOS />
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default HealthConditionDiet