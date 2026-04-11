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
    <div className="flex justify-between relative pb-20">
      <div className="max-w-[850px] w-full space-y-16 min-w-0">
        <section id="overview" className="scroll-mt-24">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4 flex items-center gap-3 text-white">
            <FontAwesomeIcon icon={faFolderTree} className="text-ui-primary h-8" />
            Project Structure
          </h1>
          <p className="text-ui-text-dim text-lg max-w-3xl border-l-4 border-ui-primary pl-6 py-2 leading-relaxed">
            Organisasi file dan folder di dalam project Eldorado yang dirancang untuk 
            skalabilitas dan kemudahan pemeliharaan.
          </p>
        </section>

        <div className="space-y-8">
          {structure.map((group, idx) => (
            <div 
              key={idx} 
              id={group.dir.replace(/\//g, "-")} 
              className="bg-ui-bg-secondary/20 rounded-sm border border-white/5 overflow-hidden scroll-mt-24"
            >
              <div className="bg-white/5 p-4 px-6 border-b border-white/5 flex items-center justify-between">
                <h2 className="font-bold flex items-center gap-3 text-white">
                  <FontAwesomeIcon icon={faFolderTree} className="text-ui-text-dim h-3.5" />
                  {group.dir}
                </h2>
                <span className="text-[10px] uppercase font-bold tracking-widest text-ui-text-dim/50">{group.desc}</span>
              </div>
              
              <div className="p-6">
                <div className="grid gap-3">
                  {group.children.map((child, cIdx) => (
                    <div key={cIdx} className="flex items-center justify-between p-3 rounded-sm border border-transparent hover:border-white/5 hover:bg-white/5 transition-all group">
                      <div className="flex items-center gap-3">
                        <FontAwesomeIcon 
                          icon={child.name.includes("/") ? faCube : faFileCode} 
                          className={cn(
                            "h-3.5 transition-colors",
                            child.name.includes("/") ? "text-ui-primary/50" : "text-ui-text-dim/30 group-hover:text-ui-primary"
                          )}
                        />
                        <code className="text-sm font-bold text-ui-text-dim group-hover:text-white transition-colors">
                          {child.name}
                        </code>
                      </div>
                      <span className="text-xs text-ui-text-dim/60 italic group-hover:text-ui-text-dim transition-colors text-right">
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

      {/* Right Sidebar */}
      <div className="hidden lg:block w-56 shrink-0">
         <div className="sticky top-24 space-y-8">
            <div className="space-y-4">
               <h3 className="text-[10px] uppercase font-black tracking-widest text-ui-text-dim/50 px-3">
                  On this page
               </h3>
               <nav className="flex flex-col">
                  {[
                    { id: "overview", label: "Overview" },
                    ...structure.map(g => ({ 
                      id: g.dir.replace(/\//g, "-"), 
                      label: g.dir.replace("src/", "") 
                    }))
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
         </div>
      </div>
    </div>
  );
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
