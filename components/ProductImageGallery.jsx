const ProductImageGallery = () => {
  return (
    <div className="w-full max-w-[651px] flex flex-col items-center gap-[18px]">
      {/* Main Image */}
      <div className="w-full max-w-[382px] lg:max-w-[651px] h-[363px] lg:h-[619px] relative">
        <img 
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=382&h=363&fit=crop&crop=center&auto=format&q=80" 
          alt="Gold Pearl Necklace"
          className="w-full h-full object-cover rounded-lg"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1594736797933-d0c29d0b8f22?w=382&h=363&fit=crop&crop=center&auto=format&q=80"
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <rect x="8" y="8" width="24" height="24" rx="2" stroke="#F6F5F2" strokeWidth="1.5"/>
              <path d="M16 20L20 16L24 20" stroke="#F6F5F2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Mobile: Pagination Dots */}
      <div className="flex flex-row justify-center items-center gap-[6px] lg:hidden">
        <div className="w-2 h-2 bg-[#D9D9D9] rounded-full"></div>
        <div className="w-[11px] h-[11px] bg-[#FF8F9D] rounded-full"></div>
        <div className="w-2 h-2 bg-[#D9D9D9] rounded-full"></div>
        <div className="w-2 h-2 bg-[#D9D9D9] rounded-full"></div>
        <div className="w-2 h-2 bg-[#D9D9D9] rounded-full"></div>
      </div>

      {/* Desktop: Thumbnail Gallery */}
      <div className="hidden lg:flex w-[651px] h-[110px] flex-row items-center gap-3">
        {/* Left Arrow */}
        <button className="w-[86px] h-[110px] flex flex-col justify-center items-center p-[34px_37px] gap-[10px]">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M20 8L12 16L20 24" stroke="#2D2D2D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Thumbnail 1 */}
        <img 
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=105&h=110&fit=crop&crop=center&auto=format&q=80" 
          alt="Gold Pearl Necklace View 1"
          className="w-[104.75px] h-[110px] object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1594736797933-d0c29d0b8f22?w=105&h=110&fit=crop&crop=center&auto=format&q=80"
          }}
        />

        {/* Thumbnail 2 - Video */}
        <div className="w-[104.75px] h-[110px] rounded relative overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=105&h=110&fit=crop&crop=center&auto=format&q=80" 
            alt="Gold Pearl Necklace Video"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=105&h=110&fit=crop&crop=center&auto=format&q=80"
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-55 flex items-center justify-center">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <rect x="8" y="8" width="24" height="24" rx="2" stroke="#F6F5F2" strokeWidth="1.5"/>
              <path d="M16 20L20 16L24 20" stroke="#F6F5F2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Thumbnail 3 */}
        <img 
          src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=105&h=110&fit=crop&crop=center&auto=format&q=80" 
          alt="Gold Pearl Necklace View 2"
          className="w-[104.75px] h-[110px] object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=105&h=110&fit=crop&crop=center&auto=format&q=80"
          }}
        />

        {/* Thumbnail 4 */}
        <img 
          src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=105&h=110&fit=crop&crop=center&auto=format&q=80" 
          alt="Gold Pearl Necklace View 3"
          className="w-[104.75px] h-[110px] object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1594736797933-d0c29d0b8f22?w=105&h=110&fit=crop&crop=center&auto=format&q=80"
          }}
        />

        {/* Right Arrow */}
        <button className="w-[86px] h-[108px] flex flex-col justify-center items-center p-[38px_37px] gap-[10px]">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="transform rotate-180">
            <path d="M20 8L12 16L20 24" stroke="#2D2D2D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default ProductImageGallery
