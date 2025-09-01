import HeroSection from "@/components/organisms/HeroSection"
import FeaturedProducts from "@/components/organisms/FeaturedProducts"
import WhyChooseUs from "@/components/organisms/WhyChooseUs"

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedProducts />
      <WhyChooseUs />
    </div>
  )
}