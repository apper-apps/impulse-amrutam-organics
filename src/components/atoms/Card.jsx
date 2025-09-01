import { forwardRef } from "react"
import { cn } from "@/utils/cn"

const Card = forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg bg-white shadow-sm border border-gray-100 transition-shadow hover:shadow-md",
      className
    )}
    {...props}
  />
))

Card.displayName = "Card"

const CardContent = forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("p-6", className)}
    {...props}
  />
))

CardContent.displayName = "CardContent"

export { Card, CardContent }