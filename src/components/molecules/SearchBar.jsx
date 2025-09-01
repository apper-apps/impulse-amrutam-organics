import { useState } from "react"
import Input from "@/components/atoms/Input"
import Button from "@/components/atoms/Button"
import ApperIcon from "@/components/ApperIcon"

export default function SearchBar({ onSearch, placeholder = "Search products..." }) {
  const [query, setQuery] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (query.trim()) {
      onSearch(query.trim())
    }
  }

  return (
    <form onSubmit={handleSubmit} className="relative flex items-center">
      <div className="relative flex-1">
        <ApperIcon 
          name="Search" 
          size={20} 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
        />
        <Input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10 pr-4"
        />
      </div>
      <Button 
        type="submit" 
        variant="primary" 
        className="ml-2"
        disabled={!query.trim()}
      >
        Search
      </Button>
    </form>
  )
}