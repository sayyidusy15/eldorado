"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faBolt } from "@fortawesome/free-solid-svg-icons";
import { cn } from "@/lib/utils";
import { NavbarDropdown } from "./NavbarDropdown";

export function SecondaryNavbar() {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = React.useState<string | null>(null);

  // Hidden in documentation pages
  if (pathname.startsWith("/documentation")) return null;

  const menuItems = [
    { id: "currency", label: "Currency", href: "/currency" },
    { id: "accounts", label: "Accounts", href: "/game-accounts" },
    { id: "topups", label: "Top Ups", href: "/top-up" },
    { id: "items", label: "Items", href: "/game-items" },
    { id: "boosting", label: "Boosting", href: "/boosting" },
    { id: "giftcards", label: "Gift Cards", href: "/gift-cards" },
  ];

  const handleMenuClick = (menuId: string) => {
    setActiveMenu(activeMenu === menuId ? null : menuId);
  };

  return (
    <nav className="bg-ui-bg-tertiary border-b border-black/30 relative z-40">
      <div className="container mx-auto flex h-11 items-center px-4 lg:px-8 justify-between">
        <div className="flex h-full gap-1">
          {menuItems.map((item) => {
            const isDropdownOpen = activeMenu === item.id;
            const isUrlActive = pathname.startsWith(item.href);

            return (
              <div key={item.id} className="h-full relative">
                <button
                  onClick={() => handleMenuClick(item.id)}
                  className={cn(
                    "px-4 h-full flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest transition-all",
                    isDropdownOpen || isUrlActive
                      ? "bg-ui-bg-secondary text-white shadow-[inset_0_-2px_0_0_var(--gpColor-Blue)]" 
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  )}
                >
                  {item.label}
                  <FontAwesomeIcon 
                    icon={faChevronDown} 
                    className={cn(
                      "h-2 w-2 transition-transform duration-300 opacity-40 text-[8px]",
                      isDropdownOpen && "rotate-180 opacity-100"
                    )} 
                  />
                </button>
              </div>
            );
          })}
        </div>

        
      </div>

      {/* Dropdown Panel - Moved to separate component */}
      <AnimatePresence>
        {activeMenu && (
          <NavbarDropdown 
            activeMenu={activeMenu} 
            onClose={() => setActiveMenu(null)} 
          />
        )}
      </AnimatePresence>
    </nav>
  );
}
