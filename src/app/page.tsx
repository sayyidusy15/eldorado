export default function Home() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
      <div className="w-24 h-24 rounded-3xl bg-gp-blue flex items-center justify-center text-4xl font-black text-white shadow-2xl shadow-gp-blue/20 mb-8 border border-gp-blue-hi/50 animate-pulse">
        L
      </div>
      <h1 className="text-5xl font-black tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-gp-store-lightest">
        LYVENSTORE
      </h1>
      <p className="text-gp-system-light max-w-md leading-relaxed mb-8">
        Base styling berhasil diaplikasikan menggunakan core colors sistem Steam. 
        Siap untuk membangun marketplace digital game kelas dunia.
      </p>
      
      <div className="flex gap-4">
        <div className="px-6 py-2 rounded-full bg-gp-store-dark border border-gp-store-grey text-xs font-bold text-gp-store-lightest uppercase tracking-widest">
          Base Setup Ready
        </div>
      </div>
    </div>
  );
}
