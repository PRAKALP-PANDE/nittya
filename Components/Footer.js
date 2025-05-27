import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { whatsappMessage } from '@/constants';

const Footer = () => {
  const message = whatsappMessage.heroSection;
  const whatsappLink = `https://wa.me/9922015121?text=${message}`;

  return (
    <div>
      <footer className="text-gray-100 bg-[#31985a] body-font mt-4">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link href={'/'} className='text-5xl font-bold bg-gradient-to-r text-white bg-clip-text italic cookie-regular transition-all hover:scale-105'>Nittya</Link>
            <p className="mt-2 text-sm text-gray-200 px-4">Your Daily Nutrition</p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">SHOP</h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href={'/shop'} className="text-gray-200 hover:text-gray-800">Products</Link>
                </li>
                <li>
                  <Link href={'/product/Kids-Nutrimix-Powder'} className="text-gray-200 hover:text-gray-800">Kids</Link>
                </li>
                <li>
                  <Link href={'/product/Dink-Dryfruit-Laddoo'} className="text-gray-200 hover:text-gray-800">Dink Dryfruit Laddoo</Link>
                </li>
                <li>
                  <Link href={'/product/Roasted-Seed-Mix'} className="text-gray-200 hover:text-gray-800">Roasted Seed Mix</Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">ABOUT</h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href={'/contact'} className="text-gray-200 hover:text-gray-800">Contact Us</Link>
                </li>
                <li>
                  <Link href={'/#aboutUs'} className="text-gray-200 hover:text-gray-800">About Us</Link>
                </li>
                <li>
                  <Link href={'/#happyCustomers'} className="text-gray-200 hover:text-gray-800">Featured Reviews</Link>
                </li>
                <li>
                  <Link href={"/reviews"} className="text-gray-200 hover:text-gray-800">Client Testimonials</Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Nutrition Plan</h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href={"/nutritionplan/#womenDiet"} className="text-gray-200 hover:text-gray-800">Women</Link>
                </li>
                <li>
                  <Link href={'/nutritionplan/#mensDiet'} className="text-gray-200 hover:text-gray-800">Mens</Link>
                </li>
                <li>
                  <Link href={"/nutritionplan/#coupleDiet"} className="text-gray-200 hover:text-gray-800">Couple</Link>
                </li>
                <li>
                  <Link href={"/nutritionplan/#healthDiet"} className="text-gray-200 hover:text-gray-800">Health Condition</Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">SOCIAL</h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-gray-800">Whatsapp</Link>
                </li>
                <li>
                  <Link href={"https://www.facebook.com/share/1CAKFAPNKx/?mibextid=wwXIfr"} target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-gray-800">Facebook</Link>
                </li>
                <li>
                  <Link href={"https://www.instagram.com/nutritionist_vidyaasawant/"} target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-gray-800">Instagram</Link>
                </li>
                <li>
                  <Link href={"https://www.linkedin.com/in/nittya-your-daily-nutrition-915871347"} target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-gray-800">Linkedin</Link>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-[#2b8a51]">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-200 text-sm text-center sm:text-left">© 2024 Nittya — All Right Reserved
              <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-200 ml-1" target="_blank">@nittya</a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a className="text-gray-200">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-200">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-200">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-200">
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer