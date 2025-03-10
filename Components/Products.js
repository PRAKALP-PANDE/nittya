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
                            <Link href="#" className="container relative block rounded-tr-3xl border-2 border-gray-100">
                                <img
                                    src={product.image}
                                    alt="" className="h-80 w-full rounded-tr-3xl object-cover" />

                                <div className="p-4 text-center">
                                    <strong className="text-xl font-medium text-gray-900">{product.title}</strong>

                                    <p className="mt-2 text-pretty text-gray-700">
                                        {product.description}
                                    </p>

                                    <span
                                        className="mt-4 block px-5 py-3 text-2xl font-medium tracking-widest text-[#2f9457] transition-colors">
                                        ₹{product.price}
                                    </span>
                                </div>
                            </Link>
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