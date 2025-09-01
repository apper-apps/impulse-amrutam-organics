import productsData from "@/services/mockData/products.json"

export const productService = {
  async getAll() {
    await new Promise(resolve => setTimeout(resolve, 300))
    return [...productsData]
  },

  async getById(id) {
    await new Promise(resolve => setTimeout(resolve, 200))
    const product = productsData.find(p => p.Id === parseInt(id))
    if (!product) {
      throw new Error("Product not found")
    }
    return { ...product }
  },

  async getByCategory(category) {
    await new Promise(resolve => setTimeout(resolve, 250))
    return productsData.filter(p => p.category.toLowerCase() === category.toLowerCase())
  },

  async getFeatured() {
    await new Promise(resolve => setTimeout(resolve, 200))
    return productsData.filter(p => p.featured)
  },

  async searchProducts(query) {
    await new Promise(resolve => setTimeout(resolve, 200))
    const searchTerm = query.toLowerCase()
    return productsData.filter(p => 
      p.name.toLowerCase().includes(searchTerm) ||
      p.category.toLowerCase().includes(searchTerm) ||
      p.description.toLowerCase().includes(searchTerm)
    )
  }
}