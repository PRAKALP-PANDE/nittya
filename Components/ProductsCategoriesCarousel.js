// ProductsCategoriesCarousel.js

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductsCategoriesCarousel = ({ products }) => {
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
        <div className="best-selling-carousel mx-5">
            <Slider {...settings}>
                {products && products.map((product) => (
                    <div key={product.id} className='lg:w-[53.7%]'>
                        <div className="container px-5 py-24 mx-auto">
                            <div className="flex items-center mx-auto sm:flex-row flex-col p-8 rounded-lg transition-transform">
                                <div className="mx-4 inline-flex items-center justify-center flex-shrink-0 p-4">
                                    <img alt="ecommerce" className="m-auto h-[30vh] md:h-[36vh]" src={product.image} />
                                </div>
                                <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0 text-white">
                                    <h1 className="md:text-5xl title-font md:font-black mb-5 leading-10 text-white drop-shadow-lg">
                                        {product.title}
                                    </h1>
                                    <p className="leading-relaxed text-base font-normal text-gray-100">
                                        {product.description}
                                    </p>
                                    <button className="flex mt-6 border-0 py-3 px-6 rounded-full bg-white text-gray-800 hover:bg-black hover:text-gray-300 transition-all shadow-lg">
                                        Choose Plan
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ProductsCategoriesCarousel;
