import { productsList } from '@/constants';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const Product = () => {
    const router = useRouter();
    const { slug } = router.query;
    const product = productsList.find((p) => p.slug === slug);

    const [selectedImg, setSelectedImg] = useState(0);

    if (!product) {
        return <div className="p-10 text-center text-red-500">Product not found.</div>;
    }

    return (
        <section className="px-6 py-12 md:py-24 flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">
            {/* Left Section */}
            <div className="flex flex-1 flex-col gap-4">
                <div className="w-full">
                    <img
                        src={product.images[selectedImg]}
                        alt="Main product"
                        className="w-full max-h-[600px] object-contain rounded-xl shadow"
                    />
                </div>
                <div className="flex gap-3 overflow-x-auto">
                    {product.images.map((img, idx) => (
                        <img
                            key={idx}
                            src={img}
                            alt={`Thumb ${idx}`}
                            className={`w-24 h-24 rounded-lg cursor-pointer object-cover border-2 transition-all ${selectedImg === idx ? "border-gray-800" : "border-transparent"}`}
                            onClick={() => setSelectedImg(idx)}
                        />
                    ))}
                </div>
            </div>

            {/* Right Section */}
            <div className="flex flex-1 flex-col gap-6">
                <h1 className="text-3xl font-semibold text-gray-900">{product.name}</h1>
                <p className="text-[#166534] text-lg font-bold italic">{product.tagLine}</p>
                <p className="text-gray-700 text-base">{product.description}</p>

                <div>
                    <label className="block mb-1 font-medium">Available Sizes</label>
                    {product.available_sizes.map((sizeOption, index) => (
                        <div key={index} className="border rounded-md p-3 m-3 flex justify-between items-center">
                            <span className="font-medium text-gray-800">{sizeOption.size}</span>
                            {sizeOption.price ? (
                                <span className="text-sm text-gray-500">₹{sizeOption.price} / kg</span>
                            ) : (
                                <span className="text-sm text-gray-400 italic">Price on request</span>
                            )}
                        </div>
                    ))}
                </div>
                <div className="flex items-center gap-4 mt-4">
                    <Link href={`https://wa.me/9172683827?text=${product.message}`} className="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-medium text-white transition-all duration-500 bg-gradient-to-r from-[#166534] to-[#2d9155] rounded-md shadow-lg group hover:shadow-[0_10px_25px_-10px_rgba(45,145,85,0.4)] hover:translate-y-[-2px]">
                        Learn More
                    </Link>
                </div>

                <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-2">What's Inside</h2>
                    <ul className="list-disc ml-6 text-sm text-gray-600">
                        {product.ingredients.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                </div>

                <div className="mt-6">
                    <h2 className="text-xl font-semibold mb-2">Why It's Good</h2>
                    <ul className="list-disc ml-6 text-sm text-gray-600">
                        {product.why_its_good.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                </div>

                <div className="mt-6">
                    <h2 className="text-xl font-semibold mb-2">How to Use</h2>
                    <ul className="list-disc ml-6 text-sm text-gray-600">
                        {product.how_to_use.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Product;
