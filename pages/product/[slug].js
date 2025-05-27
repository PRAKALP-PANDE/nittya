import { productsList } from '@/constants';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

// Sample Product Data (you can replace this with fetched data)
const productasdf = {
    name: "roasted-seed-mix",
    name: "Roasted Seed Mix",
    "images": [
        "https://images.unsplash.com/photo-1684160244466-b89ef03b7638?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1700053460290-f47d0726e7db?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1670698783848-5cf695a1b308?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    tagLine: "Crunchy Nutrition for Everyday Wellness",
    description: "Nittya’s Roasted Seed Mix is a delicious, ready-to-eat blend of sunflower, pumpkin, flax, sesame seeds, with a hint of fennel and ajwain for digestion and flavor...",
    ingredients: [
        "Roasted Sunflower Seeds – packed with vitamin E and antioxidants",
        "Roasted Pumpkin Seeds – rich in zinc and magnesium",
        "Roasted Flaxseeds – high in omega-3 and fiber",
        "Roasted Sesame Seeds – calcium-rich and great for bone health",
        "Fennel Seeds – support digestion and freshen breath",
        "Ajwain (Carom Seeds) – aids gut health and boosts metabolism"
    ],
    why_its_good: [
        "Great for snacking, topping salads, curd, smoothies & more",
        "Supports digestion, energy, and immunity",
        "No preservatives | No added salt | 100% natural",
        "Lightly roasted for better flavor and crunch"
    ],
    how_to_use: [
        "Eat 1–2 tablespoons daily — on their own or sprinkled on meals."
    ],
    available_sizes: [
        { size: "500g", price: 300 },
        { size: "1 kg", price: 600 }
    ]
};

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
                    <button className="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-medium text-white transition-all duration-500 bg-gradient-to-r from-[#166534] to-[#2d9155] rounded-md shadow-lg group hover:shadow-[0_10px_25px_-10px_rgba(45,145,85,0.4)] hover:translate-y-[-2px]">
                        Learn More
                    </button>
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
