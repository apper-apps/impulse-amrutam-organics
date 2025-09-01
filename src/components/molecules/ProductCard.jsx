import { Link } from "react-router-dom"
import Button from "@/components/atoms/Button"
import Badge from "@/components/atoms/Badge"
import { Card, CardContent } from "@/components/atoms/Card"
import ApperIcon from "@/components/ApperIcon"
import { useCart } from "@/hooks/useCart"
import { toast } from "react-toastify"

export default function ProductCard({ product }) {
  const { addToCart } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product)
    toast.success(`${product.name} added to cart!`)
  }

  return (
    <Link to={`/product/${product.Id}`}>
      <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
        <div className="relative">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {product.organic && (
            <Badge 
              variant="success" 
              className="absolute top-3 left-3"
            >
              <ApperIcon name="Leaf" size={12} className="mr-1" />
              Organic
            </Badge>
          )}
          {product.featured && (
            <Badge 
              variant="accent" 
              className="absolute top-3 right-3"
            >
              Featured
            </Badge>
          )}
        </div>
        
        <CardContent className="p-4">
          <h3 className="font-medium text-gray-900 group-hover:text-primary transition-colors mb-1">
            {product.name}
          </h3>
          <p className="text-sm text-gray-600 mb-2">{product.weight}</p>
          
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <div className="flex items-center text-yellow-500">
                <ApperIcon name="Star" size={16} className="fill-current" />
                <span className="text-sm text-gray-600 ml-1">
                  {product.rating} ({product.reviews})
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold text-primary">
              ₹{product.price}
            </span>
            <Button 
              size="sm" 
              variant="primary"
              onClick={handleAddToCart}
              className="hover:scale-105 transition-transform"
            >
              <ApperIcon name="ShoppingCart" size={16} className="mr-1" />
              Add
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}