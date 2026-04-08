import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const motivaSans = localFont({
  src: [
    {
      path: "../fonts/MotivaSansThin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../fonts/MotivaSansLight.woff.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/MotivaSansRegular.woff.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/MotivaSansMedium.woff.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/MotivaSansBold.woff.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/MotivaSansExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/MotivaSansBlack.woff.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-motiva-sans",
});

export const metadata: Metadata = {
  title: "LyvenStore - Digital Game Marketplace",
  description: "Marketplace terpercaya untuk beli dan jual akun game, item, dan top up. Transaksi aman dengan sistem escrow dan garansi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${motivaSans.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <main className="flex-1 flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
