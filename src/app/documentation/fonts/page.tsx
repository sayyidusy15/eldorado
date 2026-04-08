/**
 * Halaman dokumentasi Typography.
 */
export default function FontsPage() {
  const weights = [
    { label: "Thin", weight: "100" },
    { label: "Light", weight: "300" },
    { label: "Regular", weight: "400" },
    { label: "Medium", weight: "500" },
    { label: "Bold", weight: "700" },
    { label: "Extra Bold", weight: "800" },
    { label: "Black", weight: "900" },
  ];

  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-4xl font-extrabold tracking-tight mb-4">Typography</h1>
        <p className="text-muted-foreground text-lg">
          Aplikasi menggunakan custom font <strong>Motiva Sans</strong> yang di-host secara lokal untuk 
          performa optimal dan lisensi yang konsisten.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold italic tracking-tight">Motiva Sans</h2>
        
        <div className="space-y-8 p-8 rounded-2xl border border-border/50 bg-secondary/5">
          {weights.map((w) => (
            <div key={w.weight} className="space-y-2">
              <div className="flex items-center gap-4 border-b border-border/20 pb-2">
                <span className="text-xs font-mono text-muted-foreground">Weight {w.weight} ({w.label})</span>
              </div>
              <p 
                className="text-3xl md:text-4xl lg:text-5xl" 
                style={{ fontWeight: w.weight }}
              >
                The quick brown fox jumps over the lazy dog.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Implementation Details</h2>
        <div className="prose prose-invert text-muted-foreground max-w-none">
          <p>
            Font di-setup menggunakan <code>next/font/local</code> di dalam root layout. Ini menghasilkan 
            CSS Variable <code>--font-motiva-sans</code> yang secara otomatis di-inject ke dalam Tailwind 
            sebagai <code>font-sans</code>.
          </p>
        </div>
        
        <div className="p-4 rounded-lg bg-secondary/30 font-mono text-xs border border-border/50 overflow-x-auto">
          <pre className="text-green-400">
{`// src/app/layout.tsx
const motivaSans = localFont({
  src: [
    { path: "../fonts/MotivaSansRegular.woff.ttf", weight: "400" },
    { path: "../fonts/MotivaSansBold.woff.ttf", weight: "700" },
    // ... lainnya
  ],
  variable: "--font-motiva-sans",
});`}
          </pre>
        </div>
      </section>
    </div>
  );
}
