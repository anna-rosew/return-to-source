"use client";

import "./globals.css";
import { Navbar } from "../app/Components/Navbar";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SessionProvider>
        <body>
          <Navbar />
          <Toaster />
          {children}
        </body>
      </SessionProvider>
    </html>
  );
}
