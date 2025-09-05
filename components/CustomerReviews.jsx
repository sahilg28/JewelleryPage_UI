const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Anu",
      date: "15/08/24",
      rating: 5,
      comment: "Such a gorgeous necklace. Got many compliments as well. Absolutely loved it",
      images: [1, 2]
    },
    {
      id: 2,
      name: "Anu",
      date: "15/08/24", 
      rating: 5,
      comment: "Looks beautiful ❤️❤️❤️ Go for it girls 😍 the quality is good..",
      images: [1]
    }
  ]

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
    <div className="w-full max-w-[624px] flex flex-col items-start gap-3 lg:gap-4">
      {/* Divider */}
      <div className="w-full h-0 border border-[#FF8F9D]"></div>

      <div className="w-full flex flex-col items-start gap-3 lg:gap-4">
        {/* Header */}
        <div className="w-full flex flex-col items-start gap-2">
          <h3 className="w-full font-montserrat font-semibold text-[18px] lg:text-[20px] leading-[22px] lg:leading-[24px] text-[#2D2D2D]">
            Customer Ratings
          </h3>
          <div className="w-full h-0 border border-[#FF8F9D]"></div>
        </div>

        {/* Reviews */}
        <div className="w-full flex flex-col items-start gap-3 lg:gap-4">
          {/* First Review */}
          <div className="w-full flex flex-col justify-center items-start gap-2">
            {/* User Info */}
            <div className="flex flex-row items-center gap-2">
              <div className="w-[26px] lg:w-[29px] h-[26px] lg:h-[29px] flex items-center justify-center">
                <svg width="26" height="26" viewBox="0 0 29 29" fill="none" className="lg:w-[29px] lg:h-[29px]">
                  <circle cx="14.5" cy="14.5" r="14.5" stroke="#2D2D2D" strokeWidth="1.5"/>
                  <circle cx="14.5" cy="10" r="3" stroke="#2D2D2D" strokeWidth="1.5"/>
                  <path d="M8 22C8 18.5 10.5 16 14.5 16C18.5 16 21 18.5 21 22" stroke="#2D2D2D" strokeWidth="1.5"/>
                </svg>
              </div>
              <span className="font-montserrat font-medium text-[18px] lg:text-[20px] leading-[22px] lg:leading-[24px] text-[#2D2D2D]">
                Anu
              </span>
            </div>
            <span className="font-montserrat font-medium text-[12px] lg:text-[14px] leading-[15px] lg:leading-[17px] text-[#878B94]">
              15/08/24
            </span>
            <div className="flex flex-row items-center px-1 gap-[3px]">
              {renderStars(5)}
            </div>
          </div>

          {/* Review Comment */}
          <p className="w-full font-montserrat font-normal text-[16px] lg:text-[18px] leading-[20px] lg:leading-[22px] text-[#2D2D2D]">
            Such a gorgeous necklace. Got many compliments as well. Absolutely loved it
          </p>

          {/* Review Images */}
          <div className="flex flex-row items-start gap-3">
            <img 
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=111&h=111&fit=crop&crop=center&auto=format&q=80" 
              alt="Customer review jewelry photo 1"
              className="w-[111px] lg:w-[152px] h-[111px] lg:h-[152px] object-cover rounded"
            />
            <img 
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=111&h=111&fit=crop&crop=center&auto=format&q=80" 
              alt="Customer review jewelry photo 2"
              className="w-[111px] lg:w-[152px] h-[111px] lg:h-[152px] object-cover rounded"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-0 border border-[#FF8F9D]"></div>

        {/* Second Review */}
        <div className="w-full flex flex-col items-start gap-3 lg:gap-4">
          {/* User Info */}
          <div className="w-full flex flex-col justify-center items-start gap-2">
            <div className="flex flex-row items-center gap-2">
              <div className="w-[26px] lg:w-[29px] h-[26px] lg:h-[29px] flex items-center justify-center">
                <svg width="26" height="26" viewBox="0 0 29 29" fill="none" className="lg:w-[29px] lg:h-[29px]">
                  <circle cx="14.5" cy="14.5" r="14.5" stroke="#2D2D2D" strokeWidth="1.5"/>
                  <circle cx="14.5" cy="10" r="3" stroke="#2D2D2D" strokeWidth="1.5"/>
                  <path d="M8 22C8 18.5 10.5 16 14.5 16C18.5 16 21 18.5 21 22" stroke="#2D2D2D" strokeWidth="1.5"/>
                </svg>
              </div>
              <span className="font-montserrat font-medium text-[18px] lg:text-[20px] leading-[22px] lg:leading-[24px] text-[#2D2D2D]">
                Anu
              </span>
            </div>
            <span className="font-montserrat font-medium text-[12px] lg:text-[14px] leading-[15px] lg:leading-[17px] text-[#878B94]">
              15/08/24
            </span>
            <div className="flex flex-row items-center px-1 gap-[3px]">
              {renderStars(5)}
            </div>
          </div>

          {/* Review Comment */}
          <p className="w-full font-montserrat font-normal text-[16px] lg:text-[18px] leading-[20px] lg:leading-[22px] text-[#2D2D2D]">
            Looks beautiful ❤️❤️❤️ Go for it girls 😍 the quality is good..
          </p>

          {/* Review Image */}
          <div className="flex flex-row items-start gap-3">
            <img 
              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=111&h=111&fit=crop&crop=center&auto=format&q=80" 
              alt="Customer review jewelry photo"
              className="w-[111px] lg:w-[152px] h-[111px] lg:h-[152px] object-cover rounded"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerReviews
