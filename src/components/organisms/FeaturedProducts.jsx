import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Button from "@/components/atoms/Button"
import ProductCard from "@/components/molecules/ProductCard"
import ApperIcon from "@/components/ApperIcon"
import { ProductGridSkeleton } from "@/components/ui/Loading"
import Error from "@/components/ui/Error"
import { productService } from "@/services/api/productService"

export default function FeaturedProducts() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  const loadFeaturedProducts = async () => {
    try {
      setLoading(true)
      setError("")
      const data = await productService.getFeatured()
      setProducts(data.slice(0, 8)) // Show max 8 featured products
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadFeaturedProducts()
  }, [])

  if (loading) {
    return (
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductGridSkeleton count={8} />
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Error message={error} onRetry={loadFeaturedProducts} />
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-primary/10 rounded-full px-4 py-2 mb-4">
            <ApperIcon name="Star" size={16} className="text-primary mr-2" />
            <span className="text-primary font-medium">Featured Products</span>
          </div>
          
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Best Sellers
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our most popular organic products, loved by customers for their 
            exceptional quality and authentic taste.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <ProductCard key={product.Id} product={product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link to="/products">
            <Button variant="primary" size="lg" className="transform hover:scale-105 transition-all duration-200">
              View All Products
              <ApperIcon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}