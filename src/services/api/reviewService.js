import reviewsData from "@/services/mockData/reviews.json"

export const reviewService = {
  async getByProductId(productId) {
    await new Promise(resolve => setTimeout(resolve, 200))
    return reviewsData.filter(r => r.productId === parseInt(productId))
  },

  async create(review) {
    await new Promise(resolve => setTimeout(resolve, 300))
    const newReview = {
      ...review,
      Id: Math.max(...reviewsData.map(r => r.Id)) + 1,
      date: new Date().toISOString().split("T")[0]
    }
    reviewsData.push(newReview)
    return { ...newReview }
  }
}