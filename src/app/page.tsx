import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { CheckCircle2, Shield, Zap, Target } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex-1 w-full bg-background pb-20">
      {/* Hero Section */}
      <section className="relative w-full border-b border-border bg-card/50 py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
        <div className="container relative mx-auto px-4 lg:px-8 text-center flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground max-w-4xl">
            Welcome to <span className="text-primary">LyvenStore</span> Foundation
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl">
            Project setup awal untuk marketplace digital game C2C telah berhasil dibuat.
            Fondasi ini menggunakan Next.js App Router, Tailwind CSS 4.0, dan komponen UI yang reusable.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="#components">Explore Components</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="https://github.com" target="_blank">View Repository</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Setup Status Section */}
      <section className="container mx-auto px-4 lg:px-8 py-20" id="components">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Project Foundation Status</h2>
          <p className="mt-4 text-muted-foreground">Struktur dasar yang telah di-setup untuk skalabilitas masa depan.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="pb-4">
              <Zap className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Next.js 15+</CardTitle>
              <CardDescription>App Router & Server Components</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Menggunakan struktur <code>src/app</code> untuk routing, memberikan performa optimal dan SEO friendly.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-4">
              <Target className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Tailwind CSS v4</CardTitle>
              <CardDescription>Dark Mode First</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Sistem warna yang konsisten dengan estetika dark mode premium khas Steam & Eldorado.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-4">
              <Shield className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Scalable Structure</CardTitle>
              <CardDescription>Components & Layouts</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Pemisahan yang jelas antara <code>components/ui</code>, <code>components/layout</code>, dan utilities.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-4">
              <CheckCircle2 className="h-8 w-8 text-primary mb-2" />
              <CardTitle>UI Primitives</CardTitle>
              <CardDescription>Radix UI & class-variance-authority</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Sistem pembuat komponen UI yang dapat dikustomisasi, dimodifikasi, dan dipakai ulang (Reusable).
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Component Sandbox */}
      <section className="container mx-auto px-4 lg:px-8 py-10">
        <Card className="border-border/50 bg-secondary/10">
          <CardHeader>
            <CardTitle>Component Sandbox</CardTitle>
            <CardDescription>Contoh implementasi Button Variant & Reusable Components</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-4">
            <Button>Default Button</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost Button</Button>
            <Button variant="link">Link Button</Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
