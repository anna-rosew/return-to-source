import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";
import NavBar from "../components/navigation/NavBar";
import Footer from "../components/layout/Footer";

export const metadata: Metadata = {
  title: "...",
  description: "...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen">
        <NavBar />
        <main className="flex flex-col">
          <div className="relative flex flex-col lg:justify-center lg:items-center overflow-hidden  pt-5 md:pt-8 w-full text-center">
            {children}
            <Analytics />
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
