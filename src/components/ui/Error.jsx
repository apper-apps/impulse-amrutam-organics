import Button from "@/components/atoms/Button"
import ApperIcon from "@/components/ApperIcon"

export default function Error({ message = "Something went wrong", onRetry, className }) {
  return (
    <div className={`flex flex-col items-center justify-center py-12 px-4 text-center ${className}`}>
      <div className="w-16 h-16 bg-error/10 rounded-full flex items-center justify-center mb-4">
        <ApperIcon name="AlertTriangle" size={32} className="text-error" />
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-2">Oops! Something went wrong</h3>
      <p className="text-gray-600 mb-6 max-w-md">{message}</p>
      {onRetry && (
        <Button onClick={onRetry} variant="outline">
          <ApperIcon name="RotateCcw" size={16} className="mr-2" />
          Try Again
        </Button>
      )}
    </div>
  )
}