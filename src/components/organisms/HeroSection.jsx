import { Link } from "react-router-dom"
import Button from "@/components/atoms/Button"
import ApperIcon from "@/components/ApperIcon"

export default function HeroSection() {
  return (
<section 
className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&h=1080&fit=crop&q=80')"
      }}
    >
      {/* Farm Overlay for authentic feel */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
      
      {/* Hero Content */}
      <div className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Brand Header */}
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
              Amrutam Organics
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Premium Organic Products from Farm to Your Table
            </p>
            
            <div className="inline-flex items-center bg-primary/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <ApperIcon name="Leaf" size={20} className="text-success mr-2" />
              <span className="text-white font-medium">100% Natural • Farm Fresh • Authentic</span>
            </div>
          </div>

          {/* Hero Products Showcase */}
          <div className="mb-12">
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-8">
              Our Hero Products
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {/* Pure A2 Desi Ghee - 1L Glass Bottle */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <img
                  src="https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=300&h=300&fit=crop&q=80"
                  alt="Pure A2 Desi Ghee - 1L Glass Bottle with Jute Cover"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h3 className="font-display text-lg font-bold text-gray-900 mb-2">Pure A2 Desi Ghee</h3>
                <p className="text-sm text-gray-600 mb-2">1L Glass Bottle</p>
                <p className="text-xs text-primary mb-3">Traditional Jute Cap Cover</p>
                <div className="text-lg font-bold text-primary">₹899</div>
              </div>

              {/* Raw Honey */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <img
                  src="https://images.unsplash.com/photo-1587049016823-c90b2dcacd86?w=300&h=300&fit=crop&q=80"
                  alt="Raw Organic Honey"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h3 className="font-display text-lg font-bold text-gray-900 mb-2">Raw Organic Honey</h3>
                <p className="text-sm text-gray-600 mb-2">500ml Glass Jar</p>
                <p className="text-xs text-primary mb-3">Pure & Unprocessed</p>
                <div className="text-lg font-bold text-primary">₹449</div>
              </div>

              {/* Kabuli Chana - 1kg Pack */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <img
                  src="https://images.unsplash.com/photo-1583849176903-9c6ebb1f7e7b?w=300&h=300&fit=crop&q=80"
                  alt="Organic Kabuli Chana - 1kg Pack"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h3 className="font-display text-lg font-bold text-gray-900 mb-2">Organic Kabuli Chana</h3>
                <p className="text-sm text-gray-600 mb-2">1kg Plastic Pack</p>
                <p className="text-xs text-primary mb-3">Premium Quality</p>
                <div className="text-lg font-bold text-primary">₹189</div>
              </div>

              {/* Rajma - 1kg Pack */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <img
                  src="https://images.unsplash.com/photo-1506368083636-6defb67639a7?w=300&h=300&fit=crop&q=80"
                  alt="Organic Rajma - 1kg Pack"
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h3 className="font-display text-lg font-bold text-gray-900 mb-2">Organic Rajma</h3>
                <p className="text-sm text-gray-600 mb-2">1kg Plastic Pack</p>
                <p className="text-xs text-primary mb-3">Premium Red Kidney Beans</p>
                <div className="text-lg font-bold text-primary">₹149</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Link to="/products">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-200 shadow-xl">
                Explore All Products
                <ApperIcon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}