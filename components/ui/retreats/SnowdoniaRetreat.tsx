import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Flower2,
  Home,
  Salad,
  Trees,
  Flame,
  CalendarDays,
  MapPin,
} from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const included = [
  {
    icon: Flower2,
    title: "Daily Yoga & Practices",
    items: [
      "A seasonal blend of movement, meditation, mantra, and deep relaxation — suitable for all levels.",
      "Rejuvenating and restorative sessions to shake off winter heaviness.",
      "Small group sessions to gently support and deepen your practice.",
    ],
  },
  {
    icon: Home,
    title: "Peaceful Accommodation",
    items: [
      "3 nights in a comfortable single en-suite room.",
      "4 days nestled in a stunning valley, surrounded by the beauty of Snowdonia in Spring.",
    ],
  },
  {
    icon: Salad,
    title: "Nourishing Plant-Based Meals",
    items: [
      "All meals prepared for you — delicious daily breakfast, lunch, and dinner.",
      "Fresh, locally sourced, seasonal ingredients to support lightness and vitality.",
      "Herbal teas and refreshments available throughout the day.",
    ],
  },
  {
    icon: Trees,
    title: "Time to Rest, Reset & Reconnect",
    items: [
      "Space to slow down, reflect, and realign with the season of renewal.",
      "Pristine fresh air, stunning walks in the valley, and quiet moments in nature.",
      "Evenings gathered around the fire pit under dark, starry skies.",
    ],
  },
  {
    icon: Flame,
    title: "The World Peace Flame",
    items: [
      "We're staying at Snowdonia Mountain Lodge, home to the World Peace Flame — burning continuously since 1999.",
      "A quiet, powerful symbol of unity and peace that we'll honour during our time together.",
    ],
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

const SnowdoniaRetreat = () => {
  return (
    <div className="w-full">

      {/* Hero image */}
      <div className="relative w-full h-[50vh] min-h-[320px] rounded-xl overflow-hidden mb-10">
        <Image
          src="/Assets/Images/snowdonia26.webp"
          alt="Snowdonia Spring Retreat"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30 rounded-xl" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
          <p className="text-xs uppercase tracking-widest mb-3 opacity-80">
            April 2026 · Snowdonia
          </p>
          <h1 className="font-jomolhari text-4xl md:text-5xl mb-4">
            Spring Yoga Retreat
          </h1>
          <span className="bg-customSienna text-white text-xs font-semibold px-4 py-1.5 rounded-full">
            Only 2 spaces remaining
          </span>
        </div>
      </div>

      {/* Intro prose */}
      <div className="max-w-2xl mx-auto text-center mb-12 space-y-4">
        <p className="italic text-customSienna font-semibold">
          As the snow melts from the mountain tops and the streams come alive
          with rushing water, the sleeping land awakens.
        </p>
        <p>
          Join me for a Spring Yoga Retreat in the heart of Snowdonia, where
          you can feel the pulse of the Earth, steady and ancient. This is an
          invitation to step away from the noise and chaos of the world and shed
          the skins of yesterday. Come and settle into the rhythms of nature.
        </p>
        <p>
          Remember the cyclical and transformative power of the seasons.
          Reconnect with the life within you, mirrored in the beauty of nature.
        </p>
        <p className="text-black/65">
          Time changes on retreat — life changing insights and transformation
          happen in an instant. The magic of the place, and the shared focus of
          the group makes things possible that cannot be planned or known in
          advance. This is the reason I love teaching retreats. If you feel an
          inner &lsquo;yes&rsquo; — I&apos;d love you to come.
        </p>
      </div>

      {/* Dates & venue */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 max-w-2xl mx-auto">
        <div className="flex items-start gap-4 border border-customBeige/70 rounded-xl p-5 bg-white">
          <CalendarDays className="w-5 h-5 mt-0.5 shrink-0 text-customTeal" strokeWidth={1.5} />
          <div>
            <p className="text-xs uppercase tracking-widest text-black/50 mb-1">Dates</p>
            <p className="font-semibold text-sm">Thu 23rd – Sun 26th April 2026</p>
            <p className="text-xs text-black/55 mt-0.5">Arrival from 3.00pm · Departure 11.00am</p>
          </div>
        </div>
        <div className="flex items-start gap-4 border border-customBeige/70 rounded-xl p-5 bg-white">
          <MapPin className="w-5 h-5 mt-0.5 shrink-0 text-customTeal" strokeWidth={1.5} />
          <div>
            <p className="text-xs uppercase tracking-widest text-black/50 mb-1">Venue</p>
            <p className="font-semibold text-sm">Snowdonia Mountain Lodge</p>
            <p className="text-xs text-black/55 mt-0.5">A stunning valley in the heart of Snowdonia</p>
          </div>
        </div>
      </div>

      {/* Photo strip */}
      <div className="grid grid-cols-3 gap-2 mb-12 rounded-xl overflow-hidden">
        {["snowdonia25-1.webp", "snowdonia25-3.webp", "snowdonia25-5.webp"].map((img, i) => (
          <div key={i} className="relative h-40 md:h-56">
            <Image
              src={`/Assets/Images/${img}`}
              alt="Snowdonia retreat"
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Rose's personal note */}
      <div className="max-w-2xl mx-auto mb-12 text-center space-y-4">
        <p>
          Come and spend deep, reconnecting time on the mat, and deep,
          reconnecting time in nature. There&apos;ll be moments for reflection,
          solitude and connection. And yes — there will be plenty of time to
          laugh, chat, and enjoy the simple pleasure of good food and good
          company.
        </p>
        <p className="text-black/65">
          The Retreat is four days, and yet on retreat those days can be life
          changing. I&apos;ve had many such experiences — leaving home not
          knowing what to expect, tired and not altogether convinced it will be
          worth the journey. Only to return home on Sunday feeling a kind of
          soul revival — a renewed sense of purpose and enthusiasm for life.
        </p>
      </div>

      {/* What's included */}
      <div className="mb-12">
        <h2 className="text-center mb-8">What&apos;s Included</h2>
        <p className="text-center text-black/60 text-sm max-w-xl mx-auto mb-8">
          Everything is taken care of, so you can simply arrive, breathe in the
          beauty of the valley, and allow yourself to be restored and
          revitalised.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {included.map((item, i) => {
            const Icon = item.icon;
            return (
              <Card
                key={i}
                className="border border-customBeige/60 bg-white text-left"
              >
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="w-5 h-5 text-customTeal shrink-0" strokeWidth={1.5} />
                    <h3 className="text-base font-semibold m-0">{item.title}</h3>
                  </div>
                  <ul className="space-y-1.5">
                    {item.items.map((point, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-black/65">
                        <span className="text-customTeal mt-0.5 shrink-0 text-xs">✦</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Pricing & CTA */}
      <div className="max-w-sm mx-auto text-center border border-customTeal rounded-2xl overflow-hidden mb-12">
        <div className="bg-customTeal py-5 px-6">
          <p className="text-white text-xs uppercase tracking-widest mb-1">Your Investment</p>
          <p className="font-jomolhari text-5xl text-white">£645</p>
          <p className="text-white/75 text-sm mt-1">Payment plans available</p>
        </div>
        <div className="p-6 bg-white space-y-3">
          <p className="text-sm text-customSienna font-semibold">
            Only 2 spaces remaining
          </p>
          <p className="text-sm text-black/60">
            If you&apos;d like one of the remaining places, email Rose to register.
          </p>
          <Link href="/contact">
            <Button variant="secondary" size="lg" className="w-full mt-2">
              Reserve Your Place
            </Button>
          </Link>
        </div>
      </div>

      {/* Closing */}
      <div className="max-w-md mx-auto text-center mb-8">
        <p className="italic text-black/50 text-sm">
          &ldquo;I&apos;d love you to come.&rdquo;
        </p>
        <p className="text-sm mt-2">Love, Rose</p>
      </div>

    </div>
  );
};

export default SnowdoniaRetreat;
