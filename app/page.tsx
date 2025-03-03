import HeroImage from "../components/layout/HeroImage";
import { Metadata } from "next";
import HomeScroll from "../components/layout/HomeScroll";
import { Button } from "../components/ui/button";
import Link from "next/link";
import HomeCTA from "@/components/ui/home/HomeCTA";

export const metadata: Metadata = {
  title: "Rose Long | Return to Source",
  description:
    "Discover how your body, mind, and breath work together for transformation with Rose Long, a dual-qualified Yoga Teacher and Life Coach. Begin your journey of self-awareness and growth through personalized sessions...",
  openGraph: {
    type: "website",
    url: "https://www.rose-long.com",
    images: "http://localhost:3000/public/Assets/logo2",
  },
  keywords: [
    "yoga",
    "life coaching and yoga",
    "holistic life coaching",
    "wellness coaching by Rose",
    "personal growth coaching",
    "mindful yoga sessions",
    "life coach Rose",
    "stress relief yoga",
    "yoga for personal growth",
    "life coach",
    "Rose yoga and wellness",
    "yoga and mindfulness coaching",
    "wellbeing and health",
  ],
};

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <HeroImage />
      <Link href="/work">
        <Button variant="primary" size="lg" className="my-6 mx-auto">
          Find your way out
        </Button>
      </Link>
      <div className="w-full bg-black">
        <HomeScroll />
      </div>
      <div className="w-full bg-customGreen">
        <HomeCTA />
      </div>
    </div>
  );
}
