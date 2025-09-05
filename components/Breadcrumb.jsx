const Breadcrumb = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Jewellery', href: '/jewellery' },
    { label: 'Gifts', href: '/gifts' },
    { label: 'Necklace', href: '/necklace' },
    { label: 'Chains', href: '/chains' },
    { label: 'Shining Diva...', href: '/shining-diva' }
  ]

  return (
    <nav className="w-full px-6 lg:px-32 py-4">
      <div className="flex flex-row items-center gap-2 max-w-7xl mx-auto">
        {/* Mobile: Back Arrow + Product Details */}
        <div className="flex items-center gap-6 lg:hidden">
          {/* Back Arrow */}
          <button className="w-6 h-6 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="#2D2D2D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          {/* Product Details Text */}
          <h2 className="font-montserrat font-semibold text-[18px] leading-[22px] text-[#2D2D2D]">
            Product Details
          </h2>
        </div>

        {/* Desktop: Full Breadcrumb */}
        <div className="hidden lg:flex flex-row items-center gap-2">
          {breadcrumbItems.map((item, index) => (
            <div key={index} className="flex items-center gap-1">
              <a 
                href={item.href}
                className="text-[#878B94] text-base font-normal font-montserrat hover:text-[#2D2D2D] transition-colors"
              >
                {item.label}
              </a>
              {index < breadcrumbItems.length - 1 && (
                <svg 
                  width="17" 
                  height="16" 
                  viewBox="0 0 17 16" 
                  fill="none" 
                  className="ml-1"
                >
                  <path 
                    d="M6.5 4L10.5 8L6.5 12" 
                    stroke="#878B94" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Breadcrumb
