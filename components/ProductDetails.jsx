const ProductDetails = () => {
  return (
    <div className="w-full max-w-[626px] flex flex-col items-start gap-6 lg:gap-8">
      {/* Product Title and Rating */}
      <div className="w-full h-auto flex flex-col items-start gap-4">
        {/* Title Section */}
        <div className="w-full h-auto flex flex-col items-start gap-2">
          <h1 className="w-full h-auto font-montserrat font-medium text-[16px] lg:text-[32px] leading-[20px] lg:leading-[39px] text-[#2D2D2D]">
            Gold-Plated Pearls Necklace
          </h1>
          <h2 className="w-full h-auto font-montserrat font-semibold text-[16px] lg:text-[32px] leading-[20px] lg:leading-[39px] text-[#878B94]">
            Made with 925 Silver
          </h2>
        </div>

        {/* Rating and Price Section */}
        <div className="w-full h-auto flex flex-col items-start gap-3">
          {/* Rating */}
          <div className="w-full h-auto flex flex-row items-center gap-[18px]">
            <div className="w-auto h-auto flex flex-row justify-center items-center gap-[10px]">
              <div className="w-[46px] lg:w-[60px] h-[22px] lg:h-[28px] bg-[#388E3C] rounded flex flex-row justify-center items-center gap-2 px-[5px] py-[3px]">
                <span className="w-auto h-auto font-montserrat font-medium text-[14px] lg:text-[18px] leading-[17px] lg:leading-[22px] text-white">
                  4.1
                </span>
                <svg width="12" height="12" viewBox="0 0 15 15" fill="none" className="lg:w-[15px] lg:h-[15px]">
                  <path d="M7.5 1L9.5 5L14 5.5L10.5 8.5L11.5 13L7.5 10.5L3.5 13L4.5 8.5L1 5.5L5.5 5L7.5 1Z" fill="white"/>
                </svg>
              </div>
              <span className="w-auto h-auto font-montserrat font-semibold text-[14px] lg:text-[24px] leading-[17px] lg:leading-[29px] text-center text-[#2D2D2D]">
                (23)
              </span>
            </div>
          </div>

          {/* Price */}
          <div className="w-full h-auto flex flex-row items-center gap-[18px]">
            <span className="w-auto h-auto font-montserrat font-semibold text-[24px] lg:text-[42px] leading-[29px] lg:leading-[51px] text-[#2D2D2D]">
              ₹1,600
            </span>
            <span className="w-auto h-auto font-montserrat font-semibold text-[16px] lg:text-[18px] leading-[20px] lg:leading-[22px] line-through text-[#878B94]">
              ₹2,000
            </span>
            <span className="w-auto h-auto font-montserrat font-semibold text-[18px] lg:text-[24px] leading-[22px] lg:leading-[29px] text-[#388E3C]">
              (20% off)
            </span>
          </div>
        </div>
      </div>

      {/* Mobile: Action Buttons - Below Price */}
      <div className="w-full h-auto flex flex-row items-center gap-[11px] lg:hidden">
        <button className="flex-1 h-[40px] border border-[#FF8F9D] shadow-[0px_6px_18px_rgba(255,60,84,0.14)] flex flex-row justify-center items-center px-4 gap-[10px] transition-all duration-300 hover:scale-105 hover:shadow-[0px_8px_25px_rgba(255,60,84,0.25)] hover:bg-[#FF8F9D] hover:text-white group">
          <span className="w-auto h-auto font-montserrat font-bold text-[14px] leading-[17px] text-[#FF8F9D] group-hover:text-white transition-colors duration-300">
            ADD TO CART
          </span>
        </button>
        <button className="flex-1 h-[40px] bg-[#FF8F9D] shadow-[0px_6px_18px_rgba(255,60,84,0.14)] flex flex-row justify-center items-center px-4 gap-[10px] transition-all duration-300 hover:scale-105 hover:shadow-[0px_8px_25px_rgba(255,60,84,0.35)] hover:bg-[#e67a8a] group">
          <span className="w-auto h-auto font-montserrat font-bold text-[14px] leading-[17px] text-white group-hover:text-white transition-colors duration-300">
            BUY NOW
          </span>
        </button>
      </div>

      {/* Features */}
      <div className="w-full h-auto flex flex-col items-start gap-3 lg:gap-5">
        {/* Mobile: Single Column, Desktop: Two Rows */}
        <div className="w-full h-auto flex flex-col lg:flex-row items-start gap-3 lg:gap-[54px]">
          {/* Easy 30 Day Return */}
          <div className="w-full lg:w-[257px] h-auto flex flex-row justify-start lg:justify-center items-center gap-[10px]">
            <div className="w-[34px] lg:w-[50px] h-[34px] lg:h-[50px] flex items-center justify-center">
              <img 
                src="/assets/Easy 30 Days Return.svg" 
                alt="Easy 30 Day Return" 
                className="w-[34px] h-[34px] lg:w-[50px] lg:h-[50px]"
              />
            </div>
            <span className="w-auto h-auto font-montserrat font-medium text-[16px] lg:text-[20px] leading-[20px] lg:leading-[24px] text-[#2D2D2D]">
              Easy 30 Day Return
            </span>
          </div>

          {/* 925 Silver Plating */}
          <div className="w-full lg:w-[235px] h-auto flex flex-row justify-start lg:justify-center items-center gap-[10px]">
            <div className="w-[34px] lg:w-[50px] h-[34px] lg:h-[50px] flex items-center justify-center">
              <img 
                src="/assets/silver-plating.svg" 
                alt="925 Silver Plating" 
                className="w-[34px] h-[34px] lg:w-[50px] lg:h-[50px]"
              />
            </div>
            <span className="w-auto h-auto font-montserrat font-medium text-[16px] lg:text-[20px] leading-[20px] lg:leading-[24px] text-[#2D2D2D]">
              925 Silver Plating
            </span>
          </div>
        </div>

        {/* Second Row */}
        <div className="w-full h-auto flex flex-col lg:flex-row items-start gap-3 lg:gap-[60px]">
          {/* 6-Month Warranty */}
          <div className="w-full lg:w-[252px] h-auto flex flex-row justify-start lg:justify-center items-center gap-[10px]">
            <div className="w-[34px] lg:w-[50px] h-[34px] lg:h-[50px] flex items-center justify-center">
              <img 
                src="/assets/6 months warranty.svg" 
                alt="6 Month Warranty" 
                className="w-[34px] h-[34px] lg:w-[50px] lg:h-[50px]"
              />
            </div>
            <span className="w-auto h-auto font-montserrat font-medium text-[16px] lg:text-[20px] leading-[20px] lg:leading-[24px] text-[#2D2D2D]">
              6- Month Warranty
            </span>
          </div>

          {/* Premium Gold */}
          <div className="w-full lg:w-[209px] h-auto flex flex-row justify-start lg:justify-center items-center gap-[10px]">
            <div className="w-[34px] lg:w-[50px] h-[34px] lg:h-[50px] flex items-center justify-center">
              <img 
                src="/assets/premium-gold.svg" 
                alt="Premium Gold" 
                className="w-[34px] h-[34px] lg:w-[50px] lg:h-[50px]"
              />
            </div>
            <span className="w-auto h-auto font-montserrat font-medium text-[16px] lg:text-[20px] leading-[20px] lg:leading-[24px] text-[#2D2D2D]">
              Premium Gold
            </span>
          </div>
        </div>
      </div>

      {/* Desktop: Action Buttons - After Features */}
      <div className="hidden lg:flex w-full h-auto flex-row items-center gap-[11px]">
        <button className="flex-1 h-[55px] border border-[#FF8F9D] shadow-[0px_6px_18px_rgba(255,60,84,0.14)] flex flex-row justify-center items-center px-8 gap-[10px] transition-all duration-300 hover:scale-105 hover:shadow-[0px_8px_25px_rgba(255,60,84,0.25)] hover:bg-[#FF8F9D] hover:text-white group">
          <span className="w-auto h-auto font-montserrat font-bold text-[18px] leading-[22px] text-[#FF8F9D] group-hover:text-white transition-colors duration-300">
            ADD TO CART
          </span>
        </button>
        <button className="flex-1 h-[55px] bg-[#FF8F9D] shadow-[0px_6px_18px_rgba(255,60,84,0.14)] flex flex-row justify-center items-center px-8 gap-[10px] transition-all duration-300 hover:scale-105 hover:shadow-[0px_8px_25px_rgba(255,60,84,0.35)] hover:bg-[#e67a8a] group">
          <span className="w-auto h-auto font-montserrat font-bold text-[18px] leading-[22px] text-white group-hover:text-white transition-colors duration-300">
            BUY NOW
          </span>
        </button>
      </div>

      {/* Delivery Time */}
      <div className="w-full h-auto flex flex-col items-start gap-3">
        <h3 className="w-full h-auto font-montserrat font-semibold text-[16px] lg:text-[20px] leading-[20px] lg:leading-[24px] text-[#2D2D2D]">
          Estimated Delivery Time
        </h3>
        <div className="w-full h-[40px] lg:h-[55px] bg-white border border-[#878B94] flex flex-row justify-between items-center px-[14px] py-[18px] gap-[10px]">
          <input 
            type="text" 
            placeholder="Enter Pincode"
            className="flex-1 h-auto font-montserrat font-medium text-[14px] lg:text-[18px] leading-[17px] lg:leading-[22px] text-[#2D2D2D] placeholder-[#878B94] outline-none border-none bg-transparent"
            maxLength="6"
            pattern="[0-9]*"
            inputMode="numeric"
            onKeyPress={(e) => {
              if (!/[0-9]/.test(e.key)) {
                e.preventDefault()
              }
            }}
          />
          <button className="w-auto h-auto font-montserrat font-semibold text-[14px] lg:text-[18px] leading-[17px] lg:leading-[22px] text-[#FF8F9D] hover:text-[#e67a8a] transition-colors duration-300 cursor-pointer">
            Check
          </button>
        </div>
      </div>

      {/* Offers */}
      <div className="w-full h-auto flex flex-col items-start gap-3">
        <div className="w-full h-auto flex flex-row items-start justify-between">
          <div className="w-auto h-auto flex flex-col items-start gap-1">
            <div className="w-auto h-auto flex flex-row items-center gap-4">
              <span className="w-auto h-auto font-montserrat font-semibold text-[16px] lg:text-[20px] leading-[20px] lg:leading-[24px] text-black">
                Offers
              </span>
              <span className="w-auto h-auto font-montserrat font-normal text-[14px] lg:text-[18px] leading-[17px] lg:leading-[22px] text-[#878B94]">
                2 available
              </span>
            </div>
            <p className="w-auto h-auto font-montserrat font-medium italic text-[14px] lg:text-[18px] leading-[17px] lg:leading-[22px] text-[#2D2D2D]">
              Coupon can be applied at checkout
            </p>
          </div>
          <button className="w-auto h-auto font-montserrat font-semibold text-[14px] lg:text-[18px] leading-[17px] lg:leading-[22px] text-[#FF8F9D] mr-2 lg:mr-4">
            Check
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-0 border border-[#FF8F9D]"></div>

      {/* Product Description */}
      <div className="w-full h-auto flex flex-col justify-center items-start gap-3">
        <h3 className="w-full h-auto font-montserrat font-semibold text-[16px] lg:text-[20px] leading-[20px] lg:leading-[24px] text-black">
          Product Description
        </h3>
        <div className="w-full h-auto flex flex-col justify-center items-start gap-2">
          <div className="w-full h-auto flex flex-row items-center gap-[8px] lg:gap-[14px]">
            <svg width="13" height="13" viewBox="0 0 20 20" fill="none" className="transform rotate-180 lg:w-[20px] lg:h-[20px]">
              <path d="M10 2L12 6L16 6.5L13 9.5L14 13L10 10.5L6 13L7 9.5L4 6.5L8 6L10 2Z" stroke="#388E3C" strokeWidth="1.77"/>
            </svg>
            <span className="w-auto h-auto font-montserrat font-semibold text-[14px] lg:text-[18px] leading-[17px] lg:leading-[22px] text-[#2D2D2D]">
              Material: 925 Sterling Silver
            </span>
          </div>
          <div className="w-full h-auto flex flex-row items-center gap-[8px] lg:gap-[14px]">
            <svg width="13" height="13" viewBox="0 0 20 20" fill="none" className="transform rotate-180 lg:w-[20px] lg:h-[20px]">
              <path d="M10 2L12 6L16 6.5L13 9.5L14 13L10 10.5L6 13L7 9.5L4 6.5L8 6L10 2Z" stroke="#388E3C" strokeWidth="1.77"/>
            </svg>
            <span className="w-auto h-auto font-montserrat font-semibold text-[14px] lg:text-[18px] leading-[17px] lg:leading-[22px] text-[#2D2D2D]">
              Plating: 18K Gold
            </span>
          </div>
          <div className="w-full h-auto flex flex-row items-center gap-[8px] lg:gap-[14px]">
            <svg width="13" height="13" viewBox="0 0 20 20" fill="none" className="transform rotate-180 lg:w-[20px] lg:h-[20px]">
              <path d="M10 2L12 6L16 6.5L13 9.5L14 13L10 10.5L6 13L7 9.5L4 6.5L8 6L10 2Z" stroke="#388E3C" strokeWidth="1.77"/>
            </svg>
            <span className="w-auto h-auto font-montserrat font-semibold text-[14px] lg:text-[18px] leading-[17px] lg:leading-[22px] text-[#2D2D2D]">
              Weight: 10grams
            </span>
          </div>
          <div className="w-full h-auto flex flex-row items-center gap-[8px] lg:gap-[14px]">
            <svg width="13" height="13" viewBox="0 0 20 20" fill="none" className="transform rotate-180 lg:w-[20px] lg:h-[20px]">
              <path d="M10 2L12 6L16 6.5L13 9.5L14 13L10 10.5L6 13L7 9.5L4 6.5L8 6L10 2Z" stroke="#388E3C" strokeWidth="1.77"/>
            </svg>
            <span className="w-auto h-auto font-montserrat font-semibold text-[14px] lg:text-[18px] leading-[17px] lg:leading-[22px] text-[#2D2D2D]">
              Stone Type: Premium Jerkin
            </span>
          </div>
        </div>
      </div>

      {/* Shipping */}
      <div className="w-full h-auto flex flex-col justify-center items-start gap-3">
        <h3 className="w-full h-auto font-montserrat font-semibold text-[16px] lg:text-[20px] leading-[20px] lg:leading-[24px] text-black">
          Shipping
        </h3>
        <div className="w-full h-auto flex flex-row items-center gap-[8px] lg:gap-[14px]">
          <span className="w-auto h-auto font-montserrat font-medium text-[14px] lg:text-[18px] leading-[17px] lg:leading-[22px] text-[#878B94]">
            Get it by 25 Sept
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
