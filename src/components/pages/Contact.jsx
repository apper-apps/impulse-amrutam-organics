import Button from "@/components/atoms/Button"
import Input from "@/components/atoms/Input"
import { Card, CardContent } from "@/components/atoms/Card"
import ApperIcon from "@/components/ApperIcon"
import { useState } from "react"
import { toast } from "react-toastify"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  })
  
  const [loading, setLoading] = useState(false)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500))
      toast.success("Message sent successfully! We'll get back to you soon.")
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      })
    } catch (error) {
      toast.error("Failed to send message. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const contactInfo = [
    {
      icon: "Phone",
      title: "Call Us",
      info: "+91 9876543210",
      subInfo: "Mon-Sat, 9AM-6PM"
    },
    {
      icon: "Mail",
      title: "Email Us",
      info: "hello@amrutamorganics.com",
      subInfo: "We reply within 24 hours"
    },
    {
      icon: "MapPin",
      title: "Visit Us",
      info: "123 Organic Lane, Green Valley",
      subInfo: "Mumbai, Maharashtra 400001"
    },
    {
      icon: "Clock",
      title: "Working Hours",
      info: "Mon-Sat: 9AM-6PM",
      subInfo: "Sunday: 10AM-4PM"
    }
  ]

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about our organic products? Need help with your order? 
            We're here to help and would love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-8">
                <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
                  Send us a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your name"
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
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What's this about?"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary resize-none"
                      placeholder="Tell us more about your inquiry..."
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="primary" 
                    size="lg" 
                    className="w-full md:w-auto"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <ApperIcon name="Loader" size={20} className="mr-2 animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <ApperIcon name="Send" size={20} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-medium text-lg text-gray-900 mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <ApperIcon name={item.icon} size={20} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-gray-700 text-sm">{item.info}</p>
                        <p className="text-gray-500 text-xs">{item.subInfo}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* FAQ Section */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-medium text-lg text-gray-900 mb-4">
                  Frequently Asked Questions
                </h3>
                
                <div className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">How do I track my order?</h4>
                    <p className="text-gray-600">You'll receive a tracking link via email once your order ships.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">What's your return policy?</h4>
                    <p className="text-gray-600">We offer easy returns within 7 days of delivery.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Do you deliver nationwide?</h4>
                    <p className="text-gray-600">Yes, we deliver across India with free shipping on orders over ₹500.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-medium text-lg text-gray-900 mb-4">
                  Follow Us
                </h3>
                
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm" className="p-2">
                    <ApperIcon name="Facebook" size={18} />
                  </Button>
                  <Button variant="outline" size="sm" className="p-2">
                    <ApperIcon name="Instagram" size={18} />
                  </Button>
                  <Button variant="outline" size="sm" className="p-2">
                    <ApperIcon name="Twitter" size={18} />
                  </Button>
                  <Button variant="outline" size="sm" className="p-2">
                    <ApperIcon name="Youtube" size={18} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card>
            <CardContent className="p-0">
              <div className="bg-surface h-64 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <ApperIcon name="MapPin" size={48} className="mx-auto mb-4 text-primary" />
                  <p className="font-medium">Interactive Map</p>
                  <p className="text-sm">Visit us at our organic store location</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}