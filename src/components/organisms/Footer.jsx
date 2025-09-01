import { Link } from "react-router-dom"
import Button from "@/components/atoms/Button"
import Input from "@/components/atoms/Input"
import ApperIcon from "@/components/ApperIcon"

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <ApperIcon name="Leaf" size={20} className="text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold">Amrutam Organics</h3>
            </div>
            <p className="text-green-100 text-sm leading-relaxed">
              Premium organic foods directly from sustainable farms to your table. 
              Supporting traditional farming practices and healthy living.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 p-2">
                <ApperIcon name="Facebook" size={16} />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 p-2">
                <ApperIcon name="Instagram" size={16} />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 p-2">
                <ApperIcon name="Twitter" size={16} />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-medium text-lg">Quick Links</h4>
            <ul className="space-y-2 text-green-100">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors">
                  Our Products
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors">
                  Blog & Recipes
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div className="space-y-4">
            <h4 className="font-medium text-lg">Categories</h4>
            <ul className="space-y-2 text-green-100">
              <li>
                <Link to="/products/rice" className="hover:text-white transition-colors">
                  Premium Rice
                </Link>
              </li>
              <li>
                <Link to="/products/pulses" className="hover:text-white transition-colors">
                  Organic Pulses
                </Link>
              </li>
              <li>
                <Link to="/products/dairy" className="hover:text-white transition-colors">
                  Pure Dairy
                </Link>
              </li>
              <li>
                <Link to="/products/spices" className="hover:text-white transition-colors">
                  Natural Spices
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-medium text-lg">Stay Updated</h4>
            <p className="text-green-100 text-sm">
              Get the latest updates on new products and seasonal offers.
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-green-200"
              />
              <Button variant="accent" size="sm" className="w-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-green-100 text-sm">
              © 2024 Amrutam Organics. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-green-100 text-sm">
              <Link to="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/refund" className="hover:text-white transition-colors">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}