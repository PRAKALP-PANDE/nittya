import React, { useState } from 'react'
import { AiOutlineShopping } from "react-icons/ai";
import { MdCurrencyRupee } from "react-icons/md";

const Product = () => {
    const [selectedImg, setSelectedImg] = useState(0);
    
    const images = [
        "https://www.snitch.co.in/cdn/shop/files/4MST2527-01-M_40.jpg?v=1737189939&width=540",
        "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS3819-02_1_b49d3d6e-ec9f-4cd4-8bad-341ccb80e946.jpg?v=1741094253&quality=50",
        "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MST2718-01_1_654d9bd5-9bbc-4d1d-909e-3d15c5d5f4ab.jpg?v=1739287341&quality=50",
        "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MST2723-01_1_3f02006f-7740-41ab-92c2-eea6227ca246.jpg?v=1739473296&quality=50",
        "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MST2637-01_1_e9b0fc84-8c6d-4b80-a31d-4f65dc9016ba.jpg?v=1739973534&quality=50",
    ];

    return (
        <section className="px-5 py-12 flex flex-col lg:flex-row gap-12 md:pt-30">
            {/* Left Section */}
            <div className="flex flex-1 flex-col lg:flex-row-reverse gap-5">
                <div className="mainImg flex-[5]">
                    <img
                        src={images[selectedImg]}
                        alt=""
                        className="w-full max-h-[400px] md:max-h-[600px] lg:max-h-[800px] object-contain rounded-lg"
                    />
                </div>
                <div className="flex flex-1 flex-row lg:flex-col overflow-x-auto gap-2">
                    {images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`Thumbnail ${index + 1}`}
                            className={`w-24 h-24 sm:w-32 sm:h-32 object-cover cursor-pointer border-2 rounded-md transition-all ${selectedImg === index ? 'border-gray-800' : 'border-transparent blur-xs'}`}
                            onClick={() => setSelectedImg(index)}
                        />
                    ))}
                </div>
            </div>

            {/* Right Section */}
            <div className="flex flex-1 flex-col gap-7">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold">
                    Title: Here will be title
                </h2>
                <h2 className="text-base sm:text-lg lg:text-xl capitalize">category</h2>
                <span className="price text-2xl sm:text-3xl font-medium">₹ 1999/-</span>
                <p className="text-sm sm:text-base lg:text-xl font-light text-justify">
                Give a majestic lift to your look with this white plain pattern shirt. The shirt is crafted from fine 100% cotton. It is a versatile staple and great for teaming with jeans for a more casual look or smartening up with a classic pair of chinos.
                </p>
                <div className="flex m-2 items-center border-b-2 border-gray-100">
                    <div className="flex ml-6 items-center">
                        <span className="mr-3">Size</span>
                        <div className="relative">
                            <select value='s' className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-500 text-base pl-3 pr-10">
                                <option value={'s'}>S</option>
                                <option value={'m'}>M</option>
                                <option value={'l'}>L</option>
                                <option value={'xl'}>XL</option>
                                <option value={'xxl'}>XXL</option>
                            </select>
                            <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <button className="flex border-0 py-2 px-2 md:px-6 focus:outline-none bg-gray-300 text-gray-800 hover:bg-gray-800 hover:text-gray-200 rounded-lg gap-2 items-center font-medium"><MdCurrencyRupee /> BUY NOW</button>
                    <button className="flex ml-4 border-0 py-2 px-2 md:px-6 focus:outline-none bg-gray-300 text-gray-800 hover:bg-gray-800 hover:text-gray-200 rounded-lg gap-2 items-center font-medium"><AiOutlineShopping /> ADD TO CART</button>
                </div>
                <div className="pin mt-2 flex space-x-2 text-sm">
                    <label
                        htmlFor="pincode"
                        className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-gray-500 focus-within:ring-1 focus-within:ring-gray-600"
                    >
                        <input
                            type="text"
                            id="pincode"
                            placeholder="pincode"
                            className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm rounded-l-lg"
                        />

                        <span
                            className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-md peer-focus:top-3 peer-focus:text-xs"
                        >
                            Enter your Pincode
                        </span>
                    </label>
                    <button className="border-0 font-medium py-2 px-4 focus:outline-none bg-gray-300 text-gray-800 hover:bg-gray-800 hover:text-gray-200 rounded-r-lg">Check</button>
                </div>
                <div className="info flex flex-col gap-2 text-gray-500 mt-7 text-xs">
                    <span>Vendor: Polo</span>
                    <span>Type: Coat</span>
                    <span>Tag: Coat, Men</span>
                    <span>Color: Red</span>
                </div>
                <hr className="border-2 border-solid border-gray-500" />
                <div className="info flex flex-col gap-2 text-gray-500 mt-7 text-xs">
                    <span>DESCRIPTION</span>
                    <hr className="w-full lg:w-52 border-2 border-solid border-gray-500" />
                    <span>ADDITIONAL INFORMATION</span>
                    <hr className="w-full lg:w-52 border-2 border-solid border-gray-500" />
                    <span>FAQ</span>
                </div>
            </div>
        </section>
    )
}

export default Product