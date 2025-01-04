"use client";
import Head from "next/head";

import "./globals.css";
import NavBar from "./components/navigation/NavBar";

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

      <body>
        <NavBar />
        <main className="flex flex-col items-center">
          {" "}
          <div className="relative flex flex-col justify-left items-left lg:justify-center lg:items-center lg:mx-64 overflow-hidden pt-7">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
