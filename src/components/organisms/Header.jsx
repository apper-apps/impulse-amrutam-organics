import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Button from "@/components/atoms/Button"
import ApperIcon from "@/components/ApperIcon"
import SearchBar from "@/components/molecules/SearchBar"
import CartSidebar from "@/components/organisms/CartSidebar"
import { useCart } from "@/hooks/useCart"

export default function Header() {
  const navigate = useNavigate()
  const { getTotalItems } = useCart()
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleSearch = (query) => {
    navigate(`/products?search=${encodeURIComponent(query)}`)
  }

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Products", path: "/products", hasDropdown: true },
    { label: "About", path: "/about" },
    { label: "Blog", path: "/blog" },
    { label: "Contact", path: "/contact" }
  ]

  return (
    <>
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <ApperIcon name="Leaf" size={24} className="text-white" />
              </div>
              <div>
                <h1 className="font-display text-xl font-bold text-primary">
                  Amrutam Organics
                </h1>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.label} className="relative group">
                  <Link
                    to={item.path}
                    className="text-gray-700 hover:text-primary font-medium transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                  {item.hasDropdown && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="p-2">
                        <Link
                          to="/products/rice"
                          className="block px-4 py-2 text-gray-700 hover:bg-surface hover:text-primary rounded-md transition-colors"
                        >
                          Rice
                        </Link>
                        <Link
                          to="/products/pulses"
                          className="block px-4 py-2 text-gray-700 hover:bg-surface hover:text-primary rounded-md transition-colors"
                        >
                          Pulses
                        </Link>
                        <Link
                          to="/products/dairy"
                          className="block px-4 py-2 text-gray-700 hover:bg-surface hover:text-primary rounded-md transition-colors"
                        >
                          Dairy
                        </Link>
                        <Link
                          to="/products/spices"
                          className="block px-4 py-2 text-gray-700 hover:bg-surface hover:text-primary rounded-md transition-colors"
                        >
                          Spices
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Search Bar - Desktop */}
            <div className="hidden lg:block flex-1 max-w-md mx-8">
              <SearchBar onSearch={handleSearch} />
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              {/* Cart Button */}
              <Button
                variant="ghost"
                className="relative"
                onClick={() => setIsCartOpen(true)}
              >
                <ApperIcon name="ShoppingCart" size={20} />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                className="lg:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <ApperIcon name={isMobileMenuOpen ? "X" : "Menu"} size={20} />
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-100 py-4">
              <div className="mb-4">
                <SearchBar onSearch={handleSearch} />
              </div>
              <nav className="space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.path}
                    className="block px-4 py-2 text-gray-700 hover:bg-surface hover:text-primary rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Cart Sidebar */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
}