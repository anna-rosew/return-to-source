import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';

import './globals.css';
import NavBar from '../components/navigation/NavBar';
import Footer from '../components/layout/Footer';

export const metadata: Metadata = {
  title: '...',
  description: '...',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-customLightBeige">
        <NavBar />
        <main className="flex flex-col">
          <div className="relative flex w-full flex-col overflow-hidden pt-5 text-center md:pt-8 lg:items-center lg:justify-center">
            {children}
            <Analytics />
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
