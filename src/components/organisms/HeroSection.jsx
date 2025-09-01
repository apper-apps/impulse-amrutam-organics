import { Link } from "react-router-dom"
import Button from "@/components/atoms/Button"
import ApperIcon from "@/components/ApperIcon"

export default function HeroSection() {
  return (
<section 
      className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&h=1080&fit=crop&q=80')"
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Promotional Content */}
      <div className="relative text-center text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
            🔥 Flat 15% OFF Sitewide
          </h1>
          <div className="mt-6">
            <div className="inline-block bg-accent px-6 py-3 rounded-lg">
              <span className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
                Use Code: PAYDAY15
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}