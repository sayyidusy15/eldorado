import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12 md:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:gap-12">
          {/* Brand Col */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-xl font-bold tracking-tight text-primary">Eldorado<span className="text-foreground">Store</span></span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Platform marketplace digital khusus game yang aman, cepat, dan terpercaya.
              Tempat bertemunya gamer untuk transaksi akun, item, dan top up.
            </p>
          </div>

          {/* Links Col 1 */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Marketplace</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/game-accounts" className="hover:text-primary transition-colors">Beli Akun Game</Link></li>
              <li><Link href="/game-items" className="hover:text-primary transition-colors">Beli Item Game</Link></li>
              <li><Link href="/top-up" className="hover:text-primary transition-colors">Top Up Game</Link></li>
              <li><Link href="/boosting" className="hover:text-primary transition-colors">Jasa Boosting</Link></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/help" className="hover:text-primary transition-colors">Help Center</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="/dispute" className="hover:text-primary transition-colors">Report a Problem</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Links Col 3 */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/seller-policy" className="hover:text-primary transition-colors">Seller Policy</Link></li>
              <li><Link href="/refund-policy" className="hover:text-primary transition-colors">Refund Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-t border-border pt-8 md:flex-row gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Eldorado. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm text-muted-foreground">
            <span>Secure Checkout with DOKU & PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
