import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Info, Code2, Rocket } from "lucide-react";

/**
 * Halaman utama dokumentasi.
 * Memberikan gambaran umum fase proyek saat ini.
 */
export default function DocumentationPage() {
  return (
    <div className="space-y-12">
      {/* Header Section */}
      <section>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
          <Rocket className="w-3 h-3" /> Fase: Project Setup
        </div>
        <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-6">
          Project Documentation
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
          Selamat datang di portal dokumentasi Eldorado. Halaman ini digunakan untuk mencatat 
          setiap keputusan teknis, panduan desain, dan referensi komponen di dalam project ini.
        </p>
      </section>

      <hr className="border-border/50" />

      {/* Overview Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="bg-secondary/5 border-border/50">
          <CardHeader>
            <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center mb-2">
              <Info className="w-5 h-5 text-blue-500" />
            </div>
            <CardTitle className="text-lg">Status Saat Ini</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Project sedang dalam fase inisialisasi framework, penentuan sistem warna, dan pemasangan fonts lokal.
          </CardContent>
        </Card>

        <Card className="bg-secondary/5 border-border/50">
          <CardHeader>
            <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center mb-2">
              <Code2 className="w-5 h-5 text-green-500" />
            </div>
            <CardTitle className="text-lg">Tech Stack</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Next.js 15 (App Router), Tailwind CSS v4, Lucide Icons, dan Shadcn-inspired UI Primitives.
          </CardContent>
        </Card>
      </div>

      {/* Guide Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Apa yang sudah di-setup?</h2>
        <div className="prose prose-invert max-w-none">
          <p>
            Saat ini, kita telah menyelesaikan beberapa bagian kritikal dari fondasi aplikasi:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              <strong>Sistem Font:</strong> Pemasangan font <em>Motiva Sans</em> (variasi lengkap dari Thin ke Black).
            </li>
            <li>
              <strong>Palette Warna:</strong> Warna gelap premium berbasis <em>Eldorado/Steam aesthetic</em>.
            </li>
            <li>
              <strong>Struktur Folder:</strong> Clean architecture yang memisahkan antara UI logic, components, dan domain logic.
            </li>
          </ul>
          <p className="text-sm italic mt-8 text-muted-foreground">
            Pilih menu di sidebar sebelah kiri untuk melihat detail teknis dari masing-masing bagian.
          </p>
        </div>
      </section>
    </div>
  );
}
