import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CardHappyClient from './CardHappyClient';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const HappyClients = () => {

    const CustomPrevArrow = ({ onClick }) => (
        <button onClick={onClick} className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 bg-transparent p-3 transition-all">
            <FaChevronLeft size={35} />
        </button>
    );

    const CustomNextArrow = ({ onClick }) => (
        <button onClick={onClick} className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 bg-transparent p-3 transition-all">
            <FaChevronRight size={35} />
        </button>
    );

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000, // Adjust as needed
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };

    return (
        <div id='happyCustomers' className="relative p-10 md:py-12 bg-gray-100">
            <div className="container mx-auto text-center">
                <h2 className="max-w-2xl mb-4 md:mb-10 text-4xl sm:text-5xl md:text-8xl cookie-regular font-semibold tracking-tight leading-tight text-[#2d9155] inline-flex items-center drop-shadow-md">Happy Clients</h2>
                <p className="text-gray-600">Discover a wide range of nutrition products to support your wellness journey.</p>
            </div>
            <Slider {...settings}>

                <CardHappyClient />
                <CardHappyClient />
                <CardHappyClient />
                <CardHappyClient />

                {/* Add more slides as needed */}
            </Slider>
        </div>
    );
};

export default HappyClients