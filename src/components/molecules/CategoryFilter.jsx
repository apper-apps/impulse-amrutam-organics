import { useState, useEffect } from "react"
import Button from "@/components/atoms/Button"
import ApperIcon from "@/components/ApperIcon"

const categories = [
  { id: "all", name: "All Products", icon: "Grid3X3" },
  { id: "rice", name: "Rice", icon: "Wheat" },
  { id: "pulses", name: "Pulses", icon: "Bean" },
  { id: "dairy", name: "Dairy", icon: "Milk" },
  { id: "vegetables", name: "Vegetables", icon: "Carrot" },
  { id: "spices", name: "Spices", icon: "Soup" },
  { id: "eco-friendly", name: "Eco-Friendly", icon: "Leaf" }
]

export default function CategoryFilter({ selectedCategory, onCategoryChange }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
      <h3 className="font-medium text-gray-900 mb-4">Categories</h3>
      <div className="space-y-2">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "primary" : "ghost"}
            className="w-full justify-start"
            onClick={() => onCategoryChange(category.id)}
          >
            <ApperIcon name={category.icon} size={16} className="mr-2" />
            {category.name}
          </Button>
        ))}
      </div>
    </div>
  )
}