import { cn } from "@/utils/cn"

export default function Loading({ className, rows = 3 }) {
  return (
    <div className={cn("animate-pulse space-y-4", className)}>
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-surface rounded-lg" />
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-surface rounded w-3/4" />
            <div className="h-3 bg-surface rounded w-1/2" />
          </div>
        </div>
      ))}
    </div>
  )
}

export function ProductCardSkeleton() {
  return (
    <div className="animate-pulse bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
      <div className="w-full h-48 bg-surface" />
      <div className="p-4 space-y-3">
        <div className="h-4 bg-surface rounded w-3/4" />
        <div className="h-3 bg-surface rounded w-1/2" />
        <div className="flex justify-between items-center">
          <div className="h-4 bg-surface rounded w-1/4" />
          <div className="h-8 bg-surface rounded w-20" />
        </div>
      </div>
    </div>
  )
}

export function ProductGridSkeleton({ count = 8 }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  )
}