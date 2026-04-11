"use client";

import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const slides = [
  { id: 1, image: "/assets/hero-section/adds.png" },
  { id: 2, image: "/assets/hero-section/adds.png" },
  { id: 3, image: "/assets/hero-section/adds.png" },
  { id: 4, image: "/assets/hero-section/adds.png" },
  { id: 5, image: "/assets/hero-section/adds.png" },
];

export function HeroSlider() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextSlide = React.useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative w-full max-w-[1100px] mx-auto group">
       {/* Main Slider Wrapper with Outside Arrows */}
       <div className="relative px-12 lg:px-14">
          <div className="relative aspect-[1033/344] overflow-hidden rounded-sm bg-[#0a0f14] shadow-2xl border border-white/5">
             <AnimatePresence mode="wait">
               <motion.div
                 key={currentIndex}
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 exit={{ opacity: 0 }}
                 transition={{ duration: 0.35, ease: "linear" }}
                 className="absolute inset-0"
               >
                  {/* Hero Image Slide */}
                  <div className="relative w-full h-full">
                     <img 
                       src={slides[currentIndex].image}
                       alt={`Hero Slide ${currentIndex + 1}`}
                       className="w-full h-full object-cover"
                     />
                     {/* Subtle Gradient Overlay */}
                     <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                     
                     {/* Progress Indicator (Keep inside for visual sync) */}
                     <div className="absolute bottom-0 left-0 right-0 h-1 z-30 bg-white/5">
                        <motion.div 
                           key={currentIndex}
                           initial={{ width: 0 }}
                           animate={{ width: "100%" }}
                           transition={{ duration: 10, ease: "linear" }}
                           onAnimationComplete={nextSlide}
                           className="h-full bg-ui-primary"
                        />
                     </div>
                  </div>
               </motion.div>
             </AnimatePresence>
          </div>

          {/* Navigation Arrows - Moved Outside */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-16 rounded-sm bg-white/5 hover:bg-white/10 text-white/40 hover:text-white flex items-center justify-center transition-all z-20"
          >
             <FontAwesomeIcon icon={faChevronLeft} className="h-4 w-4" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-16 rounded-sm bg-white/5 hover:bg-white/10 text-white/40 hover:text-white flex items-center justify-center transition-all z-20"
          >
             <FontAwesomeIcon icon={faChevronRight} className="h-4 w-4" />
          </button>
       </div>

       {/* Indicators - Moved Outside & Squares */}
       <div className="flex justify-center gap-2 mt-6">
          {slides.map((_, idx) => (
             <button
               key={idx}
               onClick={() => setCurrentIndex(idx)}
               className={cn(
                 "w-3 h-3 transition-all rounded-[1px] border border-white/10",
                 currentIndex === idx 
                  ? "bg-ui-primary border-ui-primary shadow-[0_0_10px_rgba(var(--gpColor-Blue-rgb),0.3)]" 
                  : "bg-white/5 hover:bg-white/20"
               )}
               aria-label={`Go to slide ${idx + 1}`}
             />
          ))}
       </div>
    </section>
  );
}
