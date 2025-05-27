import Slider from 'react-slick';
import Link from 'next/link';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { productsList } from '@/constants';

const Products = () => {
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
        arrows: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
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
        <section className='justify-center items-center py-20'>
            <div className="best-selling-carousel mx-5 px-12 relative">
                <Slider {...settings}>
                    {productsList && productsList.map((product, index) => (
                        <div key={`experience-point-${index}`} className="px-2">
                            <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col border border-gray-100 hover:border-green-100">
                                {/* Image with badges */}
                                <div className="relative w-full h-64 overflow-hidden">
                                    <img
                                        src={product.images[0]}
                                        alt={name}
                                        className="object-cover w-full h-full transform group-hover:scale-110 transition duration-500 ease-in-out"
                                    />
                                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                                        <span className="bg-green-600 text-white text-xs px-2.5 py-1 rounded-full shadow-md font-medium">
                                            Healthy
                                        </span>
                                    </div>
                                </div>

                                {/* Product details */}
                                <div className="p-5 flex flex-col justify-between flex-grow">
                                    <div>
                                        <div className="flex justify-between items-start gap-2">
                                            <h3 className="text-lg font-bold text-gray-900 line-clamp-2 leading-tight">
                                                {product.name}
                                            </h3>
                                        </div>

                                        <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                                            {product.tagLine}
                                        </p>

                                        {/* Benefits section */}
                                        <div className="mt-4">
                                            <h4 className="text-sm font-semibold text-gray-800 mb-2 flex items-center gap-1">
                                                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                Key Benefits
                                            </h4>
                                            <ul className="space-y-2">
                                                {product.why_its_good.slice(0, 2).map((item, i) => (
                                                    <li key={i} className="flex items-start gap-2">
                                                        <svg className="w-3 h-3 mt-1 flex-shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                        </svg>
                                                        <span className="text-xs text-gray-700">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                            {product.why_its_good.length > 2 && (
                                                <p className="text-xs text-green-600 mt-2 font-medium cursor-pointer hover:underline flex items-center gap-1">
                                                    +{product.why_its_good.length - 2} more benefits
                                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Action buttons */}
                                    <div className="mt-6 flex gap-3">
                                        <Link href={`/product/${product.slug}`} className="flex-1 py-2.5 text-sm font-semibold text-center bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all duration-300 shadow-sm hover:shadow-md">
                                            View Details
                                        </Link>
                                        <button className="p-2.5 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
                <button className="flex mx-auto mt-12 border-0 py-3 px-6 rounded-full bg-white text-gray-800 hover:bg-black hover:text-gray-300 transition-all shadow-lg">
                    VIEW ALL
                </button>
            </div>
        </section>
    )
}

export default Products