"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faSearch, 
  faGlobe, 
  faCoins, 
  faUser,
  faChevronDown
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchSuggestions } from "./SearchSuggestions";
import { AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function TopNavbar() {
  const pathname = usePathname();
  const [isSearchFocused, setIsSearchFocused] = React.useState(false);

  // Hidden in documentation pages
  if (pathname.startsWith("/documentation")) return null;

  return (
    <div className="bg-ui-bg-main border-b border-white/5 relative z-50">
      <div className="container mx-auto h-16 flex items-center justify-between px-4 lg:px-8 gap-8">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
           <span className="text-2xl font-black italic tracking-tighter text-ui-text-main">
            Eldorado<span className="text-ui-primary text-xl not-italic ml-0.5 uppercase">store</span>
           </span>
        </Link>

        {/* Search Bar Container */}
        <div className="flex-1 max-w-2xl relative">
          {/* Search suggestions dropdown */}
          <AnimatePresence>
            {isSearchFocused && (
              <SearchSuggestions 
                isOpen={isSearchFocused} 
                onClose={() => setIsSearchFocused(false)} 
              />
            )}
          </AnimatePresence>

          {/* Actual Input Field */}
          <div className="relative flex items-center group z-[60]">
            <Input 
              onFocus={() => setIsSearchFocused(true)}
              placeholder="Search the store" 
              className={cn(
                "h-10 border-transparent transition-all placeholder:text-ui-text-dim/50 placeholder:italic rounded-r-none",
                isSearchFocused 
                  ? "bg-[#1E2329] border-ui-accent-yellow shadow-xl ring-0" 
                  : "bg-ui-bg-tertiary focus:bg-ui-bg-tertiary/80"
              )}
            />
            <button className="h-10 w-12 bg-[#1ab0ff] hover:bg-[#1ab0ff]/90 text-white flex items-center justify-center rounded-r-sm transition-colors shadow-lg shadow-[#1ab0ff]/20">
              <FontAwesomeIcon icon={faSearch} className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center gap-2 text-sm text-ui-text-dim hover:text-ui-text-main cursor-pointer transition-colors group">
            <FontAwesomeIcon icon={faGlobe} className="h-3.5 w-3.5" />
            <span className="font-bold uppercase tracking-widest text-[10px]">ID</span>
            <FontAwesomeIcon icon={faChevronDown} className="h-2.5 w-2.5 opacity-40 group-hover:opacity-100" />
          </div>
          
          <div className="hidden lg:flex items-center gap-2 text-sm text-ui-text-dim hover:text-ui-text-main cursor-pointer transition-colors group">
            <FontAwesomeIcon icon={faCoins} className="h-3.5 w-3.5" />
            <span className="font-bold uppercase tracking-widest text-[10px]">IDR</span>
            <FontAwesomeIcon icon={faChevronDown} className="h-2.5 w-2.5 opacity-40 group-hover:opacity-100" />
          </div>

          <Button variant="gp-purchase" size="sm" className="hidden sm:flex tracking-tight rounded-sm px-6">
            <FontAwesomeIcon icon={faUser} className="h-3 w-3 mr-2" />
            LOGIN
          </Button>
        </div>
      </div>
    </div>
  );
}
