import React, { useState } from 'react';
import { AiOutlineShopping } from "react-icons/ai";
import { MdCurrencyRupee } from "react-icons/md";

// Sample Product Data (you can replace this with fetched data)
const productData = {
    name: "Roasted Seed Mix",
    images: [
        "https://www.snitch.co.in/cdn/shop/files/4MST2527-01-M_40.jpg?v=1737189939&width=540",
        "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS3819-02_1_b49d3d6e-ec9f-4cd4-8bad-341ccb80e946.jpg?v=1741094253&quality=50",
        "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MST2718-01_1_654d9bd5-9bbc-4d1d-909e-3d15c5d5f4ab.jpg?v=1739287341&quality=50",
        "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MST2723-01_1_3f02006f-7740-41ab-92c2-eea6227ca246.jpg?v=1739473296&quality=50",
        "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MST2637-01_1_e9b0fc84-8c6d-4b80-a31d-4f65dc9016ba.jpg?v=1739973534&quality=50"
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
    const [selectedImg, setSelectedImg] = useState(0);
    const [selectedSize, setSelectedSize] = useState(productData.available_sizes[0]);

    return (
        <section className="px-6 py-12 flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">
            {/* Left Section */}
            <div className="flex flex-1 flex-col gap-4">
                <div className="w-full">
                    <img
                        src={productData.images[selectedImg]}
                        alt="Main product"
                        className="w-full max-h-[600px] object-contain rounded-xl shadow"
                    />
                </div>
                <div className="flex gap-3 overflow-x-auto">
                    {productData.images.map((img, idx) => (
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
                <h1 className="text-3xl font-semibold text-gray-900">{productData.name}</h1>
                <p className="text-gray-600 text-lg italic">{productData.tagLine}</p>
                <p className="text-gray-700 text-base">{productData.description}</p>

                <div>
                    <label className="block mb-1 font-medium">Available Sizes</label>
                    <select
                        onChange={(e) => setSelectedSize(productData.available_sizes[e.target.selectedIndex])}
                        className="w-full border border-gray-300 rounded-md px-4 py-2"
                    >
                        {productData.available_sizes.map((sizeOption, index) => (
                            <option key={index} value={sizeOption.size}>
                                {sizeOption.size} - ₹{sizeOption.price}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="flex items-center gap-4 mt-4">
                    <button className="flex items-center gap-2 px-6 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-700 transition">
                        <MdCurrencyRupee className="text-lg" />
                        Buy Now
                    </button>
                    <button className="flex items-center gap-2 px-6 py-2 bg-white text-gray-900 border border-gray-900 rounded-md hover:bg-gray-100 transition">
                        <AiOutlineShopping className="text-lg" />
                        Add to Cart
                    </button>
                </div>

                <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-2">What's Inside</h2>
                    <ul className="list-disc ml-6 text-sm text-gray-600">
                        {productData.ingredients.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                </div>

                <div className="mt-6">
                    <h2 className="text-xl font-semibold mb-2">Why It's Good</h2>
                    <ul className="list-disc ml-6 text-sm text-gray-600">
                        {productData.why_its_good.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                </div>

                <div className="mt-6">
                    <h2 className="text-xl font-semibold mb-2">How to Use</h2>
                    <ul className="list-disc ml-6 text-sm text-gray-600">
                        {productData.how_to_use.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Product;
