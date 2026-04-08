import { Button } from "@/components/ui/button";
import { Play, Download, Pause, ShoppingCart, Heart } from "lucide-react";

/**
 * Halaman dokumentasi UI Components (Buttons).
 * Menampilkan variasi tombol dengan gaya Steam/GP.
 */
export default function UIComponentsPage() {
  return (
    <div className="space-y-16">
      <section>
        <h1 className="text-4xl font-extrabold tracking-tight mb-4">UI Components</h1>
        <p className="text-muted-foreground text-lg max-w-3xl border-l-4 border-primary pl-6 py-2">
          Kumpulan komponen antarmuka yang siap digunakan. Semua komponen telah disesuaikan dengan 
          sistem desain Gaming Platform premium.
        </p>
      </section>

      {/* Buttons Section */}
      <section className="space-y-8">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold tracking-tight">Buttons</h2>
          <p className="text-muted-foreground text-sm">Variabel tombol khusus untuk aksi utama di dalam marketplace.</p>
        </div>

        <div className="grid gap-12">
          {/* Primary & Action Buttons */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-primary/50">Primary & Action</h3>
            <div className="flex flex-wrap gap-4 p-8 rounded-2xl bg-secondary/5 border border-border/50">
              <div className="space-y-3">
                <span className="text-[10px] uppercase text-muted-foreground block">variant="gp-primary"</span>
                <Button variant="gp-primary" className="w-48">
                  <ShoppingCart className="w-4 h-4 mr-2" /> Add to Cart
                </Button>
              </div>
              <div className="space-y-3">
                <span className="text-[10px] uppercase text-muted-foreground block">variant="gp-action"</span>
                <Button variant="gp-action" className="w-48">
                  <ShoppingCart className="w-4 h-4 mr-2" /> Add to Cart
                </Button>
              </div>
            </div>
          </div>

          {/* Secondary / Ghost Buttons */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-primary/50">Secondary & States</h3>
            <div className="flex flex-wrap gap-4 p-8 rounded-2xl bg-secondary/5 border border-border/50">
              <div className="space-y-3">
                <span className="text-[10px] uppercase text-muted-foreground block">variant="gp-ghost" (Normal)</span>
                <Button variant="gp-ghost" className="w-48 justify-start">
                  <Heart className="w-4 h-4 mr-2" /> Add to Wishlist
                </Button>
              </div>
              <div className="space-y-3">
                <span className="text-[10px] uppercase text-muted-foreground block">variant="gp-tertiary" (Darker)</span>
                <Button variant="gp-tertiary" className="w-48 justify-start">
                  <Heart className="w-4 h-4 mr-2" /> Add to Wishlist
                </Button>
              </div>
            </div>
          </div>

          {/* Functional Buttons */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-primary/50">Functional Actions</h3>
            <div className="flex flex-wrap gap-4 p-8 rounded-2xl bg-secondary/5 border border-border/50">
              <div className="space-y-3">
                <span className="text-[10px] uppercase text-muted-foreground block">variant="gp-purchase"</span>
                <Button variant="gp-purchase" size="lg" className="px-10">
                  <Play className="w-4 h-4 mr-2 fill-current" /> Play
                </Button>
              </div>
              <div className="space-y-3">
                <span className="text-[10px] uppercase text-muted-foreground block">Install (using gp-primary)</span>
                <Button variant="gp-primary" size="lg" className="px-10">
                  <Download className="w-4 h-4 mr-2" /> Install
                </Button>
              </div>
              <div className="space-y-3">
                <span className="text-[10px] uppercase text-muted-foreground block">Pause (using gp-tertiary)</span>
                <Button variant="gp-tertiary" size="lg" className="px-10 font-bold">
                  <Pause className="w-4 h-4 mr-2 fill-current" /> Pause
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Code Usage */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Usage</h2>
        <div className="p-6 rounded-xl bg-ui-bg-tertiary border border-border/50 font-mono text-sm">
          <pre className="text-blue-300">
{`<Button variant="gp-primary">
  Add to Cart
</Button>

<Button variant="gp-purchase">
  Play Now
</Button>`}
          </pre>
        </div>
      </section>
    </div>
  );
}
