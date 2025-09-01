import { Link } from "react-router-dom"
import Button from "@/components/atoms/Button"
import { Card, CardContent } from "@/components/atoms/Card"
import CartItem from "@/components/molecules/CartItem"
import Empty from "@/components/ui/Empty"
import ApperIcon from "@/components/ApperIcon"
import { useCart } from "@/hooks/useCart"

export default function Cart() {
  const { items, getTotalPrice, getTotalItems, clearCart } = useCart()

  const deliveryFee = items.length > 0 ? (getTotalPrice() > 500 ? 0 : 50) : 0
  const finalTotal = getTotalPrice() + deliveryFee

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="font-display text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Shopping Cart
          </h1>
          <p className="text-lg text-gray-600">
            {getTotalItems()} {getTotalItems() === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>

        {items.length === 0 ? (
          <Empty
            title="Your cart is empty"
            description="Looks like you haven't added any organic products to your cart yet. Start shopping and fill your cart with healthy goodness!"
            actionText="Start Shopping"
            actionPath="/products"
            icon="ShoppingCart"
          />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-medium text-gray-900">
                      Cart Items ({getTotalItems()})
                    </h2>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={clearCart}
                      className="text-error hover:bg-error/10"
                    >
                      <ApperIcon name="Trash2" size={16} className="mr-2" />
                      Clear Cart
                    </Button>
                  </div>

                  <div className="space-y-4">
                    {items.map((item) => (
                      <CartItem key={item.Id} item={item} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-8">
                <CardContent>
                  <h2 className="text-xl font-medium text-gray-900 mb-6">
                    Order Summary
                  </h2>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal</span>
                      <span>₹{getTotalPrice().toFixed(2)}</span>
                    </div>
                    
                    <div className="flex justify-between text-gray-600">
                      <span>Delivery Fee</span>
                      <span>
                        {deliveryFee === 0 ? (
                          <span className="text-success font-medium">FREE</span>
                        ) : (
                          `₹${deliveryFee.toFixed(2)}`
                        )}
                      </span>
                    </div>

                    {getTotalPrice() < 500 && getTotalPrice() > 0 && (
                      <div className="text-sm text-gray-600 bg-surface p-3 rounded-lg">
                        <ApperIcon name="Info" size={16} className="inline mr-2" />
                        Add ₹{(500 - getTotalPrice()).toFixed(2)} more for free delivery
                      </div>
                    )}
                    
                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex justify-between text-lg font-semibold text-gray-900">
                        <span>Total</span>
                        <span>₹{finalTotal.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Link to="/checkout" className="block">
                      <Button variant="primary" className="w-full" size="lg">
                        <ApperIcon name="CreditCard" size={20} className="mr-2" />
                        Proceed to Checkout
                      </Button>
                    </Link>
                    
                    <Link to="/products" className="block">
                      <Button variant="outline" className="w-full">
                        <ApperIcon name="ArrowLeft" size={16} className="mr-2" />
                        Continue Shopping
                      </Button>
                    </Link>
                  </div>

                  {/* Trust Indicators */}
                  <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <ApperIcon name="Shield" size={16} className="text-success mr-2" />
                      Secure checkout protected
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <ApperIcon name="RotateCcw" size={16} className="text-success mr-2" />
                      Easy returns within 7 days
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <ApperIcon name="Truck" size={16} className="text-success mr-2" />
                      Free delivery on orders over ₹500
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}