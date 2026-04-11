import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faArrowRight, faExpand, faClock, faMagicWandSparkles } from "@fortawesome/free-solid-svg-icons";

export default function LandingPageDoc() {
  return (
    <div className="flex justify-between relative pb-20">
      {/* Main Content Area */}
      <div className="max-w-[850px] w-full space-y-16 min-w-0">
        <section id="overview" className="scroll-mt-24">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4 flex items-center gap-3 text-white">
            <FontAwesomeIcon icon={faMagicWandSparkles} className="text-ui-primary h-8" />
            Landing Page Sections
          </h1>
          <p className="text-ui-text-dim text-lg max-w-3xl border-l-4 border-ui-primary pl-6 py-2 leading-relaxed">
            Halaman utama Eldorado terdiri dari komponen-komponen modular yang dirancang untuk 
            memberikan pengalaman marketplace gaming yang imersif dan berkinerja tinggi.
          </p>
        </section>

        {/* Hero Section Container */}
        <div id="hero-slider" className="bg-ui-bg-secondary/20 rounded-sm border border-white/5 overflow-hidden scroll-mt-24">
          <div className="bg-white/5 p-4 px-6 border-b border-white/5 flex items-center justify-between">
            <h2 className="font-bold flex items-center gap-3 text-white">
              <FontAwesomeIcon icon={faImage} className="text-ui-primary h-4" />
              Hero Slider Section
            </h2>
            <span className="text-[10px] uppercase font-bold tracking-widest text-ui-primary">Header Feature</span>
          </div>

          <div className="p-8 space-y-10">
            {/* Spec Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-4 rounded-sm bg-black/20 border border-white/5 space-y-2">
                <div className="flex items-center justify-between text-xs text-ui-text-dim font-bold uppercase tracking-widest">
                  <span>Dimensions</span>
                  <FontAwesomeIcon icon={faExpand} className="h-3" />
                </div>
                <div className="text-xl font-black text-white italic">1033 x 344<span className="text-xs ml-1 not-italic font-normal opacity-50">px</span></div>
              </div>

              <div className="p-4 rounded-sm bg-black/20 border border-white/5 space-y-2">
                <div className="flex items-center justify-between text-xs text-ui-text-dim font-bold uppercase tracking-widest">
                  <span>Auto-play Delay</span>
                  <FontAwesomeIcon icon={faClock} className="h-3" />
                </div>
                <div className="text-xl font-black text-white italic">10.0<span className="text-xs ml-1 not-italic font-normal opacity-50">sec</span></div>
              </div>

              <div className="p-4 rounded-sm bg-black/20 border border-white/5 space-y-2 lg:col-span-2">
                <div className="flex items-center justify-between text-xs text-ui-text-dim font-bold uppercase tracking-widest">
                  <span>Transition Type</span>
                  <FontAwesomeIcon icon={faArrowRight} className="h-3" />
                </div>
                <div className="text-lg font-bold text-white uppercase tracking-tight">Fade Transition (Pure Opacity)</div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-widest text-ui-text-dim/50">Technical Characteristics</h3>
              <ul className="grid gap-3 text-sm">
                <li className="flex items-center gap-3 text-ui-text-dim">
                  <div className="w-1.5 h-1.5 bg-ui-primary rounded-full shadow-[0_0_5px_var(--gpColor-Blue)]" />
                  <span><strong>Component:</strong> <code>HeroSlider.tsx</code> (Client-side interactive)</span>
                </li>
                <li className="flex items-center gap-3 text-ui-text-dim">
                  <div className="w-1.5 h-1.5 bg-ui-primary rounded-full shadow-[0_0_5px_var(--gpColor-Blue)]" />
                  <span><strong>Layout Column:</strong> Centered within <code>1100px</code> content wrapper.</span>
                </li>
                <li className="flex items-center gap-3 text-ui-text-dim">
                  <div className="w-1.5 h-1.5 bg-ui-primary rounded-full shadow-[0_0_5px_var(--gpColor-Blue)]" />
                  <span><strong>Navigation:</strong> Arrows positioned <strong>outside</strong> the slider container (gutters).</span>
                </li>
                <li className="flex items-center gap-3 text-ui-text-dim">
                  <div className="w-1.5 h-1.5 bg-ui-primary rounded-full shadow-[0_0_5px_var(--gpColor-Blue)]" />
                  <span><strong>Paging:</strong> Square indicators (<code>rounded-[1px]</code>) positioned below the slider.</span>
                </li>
              </ul>
            </div>

            {/* Usage Code */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-widest text-ui-text-dim/50">Usage</h3>
              <div className="p-5 rounded-sm bg-black/40 border border-white/5 font-mono text-xs text-blue-300 overflow-x-auto">
                <pre>{`// Import di src/app/page.tsx
import { HeroSlider } from "@/components/landing/HeroSlider";

<div className="max-w-[1100px] mx-auto">
  <HeroSlider />
</div>`}</pre>
              </div>
            </div>
          </div>
        </div>

        {/* Explore Accounts Section */}
        <div id="explore-accounts" className="bg-ui-bg-secondary/20 rounded-sm border border-white/5 overflow-hidden scroll-mt-24">
          <div className="bg-white/5 p-4 px-6 border-b border-white/5 flex items-center justify-between">
            <h2 className="font-bold flex items-center gap-3 text-white">
              <FontAwesomeIcon icon={faMagicWandSparkles} className="text-ui-primary h-4" />
              Explore Game Accounts Section
            </h2>
            <span className="text-[10px] uppercase font-bold tracking-widest text-ui-accent-green">Interactive Grid</span>
          </div>

          <div className="p-8 space-y-12">
            {/* Visual Specs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-widest text-ui-text-dim/50">Visual Specs</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-3 text-ui-text-dim">
                    <div className="w-1.5 h-1.5 bg-ui-primary rounded-full" />
                    <span><strong>Thumbnail Ratio:</strong> <code>3:2</code> (Strictly Enforced)</span>
                  </li>
                  <li className="flex items-center gap-3 text-ui-text-dim">
                    <div className="w-1.5 h-1.5 bg-ui-primary rounded-full" />
                    <span><strong>Grid Layout:</strong> 4 cards per viewport (Desktop 1100px)</span>
                  </li>
                  <li className="flex items-center gap-3 text-ui-text-dim">
                    <div className="w-1.5 h-1.5 bg-ui-primary rounded-full" />
                    <span><strong>Interactivity:</strong> Seamless Infinite Loop Slider</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-6 rounded-sm bg-ui-accent-green/5 border border-ui-accent-green/20">
                 <h4 className="text-xs font-bold text-ui-accent-green uppercase mb-3 text-left">UI Key Updates</h4>
                 <p className="text-xs text-ui-text-dim leading-relaxed text-left">
                   Card dihapus tombol belinya untuk tampilan yang lebih minimalis. Harga menggunakan aksen 
                   warna <strong>#beee11 (Green)</strong>. Slider bergerak 1-per-1 kartu dengan perhitungan 
                   <code>25% + 4px</code> untuk presisi alignment.
                 </p>
              </div>
            </div>

            {/* Database Schema */}
            <div className="space-y-6">
              <h3 className="text-sm font-bold uppercase tracking-widest text-ui-text-dim/50">Database Schema (PostgreSQL)</h3>
              <div className="overflow-x-auto border border-white/5 rounded-sm text-white">
                <table className="w-full text-left text-xs">
                  <thead className="bg-white/5 text-ui-text-dim uppercase font-bold">
                    <tr>
                      <th className="p-3 border-b border-white/5">Field Name</th>
                      <th className="p-3 border-b border-white/5">Data Type</th>
                      <th className="p-3 border-b border-white/5">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr className="hover:bg-white-[2%]">
                      <td className="p-3 font-mono text-ui-primary">id</td>
                      <td className="p-3 text-orange-300">UUID</td>
                      <td className="p-3 text-ui-text-dim">Primary Key (Random Unique ID)</td>
                    </tr>
                    <tr className="hover:bg-white-[2%]">
                      <td className="p-3 font-mono text-ui-primary">title</td>
                      <td className="p-3 text-orange-300">VARCHAR(255)</td>
                      <td className="p-3 text-ui-text-dim">Judul akun (max 2 baris di UI)</td>
                    </tr>
                    <tr className="hover:bg-white-[2%]">
                      <td className="p-3 font-mono text-ui-primary">price</td>
                      <td className="p-3 text-orange-300">DECIMAL(15,2)</td>
                      <td className="p-3 text-ui-text-dim">Harga dalam IDR</td>
                    </tr>
                    <tr className="hover:bg-white-[2%]">
                      <td className="p-3 font-mono text-ui-primary">rating</td>
                      <td className="p-3 text-orange-300">NUMERIC(2,1)</td>
                      <td className="p-3 text-ui-text-dim">Skor rating (ex: 4.8)</td>
                    </tr>
                    <tr className="hover:bg-white-[2%]">
                      <td className="p-3 font-mono text-ui-primary">sold_count</td>
                      <td className="p-3 text-orange-300">INTEGER</td>
                      <td className="p-3 text-ui-text-dim">Jumlah item terjual</td>
                    </tr>
                    <tr className="hover:bg-white-[2%]">
                      <td className="p-3 font-mono text-ui-primary">seller_name</td>
                      <td className="p-3 text-orange-300">VARCHAR(50)</td>
                      <td className="p-3 text-ui-text-dim">Username penjual (Truncated in UI)</td>
                    </tr>
                    <tr className="hover:bg-white-[2%]">
                      <td className="p-3 font-mono text-ui-primary">image_url</td>
                      <td className="p-3 text-orange-300">TEXT</td>
                      <td className="p-3 text-ui-text-dim">Path/URL gambar thumbnail (3:2)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* SQL Code Block */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-widest text-ui-text-dim/50">SQL Implementation</h3>
              <div className="p-5 rounded-sm bg-black/60 border border-white/5 font-mono text-xs text-ui-primary overflow-x-auto">
                <pre>{`CREATE TABLE game_accounts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    price DECIMAL(15, 2) DEFAULT 0.00,
    rating NUMERIC(2, 1) DEFAULT 0.0,
    sold_count INTEGER DEFAULT 0,
    seller_name VARCHAR(50) NOT NULL,
    image_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    is_active BOOLEAN DEFAULT TRUE
);`}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar - Simplified Navigation */}
      <div className="hidden lg:block w-56 shrink-0">
         <div className="sticky top-24 space-y-8">
            <div className="space-y-4">
               <h3 className="text-[10px] uppercase font-black tracking-widest text-ui-text-dim/50 px-3">
                  On this page
               </h3>
               <nav className="flex flex-col">
                  {[
                    { id: "overview", label: "Overview" },
                    { id: "hero-slider", label: "Hero Slider" },
                    { id: "explore-accounts", label: "Explore Accounts" },
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
                  <div className="w-1.5 h-1.5 bg-ui-accent-green rounded-full shadow-[0_0_8px_rgba(var(--gpColor-Green-rgb),0.5)]" />
                  <h4 className="text-[10px] font-bold text-white uppercase tracking-wider">Design Standard</h4>
               </div>
               <p className="text-[10px] text-ui-text-dim leading-relaxed">
                 Hero Slider (1033x344) & Explore Card (3:2) harus presisi untuk kerapihan layout landing.
               </p>
            </div>
         </div>
      </div>
    </div>
  );
}
