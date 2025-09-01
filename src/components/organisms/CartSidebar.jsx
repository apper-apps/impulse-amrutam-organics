import { Link } from "react-router-dom"
import Button from "@/components/atoms/Button"
import ApperIcon from "@/components/ApperIcon"
import CartItem from "@/components/molecules/CartItem"
import Empty from "@/components/ui/Empty"
import { useCart } from "@/hooks/useCart"

export default function CartSidebar({ isOpen, onClose }) {
  const { items, getTotalPrice, getTotalItems } = useCart()

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full sm:w-96 bg-white z-50 shadow-xl transform transition-transform duration-300">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <h2 className="text-lg font-medium text-gray-900">
              Shopping Cart ({getTotalItems()})
            </h2>
            <Button variant="ghost" onClick={onClose}>
              <ApperIcon name="X" size={20} />
            </Button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto">
            {items.length === 0 ? (
              <div className="p-4">
                <Empty
                  title="Your cart is empty"
                  description="Add some organic products to get started"
                  actionText="Browse Products"
                  actionPath="/products"
                  icon="ShoppingCart"
                />
              </div>
            ) : (
              <div className="p-4 space-y-4">
                {items.map((item) => (
                  <CartItem key={item.Id} item={item} />
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-gray-100 p-4 space-y-4">
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Total:</span>
                <span className="text-primary">₹{getTotalPrice().toFixed(2)}</span>
              </div>
              
              <div className="space-y-2">
                <Link to="/cart" className="block" onClick={onClose}>
                  <Button variant="outline" className="w-full">
                    View Cart
                  </Button>
                </Link>
                <Link to="/checkout" className="block" onClick={onClose}>
                  <Button variant="primary" className="w-full">
                    <ApperIcon name="CreditCard" size={16} className="mr-2" />
                    Checkout
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}