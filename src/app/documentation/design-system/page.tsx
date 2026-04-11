import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette, faCircleInfo } from "@fortawesome/free-solid-svg-icons";

/**
 * Halaman dokumentasi Design System (Steam Inspired Core Colors).
 */
export default function DesignSystemPage() {
  const sections = [
    {
      id: "base-ui",
      title: "Component Base UI",
      description: "Warna spesifik untuk komponen, state (hover/highlight), dan elemen antarmuka.",
      colors: [
        { name: "Bg Main", var: "--uiBg-Main", hex: "#0E141B" },
        { name: "Bg Highlight", var: "--uiBg-Highlight", hex: "#1E2329" },
        { name: "Bg Hover", var: "--uiBg-Hover", hex: "#313843" },
        { name: "Bg Secondary", var: "--uiBg-Secondary", hex: "#14344B" },
        { name: "Bg Tertiary", var: "--uiBg-Tertiary", hex: "#212B45" },
        { name: "Text Main", var: "--uiText-Main", hex: "#F3F3F3" },
        { name: "Text Dim", var: "--uiText-Dim", hex: "#76808C" },
      ]
    },
    {
      id: "accents",
      title: "Component Accents",
      description: "Warna aksen untuk status dan elemen interaktif di dalam komponen.",
      colors: [
        { name: "Primary UI", var: "--uiColor-Primary", hex: "#66C0F4" },
        { name: "Secondary UI", var: "--uiColor-Secondary", hex: "#4B619B" },
        { name: "Accent Green", var: "--uiAccent-Green", hex: "#A1CD44" },
        { name: "Accent Red", var: "--uiAccent-Red", hex: "#CD5444" },
        { name: "Accent Yellow", var: "--uiAccent-Yellow", hex: "#C1B15F" },
      ]
    },
    {
      id: "store-blue-greys",
      title: "Store Blue Greys",
      description: "Warna pallet tambahan untuk tema toko/store.",
      colors: [
        { name: "Store Darkest", var: "--gpStoreDarkestGrey", hex: "#000F18" },
        { name: "Store Darker", var: "--gpStoreDarkerGrey", hex: "#1B2838" },
        { name: "Store Dark", var: "--gpStoreDarkGrey", hex: "#2A475E" },
        { name: "Store Grey", var: "--gpStoreGrey", hex: "#4e697d" },
        { name: "Store Lightest", var: "--gpStoreLightestGrey", hex: "#CCD8E3" },
      ]
    }
  ];

  return (
    <div className="flex justify-between relative pb-20">
      <div className="max-w-[850px] w-full space-y-16 min-w-0">
        <section id="overview" className="scroll-mt-24">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4 flex items-center gap-3 text-white">
            <FontAwesomeIcon icon={faPalette} className="text-ui-primary h-8" />
            Core Design System
          </h1>
          <p className="text-ui-text-dim text-lg max-w-3xl border-l-4 border-ui-primary pl-6 py-2 leading-relaxed">
            Sistem warna utama Eldorado yang diadaptasi dari standar estetika Gaming Platform premium. 
            Semua elemen UI harus merujuk pada variabel-variabel di bawah ini.
          </p>
        </section>

        {sections.map((section, idx) => (
          <section key={idx} id={section.id} className="space-y-6 scroll-mt-24">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold tracking-tight text-white">{section.title}</h2>
              <p className="text-ui-text-dim text-sm">{section.description}</p>
            </div>
            
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {section.colors.map((color) => (
                <div key={color.var} className="group relative p-4 rounded-sm border border-white/5 bg-white/5 hover:bg-white-[8%] transition-colors">
                  <div 
                    className="w-full h-24 rounded-sm mb-4 shadow-lg border border-white/5" 
                    style={{ backgroundColor: `var(${color.var})` }}
                  />
                  <div className="space-y-1 text-white">
                    <h3 className="font-bold text-sm tracking-tight">{color.name}</h3>
                    <div className="flex items-center justify-between text-[10px] font-mono">
                      <span className="text-ui-text-dim uppercase">{color.hex}</span>
                      <span className="text-ui-primary">{color.var}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        <section id="gradients" className="space-y-6 scroll-mt-24">
          <h2 className="text-2xl font-bold text-white">Gradients</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-3">
              <p className="text-xs text-ui-text-dim font-mono">--gpGradient-StoreBackground</p>
              <div className="h-32 rounded-sm border border-white/10" style={{ backgroundImage: "var(--gpGradient-StoreBackground)" }} />
            </div>
            <div className="space-y-3">
              <p className="text-xs text-ui-text-dim font-mono">--gpGradient-LibraryBackground</p>
              <div className="h-32 rounded-sm border border-white/10" style={{ backgroundImage: "var(--gpGradient-LibraryBackground)" }} />
            </div>
            <div className="space-y-3 md:col-span-2">
              <p className="text-xs text-ui-text-dim font-mono">Landing Page Gradient (-14deg, Tertiary to Main)</p>
              <div className="h-32 rounded-sm border border-white/10" style={{ background: "linear-gradient(-14deg, var(--uiBg-Tertiary) 0%, var(--uiBg-Main) 100%)" }} />
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
                    { id: "base-ui", label: "Base UI Colors" },
                    { id: "accents", label: "Accents & Status" },
                    { id: "store-blue-greys", label: "Store Greys" },
                    { id: "gradients", label: "Gradients" },
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

            <div className="p-5 rounded-sm bg-ui-primary/5 border border-ui-primary/10 space-y-3">
               <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCircleInfo} className="text-ui-primary h-2" />
                  <h4 className="text-[10px] font-bold text-white uppercase tracking-wider">Usage Tip</h4>
               </div>
               <p className="text-[10px] text-ui-text-dim leading-relaxed">
                 Gunakan variabel CSS (e.g. <code>var(--uiBg-Main)</code>) daripada HEX manual untuk mendukung tema dinamis di masa depan.
               </p>
            </div>
         </div>
      </div>
    </div>
  );
}
