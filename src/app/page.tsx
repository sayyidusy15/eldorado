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

      
    </div>
  );
}
