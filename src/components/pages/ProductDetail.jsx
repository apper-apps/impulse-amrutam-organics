import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import Button from "@/components/atoms/Button"
import Badge from "@/components/atoms/Badge"
import { Card, CardContent } from "@/components/atoms/Card"
import ApperIcon from "@/components/ApperIcon"
import Loading from "@/components/ui/Loading"
import Error from "@/components/ui/Error"
import { useCart } from "@/hooks/useCart"
import { productService } from "@/services/api/productService"
import { reviewService } from "@/services/api/reviewService"
import { toast } from "react-toastify"

export default function ProductDetail() {
  const { id } = useParams()
  const { addToCart } = useCart()
  const [product, setProduct] = useState(null)
  const [reviews, setReviews] = useState([])
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  const loadProductDetails = async () => {
    try {
      setLoading(true)
      setError("")
      
      const [productData, reviewsData] = await Promise.all([
        productService.getById(id),
        reviewService.getByProductId(id)
      ])
      
      setProduct(productData)
      setReviews(reviewsData)
      setSelectedImage(0)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (id) {
      loadProductDetails()
    }
  }, [id])

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product)
    }
    toast.success(`${quantity} x ${product.name} added to cart!`)
  }

  if (loading) return <div className="min-h-screen bg-background py-8"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><Loading rows={5} /></div></div>
  if (error) return <div className="min-h-screen bg-background py-8"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><Error message={error} onRetry={loadProductDetails} /></div></div>
  if (!product) return null

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><ApperIcon name="ChevronRight" size={16} /></li>
            <li><Link to="/products" className="hover:text-primary">Products</Link></li>
            <li><ApperIcon name="ChevronRight" size={16} /></li>
            <li><Link to={`/products/${product.category.toLowerCase()}`} className="hover:text-primary">{product.category}</Link></li>
            <li><ApperIcon name="ChevronRight" size={16} /></li>
            <li className="text-gray-900">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-xl bg-surface">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {product.images.length > 1 && (
              <div className="flex space-x-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                      selectedImage === index ? 'border-primary' : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                {product.organic && (
                  <Badge variant="success">
                    <ApperIcon name="Leaf" size={12} className="mr-1" />
                    Organic
                  </Badge>
                )}
                {product.featured && (
                  <Badge variant="accent">Featured</Badge>
                )}
                <Badge variant="default">{product.category}</Badge>
              </div>

              <h1 className="font-display text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>

              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <ApperIcon 
                      key={i} 
                      name="Star" 
                      size={20} 
                      className={i < Math.floor(product.rating) ? "fill-current" : "text-gray-300"} 
                    />
                  ))}
                  <span className="text-gray-600 ml-2">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {product.description}
              </p>

              <div className="text-3xl font-bold text-primary mb-6">
                ₹{product.price}
                <span className="text-sm text-gray-600 font-normal ml-2">
                  per {product.weight}
                </span>
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 hover:bg-gray-100"
                >
                  <ApperIcon name="Minus" size={16} />
                </Button>
                <span className="px-4 py-2 font-medium">{quantity}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 hover:bg-gray-100"
                >
                  <ApperIcon name="Plus" size={16} />
                </Button>
              </div>

              <Button 
                variant="primary" 
                size="lg"
                onClick={handleAddToCart}
                className="flex-1 transform hover:scale-105 transition-all duration-200"
              >
                <ApperIcon name="ShoppingCart" size={20} className="mr-2" />
                Add to Cart - ₹{(product.price * quantity).toFixed(2)}
              </Button>
            </div>

            {/* Product Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2 text-gray-600">
                <ApperIcon name="Shield" size={16} className="text-success" />
                <span className="text-sm">Quality Guaranteed</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <ApperIcon name="Truck" size={16} className="text-success" />
                <span className="text-sm">Free Delivery</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <ApperIcon name="RotateCcw" size={16} className="text-success" />
                <span className="text-sm">Easy Returns</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <ApperIcon name="Heart" size={16} className="text-success" />
                <span className="text-sm">Made with Love</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-16">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button className="py-4 px-1 border-b-2 border-primary text-primary font-medium text-sm">
                Nutritional Info
              </button>
            </nav>
          </div>

          <div className="py-8">
            <Card>
              <CardContent>
                <h3 className="font-medium text-lg mb-4">Nutritional Information</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {Object.entries(product.nutritionalInfo).map(([key, value]) => (
                    <div key={key} className="text-center p-4 bg-surface rounded-lg">
                      <div className="font-medium text-gray-900 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                      <div className="text-sm text-gray-600 mt-1">{value}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Reviews Section */}
        {reviews.length > 0 && (
          <div className="mt-16">
            <h2 className="font-display text-2xl font-bold text-gray-900 mb-8">
              Customer Reviews ({reviews.length})
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reviews.map((review) => (
                <Card key={review.Id}>
                  <CardContent>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                          <ApperIcon 
                            key={i} 
                            name="Star" 
                            size={16} 
                            className={i < review.rating ? "fill-current" : "text-gray-300"} 
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">{review.date}</span>
                    </div>
                    
                    <p className="text-gray-700 mb-3">{review.comment}</p>
                    
                    <div className="text-sm font-medium text-gray-900">
                      {review.customerName}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}