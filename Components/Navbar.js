import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { VscClose } from "react-icons/vsc";
import { IoLogoInstagram, IoLogoFacebook, IoLogoYoutube, IoLogoTwitter, IoLogoPinterest, IoLogoLinkedin } from "react-icons/io5";
import { useRouter } from 'next/router';
import { GOOGLE_FORM_LINK } from '@/constants';


const Navbar = ({ user }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const toggleMenu = () => {
    setSideMenu(!sideMenu)
  }

  const refMenu = useRef()
  return (
    <>
      {/* Navbar for medium devices */}
      <div
        className={`hidden top-0 fixed w-full md:flex flex-col md:flex-row md:justify-between items-center py-1 px-6 z-50 transition-all duration-300 ${navbar
          ? 'bg-white text-black shadow-lg'
          : `${isHome ? 'bg-transparent text-white' : 'bg-white text-black'}`
          }`}
      >
        {/* Logo */}
        <div className="logo">
          <Link
            href={'/'}
            className={`text-4xl font-bold tracking-wider leading-tight transition-all duration-300 ${navbar || !isHome
              ? 'text-[#2d9155] hover:text-[#1a6938]'
              : 'text-[#2d9155] hover:text-[#1a6938]'
              } cookie-regular`}
          >
            Nittya
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          {[
            { href: '/', label: 'Home' },
            { href: '/#aboutUs', label: 'About Us' },
            { href: '/nutritionplan', label: 'Nutrition Plan' },
            { href: '/shop', label: 'Products' },
            { href: '/#happyCustomers', label: 'Happy Customers' },
            { href: '/contact', label: 'Contact Us' }
          ].map((item, index) => (
            <Link key={index} href={item.href}>
              <span className={`
          relative py-2 px-1 font-medium transition-all duration-300
          ${navbar || !isHome
                  ? 'text-gray-800 hover:text-[#2d9155]'
                  : 'text-[#2d9155] hover:text-gray-800'
                }
          after:content-[''] after:absolute after:bottom-0 after:left-0 
          after:w-0 after:h-0.5 after:bg-[#2d9155] after:transition-all after:duration-300
          hover:after:w-full
        `}>
                {item.label}
              </span>
            </Link>
          ))}
        </nav>

        {/* Call to Action Button */}
        <div className="flex items-center space-x-6">
          {!user?.value ? (
            <Link
              href="/contact"
              className={`py-2 px-6 rounded-full font-semibold transition-all duration-300 
        ${navbar || !isHome
                  ? 'bg-[#2d9155] text-white hover:bg-[#1a6938] hover:shadow-md'
                  : 'bg-white text-[#2d9155] hover:bg-gray-100 hover:shadow-md'}
      `}
            >
              Book Consultation
            </Link>
          ) : (
            <Link
              href="/nittyaadmin"
              className={`py-2 px-6 rounded-full font-semibold transition-all duration-300 
        ${navbar || !isHome
                  ? 'bg-[#2d9155] text-white hover:bg-[#1a6938] hover:shadow-md'
                  : 'bg-white text-[#2d9155] hover:bg-gray-100 hover:shadow-md'}
      `}
            >
              <span className="mr-2">Hello</span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-lg font-bold shadow-inner backdrop-blur-sm cookie-regular">
                {user.name}
              </span>
            </Link>
          )}
        </div>
      </div>

      {/* Navbar for smaller devices */}

      <div className={`flex md:hidden flex-col md:flex-row md:justify-start justify-center items-center py-3 shadow-md sticky top-0 bg-white z-50 ${!sideMenu && 'overflow-hidden'}`}>
        {/* Hamburger Menu Button */}
        <div className="cursor-pointer menu absolute left-4 top-1/2 transform -translate-y-1/2 flex items-center">
          <HiOutlineMenuAlt1
            onClick={toggleMenu}
            className='text-2xl transition-all hover:scale-110 active:scale-95 text-gray-700 hover:text-[#2d9155]'
          />
        </div>

        {/* Logo */}
        <nav className="w-full flex justify-center items-center">
          <div className="logo mx-5 md:w-auto w-32 flex justify-center">
            <Link
              href={'/'}
              className='text-4xl font-bold bg-gradient-to-r from-[#2d9155] to-[#247a46] bg-clip-text text-transparent hover:from-gray-800 hover:to-gray-400 italic cookie-regular transition-all hover:scale-105'
            >
              Nittya
            </Link>
          </div>
        </nav>

        {/* This is for Menu */}

        <div ref={refMenu} className={`w-80 h-[100vh] z-30 menu overflow-y-scroll absolute top-0 bg-gradient-to-r from-[#166534] to-[#2d9155] px-2 py-10 transition-all ${sideMenu ? `left-0` : `-left-96`}`}>
          {/* <h2 className="font-bold text-3xl text-white">Log in</h2> */}
          <span className='absolute top-6 left-6 cursor-pointer text-5xl text-white hover:text-blue-300 cookie-regular'>
            Nittya
          </span>
          <span onClick={toggleMenu} className="absolute top-6 right-6 cursor-pointer text-3xl text-white hover:text-red-300">
            <VscClose />
          </span>

          <div className="nav mt-4 py-8">
            {/* Navigation Links */}
            <ul className="space-y-2 font-medium text-white">
              <li>
                <Link onClick={toggleMenu} href="/" className="flex items-center py-3 px-4 hover:bg-white/10 rounded-xl transition-all duration-200 group">
                  <span className="mr-3 w-1 h-6 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Home</span>
                </Link>
              </li>
              <li>
                <Link onClick={toggleMenu} href="/#aboutUs" className="flex items-center py-3 px-4 hover:bg-white/10 rounded-xl transition-all duration-200 group">
                  <span className="mr-3 w-1 h-6 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-200">About Us</span>
                </Link>
              </li>
              <li>
                <Link onClick={toggleMenu} href="/nutritionplan" className="flex items-center py-3 px-4 hover:bg-white/10 rounded-xl transition-all duration-200 group">
                  <span className="mr-3 w-1 h-6 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Nutrition Plan</span>
                </Link>
              </li>
              <li>
                <Link onClick={toggleMenu} href="/shop" className="flex items-center py-3 px-4 hover:bg-white/10 rounded-xl transition-all duration-200 group">
                  <span className="mr-3 w-1 h-6 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Products</span>
                </Link>
              </li>
              <li>
                <Link onClick={toggleMenu} href="/#happyCustomers" className="flex items-center py-3 px-4 hover:bg-white/10 rounded-xl transition-all duration-200 group">
                  <span className="mr-3 w-1 h-6 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Happy Customers</span>
                </Link>
              </li>
              <li>
                <Link onClick={toggleMenu} href="/contact" className="flex items-center py-3 px-4 hover:bg-white/10 rounded-xl transition-all duration-200 group">
                  <span className="mr-3 w-1 h-6 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-200">Contact Us</span>
                </Link>
              </li>
            </ul>

            {/* Social Media Links */}
            <div className="mt-12 px-8">
              <h3 className="text-white/80 text-sm font-medium mb-4 px-4">Connect With Us</h3>
              <div className="flex flex-wrap justify-center gap-3">
                <a href="#" className="w-14 h-14 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300">
                  <IoLogoInstagram className="text-white text-2xl" />
                </a>
                <a href="#" className="w-14 h-14 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300">
                  <IoLogoFacebook className="text-white text-2xl" />
                </a>
                <a href="#" className="w-14 h-14 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300">
                  <IoLogoYoutube className="text-white text-2xl" />
                </a>
                <a href="#" className="w-14 h-14 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300">
                  <IoLogoTwitter className="text-white text-2xl" />
                </a>
                <a href="#" className="w-14 h-14 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300">
                  <IoLogoPinterest className="text-white text-2xl" />
                </a>
                <a href="#" className="w-14 h-14 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300">
                  <IoLogoLinkedin className="text-white text-2xl" />
                </a>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-10 px-4">
              {!user?.value && (
                <Link
                  href={GOOGLE_FORM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 px-6 bg-white text-[#2d9155] font-semibold rounded-xl text-center shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Book Consultation
                </Link>
              )}
              {user?.value && (
                <Link
                  href="/admin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 px-6 bg-white text-[#2d9155] font-semibold rounded-xl text-center shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Hello Admin
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar