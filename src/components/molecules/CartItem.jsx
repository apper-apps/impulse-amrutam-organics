import Button from "@/components/atoms/Button"
import ApperIcon from "@/components/ApperIcon"
import { useCart } from "@/hooks/useCart"

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart()

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(item.Id)
    } else {
      updateQuantity(item.Id, newQuantity)
    }
  }

  return (
    <div className="flex items-center space-x-4 py-4 border-b border-gray-100 last:border-b-0">
      <img
        src={item.images[0]}
        alt={item.name}
        className="w-16 h-16 object-cover rounded-lg"
      />
      
      <div className="flex-1 min-w-0">
        <h3 className="font-medium text-gray-900 truncate">{item.name}</h3>
        <p className="text-sm text-gray-600">{item.weight}</p>
        <p className="text-lg font-semibold text-primary mt-1">
          ₹{item.price}
        </p>
      </div>

      <div className="flex items-center space-x-2">
        <Button
          size="sm"
          variant="outline"
          onClick={() => handleQuantityChange(item.quantity - 1)}
          className="w-8 h-8 p-0"
        >
          <ApperIcon name="Minus" size={14} />
        </Button>
        
        <span className="w-8 text-center font-medium">{item.quantity}</span>
        
        <Button
          size="sm"
          variant="outline"
          onClick={() => handleQuantityChange(item.quantity + 1)}
          className="w-8 h-8 p-0"
        >
          <ApperIcon name="Plus" size={14} />
        </Button>
      </div>

      <Button
        size="sm"
        variant="ghost"
        onClick={() => removeFromCart(item.Id)}
        className="text-error hover:bg-error/10"
      >
        <ApperIcon name="Trash2" size={16} />
      </Button>
    </div>
  )
}