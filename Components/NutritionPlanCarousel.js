// NutritionPlanCarousel.js

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { nutritionPlans } from '@/constants';

const NutritionPlanCarousel = () => {
    const settings = {
        dots: false,
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Slider {...settings}>
                {nutritionPlans && nutritionPlans.map((item, index) => (
                    <div key={index} className="overflow-hidden transition-transform duration-300 hover:scale-105">
                        <div className="p-4 sm:p-6 flex flex-col items-center justify-center">
                            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md overflow-hidden">
                                <img
                                    alt="content"
                                    className="w-full h-40 sm:h-48 object-contain object-center"
                                    src={`https://www.mightymillets.com/assets/images/${item.image}`}
                                />
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold text-white mt-4 sm:mt-6 mb-10 text-center">
                                {item.title}
                            </h3>
                            <button className="flex mx-auto mt-4 sm:mt-6 border-0 py-2 px-4 sm:px-5 focus:outline-none rounded-full bg-white text-gray-800 hover:bg-black hover:text-gray-300 transition-all shadow-lg">
                                READ MORE
                            </button>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default NutritionPlanCarousel;
