import ApperIcon from "@/components/ApperIcon"

const features = [
  {
    icon: "Leaf",
    title: "100% Organic",
    description: "All our products are certified organic, free from harmful chemicals and pesticides."
  },
  {
    icon: "Truck",
    title: "Farm to Table",
    description: "Direct sourcing from sustainable farms ensures maximum freshness and quality."
  },
  {
    icon: "Shield",
    title: "Quality Assured",
    description: "Every product undergoes rigorous quality checks before reaching your doorstep."
  },
  {
    icon: "Heart",
    title: "Health Focused",
    description: "Nutrient-rich foods that support your family's health and well-being."
  },
  {
    icon: "Users",
    title: "Supporting Farmers",
    description: "We work directly with local farmers, ensuring fair prices and sustainable practices."
  },
  {
    icon: "Award",
    title: "Premium Quality",
    description: "Traditional methods combined with modern standards for exceptional products."
  }
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-accent/10 rounded-full px-4 py-2 mb-4">
            <ApperIcon name="Heart" size={16} className="text-accent mr-2" />
            <span className="text-accent font-medium">Why Choose Us</span>
          </div>
          
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            The Amrutam Difference
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're committed to bringing you the finest organic products while supporting 
            sustainable farming practices and healthy communities.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group text-center p-6 rounded-xl bg-surface/50 hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <ApperIcon name={feature.icon} size={32} className="text-white" />
              </div>
              
              <h3 className="font-medium text-xl text-gray-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">500+</div>
              <div className="text-green-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">50+</div>
              <div className="text-green-100">Partner Farms</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">100%</div>
              <div className="text-green-100">Organic Products</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">24/7</div>
              <div className="text-green-100">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}