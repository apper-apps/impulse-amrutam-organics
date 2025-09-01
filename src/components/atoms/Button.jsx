import { forwardRef } from "react"
import { cn } from "@/utils/cn"

const Button = forwardRef(({ 
  className, 
  variant = "primary", 
  size = "md",
  children,
  ...props 
}, ref) => {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90 focus:ring-primary/50 shadow-sm hover:shadow-md",
    secondary: "bg-secondary text-white hover:bg-secondary/90 focus:ring-secondary/50 shadow-sm hover:shadow-md",
    accent: "bg-accent text-white hover:bg-accent/90 focus:ring-accent/50 shadow-sm hover:shadow-md",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary/50",
    ghost: "text-secondary hover:bg-surface hover:text-primary focus:ring-primary/50"
  }
  
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base"
  }

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  )
})

Button.displayName = "Button"

export default Button