import type { Metadata } from "next";

import "./globals.css";
import NavBar from "./components/navigation/NavBar";
import Footer from "./components/Footer";

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
        <main className="flex flex-col items-center">
          {" "}
          <div className="relative flex flex-col justify-left items-left lg:justify-center lg:items-center lg:mx-64 overflow-hidden pt-7">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
