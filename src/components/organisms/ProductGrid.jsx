import { useState, useEffect } from "react"
import ProductCard from "@/components/molecules/ProductCard"
import CategoryFilter from "@/components/molecules/CategoryFilter"
import Button from "@/components/atoms/Button"
import ApperIcon from "@/components/ApperIcon"
import { ProductGridSkeleton } from "@/components/ui/Loading"
import Error from "@/components/ui/Error"
import Empty from "@/components/ui/Empty"
import { productService } from "@/services/api/productService"

export default function ProductGrid({ categoryFilter, searchQuery }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [selectedCategory, setSelectedCategory] = useState(categoryFilter || "all")
  const [sortBy, setSortBy] = useState("name")

  const loadProducts = async () => {
    try {
      setLoading(true)
      setError("")
      
      let data = []
      if (searchQuery) {
        data = await productService.searchProducts(searchQuery)
      } else if (selectedCategory === "all") {
        data = await productService.getAll()
      } else {
        data = await productService.getByCategory(selectedCategory)
      }
      
      setProducts(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadProducts()
  }, [selectedCategory, searchQuery])

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "rating":
        return b.rating - a.rating
      case "name":
      default:
        return a.name.localeCompare(b.name)
    }
  })

  if (loading) return <ProductGridSkeleton />
  if (error) return <Error message={error} onRetry={loadProducts} />

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Sidebar Filter */}
      <div className="lg:w-64 flex-shrink-0">
        <CategoryFilter 
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Sort Options */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-gray-600">
            {sortedProducts.length} products found
            {searchQuery && ` for "${searchQuery}"`}
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              <option value="name">Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        {sortedProducts.length === 0 ? (
          <Empty
            title="No products found"
            description={
              searchQuery
                ? `No products match your search for "${searchQuery}"`
                : selectedCategory !== "all"
                ? `No products found in ${selectedCategory} category`
                : "No products available at the moment"
            }
            actionText="View All Products"
            actionPath="/products"
            icon="Package"
          />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedProducts.map((product) => (
              <ProductCard key={product.Id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}