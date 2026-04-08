/**
 * Halaman dokumentasi Design System (Steam Inspired Core Colors).
 */
export default function DesignSystemPage() {
  const sections = [
    {
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
    <div className="space-y-16">
      <section>
        <h1 className="text-4xl font-extrabold tracking-tight mb-4">Core Design System</h1>
        <p className="text-muted-foreground text-lg max-w-3xl border-l-4 border-primary pl-6 py-2">
          Sistem warna utama LyvenStore yang diadaptasi dari standar estetika Gaming Platform premium. 
          Semua elemen UI harus merujuk pada variabel-variabel di bawah ini.
        </p>
      </section>

      {sections.map((section, idx) => (
        <section key={idx} className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold tracking-tight">{section.title}</h2>
            <p className="text-muted-foreground text-sm">{section.description}</p>
          </div>
          
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {section.colors.map((color) => (
              <div key={color.var} className="group relative p-4 rounded-xl border border-border/30 bg-secondary/5 hover:bg-secondary/10 transition-colors">
                <div 
                  className="w-full h-24 rounded-lg mb-4 shadow-lg border border-white/5" 
                  style={{ backgroundColor: `var(${color.var})` }}
                />
                <div className="space-y-1">
                  <h3 className="font-bold text-sm tracking-tight">{color.name}</h3>
                  <div className="flex items-center justify-between text-[10px] font-mono">
                    <span className="text-muted-foreground uppercase">{color.hex}</span>
                    <span className="text-primary">{color.var}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Gradients</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-3">
            <p className="text-xs text-muted-foreground font-mono">--gpGradient-StoreBackground</p>
            <div className="h-32 rounded-xl border border-border/50" style={{ backgroundImage: "var(--gpGradient-StoreBackground)" }} />
          </div>
          <div className="space-y-3">
            <p className="text-xs text-muted-foreground font-mono">--gpGradient-LibraryBackground</p>
            <div className="h-32 rounded-xl border border-border/50" style={{ backgroundImage: "var(--gpGradient-LibraryBackground)" }} />
          </div>
        </div>
      </section>
    </div>
  );
}
