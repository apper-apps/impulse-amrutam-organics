import { Card, CardContent } from "@/components/atoms/Card"
import Badge from "@/components/atoms/Badge"
import ApperIcon from "@/components/ApperIcon"

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "The Benefits of Organic Farming",
      excerpt: "Discover why organic farming is better for your health and the environment. Learn about sustainable practices that make a difference.",
      image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=400&h=250&fit=crop",
      category: "Farming",
      date: "January 15, 2024",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Traditional Rice Varieties of India",
      excerpt: "Explore the rich heritage of Indian rice varieties and their unique nutritional benefits. From basmati to black rice.",
      image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=400&h=250&fit=crop",
      category: "Nutrition",
      date: "January 12, 2024",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "How to Store Organic Pulses",
      excerpt: "Learn the best practices for storing your organic pulses to maintain freshness and prevent pest infestation.",
      image: "https://images.unsplash.com/photo-1610022163017-7c8e5ab7e35b?w=400&h=250&fit=crop",
      category: "Tips",
      date: "January 10, 2024",
      readTime: "4 min read"
    },
    {
      id: 4,
      title: "The Story Behind A2 Ghee",
      excerpt: "Understanding the difference between regular ghee and A2 ghee, and why it matters for your health.",
      image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=400&h=250&fit=crop",
      category: "Health",
      date: "January 8, 2024",
      readTime: "6 min read"
    },
    {
      id: 5,
      title: "Easy Organic Recipes for Busy Families",
      excerpt: "Quick and healthy recipes using organic ingredients that the whole family will love. Perfect for weeknight dinners.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=250&fit=crop",
      category: "Recipes",
      date: "January 5, 2024",
      readTime: "8 min read"
    },
    {
      id: 6,
      title: "Turmeric: The Golden Spice of Health",
      excerpt: "Dive deep into the health benefits of turmeric and creative ways to incorporate this superfood into your daily diet.",
      image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400&h=250&fit=crop",
      category: "Health",
      date: "January 3, 2024",
      readTime: "5 min read"
    }
  ]

  const categories = ["All", "Farming", "Nutrition", "Tips", "Health", "Recipes"]

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Blog
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover insights about organic living, healthy recipes, and sustainable farming practices. 
            Your guide to a healthier lifestyle.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={category === "All" ? "primary" : "default"}
              className="cursor-pointer hover:bg-primary hover:text-white transition-colors px-4 py-2"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <Badge variant="accent" className="absolute top-4 left-4">
                  Featured
                </Badge>
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-4">
                  <Badge variant="primary">{blogPosts[0].category}</Badge>
                  <span className="text-sm text-gray-600">{blogPosts[0].date}</span>
                  <span className="text-sm text-gray-600 flex items-center">
                    <ApperIcon name="Clock" size={14} className="mr-1" />
                    {blogPosts[0].readTime}
                  </span>
                </div>
                
                <h2 className="font-display text-2xl lg:text-3xl font-bold text-gray-900 mb-4 hover:text-primary transition-colors cursor-pointer">
                  {blogPosts[0].title}
                </h2>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {blogPosts[0].excerpt}
                </p>
                
                <div className="flex items-center text-primary font-medium cursor-pointer hover:text-primary/80 transition-colors">
                  Read More
                  <ApperIcon name="ArrowRight" size={16} className="ml-2" />
                </div>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge 
                  variant="default" 
                  className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm"
                >
                  {post.category}
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-3 text-sm text-gray-600">
                  <span>{post.date}</span>
                  <span className="flex items-center">
                    <ApperIcon name="Clock" size={14} className="mr-1" />
                    {post.readTime}
                  </span>
                </div>
                
                <h3 className="font-medium text-lg text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center text-primary font-medium group-hover:text-primary/80 transition-colors">
                  Read More
                  <ApperIcon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <section className="mt-20 bg-gradient-to-r from-primary to-secondary rounded-2xl text-white p-8 lg:p-12 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display text-2xl lg:text-3xl font-bold mb-4">
              Stay Updated with Our Latest Articles
            </h2>
            <p className="text-green-100 mb-8">
              Get the latest insights on organic living, healthy recipes, and farming tips 
              delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}