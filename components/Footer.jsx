const Footer = () => {
  return (
    <footer className="w-full h-auto lg:h-[640px] relative">
      <div className="absolute w-full h-full lg:h-[640px] left-0 top-0 bg-[#D9D9D9]"></div>
      
      <div className="relative w-full h-auto lg:h-[569px] left-0 top-0 lg:top-[71px]">
        <div className="w-full h-auto lg:h-[535px] left-0 top-0 lg:top-[34px]">
          <div className="absolute w-full h-[43px] left-0 bottom-0 bg-[#CA8787] flex items-center px-6 lg:px-32">
            <p className="w-auto h-auto font-montserrat font-medium text-[14px] leading-[17px] text-white">
              © 2024 Elegant Jewels. All Rights Reserved.
            </p>
          </div>

          <div className="block lg:hidden w-full max-w-[430px] mx-auto h-[657px] bg-[#D9D9D9] relative">
            <div className="w-full h-[614px] px-6 py-8 flex flex-col gap-8">
              <div className="w-full flex flex-row gap-6">
                <div className="w-1/2">
                  <h4 className="w-auto h-auto font-montserrat font-semibold text-[14px] leading-[17px] text-[#A40303] mb-4">
                    Quick Links
                  </h4>
                  <div className="w-full font-montserrat font-medium text-[12px] leading-[15px] text-[#2D2D2D] space-y-3">
                    <p>Customer Reviews</p>
                    <p>Our Blogs</p>
                    <p>Store Locator</p>
                    <p>Jewellery Care</p>
                    <p>Join Us</p>
                  </div>
                </div>

                <div className="w-1/2">
                  <h4 className="w-auto h-auto font-montserrat font-semibold text-[14px] leading-[17px] text-[#A40303] mb-4">
                    Details
                  </h4>
                  <div className="w-full font-montserrat font-medium text-[12px] leading-[15px] text-[#2D2D2D] space-y-3">
                    <p>Shipping & Returns</p>
                    <p>Privacy Policy</p>
                    <p>International Shipping</p>
                    <p>FAQ's and Support</p>
                    <p>Terms of Service</p>
                  </div>
                </div>
              </div>

              {/* Contact Us */}
              <div className="w-full">
                <h4 className="w-auto h-auto font-montserrat font-semibold text-[14px] leading-[17px] text-[#A40303] mb-4">
                  Contact Us
                </h4>
                <div className="w-full font-montserrat font-medium text-[12px] leading-[15px] text-[#2D2D2D] space-y-3">
                  <p className="font-semibold">Elegant Jewels</p>
                  <p>SF-11, Ansal Fortune Arcade, K Block, K-27, Sector 18, Noida, Uttar Pradesh 201301</p>
                  <p>For any suggestions, queries or complaints please contact us:</p>
                  <p className="font-semibold">Elegantjewel Private Limited</p>
                  <p>contact@elegantjewels.com</p>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="w-full">
                <h4 className="w-auto h-auto font-montserrat font-medium text-[12px] leading-[15px] text-[#2D2D2D] mb-4">
                  Our Social Links:
                </h4>
                <div className="w-full flex flex-row items-center gap-6">
                  {/* LinkedIn */}
                  <button className="w-[18px] lg:w-[28px] h-[18px] lg:h-[28px] flex items-center justify-center">
                    <img 
                      src="/assets/🦆 icon _linkedin in_.svg" 
                      alt="LinkedIn" 
                      className="w-[18px] h-[18px] lg:w-[28px] lg:h-[28px]"
                    />
                  </button>
                  
                  {/* Facebook */}
                  <button className="w-[10px] lg:w-[16px] h-[18px] lg:h-[28px] flex items-center justify-center">
                    <img 
                      src="/assets/🦆 icon _facebook f_.svg" 
                      alt="Facebook" 
                      className="w-[10px] h-[18px] lg:w-[16px] lg:h-[28px]"
                    />
                  </button>
                  
                  {/* Instagram */}
                  <button className="w-[18px] lg:w-[28px] h-[18px] lg:h-[28px] flex items-center justify-center">
                    <img 
                      src="/assets/🦆 icon _instagram_.svg" 
                      alt="Instagram" 
                      className="w-[18px] h-[18px] lg:w-[28px] lg:h-[28px]"
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Copyright Bar */}
            <div className="w-full h-[43px] bg-[#CA8787] flex items-center justify-center">
              <p className="w-auto h-auto font-montserrat font-medium text-[14px] leading-[17px] text-white">
                © 2024 Elegant Jewels. All Rights Reserved.
              </p>
            </div>
          </div>

          {/* Desktop Footer Layout */}
          <div className="hidden lg:block absolute w-[1296px] h-[376px] left-[128px] top-10">
            <div className="w-[1294px] h-[316px] left-[2px] top-0 flex flex-row justify-center items-start gap-[131px]">
              {/* Quick Links */}
              <div className="w-[156px] h-[216px]">
                <h4 className="w-[97px] h-[20px] font-montserrat font-semibold text-[16px] leading-[20px] text-[#A40303] mb-4">
                  Quick Links
                </h4>
                <div className="w-[156px] h-[180px] font-montserrat font-medium text-[16px] leading-[20px] text-[#2D2D2D] space-y-3">
                  <p>Customer Reviews</p>
                  <p>Our Blogs</p>
                  <p>Store Locator</p>
                  <p>Jewellery Care</p>
                  <p>Join Us</p>
                </div>
              </div>

              {/* Details Column 1 */}
              <div className="w-[201px] h-[216px]">
                <h4 className="w-[70.65px] h-[20px] font-montserrat font-semibold text-[16px] leading-[20px] text-[#A40303] mb-4">
                  Details
                </h4>
                <div className="w-[201px] h-[180px] font-montserrat font-medium text-[16px] leading-[20px] text-[#2D2D2D] space-y-3">
                  <p>Shipping & Returns</p>
                  <p>Privacy Policy</p>
                  <p>International Shipping</p>
                  <p>FAQ's and Support</p>
                  <p>Terms of Service</p>
                </div>
              </div>

              {/* Details Column 2 */}
              <div className="w-[201px] h-[216px]">
                <h4 className="w-[70.65px] h-[20px] font-montserrat font-semibold text-[16px] leading-[20px] text-[#A40303] mb-4">
                  Details
                </h4>
                <div className="w-[201px] h-[180px] font-montserrat font-medium text-[16px] leading-[20px] text-[#2D2D2D] space-y-3">
                  <p>Shipping & Returns</p>
                  <p>Privacy Policy</p>
                  <p>International Shipping</p>
                  <p>FAQ's and Support</p>
                  <p>Terms of Service</p>
                </div>
              </div>

              {/* Contact Us */}
              <div className="w-[343px] h-[316px]">
                <h4 className="w-[118.23px] h-[20px] font-montserrat font-semibold text-[16px] leading-[20px] text-[#A40303] mb-4">
                  Contact Us
                </h4>
                <div className="w-[343px] h-[280px] font-montserrat font-medium text-[16px] leading-[20px] text-[#2D2D2D] space-y-3">
                  <p className="font-semibold">Elegant Jewels</p>
                  <p>SF-11, Ansal Fortune Arcade, K Block, K-27, Sector 18, Noida, Uttar Pradesh 201301</p>
                  <p>For any suggestions, queries or complaints please contact us:</p>
                  <p className="font-semibold">Elegantjewel Private Limited</p>
                  <p>contact@elegantjewels.com</p>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
            </div>

            {/* Desktop Social Links */}
            <div className="absolute w-[137.46px] h-[64px] left-0 top-[312px]">
              <h4 className="w-[134px] h-[20px] font-montserrat font-medium text-[16px] leading-[20px] text-[#2D2D2D] mb-4">
                Our Social Links:
              </h4>
              <div className="w-[137.46px] h-[28px] flex flex-row items-center gap-8">
                {/* LinkedIn */}
                <button className="w-[28px] h-[28px] flex items-center justify-center">
                  <img 
                    src="/assets/🦆 icon _linkedin in_.svg" 
                    alt="LinkedIn" 
                    className="w-[28px] h-[28px]"
                  />
                </button>
                
                {/* Facebook */}
                <button className="w-[16px] h-[28px] flex items-center justify-center">
                  <img 
                    src="/assets/🦆 icon _facebook f_.svg" 
                    alt="Facebook" 
                    className="w-[16px] h-[28px]"
                  />
                </button>
                
                {/* Instagram */}
                <button className="w-[28px] h-[28px] flex items-center justify-center">
                  <img 
                    src="/assets/🦆 icon _instagram_.svg" 
                    alt="Instagram" 
                    className="w-[28px] h-[28px]"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Divider Line */}
          <div className="hidden lg:block absolute w-full h-0 left-0 top-[5px] border border-[#A40303]"></div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
