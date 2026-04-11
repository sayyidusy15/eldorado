import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faArrowRight, faExpand, faClock, faMagicWandSparkles } from "@fortawesome/free-solid-svg-icons";

export default function LandingPageDoc() {
  return (
    <div className="space-y-12 pb-20">
      <section>
        <h1 className="text-4xl font-extrabold tracking-tight mb-4 flex items-center gap-3">
          <FontAwesomeIcon icon={faMagicWandSparkles} className="text-ui-primary h-8" />
          Landing Page Sections
        </h1>
        <p className="text-muted-foreground text-lg max-w-3xl border-l-4 border-ui-primary pl-6 py-2">
          Halaman utama Eldorado terdiri dari komponen-komponen modular yang dirancang untuk 
          memberikan pengalaman marketplace gaming yang imersif dan berkinerja tinggi.
        </p>
      </section>

      {/* Hero Section Container */}
      <div className="bg-ui-bg-secondary/20 rounded-sm border border-white/5 overflow-hidden">
        <div className="bg-white/5 p-4 px-6 border-b border-white/5 flex items-center justify-between">
          <h2 className="font-bold flex items-center gap-3">
            <FontAwesomeIcon icon={faImage} className="text-ui-primary h-4" />
            Hero Slider Section
          </h2>
          <span className="text-[10px] uppercase font-bold tracking-widest text-ui-primary">Main Feature</span>
        </div>

        <div className="p-8 space-y-10">
          {/* Spec Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 rounded-sm bg-black/20 border border-white/5 space-y-2">
              <div className="flex items-center justify-between text-xs text-ui-text-dim">
                <span>Dimensions</span>
                <FontAwesomeIcon icon={faExpand} className="h-3" />
              </div>
              <div className="text-xl font-black text-white italic">1033 x 344<span className="text-xs ml-1 not-italic font-normal opacity-50">px</span></div>
            </div>

            <div className="p-4 rounded-sm bg-black/20 border border-white/5 space-y-2">
              <div className="flex items-center justify-between text-xs text-ui-text-dim">
                <span>Auto-play Delay</span>
                <FontAwesomeIcon icon={faClock} className="h-3" />
              </div>
              <div className="text-xl font-black text-white italic">10.0<span className="text-xs ml-1 not-italic font-normal opacity-50">sec</span></div>
            </div>

            <div className="p-4 rounded-sm bg-black/20 border border-white/5 space-y-2 lg:col-span-2">
              <div className="flex items-center justify-between text-xs text-ui-text-dim">
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
            <div className="p-5 rounded-sm bg-black/40 border border-white/5 font-mono text-xs text-blue-300">
              <pre>{`// Import di src/app/page.tsx
import { HeroSlider } from "@/components/landing/HeroSlider";

<div className="max-w-[1100px] mx-auto">
  <HeroSlider />
</div>`}</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
