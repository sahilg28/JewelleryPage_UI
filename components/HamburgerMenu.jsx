import React, { useState, useEffect } from 'react'

const HamburgerMenu = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  if (!isVisible) return null

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black z-40 lg:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-50' : 'opacity-0'
        }`}
        onClick={onClose}
      ></div>
      
      {/* Menu Panel */}
      <div className={`fixed left-0 top-0 w-[308px] h-[932px] bg-[#CA8787] z-50 lg:hidden transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        {/* Menu Items Container */}
        <div className="absolute w-[275px] h-[422px] left-[17px] top-[25px] flex flex-col gap-3">
          
          {/* Add Account */}
          <div className="w-[275px] h-[50px] flex flex-col justify-center items-start px-3 py-[14px] gap-[10px] border-b border-white">
            <div className="flex flex-row items-center gap-[10px] w-[146px] h-[30px]">
              {/* Add Icon */}
              <div className="w-[30px] h-[30px] flex items-center justify-center">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <path d="M15 5V25" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M5 15H25" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="w-[106px] h-[20px] font-montserrat font-medium text-[16px] leading-[20px] text-white">
                Add Account
              </span>
            </div>
          </div>

          {/* Gold jewellery */}
          <div className="w-[275px] h-[50px] flex flex-col justify-center items-start px-3 py-[14px] gap-[10px] border-b border-white">
            <div className="flex flex-row items-center gap-[10px] w-[145px] h-[20px]">
              {/* Gold Icon */}
              <div className="w-[20px] h-[20px] flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2L12 8H18L13 12L15 18L10 14L5 18L7 12L2 8H8L10 2Z" stroke="white" strokeWidth="1.5" fill="none"/>
                </svg>
              </div>
              <span className="w-[115px] h-[20px] font-montserrat font-medium text-[16px] leading-[20px] text-white">
                Gold jewellery
              </span>
            </div>
          </div>

          {/* Silver Jewellery */}
          <div className="w-[275px] h-[50px] flex flex-col justify-center items-start px-3 py-[14px] gap-[10px] border-b border-white">
            <div className="flex flex-row items-center gap-[10px] w-[155px] h-[20px]">
              {/* Silver Icon */}
              <div className="w-[20px] h-[20px] flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="8" stroke="white" strokeWidth="1.5" fill="none"/>
                  <circle cx="10" cy="10" r="4" stroke="white" strokeWidth="1.5" fill="none"/>
                </svg>
              </div>
              <span className="w-[125px] h-[20px] font-montserrat font-medium text-[16px] leading-[20px] text-white">
                Silver Jewellery
              </span>
            </div>
          </div>

          {/* Trending Collection */}
          <div className="w-[275px] h-[50px] flex flex-col justify-center items-start px-3 py-[14px] gap-[10px] border-b border-white">
            <div className="flex flex-row items-center gap-[10px] w-[190px] h-[20px]">
              {/* Trending Icon */}
              <div className="w-[20px] h-[20px] flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M2 17L8 11L12 15L18 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13 9H18V14" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="w-[160px] h-[20px] font-montserrat font-medium text-[16px] leading-[20px] text-white">
                Trending Collection
              </span>
            </div>
          </div>

          {/* Gifts */}
          <div className="w-[275px] h-[50px] flex flex-col justify-center items-start px-3 py-[14px] gap-[10px] border-b border-white">
            <div className="flex flex-row items-center gap-[10px] w-[68px] h-[20px]">
              {/* Gifts Icon */}
              <div className="w-[20px] h-[20px] flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 6H16C17.1 6 18 6.9 18 8V16C18 17.1 17.1 18 16 18H4C2.9 18 2 17.1 2 16V8C2 6.9 2.9 6 4 6Z" stroke="white" strokeWidth="1.5" fill="none"/>
                  <path d="M6 6V4C6 2.9 6.9 2 8 2H12C13.1 2 14 2.9 14 4V6" stroke="white" strokeWidth="1.5" fill="none"/>
                  <path d="M10 10V16" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M7 13H13" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="w-[38px] h-[20px] font-montserrat font-medium text-[16px] leading-[20px] text-white">
                Gifts
              </span>
            </div>
          </div>

          {/* Shop by Occasion */}
          <div className="w-[275px] h-[50px] flex flex-col justify-center items-start px-3 py-[14px] gap-[10px] border-b border-white">
            <div className="flex flex-row items-center gap-[10px] w-[175px] h-[20px]">
              {/* Occasion Icon */}
              <div className="w-[20px] h-[20px] flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2L12 8H18L13 12L15 18L10 14L5 18L7 12L2 8H8L10 2Z" stroke="white" strokeWidth="1.5" fill="none"/>
                  <circle cx="10" cy="10" r="2" stroke="white" strokeWidth="1.5" fill="none"/>
                </svg>
              </div>
              <span className="w-[145px] h-[20px] font-montserrat font-medium text-[16px] leading-[20px] text-white">
                Shop by Occasion
              </span>
            </div>
          </div>

          {/* Login / SignUp */}
          <div className="w-[275px] h-[50px] flex flex-col justify-center items-start px-[10px] py-[14px] gap-[10px] bg-white border-b border-white">
            <div className="flex flex-row items-center gap-[10px] w-[151px] h-[20px]">
              {/* User Tick Icon */}
              <div className="w-[20px] h-[20px] flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 9C11.6569 9 13 7.65685 13 6C13 4.34315 11.6569 3 10 3C8.34315 3 7 4.34315 7 6C7 7.65685 8.34315 9 10 9Z" stroke="#2D2D2D" strokeWidth="1.5" fill="none"/>
                  <path d="M3 17C3 14.7909 4.79086 13 7 13H13C15.2091 13 17 14.7909 17 17" stroke="#2D2D2D" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M14 6L15 7L18 4" stroke="#2D2D2D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="w-[121px] h-[20px] font-montserrat font-medium text-[16px] leading-[20px] text-[#2D2D2D]">
                Login / SignUp
              </span>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default HamburgerMenu
