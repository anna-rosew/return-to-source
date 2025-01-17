import type { Metadata } from "next";

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
      <body>
        <NavBar />
        <main className="flex flex-col">
          <div className="relative flex flex-col lg:justify-center lg:items-center overflow-hidden  py-5 md:py-8 w-full text-center">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
