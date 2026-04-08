import Link from "next/link"
import { Search, ShoppingCart, User, Globe, ChevronDown } from "lucide-react"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top Navbar */}
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold tracking-tight text-primary">Lyven<span className="text-foreground">Store</span></span>
          </Link>
          
          {/* Main Search Bar (Hidden on mobile) */}
          <div className="hidden flex-1 sm:flex max-w-lg lg:ml-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search games, top up, items..."
                className="w-full rounded-md border border-border bg-secondary/50 py-2 pl-10 pr-4 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
            <Globe className="h-4 w-4" />
            <span>ID / IDR</span>
            <ChevronDown className="h-3 w-3" />
          </div>
          
          <button className="relative p-2 text-muted-foreground hover:text-foreground transition-colors hidden sm:block">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute right-0 top-0 h-4 w-4 rounded-full bg-primary text-[10px] font-bold text-primary-foreground flex items-center justify-center">0</span>
          </button>
          
          <Link href="/login" className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
            <User className="h-4 w-4" />
            <span>Login / Register</span>
          </Link>
        </div>
      </div>

      {/* Secondary Navbar */}
      <div className="border-t border-border hidden md:block">
        <div className="container mx-auto flex h-12 items-center px-4 md:px-8 overflow-x-auto gap-8 text-sm font-medium text-muted-foreground">
          <Link href="/game-accounts" className="hover:text-foreground transition-colors whitespace-nowrap">Akun Game</Link>
          <Link href="/game-items" className="hover:text-foreground transition-colors whitespace-nowrap">Items</Link>
          <Link href="/top-up" className="hover:text-foreground transition-colors whitespace-nowrap">Top Up</Link>
          <Link href="/boosting" className="hover:text-foreground transition-colors whitespace-nowrap">Boosting</Link>
          <Link href="/gift-cards" className="hover:text-foreground transition-colors whitespace-nowrap">Gift Cards</Link>
        </div>
      </div>
    </header>
  )
}
