import { useEffect, useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Navbar = ({isDarkMode, setIsDarkMode}) => {
  const [isScroll, setIsScroll] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openMenu = () => setIsMenuOpen(true)
  const closeMenu = () => setIsMenuOpen(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true)
      } else {
        setIsScroll(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      {/* Background */}
      <div className={`fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] ${!isDarkMode ? 'block' : 'hidden'}`}>
        <Image src={assets.header_bg_color} alt='header background' className='w-full' />
      </div>

      {/* Navbar */}
      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-end relative z-50 
        ${isScroll ? "bg-white/50 backdrop-blur-lg shadow-sm dark:bg-indigo-600/80 dark:shadow-white/20" : "bg-transparent"}`}>
        
        {/* Logo */}


        {/* Desktop Menu */}
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 ${isScroll ? "bg-white/50 shadow-sm dark:bg-indigo-600/50 dark:border dark:border-white/50" : "bg-transparent"} `}>
          <li><a className='font-Ovo' href="#top">Home</a></li>
          <li><a className='font-Ovo' href="#about">About me</a></li>
          <li><a className='font-Ovo' href="#services">Services</a></li>
          <li><a className='font-Ovo' href="#work">My work</a></li>
          <li><a className='font-Ovo' href="#contact">Contact me</a></li>
        </ul>

        {/* Right Side */}
        <div className='flex items-center gap-4'>
          <button onClick={() => setIsDarkMode(prev => !prev)}>
            <Image src={isDarkMode ? assets.sun_icon:assets.moon_icon} alt='Dark Mode' className='w-6' />
          </button>
          <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 border border-gray-500 rounded-full ml-4 font-Ovo'>
            Contact <Image src={assets.arrow_icon} alt="Arrow" className='w-3' />
          </a>
          <button className='block md:hidden ml-3' onClick={openMenu}>
            <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt='Menu' className='w-6' />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul className={`
          flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 bottom-0 right-0 w-64 h-screen 
          ${isDarkMode ? 'bg-indigo-900/95' : 'bg-rose-50'} z-50 
          transition-transform duration-500 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}>
          <div className='absolute right-6 top-6 cursor-pointer' onClick={closeMenu}>
            <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='Close Menu' className='w-5' />
          </div>
          <li><a className='font-Ovo' onClick={closeMenu} href="#top">Home</a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href="#about">About me</a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href="#services">Services</a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href="#work">My work</a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href="#contact">Contact me</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
