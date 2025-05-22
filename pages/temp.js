import React from 'react';
import { productsList } from '@/constants';

const productsasdf = [
    {
        name: "Kids Nutrimix Powder",
        description: "Wholesome Nutrition for Kids (1 Year & Above)\nA daily nutrition mix made with carefully selected superfoods to support your child’s growth, brain development, digestion, and immunity — all in a naturally sweet, chocolatey taste kids love.",
        ingredients: [
            "Almonds – for healthy fats and brain support",
            "Walnuts – rich in omega-3 for cognitive development",
            "Makhana – light, calcium-rich superfood",
            "Sprouted Ragi – high in iron, calcium, and easy to digest",
            "Pumpkin Seeds – packed with zinc and magnesium",
            "Sunflower Seeds – a good source of vitamin E",
            "Flaxseeds – rich in omega-3 and fiber",
            "Cocoa Powder – adds taste and antioxidants",
            "Organic Jaggery – natural sweetener with iron"
        ],
        why_its_good: [
            "Builds bones & muscle strength",
            "Supports brain and immune health",
            "Improves digestion and energy",
            "No refined sugar | No preservatives | 100% natural"
        ],
        how_to_use: [
            "Mix 1 tablespoon in warm milk. Stir and serve.",
            "Also great in porridge, milkshakes, or pancakes."
        ],
        available_sizes: [
            { size: "500g", price_per_kg: null },
            { size: "1kg", price_per_kg: 1200 }
        ]
    },
    // Add more products here if needed
];

const ProductCard = ({ product }) => (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-10">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h1>
        <p className="text-green-600 whitespace-pre-line mb-4">{product.tagLine}</p>
        <p className="text-gray-600 whitespace-pre-line mb-4">{product.description}</p>

        <Section title="Ingredients" items={product.ingredients} />
        <Section title="Why It's Good" items={product.why_its_good} itemStyle="text-green-600" />
        <Section title="How to Use" items={product.how_to_use} />

        <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Available Sizes</h2>
            <div className="space-y-2">
                {product.available_sizes.map((item, idx) => (
                    <div key={idx} className="border rounded-md p-3 flex justify-between items-center">
                        <span className="font-medium text-gray-800">{item.size}</span>
                        {item.price ? (
                            <span className="text-sm text-gray-500">₹{item.price} / kg</span>
                        ) : (
                            <span className="text-sm text-gray-400 italic">Price on request</span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const Section = ({ title, items, itemStyle = "text-gray-600" }) => (
    <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">{title}</h2>
        <ul className={`list-disc list-inside space-y-1 ${itemStyle}`}>
            {items.map((item, idx) => (
                <li key={idx}>{item}</li>
            ))}
        </ul>
    </div>
);

const ProductList = () => {
    return (
        <div className="max-w-5xl mx-auto px-6 py-12 bg-gray-50 min-h-screen">
            {productsList.map((product, index) => (
                <ProductCard key={index} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
