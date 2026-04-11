import Image from "next/image";
import { HeroSlider } from "@/components/landing/HeroSlider";

export default function Home() {
  return (
    <main className="relative flex-1 bg-ui-bg-main overflow-x-hidden pb-20">
      {/* Background Vector (Subtle) */}
      <div className="absolute top-0 left-0 right-0 h-[800px] z-0 opacity-10 pointer-events-none">
        <Image 
          src="/assets/images/vector-bg.png" 
          alt="background" 
          fill 
          className="object-cover object-top"
          priority
        />
      </div>

      {/* LANDING PAGE CONTENT CONTAINER (1100px) */}
      <div className="relative z-10 max-w-[1100px] mx-auto pt-8 px-4 lg:px-0">
        <HeroSlider />
        
        {/* Future sections will be added here as separate components in src/components/landing/ */}
      </div>
    </main>
  );
}
