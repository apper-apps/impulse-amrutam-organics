import { useParams, useSearchParams } from "react-router-dom"
import ProductGrid from "@/components/organisms/ProductGrid"

export default function Products() {
  const { category } = useParams()
  const [searchParams] = useSearchParams()
  const searchQuery = searchParams.get("search")

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="font-display text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {searchQuery ? `Search Results` : category ? `${category.charAt(0).toUpperCase() + category.slice(1)} Products` : "All Products"}
          </h1>
          <p className="text-lg text-gray-600">
            {searchQuery 
              ? `Results for "${searchQuery}"`
              : "Discover our complete range of premium organic products"
            }
          </p>
        </div>

        {/* Product Grid */}
        <ProductGrid categoryFilter={category} searchQuery={searchQuery} />
      </div>
    </div>
  )
}