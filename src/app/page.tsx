export default function Home() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-ui-bg-main">
      <div className="w-24 h-24 rounded-3xl bg-ui-primary flex items-center justify-center text-4xl font-black text-ui-bg-main shadow-2xl shadow-ui-primary/20 mb-8 border border-white/10 animate-pulse">
        L
      </div>
      
      <h1 className="text-5xl font-black tracking-tighter mb-4 text-ui-text-main">
        LYVENSTORE
      </h1>
      
      <p className="text-ui-text-dim max-w-md leading-relaxed mb-10">
        Design system komponen telah berhasil di-setup. Menggunakan variasi background 
        <span className="text-ui-primary font-medium mx-1">Highlight</span>, 
        <span className="text-ui-accent-green font-medium mx-1">Accent Green</span>, dan 
        <span className="text-ui-text-main font-medium mx-1">Text Main</span>.
      </p>
      
      <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
        <div className="p-4 rounded-xl bg-ui-bg-highlight border border-white/5 text-sm font-bold text-ui-text-main">
          Highlight State
        </div>
        <div className="p-4 rounded-xl bg-ui-bg-secondary border border-white/5 text-sm font-bold text-ui-text-main">
          Secondary Bg
        </div>
        <div className="p-4 rounded-xl bg-ui-bg-tertiary border border-white/5 text-sm font-bold text-ui-text-main">
          Tertiary Bg
        </div>
        <div className="p-4 rounded-xl bg-ui-bg-hover border border-white/5 text-sm font-bold text-ui-text-main transition-colors hover:bg-ui-primary hover:text-ui-bg-main cursor-pointer">
          Hover Me
        </div>
      </div>

      <div className="mt-12 flex gap-3">
        <div className="w-3 h-3 rounded-full bg-ui-accent-green shadow-lg shadow-ui-accent-green/20" />
        <div className="w-3 h-3 rounded-full bg-ui-accent-red shadow-lg shadow-ui-accent-red/20" />
        <div className="w-3 h-3 rounded-full bg-ui-accent-yellow shadow-lg shadow-ui-accent-yellow/20" />
      </div>
    </div>
  );
}
