import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faCheckCircle, 
  faBrain, 
  faCode, 
  faPalette, 
  faRocket,
  faDatabase,
  faKeyboard
} from "@fortawesome/free-solid-svg-icons";

/**
 * Halaman dokumentasi Skill Tree (Visualisasi skills.sh).
 * Menampilkan list skill yang terlibat dalam project ini (referensi dari qwibly).
 */
export default function SkillTreePage() {
  const skillCategories = [
    {
      title: "Technical Stack (Core & Patterns)",
      icon: faCode,
      skills: [
        { name: "Next.js App Router Patterns", level: "Advanced", status: "Active" },
        { name: "TypeScript Advanced Types", level: "Advanced", status: "Active" },
        { name: "JavaScript SDK Integration", level: "Intermediate", status: "Active" },
        { name: "Tailwind Design System", level: "Advanced", status: "Active" },
        { name: "Agent Skill: find-skills", level: "Helper", status: "Installed" },
        { name: "Agent Skill: web-search", level: "Helper", status: "Installed" },
      ]
    },
    {
      title: "Database & Backend",
      icon: faDatabase,
      skills: [
        { name: "PostgreSQL Table Design", level: "Advanced", status: "Active" },
        { name: "Supabase Postgres Best Practices", level: "Intermediate", status: "Active" },
        { name: "WP REST API Integration", level: "Intermediate", status: "Active" },
      ]
    },
    {
      title: "Design & Interaction",
      icon: faPalette,
      skills: [
        { name: "Framer Motion Animator", level: "Expert", status: "Installed" },
        { name: "Web Design Guidelines", level: "Expert", status: "Active" },
        { name: "Vercel React Best Practices", level: "Advanced", status: "Active" },
        { name: "UI/UX (Gaming Aesthetic)", level: "Specialist", status: "Active" },
      ]
    },
    {
      title: "Process & Deployment",
      icon: faKeyboard,
      skills: [
        { name: "Deploy to Vercel", level: "Advanced", status: "Active" },
        { name: "Git Commit Standards", level: "Advanced", status: "Active" },
        { name: "Brainstorming & Ideation", level: "Master", status: "Active" },
        { name: "Technical Documentation", level: "Advanced", status: "Active" },
        { name: "Technical Writing Styleguide", level: "Expert", status: "Installed" },
      ]
    }
  ];

  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-4xl font-extrabold tracking-tight mb-4 flex items-center gap-3">
          Skill Tree <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full uppercase tracking-tighter">Powered by skills.sh</span>
        </h1>
        <p className="text-muted-foreground text-lg">
          Representasi visual dari kemampuan teknis dan pengalaman yang di-migrate dan 
          diaplikasikan di dalam project LyvenStore.
        </p>
      </section>

      <div className="grid gap-8">
        {skillCategories.map((category, idx) => (
          <section key={idx} className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-ui-bg-secondary flex items-center justify-center text-primary border border-white/5">
                <FontAwesomeIcon icon={category.icon} />
              </div>
              <h2 className="text-xl font-bold">{category.title}</h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {category.skills.map((skill, sIdx) => (
                <div key={sIdx} className="group p-4 rounded-xl border border-border/30 bg-secondary/5 hover:bg-secondary/10 transition-all flex items-center justify-between">
                  <div className="space-y-1">
                    <h3 className="font-bold text-sm text-ui-text-main">{skill.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-muted-foreground uppercase tracking-widest">{skill.level}</span>
                      <span className="w-1 h-1 rounded-full bg-border" />
                      <span className={`text-[10px] font-bold uppercase tracking-widest ${skill.status === "Active" || skill.status === "Installed" ? "text-ui-accent-green" : "text-ui-accent-yellow"}`}>
                        {skill.status}
                      </span>
                    </div>
                  </div>
                  <FontAwesomeIcon 
                    icon={faCheckCircle} 
                    className={`w-4 h-4 transition-colors ${skill.status === "Active" || skill.status === "Installed" ? "text-ui-accent-green/50 group-hover:text-ui-accent-green" : "text-muted-foreground/30"}`} 
                  />
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Installation Cheat Sheet</h2>
        <p className="text-sm text-muted-foreground">
          Gunakan perintah di bawah ini untuk menginstal ulang fungsionalitas agent skills di project ini atau project baru:
        </p>
        <div className="p-6 rounded-xl bg-ui-bg-tertiary border border-border/50 font-mono text-sm overflow-x-auto">
          <pre className="text-ui-primary leading-loose">
{`# Install Core Agent Skills
npx skills add vercel-labs/skills@find-skills -y
npx skills add marcfargas/skills@web-search -y
npx skills add vercel-labs/agent-skills@deploy-to-vercel -y
npx skills add vercel-labs/agent-skills@web-design-guidelines -y
npx skills add vercel-labs/agent-skills@vercel-react-best-practices -y
npx skills add mindrally/skills@framer-motion -y
npx skills add alpoxdev/hypercore@git-commit -y
npx skills add artivilla/agents-config@technical-writing-styleguide -y`}
          </pre>
        </div>
      </section>

      <section className="p-8 rounded-2xl bg-ui-bg-secondary/30 border border-primary/20 flex flex-col items-center text-center space-y-4">
        <FontAwesomeIcon icon={faRocket} className="text-3xl text-primary animate-bounce" />
        <h3 className="font-bold text-lg leading-none">Global Skillset Synced</h3>
        <p className="text-sm text-muted-foreground max-w-sm italic">
          Skillset dari project referensi (Qwibly) telah berhasil disinkronisasi ke dalam fondasi LyvenStore.
        </p>
      </section>
    </div>
  );
}
