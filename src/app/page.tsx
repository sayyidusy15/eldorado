import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { ReviewProgress } from "@/components/ui/progress-review";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faPlay, 
  faDownload, 
  faShoppingCart, 
  faHeart, 
  faChartLine 
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div 
      className="relative flex-1 flex flex-col items-center justify-center p-8 text-center overflow-hidden"
      style={{ 
        background: "linear-gradient(-14deg, var(--uiBg-Tertiary) 0%, var(--uiBg-Main) 100%)",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Vector Background Layer */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <Image 
          src="/assets/images/vector-bg.png" 
          alt="background vector" 
          fill 
          priority
          className="object-cover"
        />
      </div>

      <div className="relative z-10 animate-in fade-in zoom-in duration-1000 max-w-4xl w-full">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ui-primary/10 border border-ui-primary/20 text-ui-primary text-[10px] font-bold uppercase tracking-widest mb-6">
            <FontAwesomeIcon icon={faChartLine} className="w-3 h-3" /> System Ready
          </div>
          
          <h1 className="text-7xl font-black tracking-tighter text-ui-text-main mb-4 leading-none">
            LYVEN<span className="text-ui-primary italic">STORE</span>
          </h1>
          
          <p className="text-ui-text-dim text-lg mb-10 leading-relaxed font-medium max-w-xl">
            Sistem komponen telah dimigrasi ke **Font Awesome**. Ikon yang solid dan konsisten untuk pengalaman gaming terbaik.
          </p>
        </div>
        
        {/* Components Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {/* Left Column: Essential Buttons */}
          <div className="p-8 rounded-3xl bg-ui-bg-secondary/40 border border-white/5 backdrop-blur-sm space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-ui-primary/50 mb-4">Core Actions</h3>
            <div className="flex flex-col gap-3">
              <Button variant="gp-primary" size="lg">
                <FontAwesomeIcon icon={faDownload} className="w-4 h-4 mr-2" /> Install Game
              </Button>
              <Button variant="gp-purchase" size="lg">
                <FontAwesomeIcon icon={faPlay} className="w-4 h-4 mr-2" /> Play Now
              </Button>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="gp-ghost">
                  <FontAwesomeIcon icon={faHeart} className="w-4 h-4 mr-2" /> Wishlist
                </Button>
                <Button variant="gp-action">
                   <FontAwesomeIcon icon={faShoppingCart} className="w-4 h-4 mr-2" /> Cart
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column: Interaction & Data */}
          <div className="p-8 rounded-3xl bg-ui-bg-highlight/40 border border-white/5 backdrop-blur-sm space-y-8">
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-ui-primary/50">Form & Sentiment</h3>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-ui-text-dim">Notifications</span>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-ui-text-dim">Auto-update</span>
                <Checkbox defaultChecked />
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-ui-primary/50 block">Recent Reviews</span>
              <ReviewProgress positive={85} negative={15} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
