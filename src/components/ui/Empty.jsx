import Button from "@/components/atoms/Button"
import ApperIcon from "@/components/ApperIcon"
import { useNavigate } from "react-router-dom"

export default function Empty({ 
  title = "No items found",
  description = "There are no items to display at the moment.",
  actionText = "Browse Products",
  actionPath = "/products",
  icon = "Package",
  className 
}) {
  const navigate = useNavigate()

  return (
    <div className={`flex flex-col items-center justify-center py-16 px-4 text-center ${className}`}>
      <div className="w-20 h-20 bg-surface rounded-full flex items-center justify-center mb-6">
        <ApperIcon name={icon} size={40} className="text-secondary" />
      </div>
      <h3 className="text-xl font-medium text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-8 max-w-md">{description}</p>
      <Button 
        onClick={() => navigate(actionPath)}
        variant="primary"
        size="lg"
      >
        <ApperIcon name="ArrowRight" size={16} className="mr-2" />
        {actionText}
      </Button>
    </div>
  )
}