import Header from '../components/Header'
import Breadcrumb from '../components/Breadcrumb'
import ProductImageGallery from '../components/ProductImageGallery'
import ProductDetails from '../components/ProductDetails'
import CustomerReviews from '../components/CustomerReviews'
import ProductCarousel from '../components/ProductCarousel'
import Footer from '../components/Footer'

const LandingPage = () => {
  // Sample product data for carousels
  const similarProducts = [
    {
      name: "Gold Pearl Drop Earrings",
      currentPrice: "1999",
      originalPrice: "2999",
      rating: 4,
      reviewCount: 4,
      image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=311&h=316&fit=crop&crop=center&auto=format&q=80"
    },
    {
      name: "Diamond Gold Necklace Set",
      currentPrice: "1999",
      originalPrice: "2999",
      rating: 4,
      reviewCount: 4,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=311&h=316&fit=crop&crop=center&auto=format&q=80"
    },
    {
      name: "Rose Gold Pearl Bracelet",
      currentPrice: "1999",
      originalPrice: "2999",
      rating: 4,
      reviewCount: 4,
      image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=311&h=316&fit=crop&crop=center&auto=format&q=80"
    },
    {
      name: "Vintage Gold Chain Necklace",
      currentPrice: "1999",
      originalPrice: "2999",
      rating: 4,
      reviewCount: 4,
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=311&h=316&fit=crop&crop=center&auto=format&q=80"
    }
  ]

  const topPicks = [
    {
      name: "Luxury Gold Ring Set",
      currentPrice: "1999",
      originalPrice: "2999",
      rating: 4,
      reviewCount: 4,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=311&h=316&fit=crop&crop=center&auto=format&q=80"
    },
    {
      name: "Elegant Pearl Gold Set",
      currentPrice: "1999",
      originalPrice: "2999",
      rating: 4,
      reviewCount: 4,
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=311&h=316&fit=crop&crop=center&auto=format&q=80"
    },
    {
      name: "Classic Gold Earrings",
      currentPrice: "1999",
      originalPrice: "2999",
      rating: 4,
      reviewCount: 4,
      image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=311&h=316&fit=crop&crop=center&auto=format&q=80"
    },
    {
      name: "Premium Gold Necklace",
      currentPrice: "1999",
      originalPrice: "2999",
      rating: 4,
      reviewCount: 4,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=311&h=316&fit=crop&crop=center&auto=format&q=80"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Breadcrumb Navigation */}
      <Breadcrumb />
      
      {/* Main Product Detail Content */}
      <main className="w-full">
        {/* Product Section */}
        <section className="w-full px-6 lg:px-32 py-6 lg:py-8">
          <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8 max-w-7xl mx-auto">
            {/* Left Column - Product Image Gallery */}
            <ProductImageGallery />
            
            {/* Right Column - Product Details and Reviews */}
            <div className="flex flex-col gap-6 lg:gap-8 w-full lg:w-auto">
              <ProductDetails />
              <CustomerReviews />
            </div>
          </div>
        </section>

        {/* Similar Products Section - Hidden on mobile */}
        <section className="hidden lg:block w-full py-8 lg:py-16">
          <ProductCarousel title="Similar to this" products={similarProducts} />
        </section>

        {/* You Might also like Section - Mobile only */}
        <section className="block lg:hidden w-full py-8">
          <ProductCarousel title="You Might also like" products={similarProducts.slice(0, 4)} />
        </section>

        {/* Top Picks Section - Desktop only */}
        <section className="hidden lg:block w-full py-8 lg:py-16">
          <ProductCarousel title="Top picks for you" products={topPicks} />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default LandingPage