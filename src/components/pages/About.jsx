import Button from "@/components/atoms/Button"
import { Card, CardContent } from "@/components/atoms/Card"
import ApperIcon from "@/components/ApperIcon"

export default function About() {
  const values = [
    {
      icon: "Leaf",
      title: "100% Organic",
      description: "All our products are certified organic, ensuring no harmful chemicals or pesticides touch your food."
    },
    {
      icon: "Users",
      title: "Supporting Farmers",
      description: "We work directly with local farmers, providing fair prices and supporting traditional farming methods."
    },
    {
      icon: "Heart",
      title: "Health First",
      description: "Every product is carefully selected to provide maximum nutritional value for you and your family."
    },
    {
      icon: "Recycle",
      title: "Sustainable",
      description: "Our eco-friendly practices ensure minimal environmental impact while preserving traditional methods."
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl lg:text-6xl font-bold mb-6">
            Our Story
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            From traditional farms to your table, Amrutam Organics brings you the finest 
            organic products while supporting sustainable agriculture and healthy living.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                At Amrutam Organics, we believe that healthy food should be accessible to everyone. 
                Our mission is to bridge the gap between traditional organic farming and modern 
                consumers who value quality, health, and sustainability.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We source directly from certified organic farms across India, ensuring that every 
                product meets our strict quality standards while supporting the livelihoods of 
                local farmers who have been practicing sustainable agriculture for generations.
              </p>
              <Button variant="primary" size="lg">
                <ApperIcon name="ArrowRight" size={20} className="mr-2" />
                Explore Our Products
              </Button>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop"
                alt="Organic farming"
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-xl p-6 max-w-xs">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <ApperIcon name="Award" size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Certified Organic</div>
                    <div className="text-sm text-gray-600">Since 2020</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do, from sourcing to delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <ApperIcon name={value.icon} size={32} className="text-white" />
                  </div>
                  <h3 className="font-medium text-xl text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Passionate individuals dedicated to bringing you the best organic products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                role: "Founder & CEO",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
              },
              {
                name: "Priya Sharma",
                role: "Head of Quality",
                image: "https://images.unsplash.com/photo-1494790108755-2616c95f4e31?w=300&h=300&fit=crop&crop=face"
              },
              {
                name: "Amit Singh",
                role: "Operations Manager",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
              }
            ].map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-medium text-lg text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {member.role}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6">
            Join Our Organic Journey
          </h2>
          <p className="text-xl text-green-100 max-w-2xl mx-auto mb-8">
            Experience the difference that genuine organic products can make in your life. 
            Start your healthy journey with us today.
          </p>
          <Button variant="accent" size="lg" className="bg-accent hover:bg-accent/90">
            <ApperIcon name="ShoppingBag" size={20} className="mr-2" />
            Start Shopping
          </Button>
        </div>
      </section>
    </div>
  )
}