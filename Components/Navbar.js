import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { VscClose } from "react-icons/vsc";
import { LuUser } from "react-icons/lu";
import { IoLogoInstagram, IoLogoFacebook, IoLogoYoutube, IoLogoTwitter, IoLogoPinterest, IoLogoLinkedin } from "react-icons/io5";
import Dropdown from './Dropdown';
import { useRouter } from 'next/router';


const Navbar = ({ user }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false)
  const [sideCart, setSideCart] = useState(false)
  const [sideMenu, setSideMenu] = useState(false)

  const [navbar, setNavbar] = useState(false);

  const router = useRouter();
  const isHome = router.pathname === '/';

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 80) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };
    window.addEventListener('scroll', changeBackground);
    return () => window.removeEventListener('scroll', changeBackground);
  }, []);


  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const shirtItems = [
    { label: 'Plain', href: '/' },
    { label: 'Stripes', href: '/' },
    { label: 'Checks', href: '/' },
    { label: 'Printed', href: '/' },
    { label: 'Linen', href: '/' },
    // Add more services here
  ];

  const tshirtItems = [
    { label: 'Basic', href: '/shop/shirts' },
    { label: 'Oversized', href: '/shop/shirts' },
    { label: 'Polo', href: '/shop/tshirts' },
  ];

  const trousersItems = [
    { label: 'Chino', href: '/' },
    { label: 'Formal', href: '/' },
    { label: 'Korean', href: '/' },
    { label: 'Linen', href: '/' }
  ];

  const jeansItems = [
    { label: 'Straight', href: '/' },
    { label: 'Slim', href: '/' },
  ];

  const winterwearItems = [
    { label: 'Hoodies', href: '/' },
    { label: 'Jackets', href: '/' },
    { label: 'Sweaters', href: '/' },
    { label: 'Sweatshirts', href: '/' }
  ];

  const toggleMenu = () => {
    setSideMenu(!sideMenu)
  }

  const refMenu = useRef()
  return (
    <>
      {/* Navbar for medium devices */}
      <div
        className={`hidden fixed w-full md:flex flex-col md:flex-row md:justify-between items-center py-1 px-6 z-50 transition-all duration-300 ${navbar ? 'bg-white text-black shadow-lg' : `${isHome ? 'bg-transparent text-white' : 'bg-white text-black'}`
          }`}
      >
        {/* Logo */}
        <div className="logo">
          <Link href={'/'} className="max-w-2xl mb-4 text-5xl cookie-regular font-normal tracking-wider leading-tight text-green-950 bg-white py-10 px-4 rounded-b-3xl items-center shadow-lg">Nittya</Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8 font-semibold">
          <Link href={'/'}>
            <span className="hover:text-green-600 transition duration-300 cursor-pointer">Home</span>
          </Link>
          <Link href={'/#aboutUs'}>
            <span className="hover:text-green-600 transition duration-300 cursor-pointer">About Us</span>
          </Link>
          <Link href={'/women'}>
            <span className="hover:text-green-600 transition duration-300 cursor-pointer">Products</span>
          </Link>
          <Link href={'/nutritionplan'}>
            <span className="hover:text-green-600 transition duration-300 cursor-pointer">Nutrition Plan</span>
          </Link>
          <Link href={'/mens'}>
            <span className="hover:text-green-600 transition duration-300 cursor-pointer">Shop By Conditions</span>
          </Link>
          <Link href={'/#happyCustomers'}>
            <span className="hover:text-green-600 transition duration-300 cursor-pointer">Happy Customers</span>
          </Link>
          <Link href={'/contact'}>
            <span className="hover:text-green-600 transition duration-300 cursor-pointer">Contact Us</span>
          </Link>
        </nav>

        {/* Icons (Account, Cart) */}
        <div className="flex items-center space-x-6">
          <Link href="/contact" className="text-xl hover:text-green-600 transition duration-300 cursor-pointer">Contact Us</Link>
        </div>

      </div>

      {/* Navbar for smaller devices */}

      <div className={`flex md:hidden flex-col md:flex-row md:justify-start justify-center items-center py-4 shadow-lg sticky top-0 bg-white z-50 ${!sideMenu && 'overflow-hidden'} `}>
        <div className="cursor-pointer menu absolute left-4 top-1/2 transform -translate-y-1/2 flex items-center">
          <HiOutlineMenuAlt1 onClick={toggleMenu} className='text-3xl transition-transform hover:scale-110 active:scale-95 text-gray-700' />
        </div>
        <nav className="w-full flex justify-center items-center">
          <div className="logo mx-5 md:w-auto w-40 flex justify-center">
            <Link href={'/'} className='text-5xl font-bold bg-gradient-to-r from-[#31985a] to-[#2b8a51] bg-clip-text text-transparent hover:from-gray-800 hover:to-gray-400 italic cookie-regular transition-all hover:scale-105'>Nittya</Link>
          </div>
        </nav>

        {/* This is for Menu */}

        <div ref={refMenu} className={`w-80 h-[100vh] z-30 menu overflow-y-scroll absolute top-0 bg-black px-8 py-10 transition-all ${sideMenu ? `left-0` : `-left-96`}`}>
          {/* <h2 className="font-bold text-3xl text-white">Log in</h2> */}
          <span className='absolute top-6 left-6 cursor-pointer text-5xl text-white hover:text-blue-300 cookie-regular'>
            Nittya
          </span>
          <span onClick={toggleMenu} className="absolute top-6 right-6 cursor-pointer text-3xl text-white hover:text-red-300">
            <VscClose />
          </span>

          <div className="nav mt-20">
            <ul className="space-y-6 font-semibold text-lg text-white">
              <li>
                <Link href="/" className="block hover:text-green-400 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/newarrivals" className="block hover:text-green-400 transition-colors duration-200">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/bestselling" className="block hover:text-green-400 transition-colors duration-200">
                  Best Selling
                </Link>
              </li>
              <li>
                <Link href="/" className="block hover:text-green-400 transition-colors duration-200">
                  Plus
                </Link>
              </li>
              <li>
                <details className="overflow-hidden rounded [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between gap-2 transition">
                    <span className="block hover:text-green-400 transition-colors duration-200 text-lg"> Shop </span>
                    <span className="transition group-open:-rotate-180">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </span>
                  </summary>
                  <Dropdown title="Shirt" items={shirtItems} />
                  <Dropdown title="T-Shirt" items={tshirtItems} />
                  <Dropdown title="Trousers" items={trousersItems} />
                  <Dropdown title="Jeans" items={jeansItems} />
                  <Dropdown title="Winterwear" items={winterwearItems} />
                  <Link href="/" className="mx-3 py-2 block hover:text-green-400 transition-colors duration-200">
                    Joggers
                  </Link>
                  <Link href="/" className="mx-3 py-2 block hover:text-green-400 transition-colors duration-200">
                    Shorts
                  </Link>
                </details>
              </li>
              <li>
                <Link href="/" className="block hover:text-green-400 transition-colors duration-200">
                  Snitch LUXE
                </Link>
              </li>
              <li>
                <Link href="/" className="block hover:text-green-400 transition-colors duration-200">
                  Snitch PLUS
                </Link>
              </li>
              <li>
                <Link href="/" className="block hover:text-green-400 transition-colors duration-200">
                  Orders
                </Link>
              </li>
              <li>
                <Link href="/" className="block hover:text-green-400 transition-colors duration-200">
                  Find A Store
                </Link>
              </li>
            </ul>
            <div className="mt-10 -mx-3">
              <button
                className="w-16 inline-flex items-center px-3 py-2 justify-center m-2 bg-gray-200 hover:bg-gray-300 text-pink-800 font-medium text-2xl rounded-md">
                <IoLogoInstagram />
              </button>
              <button
                className="w-16 inline-flex items-center px-3 py-2 justify-center m-2 bg-gray-200 hover:bg-gray-300 text-blue-800 font-medium text-2xl rounded-md">
                <IoLogoFacebook />
              </button>
              <button
                className="w-16 inline-flex items-center px-3 py-2 justify-center m-2 bg-gray-200 hover:bg-gray-300 text-red-800 font-medium text-2xl rounded-md">
                <IoLogoYoutube />
              </button>
            </div>
            <div className="-mx-3">
              <button
                className="w-16 inline-flex items-center px-3 py-2 justify-center m-2 bg-gray-200 hover:bg-gray-300 text-blue-800 font-medium text-2xl rounded-md">
                <IoLogoTwitter />
              </button>
              <button
                className="w-16 inline-flex items-center px-3 py-2 justify-center m-2 bg-gray-200 hover:bg-gray-300 text-red-800 font-medium text-2xl rounded-md">
                <IoLogoPinterest />
              </button>
              <button
                className="w-16 inline-flex items-center px-3 py-2 justify-center m-2 bg-gray-200 hover:bg-gray-300 text-blue-800 font-medium text-2xl rounded-md">
                <IoLogoLinkedin />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar