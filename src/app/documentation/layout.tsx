import { DocSidebar } from "./components/Sidebar";

/**
 * Layout khusus untuk rute /documentation.
 * Memisahkan sidebar dengan konten utama.
 */
export default function DocumentationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-background text-foreground selection:bg-primary/30">
      {/* Sidebar - Fixed on the left */}
      <DocSidebar />

      {/* Main Content Area */}
      <main className="flex-1 ml-64 p-8 lg:p-12 max-w-5xl mx-auto">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          {children}
        </div>
      </main>
    </div>
  );
}
