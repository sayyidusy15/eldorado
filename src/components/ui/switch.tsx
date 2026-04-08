"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Switch/Toggle component styled for Steam/GP aesthetic.
 */
export const Switch = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
  return (
    <label className={cn("relative inline-flex items-center cursor-pointer group", className)}>
      <input 
        type="checkbox" 
        className="sr-only peer" 
        ref={ref}
        {...props} 
      />
      <div className="w-12 h-6 bg-ui-bg-tertiary rounded-full peer peer-checked:bg-ui-bg-secondary transition-all duration-200 border border-white/5">
        <div className="absolute top-1 left-1 w-4 h-4 bg-ui-text-dim rounded-full transition-all duration-200 peer-checked:translate-x-6 peer-checked:bg-ui-primary peer-checked:shadow-[0_0_10px_rgba(102,192,244,0.4)]" />
      </div>
    </label>
  );
});

Switch.displayName = "Switch";
