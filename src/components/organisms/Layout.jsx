import Header from "@/components/organisms/Header"
import Footer from "@/components/organisms/Footer"

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}