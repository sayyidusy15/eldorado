/**
 * Halaman dokumentasi Design System (Steam Inspired Core Colors).
 */
export default function DesignSystemPage() {
  const sections = [
    {
      title: "Store Blue Greys",
      description: "Warna pallet utama untuk tema toko/store.",
      colors: [
        { name: "Store Darkest", var: "--gpStoreDarkestGrey", hex: "#000F18" },
        { name: "Store Darker", var: "--gpStoreDarkerGrey", hex: "#1B2838" },
        { name: "Store Dark", var: "--gpStoreDarkGrey", hex: "#2A475E" },
        { name: "Store Grey", var: "--gpStoreGrey", hex: "#4e697d" },
        { name: "Store Lightest", var: "--gpStoreLightestGrey", hex: "#CCD8E3" },
      ]
    },
    {
      title: "System Greys",
      description: "Warna pallet abu-abu netral untuk elemen UI sistem.",
      colors: [
        { name: "System Darkest", var: "--gpSystemDarkestGrey", hex: "#0E141B" },
        { name: "System Darker", var: "--gpSystemDarkerGrey", hex: "#23262E" },
        { name: "System Dark", var: "--gpSystemDarkGrey", hex: "#3D4450" },
        { name: "System Lightest", var: "--gpSystemLightestGrey", hex: "#DCDEDF" },
      ]
    },
    {
      title: "Brand Colors",
      description: "Warna aksen untuk status, tombol, dan highlight.",
      colors: [
        { name: "GP Blue", var: "--gpColor-Blue", hex: "#1A9FFF" },
        { name: "GP Blue Hi", var: "--gpColor-BlueHi", hex: "#00BBFF" },
        { name: "GP Green", var: "--gpColor-Green", hex: "#5ba32b" },
        { name: "GP Orange", var: "--gpColor-Orange", hex: "#E35E1C" },
        { name: "GP Red", var: "--gpColor-Red", hex: "#D94126" },
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
