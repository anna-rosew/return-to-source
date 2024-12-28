import HeroImage from "@/app/components/HeroImage";
import { Metadata } from "next";
import HomeScroll from "./components/HomeScroll";
import { Button } from "./components/ui/Button";
import Footer from "./components/Footer";

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
    <div className="relative flex flex-col justify-left items-left lg:justify-center lg:items-center overflow-hidden">
      {/* Content */}
      <h4 className="uppercase text-[28px] lg:text-[48px] leading-2 text-center pt-10 pl-4 font-neato">
        Breath - Mind - Body
      </h4>
      <p className="p-4 lg:mx-[290px]  text-center text-customTeal">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <HeroImage />
      <Button variant="primary" size="lg" className="my-5 mx-2 " href="/work">
        Start my journey
      </Button>
      <div className="h-full w-full bg-black">
        <HomeScroll />
      </div>
      <Footer />
    </div>
  );
}
