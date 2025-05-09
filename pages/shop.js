import React from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { MdCurrencyRupee } from "react-icons/md";
import { productsList } from '@/constants';
import Link from "next/link";

const ProductCard = ({ product }) => {
    const { name, tagLine, images, why_its_good, available_sizes, slug } = product;
    const startingPrice = available_sizes[0]?.price;

    return (
        <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col border border-gray-100 hover:border-green-100">
            {/* Image with badges */}
            <div className="relative w-full h-64 overflow-hidden">
                <img
                    src={images[0]}
                    alt={name}
                    className="object-cover w-full h-full transform group-hover:scale-110 transition duration-500 ease-in-out"
                />
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                    <span className="bg-green-600 text-white text-xs px-2.5 py-1 rounded-full shadow-md font-medium">
                        Healthy
                    </span>
                    {startingPrice && (
                        <span className="bg-white text-gray-900 text-xs px-2.5 py-1 rounded-full shadow-md font-medium">
                            ₹{startingPrice}
                        </span>
                    )}
                </div>
            </div>

            {/* Product details */}
            <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                    <div className="flex justify-between items-start gap-2">
                        <h3 className="text-lg font-bold text-gray-900 line-clamp-2 leading-tight">
                            {name}
                        </h3>
                    </div>

                    <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                        {tagLine}
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
                            {why_its_good.slice(0, 2).map((item, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <svg className="w-3 h-3 mt-1 flex-shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-xs text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                        {why_its_good.length > 2 && (
                            <p className="text-xs text-green-600 mt-2 font-medium cursor-pointer hover:underline flex items-center gap-1">
                                +{why_its_good.length - 2} more benefits
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </p>
                        )}
                    </div>
                </div>

                {/* Action buttons */}
                <div className="mt-6 flex gap-3">
                    <Link href={`/product/${slug}`} className="flex-1 py-2.5 text-sm font-semibold text-center bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all duration-300 shadow-sm hover:shadow-md">
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
    );
};

const Products = () => {
    return (
        <div className="relative py-12 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
            {/* Decorative background elements */}
            <div className="absolute inset-0 overflow-hidden opacity-10">
                <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-green-200 mix-blend-multiply filter blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-green-100 mix-blend-multiply filter blur-3xl"></div>
            </div>

            <div className="max-w-8xl mx-auto relative">
                {/* Section header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800">Premium Products</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Scientifically formulated nutrition products for your wellness journey
                    </p>
                </div>

                {/* Products grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {productsList && productsList.map((product, index) => (
                        <div 
                            key={index}
                            className="transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>

                {/* View more button */}
                <div className="mt-12 text-center">
                    <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                        View All Products
                        <svg className="ml-2 -mr-1 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Products;