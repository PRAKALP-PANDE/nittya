import { whatsappMessage } from '@/constants';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Head from 'next/head';

const images = [
  {
    image: '/landing/1.png'
  },
  {
    image: '/landing/2.png'
  },
  {
    image: '/landing/3.png'
  },
  {
    image: '/landing/4.png'
  },
];

export default function Newhero() {
  const message = whatsappMessage.heroSection;
  const whatsappLink = `https://wa.me/9172683827?text=${message}`;

  return (
    <section className="relative overflow-hidden py-12 md:py-28 px-4">
      <Head>
        <title>Best Nutritionist in Pune | Weightloss Diet Plans & Natural Nutrition</title>
        <meta name="description" content="Nittya is a trusted nutritionist in Pune offering weight loss diet plans for PCOS, thyroid, diabetes, and more — plus handcrafted natural nutrition products." />
      </Head>
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[#2d9155] mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#4ade80] mix-blend-multiply filter blur-3xl animate-float-delay"></div>
        <h1 className='hidden'>Trusted Nutritionist in Pune – Weightloss Diet Plans & Superfoods</h1>
        <p className='hidden'>Looking for an experienced nutritionist in Pune? Nittya provides science-backed diet plans for weight loss, PCOS, diabetes, thyroid, and more, with natural nutrition products to support your journey.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
          {/* Text Section */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="mb-2 flex items-center gap-2">
              <div className="w-8 h-1 bg-[#2d9155] rounded-full"></div>
              <span className="text-sm font-medium text-[#2d9155] uppercase tracking-wider">Holistic Nutrition</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#166534] to-[#2d9155]">
                Transform Your Health
              </span>
              <span className="block">Through Nourishment</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-700 max-w-lg leading-relaxed">
              Scientifically crafted nutrition plans for your unique needs, helping you achieve sustainable wellness and vitality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-white transition-all duration-500 bg-gradient-to-r from-[#166534] to-[#2d9155] rounded-xl shadow-lg group hover:shadow-[0_10px_25px_-10px_rgba(45,145,85,0.4)] hover:translate-y-[-2px]"
              >
                <span className="relative flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  Get Started
                </span>
              </Link>
              <Link
                href='/nutritionplan'
                className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-[#166534] transition-all duration-500 border-2 border-[#2d9155] rounded-xl hover:text-white group"
              >
                <span className="absolute inset-0 w-full h-full bg-[#2d9155] opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                <span className="relative flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  Learn More
                </span>
              </Link>
            </div>

            <div className="flex items-center gap-4 pt-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="w-12 h-12 rounded-full border-2 border-white bg-white shadow-md overflow-hidden"
                  >
                    <div className="w-full h-full bg-green-200"></div>
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm text-gray-600">
                  Trusted by <span className="font-semibold text-[#166534]">3,000+</span> clients
                </p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-xs text-gray-500 ml-1">4.9/5</span>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              pagination={{ clickable: true }}
              autoplay={{ delay: 1000, disableOnInteraction: false }}
            >
              {images.map((t, i) => (
                <SwiperSlide key={i}>
                  <div className="relative w-full h-[450px] overflow-hidden rounded-3xl shadow-2xl group">
                    <div className="absolute inset-0">
                      <img
                        src={t.image}
                        alt="Healthy Lifestyle"
                        className="object-contain w-full h-full transform group-hover:scale-105 transition duration-1000"
                        quality={100}
                        priority
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Floating stats */}
            <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-xl shadow-xl border border-gray-100 hidden lg:block animate-float z-10">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-green-100 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#2d9155]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-900">+85% Energy</p>
                  <p className="text-xs text-gray-500">Reported by clients</p>
                </div>
              </div>
            </div>

            {/* Another floating element */}
            <div className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 hidden lg:block animate-float-delay z-10">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-green-50 rounded-lg">
                  <svg className="w-6 h-6 text-[#2d9155]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-900">100% Natural</p>
                  <p className="text-xs text-gray-500">Ingredients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}