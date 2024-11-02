import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Return to Source",
  description:
    "Discover how your body, mind, and breath work together for transformation with Rose Long, a dual-qualified Yoga Teacher and Life Coach. Begin your journey of self-awareness and growth through personalized sessions. Learn to unlock your potential, develop inner guidance, and make lasting changes in your life. Experience powerful tools and daily practices that will help you release old patterns and step into a more empowered future. Explore new dimensions of well-being and self-discovery—take the first step towards a more fulfilled life today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
