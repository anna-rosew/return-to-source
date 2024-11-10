"use client";
import Head from "next/head";

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
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          href="/favicon-180x180.png"
          sizes="180x180"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>
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
