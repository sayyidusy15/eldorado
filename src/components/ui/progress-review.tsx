"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

interface ReviewProgressProps {
  positive: number;
  negative: number;
  className?: string;
}

/**
 * Progress bar untuk review (Blue=Positive, Red=Negative) menggunakan FontAwesome.
 */
export function ReviewProgress({ positive, negative, className }: ReviewProgressProps) {
  const total = positive + negative;
  const positiveRate = total > 0 ? (positive / total) * 100 : 0;
  const negativeRate = total > 0 ? (negative / total) * 100 : 0;

  return (
    <div className={cn("w-full space-y-2", className)}>
      <div className="flex justify-between items-center text-[10px] font-bold tracking-wider uppercase">
        <div className="flex items-center gap-1.5 text-ui-primary">
          <span>{positive}%</span>
          <FontAwesomeIcon icon={faThumbsUp} className="w-3 h-3" />
        </div>
        <div className="flex items-center gap-1.5 text-ui-accent-red">
          <span>{negative}%</span>
          <FontAwesomeIcon icon={faThumbsDown} className="w-3 h-3" />
        </div>
      </div>
      
      <div className="flex h-1.5 w-full rounded-full bg-ui-bg-highlight overflow-hidden gap-1">
        <div 
          className="bg-ui-primary h-full transition-all duration-1000" 
          style={{ width: `${positive}%` }} 
        />
        <div 
          className="bg-ui-accent-red h-full transition-all duration-1000" 
          style={{ width: `${negative}%` }} 
        />
      </div>
    </div>
  );
}
