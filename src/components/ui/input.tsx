import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-white/5 bg-ui-bg-tertiary px-3 py-2 text-sm text-ui-text-main ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-ui-text-dim/40 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ui-primary disabled:cursor-not-allowed disabled:opacity-50 transition-all",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
