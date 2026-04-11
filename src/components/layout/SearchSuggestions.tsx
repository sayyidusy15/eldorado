"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SuggestionItem {
  name: string;
  category: string;
  icon: string;
  color: string;
}

const popularCategories: SuggestionItem[] = [
  { name: "Steal a Brainrot Items", category: "Items", icon: "SB", color: "bg-pink-500" },
  { name: "GTA 5 Accounts", category: "Accounts", icon: "GT", color: "bg-green-700" },
  { name: "Fortnite Accounts", category: "Accounts", icon: "F", color: "bg-orange-600" },
  { name: "EA Sports FC Coins", category: "Currency", icon: "FC", color: "bg-[#107C10]" },
  { name: "Valorant Accounts", category: "Accounts", icon: "V", color: "bg-red-600" },
  { name: "Old School RuneScape Gold", category: "Currency", icon: "RS", color: "bg-amber-800" },
  { name: "Arc Raiders Items", category: "Items", icon: "AR", color: "bg-cyan-600" },
  { name: "DonutSMP Money", category: "Currency", icon: "DM", color: "bg-pink-400" },
];

export function SearchSuggestions({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px]"
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: -5 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.98, y: -5 }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        className="absolute top-0 left-0 right-0 h-[500px] bg-[#1E2329] shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-50 rounded-xl border border-white/5 overflow-hidden"
      >
        {/* Active Search Header Highlight (Optional based on image) */}
        <div className="h-1 bg-ui-accent-yellow/50" />

        <div className="p-8 space-y-8 h-full overflow-y-auto custom-scrollbar">
           <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-ui-text-dim/60">
             Popular Categories
           </h3>

           <div className="grid grid-cols-1 gap-2">
             {popularCategories.map((item, idx) => (
               <Link 
                 key={idx} 
                 href="#"
                 className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-all group"
               >
                 <div className={cn(
                   "w-10 h-10 rounded-lg flex items-center justify-center text-[10px] font-black shadow-inner flex-shrink-0",
                   item.color
                 )}>
                    {item.icon}
                 </div>
                 <div className="flex flex-col">
                   <span className="text-sm font-bold text-white group-hover:text-ui-primary transition-colors">
                     {item.name}
                   </span>
                   <span className="text-[10px] text-ui-text-dim font-medium uppercase tracking-widest">
                     {item.category}
                   </span>
                 </div>
               </Link>
             ))}
           </div>
        </div>
      </motion.div>
    </>
  );
}
