import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Button from "@/components/atoms/Button"
import Input from "@/components/atoms/Input"
import { Card, CardContent } from "@/components/atoms/Card"
import ApperIcon from "@/components/ApperIcon"
import { useCart } from "@/hooks/useCart"
import { toast } from "react-toastify"

export default function Checkout() {
  const navigate = useNavigate()
  const { items, getTotalPrice, clearCart } = useCart()
  const [loading, setLoading] = useState(false)
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    paymentMethod: "cod"
  })

  const deliveryFee = getTotalPrice() > 500 ? 0 : 50
  const finalTotal = getTotalPrice() + deliveryFee

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Basic validation
    const requiredFields = ["firstName", "lastName", "email", "phone", "address", "city", "state", "pincode"]
    for (const field of requiredFields) {
      if (!formData[field].trim()) {
        toast.error(`Please fill in ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`)
        return
      }
    }

    setLoading(true)
    
    try {
      // Simulate order processing
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      toast.success("Order placed successfully! You will receive a confirmation email shortly.")
      clearCart()
      navigate("/")
    } catch (error) {
      toast.error("Failed to place order. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  if (items.length === 0) {
    navigate("/cart")
    return null
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="font-display text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Checkout
          </h1>
          <p className="text-lg text-gray-600">
            Complete your order and get organic goodness delivered to your doorstep
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2 space-y-8">
              {/* Personal Information */}
              <Card>
                <CardContent>
                  <h2 className="text-xl font-medium text-gray-900 mb-6">
                    Personal Information
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <Input
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="Enter first name"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <Input
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Enter last name"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter email address"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter phone number"
                        required
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Delivery Address */}
              <Card>
                <CardContent>
                  <h2 className="text-xl font-medium text-gray-900 mb-6">
                    Delivery Address
                  </h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Street Address *
                      </label>
                      <Input
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="Enter full address"
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          City *
                        </label>
                        <Input
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          placeholder="Enter city"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          State *
                        </label>
                        <Input
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          placeholder="Enter state"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          PIN Code *
                        </label>
                        <Input
                          name="pincode"
                          value={formData.pincode}
                          onChange={handleInputChange}
                          placeholder="Enter PIN code"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card>
                <CardContent>
                  <h2 className="text-xl font-medium text-gray-900 mb-6">
                    Payment Method
                  </h2>
                  
                  <div className="space-y-4">
                    <label className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-surface">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cod"
                        checked={formData.paymentMethod === "cod"}
                        onChange={handleInputChange}
                        className="mr-3"
                      />
                      <ApperIcon name="Banknote" size={20} className="mr-3 text-success" />
                      <div>
                        <div className="font-medium">Cash on Delivery</div>
                        <div className="text-sm text-gray-600">Pay when you receive your order</div>
                      </div>
                    </label>
                    
                    <label className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-surface opacity-50">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="online"
                        disabled
                        className="mr-3"
                      />
                      <ApperIcon name="CreditCard" size={20} className="mr-3 text-gray-400" />
                      <div>
                        <div className="font-medium text-gray-400">Online Payment</div>
                        <div className="text-sm text-gray-400">Coming soon - UPI, Cards, Wallets</div>
                      </div>
                    </label>
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

                  {/* Order Items */}
                  <div className="space-y-4 mb-6">
                    {items.map((item) => (
                      <div key={item.Id} className="flex items-center space-x-3">
                        <img
                          src={item.images[0]}
                          alt={item.name}
                          className="w-12 h-12 object-cover rounded-lg"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-sm text-gray-900 truncate">
                            {item.name}
                          </div>
                          <div className="text-sm text-gray-600">
                            Qty: {item.quantity} × ₹{item.price}
                          </div>
                        </div>
                        <div className="font-medium text-sm">
                          ₹{(item.price * item.quantity).toFixed(2)}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Totals */}
                  <div className="space-y-3 mb-6 border-t border-gray-200 pt-4">
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
                    
                    <div className="border-t border-gray-200 pt-3">
                      <div className="flex justify-between text-lg font-semibold text-gray-900">
                        <span>Total</span>
                        <span>₹{finalTotal.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Place Order Button */}
                  <Button 
                    type="submit" 
                    variant="primary" 
                    className="w-full" 
                    size="lg"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <ApperIcon name="Loader" size={20} className="mr-2 animate-spin" />
                        Processing Order...
                      </>
                    ) : (
                      <>
                        <ApperIcon name="Check" size={20} className="mr-2" />
                        Place Order
                      </>
                    )}
                  </Button>

                  {/* Security Note */}
                  <div className="mt-4 text-xs text-gray-600 text-center">
                    <ApperIcon name="Shield" size={14} className="inline mr-1" />
                    Your order information is secure and protected
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}