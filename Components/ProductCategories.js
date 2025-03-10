import React from 'react'
import ProductsCategoriesCarousel from './ProductsCategoriesCarousel'

const ProductCategories = () => {
    const OurProducts = [
        { id: 1, title: 'Healthy Granolas', image: 'https://www.mightymillets.com/upload/banner/3A2572A4-BE65-4B7E-A667-09669DB6C802.png', description: "100% Pure Canadian Maple syrup as a sweetener Totally pure, natural and healthier alternative to heated honey or refined sugar. It is rich in antioxidants, is diabetic friendly and rich in nutrients. More nuts, less oats Significantly higher ratio of nuts, seeds and dry" },
        { id: 2, title: 'Healthy Nutri Bars', image: 'https://www.mightymillets.com/upload/banner/3A2572A4-BE65-4B7E-A667-09669DB6C802.png', description: "They are not  like your usual protein or energy bars." },
        { id: 3, title: 'Healthy Powders', image: 'https://www.mightymillets.com/upload/banner/3A2572A4-BE65-4B7E-A667-09669DB6C802.png', description: "Targeted for solving specific conditions. Totally natural and hand made!" },
        { id: 4, title: 'Healthy Savouries', image: 'https://www.mightymillets.com/upload/banner/3A2572A4-BE65-4B7E-A667-09669DB6C802.png', description: "Completely handmade, healthy and totally perfect for binge eating cravings. People just dont stop munching on these" },
    ];

    return (
        <section className="mx-auto flex lg:h-screen justify-between items-center"
            style={{
                background: "linear-gradient(to right, #eeeeee 46.3%, #f36114 46.3%)"
            }}>
            <div className='md:w-1/3 p-10 mb-4 md:mb-10 text-4xl sm:text-5xl md:text-7xl cookie-regular font-semibold tracking-tight leading-[1.2] text-[#2d9155] flex justify-end border-r-4 border-[#2d9155] pr-6'>
                <span className='drop-shadow-lg'>Product</span><br />
                <span className='drop-shadow-lg'>Categories</span>
            </div>
            <div className='md:w-[53.7%] mr-20'>
                <ProductsCategoriesCarousel products={OurProducts} />
            </div>
        </section>
    )
}

export default ProductCategories