import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { ReviewProgress } from "@/components/ui/progress-review";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faPlay, 
  faDownload, 
  faPause, 
  faShoppingCart, 
  faHeart 
} from "@fortawesome/free-solid-svg-icons";

/**
 * Halaman dokumentasi UI Components (Buttons & More).
 * Menampilkan variasi komponen dengan gaya Steam/GP dan Font Awesome icons.
 */
export default function UIComponentsPage() {
  return (
    <div className="space-y-16">
      <section>
        <h1 className="text-4xl font-extrabold tracking-tight mb-4">UI Components</h1>
        <p className="text-muted-foreground text-lg max-w-3xl border-l-4 border-primary pl-6 py-2">
          Kumpulan komponen antarmuka menggunakan **Font Awesome 6**. 
          Semua komponen telah disesuaikan dengan sistem desain Gaming Platform premium.
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
                  <FontAwesomeIcon icon={faShoppingCart} className="w-4 h-4 mr-2" /> Add to Cart
                </Button>
              </div>
              <div className="space-y-3">
                <span className="text-[10px] uppercase text-muted-foreground block">variant="gp-action"</span>
                <Button variant="gp-action" className="w-48">
                  <FontAwesomeIcon icon={faShoppingCart} className="w-4 h-4 mr-2" /> Add to Cart
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
                  <FontAwesomeIcon icon={faPlay} className="w-4 h-4 mr-2" /> Play
                </Button>
              </div>
              <div className="space-y-3">
                <span className="text-[10px] uppercase text-muted-foreground block">Install</span>
                <Button variant="gp-primary" size="lg" className="px-10">
                  <FontAwesomeIcon icon={faDownload} className="w-4 h-4 mr-2" /> Install
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Input & Feedback */}
      <section className="space-y-8">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold tracking-tight">Form & Feedback</h2>
          <p className="text-muted-foreground text-sm">Komponen untuk input data dan feedback visual menggunakan Font Awesome.</p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Toggle & Checkbox */}
          <div className="space-y-6">
            <div className="p-8 rounded-2xl bg-secondary/5 border border-border/50 space-y-8">
              <div className="flex items-center justify-between gap-8">
                <div className="space-y-1">
                  <h4 className="text-sm font-bold">Switch / Toggle</h4>
                  <p className="text-xs text-muted-foreground">Status Aktif/Non-aktif</p>
                </div>
                <div className="flex gap-4">
                  <Switch defaultChecked />
                  <Switch />
                </div>
              </div>

              <div className="flex items-center justify-between gap-8">
                <div className="space-y-1">
                  <h4 className="text-sm font-bold">Checkbox</h4>
                  <p className="text-xs text-muted-foreground">Pilihan item atau batch</p>
                </div>
                <div className="flex gap-4">
                  <Checkbox />
                  <Checkbox defaultChecked />
                </div>
              </div>
            </div>
          </div>

          {/* Review Progress */}
          <div className="space-y-6">
            <div className="p-8 rounded-2xl bg-secondary/5 border border-border/50 space-y-8">
              <div className="space-y-4">
                <h4 className="text-sm font-bold">Review Sentiment Bar</h4>
                <div className="space-y-6">
                  <ReviewProgress positive={85} negative={15} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Code Usage */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Usage (Font Awesome 6)</h2>
        <div className="p-6 rounded-xl bg-ui-bg-tertiary border border-border/50 font-mono text-sm leading-relaxed">
          <pre className="text-blue-300">
{`import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

<Button variant="gp-primary">
  <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
  Add to Cart
</Button>`}
          </pre>
        </div>
      </section>
    </div>
  );
}
