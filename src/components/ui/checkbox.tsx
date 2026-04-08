"use client";

import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Checkbox component styled for Steam/GP aesthetic.
 */
export const Checkbox = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
  return (
    <label className={cn("relative flex items-center justify-center w-6 h-6 cursor-pointer group", className)}>
      <input 
        type="checkbox" 
        className="sr-only peer" 
        ref={ref}
        {...props} 
      />
      <div className="w-full h-full bg-ui-bg-tertiary border border-white/10 rounded transition-all duration-200 peer-checked:bg-white/10 peer-checked:border-ui-primary flex items-center justify-center">
        <Check className="w-4 h-4 text-ui-primary opacity-0 scale-75 transition-all duration-200 peer-checked:opacity-100 peer-checked:scale-100" />
      </div>
    </label>
  );
});

Checkbox.displayName = "Checkbox";
