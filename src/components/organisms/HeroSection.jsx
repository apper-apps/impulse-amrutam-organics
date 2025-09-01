import { Link } from "react-router-dom"
import Button from "@/components/atoms/Button"
import ApperIcon from "@/components/ApperIcon"

export default function HeroSection() {
  return (
<section className="relative bg-gradient-to-br from-white via-surface/80 to-primary/20 min-h-[500px] flex items-center">
      <div className="absolute inset-0 bg-black/10" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
                <ApperIcon name="Leaf" size={16} className="mr-2" />
                100% Organic & Natural
              </div>
              
<h1 className="font-display text-4xl lg:text-6xl font-bold leading-tight text-gray-900">
                Premium Organic
                <span className="block text-primary">Products</span>
              </h1>
              
<p className="text-lg lg:text-xl text-gray-700 leading-relaxed max-w-lg">
                Discover our finest selection of pure A2 ghee, natural honey, organic kabuli chana, and premium rajma. 
                Authentic flavors from traditional sources for your healthy lifestyle.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products">
                <Button 
                  variant="accent" 
                  size="lg"
                  className="bg-accent hover:bg-accent/90 transform hover:scale-105 transition-all duration-200"
                >
                  <ApperIcon name="ShoppingBag" size={20} className="mr-2" />
                  Shop Now
                </Button>
              </Link>
              
              <Link to="/about">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary"
                >
                  Learn More
                  <ApperIcon name="ArrowRight" size={20} className="ml-2" />
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center text-green-100">
                <ApperIcon name="Shield" size={20} className="mr-2" />
                <span className="text-sm">Certified Organic</span>
              </div>
              <div className="flex items-center text-green-100">
                <ApperIcon name="Truck" size={20} className="mr-2" />
                <span className="text-sm">Free Delivery</span>
              </div>
              <div className="flex items-center text-green-100">
                <ApperIcon name="Heart" size={20} className="mr-2" />
                <span className="text-sm">Farm to Table</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative">
<img
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=700&fit=crop&q=80"
                alt="Amrutam Organics hero products - Premium organic ghee in glass bottles, pure honey, kabuli chana, and rajma from sustainable farms"
                className="rounded-2xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500"
              />
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-4 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center">
                    <ApperIcon name="Leaf" size={16} className="text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-600">100%</div>
                    <div className="font-medium text-gray-900">Organic</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 transform rotate-6 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                    <ApperIcon name="Star" size={16} className="text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-600">4.9</div>
                    <div className="font-medium text-gray-900">Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}