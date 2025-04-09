import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CardHappyClient from './CardHappyClient';

const HappyClients = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000, // Adjust as needed
    };

    return (
        <div id='happyCustomers' className="relative p-10 md:py-12 bg-gray-100">
            <div className="container mx-auto text-center md:py-12">
                <h2 className="text-3xl font-bold mb-4">Happy Clients</h2>
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