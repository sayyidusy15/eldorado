"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faStar, 
  faChevronRight, 
  faChevronLeft 
} from "@fortawesome/free-solid-svg-icons";

interface VoucherCardProps {
  image: string;
  title: string;
  subtitle: string;
  price: string;
  sales: string;
  rating: string;
}

const VoucherCard = ({ image, title, subtitle, price, sales, rating }: VoucherCardProps) => {
  return (
    <div
      className="bg-[#0d1218] rounded-sm overflow-hidden flex flex-col w-full border border-white/5 cursor-pointer relative"
    >
      {/* Top Image Area */}
      <div className="relative aspect-4/5 w-full overflow-hidden bg-ui-bg-tertiary">
         {/* Physical Euro-Hole Decoration (Centered & Proportional) */}
         <div className="absolute top-[6px] left-1/2 -translate-x-1/2 w-[72px] h-[32px] z-20 pointer-events-none drop-shadow-md">
            <svg viewBox="0 0 72 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Solid Gray Hole Fill */}
              <path 
                d="M 10 28 A 6 6 0 0 1 4 22 A 6 6 0 0 1 10 16 L 26 16 A 10 10 0 0 1 46 16 L 62 16 A 6 6 0 0 1 68 22 A 6 6 0 0 1 62 28 Z" 
                fill="#4B5563" 
              />
              {/* Subtle Highlight Cutout Edge */}
              <path 
                d="M 10 28 A 6 6 0 0 1 4 22 A 6 6 0 0 1 10 16 L 26 16 A 10 10 0 0 1 46 16 L 62 16 A 6 6 0 0 1 68 22 A 6 6 0 0 1 62 28 Z" 
                stroke="white" 
                strokeOpacity="0.15" 
                strokeWidth="1" 
              />
            </svg>
         </div>
         
         <Image 
           src={image} 
           alt={title} 
           fill 
           className="object-cover"
         />
      </div>

      {/* Content Area */}
      <div className="p-3 flex flex-col gap-1 flex-1">
        <h3 className="text-[11px] font-bold text-white line-clamp-2 leading-[1.3] h-[28px] uppercase">
          {title}
        </h3>
        <p className="text-[9px] text-ui-text-dim font-medium truncate uppercase tracking-wider">
          {subtitle}
        </p>
        
        <div className="mt-1">
          <span className="text-sm font-black text-ui-accent-green">
            {price}
          </span>
        </div>

        {/* Footer Meta */}
        <div className="mt-auto pt-2 flex items-center justify-between border-t border-white/5 italic">
          <span className="text-[9px] text-ui-text-dim">
            {sales} terjual
          </span>
          <div className="flex items-center gap-0.5">
            <FontAwesomeIcon icon={faStar} className="text-[#FBC02D] text-[8px]" />
            <span className="text-[9px] font-bold text-[#F3F3F3] NOT-italic">
              {rating}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const robloxItems = [
  {
    title: "Roblox 100 Robux",
    subtitle: "Robux 5 Hari",
    price: "Rp 9.722",
    sales: "14407",
    rating: "4.53",
    image: "/assets/voucher/valo.jpg"
  },
  {
    title: "Roblox 250 Robux",
    subtitle: "Robux Gift Card",
    price: "Rp 50.380",
    sales: "18224",
    rating: "4.8",
    image: "/assets/voucher/valo.jpg"
  },
  {
    title: "Roblox 500 Robux",
    subtitle: "Robux Via Login",
    price: "Rp 69.219",
    sales: "22424",
    rating: "4.95",
    image: "/assets/voucher/valo.jpg"
  },
  {
    title: "Roblox 800 Robux",
    subtitle: "Robux Gift Card",
    price: "Rp 149.998",
    sales: "4133",
    rating: "4.9",
    image: "/assets/voucher/valo.jpg"
  },
  {
    title: "Blox Fruits Akun [Level MAX]",
    subtitle: "Akun",
    price: "Rp 11.800",
    sales: "120457",
    rating: "4.69",
    image: "/assets/voucher/valo.jpg"
  }
];

const OFFSET = robloxItems.length;
const displayItems = [...robloxItems, ...robloxItems, ...robloxItems];

export const FeaturedVoucher = () => {
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

  return (
    <section className="relative py-16 px-4 min-h-[500px] flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image 
          src="/roblox_background_section_1775907503842.png"
          alt="Roblox Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ui-bg-main/60 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-linear-to-t from-ui-bg-main via-transparent to-ui-bg-main/40" />
      </div>

      {/* Main Content Wrapper (Relates to Arrows) */}
      <div className="relative z-10 max-w-[1100px] w-full group/slider">
        {/* Navigation Arrows (Positioned relative to max-w container) */}
        <button 
          onClick={prevSlide}
          className="absolute -left-12 lg:-left-16 top-1/2 -translate-y-1/2 w-10 h-16 rounded-sm bg-white/5 hover:bg-white/10 backdrop-blur-xl border border-white/5 text-white/60 hover:text-white flex items-center justify-center transition-all z-20 pointer-events-auto"
        >
          <FontAwesomeIcon icon={faChevronLeft} className="h-5 w-5" />
        </button>

        <button 
          onClick={nextSlide}
          className="absolute -right-12 lg:-right-16 top-1/2 -translate-y-1/2 w-10 h-16 rounded-sm bg-white/5 hover:bg-white/10 backdrop-blur-xl border border-white/5 text-white/60 hover:text-white flex items-center justify-center transition-all z-20 pointer-events-auto"
        >
          <FontAwesomeIcon icon={faChevronRight} className="h-5 w-5" />
        </button>

        {/* Glass Container (With Overflow Hidden for Cards) */}
        <div className="relative backdrop-blur-3xl bg-white/5 border border-white/10 rounded-sm p-6 lg:p-10 shadow-2xl">
          {/* Decorative Light Glow */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-ui-primary/20 blur-[100px] rounded-full pointer-events-none" />
          
          {/* Header */}
          <div className="flex items-start justify-between mb-8 relative z-10">
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                 <h2 className="text-xl lg:text-3xl font-bold text-white tracking-tight">
                   Solusi Lengkap Kebutuhan Roblox!
                 </h2>
              </div>
              <p className="text-ui-text-dim text-sm lg:text-[15px] font-medium">
                Robux dan item, semua ada disini
              </p>
            </div>
            
            <button className="text-[10px] font-bold uppercase tracking-widest text-ui-text-dim hover:text-white transition-colors flex items-center gap-2 group">
              See all voucher
              <FontAwesomeIcon icon={faChevronRight} className="h-2 w-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Slider Container */}
          <div className="overflow-hidden relative z-10 w-full">
            <motion.div 
              className="flex gap-5"
              animate={{ x: `calc(-${index * 20}% - ${index * 4}px)` }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              onAnimationStart={() => setIsAnimating(true)}
              onAnimationComplete={() => {
                setIsAnimating(false);
                // Seamless jump logic
                if (index >= OFFSET + robloxItems.length) {
                  setIndex(index - robloxItems.length);
                } else if (index < OFFSET) {
                  setIndex(index + robloxItems.length);
                }
              }}
            >
              {displayItems.map((item, idx) => (
                <div 
                  key={`${item.title}-${idx}`} 
                  style={{ width: 'calc(20% - 16px)' }}
                  className="shrink-0"
                >
                  <VoucherCard {...item} />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
