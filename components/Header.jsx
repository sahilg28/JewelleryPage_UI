import React, { useState, useEffect } from 'react'
import HamburgerMenu from './HamburgerMenu'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [timeLeft, setTimeLeft] = useState({
    hours: 3,
    minutes: 34,
    seconds: 15
  })

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleMenuClose = () => {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        let { hours, minutes, seconds } = prevTime
        
        if (seconds > 0) {
          seconds -= 1
        } else if (minutes > 0) {
          minutes -= 1
          seconds = 59
        } else if (hours > 0) {
          hours -= 1
          minutes = 59
          seconds = 59
        } else {
          // Reset timer when it reaches 00:00:00
          hours = 3
          minutes = 34
          seconds = 15
        }
        
        return { hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <header className="w-full">
      {/* Offer Banner */}
      <div className="w-full h-[36px] lg:h-[43px] bg-[#CA8787] flex items-center justify-center px-4">
        <p className="text-white text-[14px] leading-[17px] font-medium font-montserrat text-center">
          <span className="lg:hidden">50% off on all items till 23 Sept</span>
          <span className="hidden lg:inline">
            50% off on all items Only Limited Time Deal Offer ending in {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
          </span>
        </p>
      </div>

      {/* Main Header */}
      <div className="w-full h-[35px] lg:h-[85px] bg-[#FAF9F6] flex flex-col items-center px-6 lg:px-[126px] py-0 lg:py-[22px] gap-0 lg:gap-[10px] mt-2 lg:mt-0">
        <div className="w-full max-w-[1293px] h-[26px] lg:h-[40px] flex flex-row items-center justify-between lg:gap-[201px]">
          {/* Mobile: Hamburger Menu + Logo */}
          <div className="flex items-center gap-6 lg:hidden">
            {/* Hamburger Menu */}
            <button 
              className="w-[26px] h-[26px] flex items-center justify-center"
              onClick={handleMenuToggle}
            >
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 6.5H23" stroke="#2D2D2D" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M3 13H23" stroke="#2D2D2D" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M3 19.5H23" stroke="#2D2D2D" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          {/* Logo */}
            <h1 className="font-montserrat font-bold text-[18px] leading-[22px] text-[#2D2D2D]">
              LOGO
            </h1>
          </div>

          {/* Desktop: Logo */}
          <div className="hidden lg:flex flex-none order-0 flex-grow-0">
            <h1 className="w-[92px] h-[37px] font-montserrat font-bold text-[30px] leading-[37px] text-[#2D2D2D]">
              LOGO
            </h1>
          </div>

          {/* Navigation Menu - Hidden on mobile */}
          <div className="hidden lg:flex flex-none order-1 flex-grow-0 w-[515px] h-[22px] flex flex-row justify-center items-center gap-[28px]">
            {/* Collections Dropdown */}
            <div className="w-[113px] h-[22px] flex flex-row justify-center items-center gap-[3px]">
              <button className="flex items-center gap-[3px]">
                <span className="w-[88px] h-[20px] font-montserrat font-normal text-base leading-[20px] text-[#4D4D4D]">
                  Collections
                </span>
                <div className="w-[22px] h-[22px] relative">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M5.5 8.25L11 13.75L16.5 8.25" stroke="#4D4D4D" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </button>
            </div>

            {/* Categories Dropdown */}
            <div className="w-[111px] h-[22px] flex flex-row justify-center items-center gap-[3px]">
              <button className="flex items-center gap-[3px]">
                <span className="w-[86px] h-[20px] font-montserrat font-normal text-base leading-[20px] text-[#4D4D4D]">
                  Categories
                </span>
                <div className="w-[22px] h-[22px] relative">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M5.5 8.25L11 13.75L16.5 8.25" stroke="#4D4D4D" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </button>
            </div>

            {/* Hot Picks */}
            <div className="w-[76px] h-[20px] flex flex-row justify-center items-center gap-[3px]">
              <span className="w-[76px] h-[20px] font-montserrat font-normal text-base leading-[20px] text-[#4D4D4D]">
                Hot Picks
              </span>
            </div>

            {/* Gifts */}
            <div className="w-[37px] h-[20px] flex flex-row justify-center items-center gap-[3px]">
              <span className="w-[37px] h-[20px] font-montserrat font-normal text-base leading-[20px] text-[#4D4D4D]">
                Gifts
              </span>
            </div>

            {/* Shop All */}
            <div className="w-[66px] h-[20px] flex flex-row justify-center items-center gap-[3px]">
              <span className="w-[66px] h-[20px] font-montserrat font-normal text-base leading-[20px] text-[#4D4D4D]">
                Shop All
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 lg:flex-none lg:order-2 lg:flex-grow-1 lg:w-[284px] lg:h-[40px] lg:flex-row lg:gap-[6px]">
            {/* Mobile: Heart + Cart Icons */}
            <div className="flex items-center gap-4 lg:hidden">
              {/* Heart Icon */}
              <button className="w-6 h-6 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z" stroke="#2D2D2D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {/* Cart Icon */}
              <button className="w-6 h-6 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke="#2D2D2D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke="#2D2D2D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="#2D2D2D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* Desktop: Login + Sign Up Buttons */}
            <div className="hidden lg:flex flex-row items-center gap-[6px]">
            {/* Login Button */}
            <button className="w-[139px] h-[40px] bg-[#FF8F9D] shadow-[0px_0px_6px_rgba(0,0,0,0.14)] flex flex-row justify-center items-center px-[23px]">
              <span className="w-[61px] h-[22px] font-montserrat font-bold text-lg leading-[22px] text-center text-white">
                  LOGIN
              </span>
            </button>

            {/* Sign Up Button */}
            <button className="w-[139px] h-[40px] border border-[#FF8F9D] shadow-[0px_0px_6px_rgba(0,0,0,0.14)] flex flex-row justify-center items-center px-[23px]">
              <span className="w-[93px] h-[22px] font-montserrat font-bold text-lg leading-[22px] text-[#FF8F9D]">
                  REGISTER
              </span>
            </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hamburger Menu */}
      <HamburgerMenu isOpen={isMenuOpen} onClose={handleMenuClose} />
    </header>
  )
}

export default Header