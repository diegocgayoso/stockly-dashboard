import type { Metadata } from "next";
import "./globals.css";
import SideBar from "./_components/sidebar";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "auto",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Stockly",
  description: "DashBoard Stockly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`  ${inter.className} antialiased`}>
        <div className="flex gap-8 h-full">
          <SideBar />
          <main className="py-8">
          {children}

          </main>
        </div>
      </body>
    </html>
  );
}
