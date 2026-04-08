/**
 * Halaman dokumentasi Design System (Colors).
 */
export default function DesignSystemPage() {
  const colors = [
    { name: "Background", variable: "--background", hex: "#0b0f19", description: "Warna dasar latar belakang aplikasi." },
    { name: "Card", variable: "--card", hex: "#151e2f", description: "Digunakan untuk box, card, dan kontainer terpisah." },
    { name: "Primary", variable: "--primary", hex: "#3b82f6", description: "Warna aksen utama (Brand Color)." },
    { name: "Border", variable: "--border", hex: "#1e293b", description: "Warna garis pemisah/border komponen." },
    { name: "Muted Foreground", variable: "--muted-foreground", hex: "#94a3b8", description: "Warna teks untuk deskripsi atau informasi kurang penting." },
  ];

  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-4xl font-extrabold tracking-tight mb-4">Colors & Theme</h1>
        <p className="text-muted-foreground text-lg">
          Panduan sistem warna yang digunakan di dalam project LyvenStore. Sistem ini menggunakan 
          CSS Variables untuk fleksibilitas tema.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Color Palette</h2>
        <div className="grid gap-4">
          {colors.map((color) => (
            <div key={color.variable} className="flex flex-col md:flex-row md:items-center gap-4 p-4 rounded-xl border border-border/50 bg-secondary/5">
              <div 
                className="w-16 h-16 rounded-lg shadow-inner border border-white/10" 
                style={{ backgroundColor: `var(${color.variable})` }}
              />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold">{color.name}</h3>
                  <code className="text-[10px] bg-secondary px-1.5 py-0.5 rounded text-muted-foreground uppercase">{color.hex}</code>
                </div>
                <p className="text-sm text-muted-foreground mb-1">{color.description}</p>
                <code className="text-xs text-primary">{color.variable}</code>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">CSS Usage</h2>
        <div className="p-4 rounded-lg bg-secondary/30 font-mono text-sm border border-border/50 text-blue-300">
          <pre>
{`/* Contoh penggunaan di CSS */
.my-card {
  background-color: var(--card);
  border: 1px solid var(--border);
  color: var(--foreground);
}`}
          </pre>
        </div>
      </section>
    </div>
  );
}
