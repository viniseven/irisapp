import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import SidebarComponent from "@/components/SidebarComponent";
import { Toaster } from "@/components/ui/sonner";

const manrope = Manrope({
  weight: ["400", "500", "700"],
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IrisApp: Gestão de Treinamentos",
  description: "Gerencie treinamentos institucionais",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <SidebarComponent />
      <main className="w-full p-12">
        <Toaster position="top-center" richColors />
        <html
          lang="pt-br"
          suppressHydrationWarning
          className={manrope.className}
        >
          <body>{children}</body>
        </html>
      </main>
    </SidebarProvider>
  );
}
