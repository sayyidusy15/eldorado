import Image from "next/image";
import { HeroSlider } from "@/components/landing/HeroSlider";
import { ExploreAccounts } from "@/components/landing/ExploreAccounts";

export default function Home() {
  return (
    <main 
      className="relative flex-1 bg-ui-bg-main overflow-x-hidden pb-20"
      style={{ 
        background: "linear-gradient(-14deg, var(--uiBg-Tertiary) 0%, var(--uiBg-Main) 100%)",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Background Vector (Subtle) */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <Image 
          src="/assets/images/vector-bg.png" 
          alt="background" 
          fill 
          className="object-cover"
          priority
        />
      </div>

      {/* LANDING PAGE CONTENT CONTAINER (1100px) */}
      <div className="relative z-10 max-w-[1100px] mx-auto pt-8 px-4 lg:px-0 space-y-16">
        <HeroSlider />
        
        <ExploreAccounts />
        
        {/* Future sections will be added here as separate components in src/components/landing/ */}
      </div>
    </main>
  );
}
