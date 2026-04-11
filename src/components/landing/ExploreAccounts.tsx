"use client";

import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faStar, 
  faChevronRight,
  faChevronLeft,
  faCircleCheck
} from "@fortawesome/free-solid-svg-icons";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const games = [
  { id: "roblox", label: "Roblox" },
  { id: "mlbb", label: "Mobile Legends" },
  { id: "steam", label: "Steam" },
  { id: "ff", label: "Garena Free Fire" },
  { id: "sailor", label: "Sailor Piece" },
];

const mockProducts = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  title: i % 3 === 0 ? "Akun Mobile Legends Mythical Glory 100+ Skins" : "Akun Valorant Silver 3 - Reaver Vandal",
  price: `Rp ${(i + 1) * 50}.000`,
  rating: (4.5 + Math.random() * 0.5).toFixed(1),
  sold: Math.floor(Math.random() * 50) + 1,
  seller: i % 2 === 0 ? "tokovalorant_premium" : "gaming_store_official",
}));

// Create a tripled array for seamless infinite looping
const displayProducts = [...mockProducts, ...mockProducts, ...mockProducts];
const OFFSET = 10; // The index of the first item in the "middle" set

export function ExploreAccounts() {
  const [activeTab, setActiveTab] = React.useState("roblox");
  const [index, setIndex] = React.useState(OFFSET);
  const [isAnimating, setIsAnimating] = React.useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIndex((prev) => prev - 1);
  };

  // Seamless jump logic to keep the sequence infinite
  React.useEffect(() => {
    if (index >= OFFSET + mockProducts.length) {
       // Jump back to the middle set start without animation
       const timer = setTimeout(() => {
         // This is a bit tricky with framer-motion without a custom hook, 
         // but for this simple version, we'll just allow the index to climb 
         // and reset after the transition.
       }, 300);
       return () => clearTimeout(timer);
    }
  }, [index]);

  return (
    <section className="relative max-w-[1100px] mx-auto group/explore">
       <div className="bg-ui-bg-main/20 p-8 rounded-sm border border-white/5 shadow-inner">
          <div className="flex items-center justify-between px-1 mb-6">
            <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-3">
               Explore Akun Game
            </h2>
            <button className="text-[10px] font-bold uppercase tracking-widest text-ui-text-dim hover:text-white transition-colors flex items-center gap-2 group">
               See all accounts
               <FontAwesomeIcon icon={faChevronRight} className="h-2 w-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Categories */}
          <div className="flex gap-3 overflow-x-auto pb-6 scrollbar-hide">
             {games.map((game) => (
               <button
                key={game.id}
                onClick={() => setActiveTab(game.id)}
                className={cn(
                  "flex items-center gap-2.5 pl-1 pr-3 py-1 rounded-sm border transition-all whitespace-nowrap",
                  activeTab === game.id
                    ? "bg-white/10 border-ui-primary text-ui-primary shadow-[0_0_15px_rgba(var(--gpColor-Blue-rgb),0.1)]"
                    : "bg-white/5 border-white/10 text-ui-text-dim hover:bg-white/10 hover:text-white"
                )}
               >
                 <div className="w-8 h-8 rounded-sm bg-white/10 flex items-center justify-center overflow-hidden shrink-0">
                    <div className="w-5 h-5 bg-white/20 rotate-45" />
                 </div>
                 <span className="text-[11px] font-bold tracking-tight">
                   {game.label}
                 </span>
               </button>
             ))}
          </div>

          {/* Slider Container */}
          <div className="overflow-hidden">
             <motion.div 
               className="flex gap-4"
               animate={{ x: `calc(-${index * 25}% - ${index * 4}px)` }}
               transition={{ type: "spring", stiffness: 200, damping: 25 }}
               onAnimationStart={() => setIsAnimating(true)}
               onAnimationComplete={() => {
                  setIsAnimating(false);
                  // Seamless jump check
                  if (index >= OFFSET + mockProducts.length) {
                    setIndex(index - mockProducts.length);
                  } else if (index < OFFSET) {
                    setIndex(index + mockProducts.length);
                  }
               }}
             >
                {displayProducts.map((product, i) => (
                  <div 
                   key={`${product.id}-${i}`} 
                   style={{ width: 'calc(25% - 12px)' }}
                   className="flex-shrink-0 flex flex-col bg-[#0d1218] border border-white/5 rounded-sm overflow-hidden hover:border-white/10 hover:shadow-2xl transition-all cursor-pointer group"
                  >
                     <div className="relative aspect-[3/2] w-full bg-ui-bg-tertiary flex items-center justify-center border-b border-white/5 shrink-0">
                        <span className="uppercase italic tracking-tighter opacity-20 font-black text-xs">Thumbnail</span>
                     </div>
                     <div className="p-4 flex flex-col grow justify-between">
                        <div className="space-y-4">
                           <h4 className="text-[13px] font-bold text-white line-clamp-2 leading-relaxed min-h-[38px]">
                             {product.title}
                           </h4>
                           <div className="flex items-center justify-between text-[10px] font-bold">
                              <div className="flex items-center gap-2 max-w-[65%]">
                                <span className="text-ui-text-dim truncate hover:text-white transition-colors flex items-center gap-1">
                                    {product.seller}
                                    <FontAwesomeIcon icon={faCircleCheck} className="text-ui-primary text-[8px]" />
                                 </span>
                                 <span className="text-ui-text-dim px-1 font-normal opacity-30">•</span>
                                 <div className="flex items-center gap-1 text-ui-accent-yellow shrink-0">
                                    <FontAwesomeIcon icon={faStar} className="h-2.5" />
                                    <span className="text-ui-text-main">{product.rating}</span>
                                 </div>
                              </div>
                              <span className="text-ui-text-dim italic opacity-60 shrink-0 text-[9px]">{product.sold} terjual</span>
                           </div>
                        </div>
                        <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between">
                           <span className="text-sm font-black text-ui-accent-green tracking-tight font-mono">{product.price}</span>
                           <span className="text-[9px] font-bold text-ui-text-dim/30 uppercase tracking-widest italic">In Stock</span>
                        </div>
                     </div>
                  </div>
                ))}
             </motion.div>
          </div>
       </div>

       {/* Navigation Arrows */}
       <button 
         onClick={prevSlide}
         className="absolute -left-12 lg:-left-16 top-1/2 -translate-y-1/2 w-10 h-16 rounded-sm bg-white/5 hover:bg-white/10 text-white/40 hover:text-white flex items-center justify-center transition-all z-20"
       >
          <FontAwesomeIcon icon={faChevronLeft} className="h-5 w-5" />
       </button>

       <button 
         onClick={nextSlide}
         className="absolute -right-12 lg:-right-16 top-1/2 -translate-y-1/2 w-10 h-16 rounded-sm bg-white/5 hover:bg-white/10 text-white/40 hover:text-white flex items-center justify-center transition-all z-20"
       >
          <FontAwesomeIcon icon={faChevronRight} className="h-5 w-5" />
       </button>
    </section>
  );
}
