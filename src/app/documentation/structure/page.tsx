import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderTree, faFileCode, faCube, faPalette } from "@fortawesome/free-solid-svg-icons";

export default function ProjectStructurePage() {
  const structure = [
    {
      dir: "src/app",
      desc: "Routing & Page layouts (Next.js App Router)",
      children: [
        { name: "documentation/*", desc: "Halamans portal dokumentasi project" },
        { name: "layout.tsx", desc: "Root layout aplikasi & Font Awesome config" },
        { name: "page.tsx", desc: "Main landing page marketplace" },
        { name: "globals.css", desc: "Tailwind themes & GP custom design variables" },
      ]
    },
    {
      dir: "src/components/layout",
      desc: "Komponen navigasi global",
      children: [
        { name: "Navbar.tsx", desc: "Main composer untuk Top & Secondary Navbar" },
        { name: "TopNavbar.tsx", desc: "Bar atas: Logo, Search, User Actions" },
        { name: "SecondaryNavbar.tsx", desc: "Bar navigasi kategori & Dropdown triggers" },
        { name: "NavbarDropdown.tsx", desc: "Panel dropdown list game premium" },
        { name: "SearchSuggestions.tsx", desc: "Panel saran pencarian popular categories" },
      ]
    },
    {
      dir: "src/components/ui",
      desc: "Atomic UI Components (Reusable library)",
      children: [
        { name: "button.tsx", desc: "GP-variants buttons (Primary, Green, Ghost)" },
        { name: "input.tsx", desc: "Styled inputs untuk search & forms" },
        { name: "checkbox.tsx", desc: "Custom FA6 checkbox component" },
        { name: "switch.tsx", desc: "Animated toggle switch" },
        { name: "progress-review.tsx", desc: "Sentiment bar (Green/Red balance)" },
      ]
    },
    {
      dir: "public/assets",
      desc: "Static files & assets",
      children: [
        { name: "fonts/*", desc: "Local Motiva Sans font files" },
        { name: "images/*", desc: "Vector backgrounds & project graphics" },
      ]
    }
  ];

  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-4xl font-extrabold tracking-tight mb-4 flex items-center gap-3">
          <FontAwesomeIcon icon={faFolderTree} className="text-ui-primary h-8" />
          Project Structure
        </h1>
        <p className="text-muted-foreground text-lg max-w-3xl">
          Organisasi file dan folder di dalam project Eldorado yang dirancang untuk 
          skalabilitas dan kemudahan pemeliharaan.
        </p>
      </section>

      <div className="space-y-8">
        {structure.map((group, idx) => (
          <div key={idx} className="bg-ui-bg-secondary/20 rounded-2xl border border-white/5 overflow-hidden">
            <div className="bg-ui-bg-secondary/40 p-4 px-6 border-b border-white/5 flex items-center justify-between">
              <h2 className="font-bold flex items-center gap-3">
                <FontAwesomeIcon icon={faFolderTree} className="text-ui-text-dim h-3.5" />
                {group.dir}
              </h2>
              <span className="text-[10px] uppercase font-bold tracking-widest text-ui-text-dim/50">{group.desc}</span>
            </div>
            
            <div className="p-6">
              <div className="grid gap-3">
                {group.children.map((child, cIdx) => (
                  <div key={cIdx} className="flex items-center justify-between p-3 rounded-xl border border-transparent hover:border-white/5 hover:bg-white/5 transition-all group">
                    <div className="flex items-center gap-3">
                      <FontAwesomeIcon 
                        icon={child.name.includes("/") ? faCube : faFileCode} 
                        className={cn(
                          "h-3.5 transition-colors",
                          child.name.includes("/") ? "text-ui-primary/50" : "text-ui-text-dim/30 group-hover:text-ui-primary"
                        )}
                      />
                      <code className="text-sm font-bold text-ui-text-main group-hover:text-white transition-colors">
                        {child.name}
                      </code>
                    </div>
                    <span className="text-xs text-ui-text-dim/60 italic group-hover:text-ui-text-dim transition-colors">
                      {child.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
