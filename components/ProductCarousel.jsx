import React, { useState } from 'react'

const ProductCarousel = ({ title, products }) => {
  const [wishlistItems, setWishlistItems] = useState(new Set())

  const toggleWishlist = (productId) => {
    setWishlistItems(prev => {
      const newSet = new Set(prev)
      if (newSet.has(productId)) {
        newSet.delete(productId)
      } else {
        newSet.add(productId)
      }
      return newSet
    })
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <div
        key={index}
        className={`w-[8px] lg:w-[12.61px] h-[8px] lg:h-[12.79px] ${
          index < rating ? 'bg-yellow-400' : 'bg-gray-300'
        } rounded-sm`}
      />
    ))
  }

  return (
    <div className="w-full max-w-[1553px] mx-auto h-auto lg:h-[552px] flex flex-col items-center gap-5 lg:gap-10 px-4">
      <h2 className="w-full h-auto font-montserrat font-semibold text-[18px] lg:text-[42px] leading-[23px] lg:leading-[51px] text-center text-[#2D2D2D]">
        {title}
      </h2>

      <div className="w-full h-auto lg:h-[461px] flex flex-col lg:flex-row justify-center items-center gap-2 lg:gap-[15px] overflow-hidden">
        <button className="hidden lg:flex w-[58.28px] h-[58px] flex-col justify-center items-center p-3 gap-[10px] relative">
          <div className="absolute w-[58.28px] h-[58px] bg-[#F6F5F2] rounded-full"></div>
          <svg 
            width="33.85" 
            height="33.68" 
            viewBox="0 0 34 34" 
            fill="none" 
            className="relative z-10 transform rotate-180"
          >
            <path d="M12 8L20 16L12 24" stroke="#2D2D2D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="w-full grid grid-cols-2 lg:flex lg:flex-row gap-2 lg:gap-[15px] lg:flex-1 lg:justify-center">
          {products.map((product, index) => (
            <div key={index} className="w-full lg:w-[312px] h-[287px] lg:h-[461px] relative bg-white lg:flex-shrink-0 group cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105">
              <div className="w-full h-[196px] lg:h-[316px] relative overflow-hidden rounded">
                <img 
                  src={product.image || "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=187&h=196&fit=crop&crop=center&auto=format&q=80"} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1594736797933-d0c29d0b8f22?w=187&h=196&fit=crop&crop=center&auto=format&q=80"
                  }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <button className="bg-white text-[#FF8F9D] px-3 py-1 lg:px-4 lg:py-2 rounded-full font-medium text-xs lg:text-sm shadow-lg hover:bg-[#FF8F9D] hover:text-white transition-colors duration-300">
                      Quick View
                    </button>
                  </div>
                </div>
                
                <div className="absolute top-[20px] lg:top-[32px] left-0 w-[84px] lg:w-[139.45px] h-[17px] lg:h-[27px] bg-[#A40303] rounded-r-[18px] flex flex-row justify-center items-center px-[9px] py-[3px] gap-[10px]">
                  <span className="w-auto h-auto font-montserrat font-medium text-[8px] lg:text-[16px] leading-[10px] lg:leading-[20px] text-white">
                    BestSeller
                  </span>
                </div>

                <button 
                  onClick={() => toggleWishlist(product.name)}
                  className="absolute top-[15px] lg:top-[25px] right-[15px] lg:right-[25px] w-[23px] lg:w-[40px] h-[23px] lg:h-[40px] bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <svg 
                    width="15" 
                    height="15" 
                    viewBox="0 0 24 24" 
                    fill={wishlistItems.has(product.name) ? "#FF8F9D" : "none"} 
                    className="lg:w-[24px] lg:h-[24px] transition-all duration-300"
                  >
                    <path 
                      d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z" 
                      stroke={wishlistItems.has(product.name) ? "#FF8F9D" : "#2D2D2D"} 
                      strokeWidth="1.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      className="transition-all duration-300"
                    />
                  </svg>
                </button>
              </div>

              <div className="absolute w-full h-auto left-0 top-[204px] lg:top-[328px] flex flex-col items-start gap-[2px] lg:gap-[5px] px-2 lg:px-0">
                <h3 className="w-full h-auto font-montserrat font-medium text-[10px] lg:text-[16px] leading-[12px] lg:leading-[20px] text-[#2D2D2D]">
                  {product.name}
                </h3>

                <div className="w-full h-auto flex flex-row items-center gap-[14px]">
                  <div className="w-auto h-auto relative">
                    <span className="w-auto h-auto font-montserrat font-semibold text-[16px] lg:text-[22px] leading-[20px] lg:leading-[27px] text-[#2D2D2D]">
                      ₹{product.currentPrice}
                    </span>
                    <span className="w-auto h-auto font-montserrat font-medium text-[10px] lg:text-[16px] leading-[12px] lg:leading-[20px] line-through text-[#878B94] ml-2">
                      ₹{product.originalPrice}
                    </span>
                  </div>
                </div>

                {/* Rating */}
                <div className="w-auto h-auto flex flex-row items-center px-1 gap-[3px]">
                  {renderStars(product.rating)}
                  <span className="w-auto h-auto font-montserrat font-medium text-[6px] lg:text-[10px] leading-[7px] lg:leading-[12px] text-[#2D2D2D] ml-2">
                    ({product.reviewCount})
                  </span>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button className="absolute w-full h-[32px] lg:h-[51px] left-0 top-[255px] lg:top-[410px] bg-[#CA8787] flex flex-row justify-center items-center px-2 lg:px-[84px] py-3 gap-[10px]">
                <span className="w-auto h-auto font-montserrat font-medium text-[14px] lg:text-[18px] leading-[17px] lg:leading-[22px] text-[#F6F5F2]">
                  Move to Bag
                </span>
              </button>
            </div>
          ))}
        </div>

        {/* Desktop: Right Arrow */}
        <button className="hidden lg:flex w-[58.28px] h-[58px] flex-col justify-center items-center p-3 gap-[10px] relative">
          <div className="absolute w-[58.28px] h-[58px] bg-[#F6F5F2] rounded-full"></div>
          <svg 
            width="33" 
            height="33" 
            viewBox="0 0 33 33" 
            fill="none" 
            className="relative z-10"
          >
            <path d="M12 8L20 16L12 24" stroke="#2D2D2D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default ProductCarousel
