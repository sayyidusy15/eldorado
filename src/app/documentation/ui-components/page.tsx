import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
    <div className="flex justify-between relative pb-20">
      <div className="max-w-[850px] w-full space-y-16 min-w-0">
        <section id="overview" className="scroll-mt-24">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4 flex items-center gap-3 text-white">
            <FontAwesomeIcon icon={faPlay} className="text-ui-primary h-8" />
            UI Components
          </h1>
          <p className="text-ui-text-dim text-lg max-w-3xl border-l-4 border-ui-primary pl-6 py-2 leading-relaxed">
            Kumpulan komponen antarmuka menggunakan **Font Awesome 6**. 
            Semua komponen telah disesuaikan dengan sistem desain Gaming Platform premium.
          </p>
        </section>

        {/* Navigation & Layouts */}
        <section id="navigation" className="space-y-8 scroll-mt-24">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold tracking-tight text-white">Navigation System</h2>
            <p className="text-ui-text-dim text-sm">Arsitektur navigasi dua tingkat (Top & Secondary) dengan sistem interaktif.</p>
          </div>

          <div className="grid gap-6">
            <div className="p-8 rounded-sm bg-white/5 border border-white/5 flex flex-col gap-6 group hover:bg-white-[8%] transition-all">
               <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Top Navbar</h4>
                  <span className="text-[10px] bg-ui-accent-green/20 text-ui-accent-green px-2 py-0.5 rounded-sm font-bold uppercase tracking-widest">Main Entry</span>
               </div>
               <p className="text-xs text-ui-text-dim leading-relaxed">
                 Mengelola identitas (Logo), pencarian global, dan autentikasi. Menggunakan <code>bg-ui-bg-main</code>.
                 Fitur utama: **Search Suggestions** (Auto-popup saat fokus pada input pencarian).
               </p>
            </div>

            <div className="p-8 rounded-sm bg-white/5 border border-white/5 flex flex-col gap-6 group hover:bg-white-[8%] transition-all">
               <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Secondary Navbar</h4>
                  <span className="text-[10px] bg-ui-primary/20 text-ui-primary px-2 py-0.5 rounded-sm font-bold uppercase tracking-widest">Interactive Nav</span>
               </div>
               <p className="text-xs text-ui-text-dim leading-relaxed">
                 Mengelola navigasi kategori game. Menggunakan <code>bg-ui-bg-tertiary</code> dengan font putih transparan.
                 Fitur utama: **Navbar Dropdown** (Panel glassmorphism 2 kolom untuk navigasi produk premium).
               </p>
            </div>
          </div>
        </section>

        {/* Buttons Section */}
        <section id="buttons" className="space-y-8 scroll-mt-24">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold tracking-tight text-white">Buttons</h2>
            <p className="text-ui-text-dim text-sm">Variabel tombol khusus untuk aksi utama di dalam marketplace.</p>
          </div>

          <div className="grid gap-12">
            <div className="space-y-4">
              <h3 className="text-[10px] font-black uppercase tracking-widest text-ui-text-dim/50">Primary & Action</h3>
              <div className="flex flex-wrap gap-4 p-8 rounded-sm bg-white/5 border border-white/5">
                <div className="space-y-3">
                  <span className="text-[10px] uppercase text-ui-text-dim block">variant="gp-primary"</span>
                  <Button variant="gp-primary" className="w-48">
                    <FontAwesomeIcon icon={faShoppingCart} className="w-4 h-4 mr-2" /> Add to Cart
                  </Button>
                </div>
                <div className="space-y-3">
                  <span className="text-[10px] uppercase text-ui-text-dim block">variant="gp-action"</span>
                  <Button variant="gp-action" className="w-48">
                    <FontAwesomeIcon icon={faShoppingCart} className="w-4 h-4 mr-2" /> Add to Cart
                  </Button>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-[10px] font-black uppercase tracking-widest text-ui-text-dim/50">Functional Actions</h3>
              <div className="flex flex-wrap gap-4 p-8 rounded-sm bg-white/5 border border-white/5">
                <div className="space-y-3">
                  <span className="text-[10px] uppercase text-ui-text-dim block">variant="gp-purchase"</span>
                  <Button variant="gp-purchase" size="lg" className="px-10">
                    <FontAwesomeIcon icon={faPlay} className="w-4 h-4 mr-2" /> Play
                  </Button>
                </div>
                <div className="space-y-3">
                  <span className="text-[10px] uppercase text-ui-text-dim block">Install</span>
                  <Button variant="gp-primary" size="lg" className="px-10">
                    <FontAwesomeIcon icon={faDownload} className="w-4 h-4 mr-2" /> Install
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Form elements */}
        <section id="forms" className="space-y-8 scroll-mt-24">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold tracking-tight text-white">Form & Feedback</h2>
            <p className="text-ui-text-dim text-sm">Komponen untuk input data dan feedback visual.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="p-8 rounded-sm bg-white/5 border border-white/5 space-y-8">
              <div className="flex items-center justify-between gap-8">
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Switch / Toggle</h4>
                  <p className="text-xs text-ui-text-dim">Status Aktif/Non-aktif</p>
                </div>
                <div className="flex gap-4">
                  <Switch defaultChecked />
                  <Switch />
                </div>
              </div>

              <div className="flex items-center justify-between gap-8">
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">Checkbox</h4>
                  <p className="text-xs text-ui-text-dim">Pilihan item atau batch</p>
                </div>
                <div className="flex gap-4">
                  <Checkbox />
                  <Checkbox defaultChecked />
                </div>
              </div>
            </div>

            <div className="p-8 rounded-sm bg-white/5 border border-white/5 space-y-6 flex flex-col justify-center">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">Review Sentiment Bar</h4>
              <ReviewProgress positive={85} negative={15} />
            </div>
          </div>
        </section>

        {/* Inputs */}
        <section id="inputs" className="space-y-8 scroll-mt-24">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold tracking-tight text-white">Inputs</h2>
            <p className="text-ui-text-dim text-sm">Elemen input untuk pencarian dan pengisian data formulir.</p>
          </div>

          <div className="grid gap-8 p-8 rounded-sm bg-white/5 border border-white/5">
            <div className="max-w-md space-y-3">
               <span className="text-[10px] uppercase text-ui-text-dim block font-black">Default Input</span>
               <Input placeholder="Tuliskan sesuatu..." />
            </div>
          </div>
        </section>
      </div>

      {/* Right Sidebar */}
      <div className="hidden lg:block w-56 shrink-0">
         <div className="sticky top-24 space-y-8">
            <div className="space-y-4">
               <h3 className="text-[10px] uppercase font-black tracking-widest text-ui-text-dim/50 px-3">
                  On this page
               </h3>
               <nav className="flex flex-col">
                  {[
                    { id: "overview", label: "Overview" },
                    { id: "navigation", label: "Navigation System" },
                    { id: "buttons", label: "Buttons" },
                    { id: "forms", label: "Form & Feedback" },
                    { id: "inputs", label: "Inputs" },
                  ].map((link) => (
                    <a
                      key={link.id}
                      href={`#${link.id}`}
                      className="px-3 py-2 text-[11px] font-bold text-ui-text-dim hover:text-white hover:bg-white/5 rounded-sm transition-all border-l border-transparent hover:border-ui-primary"
                    >
                      {link.label}
                    </a>
                  ))}
               </nav>
            </div>
         </div>
      </div>
    </div>
  );
}
