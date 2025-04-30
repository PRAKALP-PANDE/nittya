import { whatsappMessage } from '@/constants';
import Link from 'next/link';

export default function Newhero() {
    const message = whatsappMessage.womenDietPlan
    const whatsappLink = `https://wa.me/9922015121?text=${message}`;

  return (
    <section className="bg-gradient-to-br from-green-50 to-green-100 py-24 px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text Section */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800">
              Fuel Your Body
            </span>
            <span className="block">The Right Way</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-lg">
            Discover personalized nutrition plans and science-backed wellness tips to help you thrive every day.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Link href={whatsappLink} target="_blank" rel="noopener noreferrer" className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-white transition-all duration-300 bg-gradient-to-r from-green-600 to-green-700 rounded-lg group hover:from-green-700 hover:to-green-800">
              <span className="relative">Get Started</span>
            </Link>
            <Link href='/nutritionplan' className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-green-700 transition-all duration-300 border-2 border-green-600 rounded-lg hover:text-white group">
              <span className="absolute inset-0 w-full h-full bg-green-600 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
              <span className="relative">Learn More</span>
            </Link>
          </div>
          
          <div className="flex items-center gap-2 pt-4">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((item) => (
                <div key={item} className="w-10 h-10 rounded-full border-2 border-white bg-green-200"></div>
              ))}
            </div>
            <p className="text-sm text-gray-500">Join <span className="font-medium text-green-700">10,000+</span> happy customers</p>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 relative">
          <div className="relative w-full overflow-hidden rounded-2xl shadow-xl">
            <img
              src="https://media.istockphoto.com/id/1457433817/photo/group-of-healthy-food-for-flexitarian-diet.webp?s=2048x2048&w=is&k=20&c=rRlOrFqCQn8kBDwvZnN75XFxiD0CA6S2LkgVKQRYJ3k="
              alt="Healthy Lifestyle"
              fill
              className="object-cover"
              quality={100}
              priority
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg hidden md:block">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-green-100 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-gray-900">+85% Energy</p>
                <p className="text-xs text-gray-500">Reported by users</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}