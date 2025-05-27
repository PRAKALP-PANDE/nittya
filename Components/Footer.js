import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { whatsappMessage } from '@/constants';

const Footer = () => {
  const message = whatsappMessage.heroSection;
  const whatsappLink = `https://wa.me/9922015121?text=${message}`;

  return (
    <footer className="bg-white mt-4">
      <div className="container px-4 py-16 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-6">
              <Image 
                src='/nittya_logo.png' 
                alt="Nittya Nutrition Logo"
                width={160}
                height={60}
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="text-gray-600 text-center md:text-left mb-6">
              Your daily nutrition partner for a healthier lifestyle
            </p>
            <div className="flex space-x-4">
              {['facebook', 'instagram', 'linkedin'].map((social) => (
                <Link 
                  key={social}
                  href={
                    social === 'facebook' ? "https://www.facebook.com/share/1CAKFAPNKx/?mibextid=wwXIfr" :
                    social === 'instagram' ? "https://www.instagram.com/nutritionist_vidyaasawant/" :
                    "https://www.linkedin.com/in/nittya-your-daily-nutrition-915871347"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-300"
                >
                  <Image 
                    src={`/icons/${social}.svg`} 
                    alt={social}
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Shop Column */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-6 pb-2 border-b-2 border-white/10 w-full text-center md:text-left">
              Shop
            </h3>
            <ul className="space-y-3 text-center md:text-left">
              {[
                { name: 'All Products', href: '/shop' },
                { name: 'Kids Nutrimix', href: '/product/Kids-Nutrimix-Powder' },
                { name: 'Dink Dryfruit Laddoo', href: '/product/Dink-Dryfruit-Laddoo' },
                { name: 'Roasted Seed Mix', href: '/product/Roasted-Seed-Mix' }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-gray-600 hover:text-[#166534] hover:font-bold transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Column */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-6 pb-2 border-b-2 border-white/10 w-full text-center md:text-left">
              Company
            </h3>
            <ul className="space-y-3 text-center md:text-left">
              {[
                { name: 'Contact Us', href: '/contact' },
                { name: 'About Us', href: '/#aboutUs' },
                { name: 'Featured Reviews', href: '/#happyCustomers' },
                { name: 'All Testimonials', href: '/reviews' }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-gray-600 hover:text-[#166534] hover:font-bold transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Nutrition & Contact Column */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-6 pb-2 border-b-2 border-white/10 w-full text-center md:text-left">
              Nutrition Plans
            </h3>
            <ul className="space-y-3 text-center md:text-left mb-8">
              {[
                { name: 'For Women', href: '/nutritionplan/#womenDiet' },
                { name: 'For Men', href: '/nutritionplan/#mensDiet' },
                { name: 'For Couples', href: '/nutritionplan/#coupleDiet' },
                { name: 'Health Conditions', href: '/nutritionplan/#healthDiet' }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-gray-600 hover:text-[#166534] hover:font-bold transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="w-full">
              <h3 className="text-lg font-semibold mb-4 pb-2 border-b-2 border-white/10">
                Contact
              </h3>
              <Link 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#25D366] hover:bg-[#128C7E] text-white px-4 py-2 rounded-lg transition-colors duration-300"
              >
                <Image 
                  src="/icons/whatsapp.svg" 
                  alt="WhatsApp"
                  width={20}
                  height={20}
                  className="w-5 h-5 mr-2"
                />
                Chat on WhatsApp
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-800 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Nittya Nutrition. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-gray-800 hover:text-[#166534] hover:font-bold text-sm transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-800 hover:text-[#166534] hover:font-bold text-sm transition-colors duration-300">
              Terms of Service
            </Link>
            <Link href="/refund" className="text-gray-800 hover:text-[#166534] hover:font-bold text-sm transition-colors duration-300">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer