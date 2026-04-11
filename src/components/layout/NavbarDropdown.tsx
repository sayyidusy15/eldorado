"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface GameItem {
  name: string;
  icon: string;
  color: string;
}

const popularGames: GameItem[] = [
  { name: "EA Sports FC Coins", icon: "FC", color: "bg-[#107C10]" },
  { name: "Old School RuneScape Gold", icon: "RS", color: "bg-[#795548]" },
  { name: "DonutSMP Money", icon: "DM", color: "bg-[#F06292]" },
  { name: "WoW Classic Era Gold", icon: "W", color: "bg-[#FFB300]" },
  { name: "Roblox Robux", icon: "R", color: "bg-[#000000]" },
  { name: "World of Warcraft Gold", icon: "WOW", color: "bg-[#FFB300]" },
  { name: "Growtopia Locks", icon: "GL", color: "bg-[#4CAF50]" },
  { name: "Pet Simulator 99 Gems", icon: "PS", color: "bg-[#2196F3]" },
  { name: "Blade Ball Tokens", icon: "BB", color: "bg-[#E91E63]" },
  { name: "Grow a Garden Tokens", icon: "GG", color: "bg-[#8BC34A]" },
  { name: "Path of Exile Currency", icon: "POE", color: "bg-[#D4AF37]" },
  { name: "RuneScape 3 Gold", icon: "R3", color: "bg-[#3F51B5]" },
];

const allGamesSample = [
  { name: "8 Ball Pool Coins", icon: "8B", color: "bg-blue-600" },
  { name: "Aion 2 Kinah", icon: "A2", color: "bg-purple-600" },
  { name: "Albion Online Silver", icon: "AO", color: "bg-orange-600" },
  { name: "Arc Raiders Coins", icon: "AR", color: "bg-cyan-600" },
  { name: "Black Desert Online Silver", icon: "BD", color: "bg-red-600" },
];

export function NavbarDropdown({ activeMenu, onClose }: { activeMenu: string | null, onClose: () => void }) {
  if (!activeMenu) return null;

  return (
    <>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 top-[108px] z-30 bg-black/40 backdrop-blur-sm"
      />
      
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="absolute left-8 mt-2 w-[950px] bg-ui-bg-tertiary/90 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-40 rounded-sm overflow-hidden"
      >
        <div className="flex divide-x divide-white/5">
          {/* Left Column: Popular Games */}
          <div className="flex-[1.5] p-10 space-y-8">
            <h3 className="text-xs font-bold text-ui-text-dim uppercase tracking-widest pl-2">
               Popular games
            </h3>
            
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
              {popularGames.map((game, idx) => (
                <Link 
                  key={idx} 
                  href="#"
                  className="flex items-center gap-4 p-2.5 rounded-sm hover:bg-white/10 transition-all group"
                >
                  <div className={cn(
                    "w-9 h-9 rounded-sm flex items-center justify-center text-[10px] font-black shadow-inner flex-shrink-0 transition-transform group-hover:scale-110",
                    game.color
                  )}>
                     {game.icon}
                  </div>
                  <span className="text-sm font-bold text-white group-hover:text-ui-primary transition-colors truncate">
                    {game.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Column: All Games Search */}
          <div className="flex-1 p-10 bg-black/20 space-y-8">
             <h3 className="text-xs font-bold text-ui-text-dim uppercase tracking-widest">
               All games
            </h3>

            <div className="relative group">
              <FontAwesomeIcon 
                icon={faSearch} 
                className="absolute left-3 top-1/2 -translate-y-1/2 text-ui-text-dim/40 h-3 w-3 group-focus-within:text-ui-primary transition-colors" 
              />
              <Input 
                placeholder="Search for game" 
                className="pl-9 h-10 bg-black/30 border-white/5 focus:border-ui-primary/50 text-xs rounded-sm"
              />
            </div>

            <div className="space-y-1 h-[280px] overflow-y-auto pr-2 custom-scrollbar">
               {allGamesSample.map((game, idx) => (
                  <Link 
                    key={idx} 
                    href="#"
                    className="flex items-center gap-3 p-2.5 rounded-sm hover:bg-white/10 transition-all group"
                  >
                    <div className={cn(
                      "w-8 h-8 rounded-sm flex items-center justify-center text-[9px] font-black flex-shrink-0",
                      game.color
                    )}>
                       {game.icon}
                    </div>
                    <span className="text-xs font-bold text-white group-hover:text-ui-primary transition-colors">
                      {game.name}
                    </span>
                  </Link>
               ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="bg-black/40 p-4 px-10 border-t border-white/5 flex justify-between items-center text-center">
           <Link href="#" className="text-[10px] uppercase font-black tracking-[0.2em] text-ui-primary hover:text-white transition-all flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-ui-primary animate-pulse"></span>
              View all 1,500+ products
           </Link>
           <span className="text-[9px] text-ui-text-dim uppercase font-bold tracking-widest">Escrow Protected</span>
        </div>
      </motion.div>
    </>
  );
}
