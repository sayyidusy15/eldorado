"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { 
  BookOpen, 
  Palette, 
  Type, 
  Layers, 
  Code2, 
  Settings2,
  Sparkles
} from "lucide-react";

/**
 * Sidebar component untuk navigasi dokumentasi.
 * Menggunakan Lucide icons dan Tailwind untuk styling dark mode premium.
 */
export function DocSidebar() {
  const pathname = usePathname();

  const menuItems = [
    {
      title: "Getting Started",
      items: [
        { label: "Introduction", href: "/documentation", icon: BookOpen },
        { label: "Skill Tree", href: "/documentation/skill-tree", icon: Sparkles },
        { label: "Project Structure", href: "/documentation/structure", icon: Layers },
      ]
    },
    {
      title: "Design System",
      items: [
        { label: "Colors & Theme", href: "/documentation/design-system", icon: Palette },
        { label: "Typography (Fonts)", href: "/documentation/fonts", icon: Type },
      ]
    },
    {
      title: "Components",
      items: [
        { label: "UI Components", href: "/documentation/ui-components", icon: Code2 },
        { label: "Layouts", href: "/documentation/layouts", icon: Settings2 },
      ]
    },
    {
      title: "Sections",
      items: [
        { label: "Landing Page", href: "/documentation/sections/landing-page", icon: Layers },
      ]
    }
  ];

  return (
    <aside className="w-64 border-r border-border bg-card/30 backdrop-blur-sm fixed h-screen overflow-y-auto">
      <div className="p-6">
        <Link href="/documentation" className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center font-bold text-white shadow-lg shadow-primary/20">
            L
          </div>
          <span className="font-bold text-xl tracking-tight">Eldorado<span className="text-primary">Docs</span></span>
        </Link>

        <nav className="space-y-8">
          {menuItems.map((section, idx) => (
            <div key={idx} className="space-y-3">
              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3">
                {section.title}
              </h4>
              <div className="space-y-1">
                {section.items.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200 group text-sm",
                        isActive 
                          ? "bg-primary/10 text-primary font-medium" 
                          : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                      )}
                    >
                      <item.icon className={cn(
                        "w-4 h-4",
                        isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                      )} />
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}
