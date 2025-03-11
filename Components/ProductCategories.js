import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductsCategoriesCarousel from './ProductsCategoriesCarousel'

const ProductCategories = () => {
    
    const OurProducts = [
        { id: 1, title: 'Healthy Granolas', image: 'https://www.mightymillets.com/upload/banner/3A2572A4-BE65-4B7E-A667-09669DB6C802.png', description: "100% Pure Canadian Maple syrup as a sweetener Totally pure, natural and healthier alternative to heated honey or refined sugar. It is rich in antioxidants, is diabetic friendly and rich in nutrients. More nuts, less oats Significantly higher ratio of nuts, seeds and dry" },
        { id: 2, title: 'Healthy Nutri Bars', image: 'https://www.mightymillets.com/upload/banner/3A2572A4-BE65-4B7E-A667-09669DB6C802.png', description: "They are not  like your usual protein or energy bars." },
        { id: 3, title: 'Healthy Powders', image: 'https://www.mightymillets.com/upload/banner/3A2572A4-BE65-4B7E-A667-09669DB6C802.png', description: "Targeted for solving specific conditions. Totally natural and hand made!" },
        { id: 4, title: 'Healthy Savouries', image: 'https://www.mightymillets.com/upload/banner/3A2572A4-BE65-4B7E-A667-09669DB6C802.png', description: "Completely handmade, healthy and totally perfect for binge eating cravings. People just dont stop munching on these" },
    ];

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
        <>
            <section className="mx-auto hidden md:flex lg:h-screen justify-between items-center"
                style={{
                    background: "linear-gradient(to right, #eeeeee 46.3%, #f36114 46.3%)"
                }}>
                <div className='md:w-1/3 p-10 mb-4 md:mb-10 text-4xl sm:text-5xl md:text-7xl cookie-regular font-semibold tracking-tight leading-[1.2] text-[#2d9155] flex justify-end border-r-4 border-[#2d9155] pr-6'>
                    <span className='drop-shadow-lg'>Product</span><br />
                    <span className='drop-shadow-lg'>Categories</span>
                </div>
                <div className='md:w-[53.7%] mr-20'>
                    <div className="best-selling-carousel mx-5">
                        <Slider {...settings}>
                            {OurProducts && OurProducts.map((product) => (
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
                </div>
            </section>

            <section className="md:hidden flex justify-center px-4 sm:px-6 bg-gray-100">
                <div className="w-full max-w-7xl mx-auto mt-16">
                    <div className="md:w-1/3 p-10 mb-4 md:mb-10 text-4xl sm:text-5xl md:text-7xl cookie-regular font-semibold tracking-tight leading-[1.2] text-[#2d9155] flex">
                        <span className='drop-shadow-lg'>Product</span><br />
                        <span className='drop-shadow-lg'>Categories</span>
                    </div>

                    {/* Mobile Carousel */}
                    <div className="mt-6">
                        <ProductsCategoriesCarousel products={OurProducts} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductCategories