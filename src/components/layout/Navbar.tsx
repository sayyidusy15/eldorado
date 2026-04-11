"use client";

import { usePathname } from "next/navigation";
import { TopNavbar } from "./TopNavbar";
import { SecondaryNavbar } from "./SecondaryNavbar";

export function Navbar() {
  const pathname = usePathname();

  if (pathname.startsWith("/documentation")) return null;

  return (
    <header className="sticky top-0 z-50 w-full flex flex-col shadow-2xl">
      <TopNavbar />
      <SecondaryNavbar />
    </header>
  );
}
