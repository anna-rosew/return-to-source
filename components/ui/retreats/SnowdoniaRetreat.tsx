import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Flower2, Home, Salad, Trees, Flame, CalendarDays, MapPin } from 'lucide-react';

// ─── Data ─────────────────────────────────────────────────────────────────────

const included = [
  {
    icon: Flower2,
    title: 'Daily Yoga & Practices',
    items: [
      'A seasonal blend of movement, meditation, mantra, and deep relaxation — suitable for all levels.',
      'Rejuvenating and restorative sessions to shake off winter heaviness.',
      'Small group sessions to gently support and deepen your practice.',
    ],
  },
  {
    icon: Home,
    title: 'Peaceful Accommodation',
    items: [
      '3 nights in a comfortable single en-suite room.',
      '4 days nestled in a stunning valley, surrounded by the beauty of Snowdonia in Spring.',
    ],
  },
  {
    icon: Salad,
    title: 'Nourishing Plant-Based Meals',
    items: [
      'All meals prepared for you — delicious daily breakfast, lunch, and dinner.',
      'Fresh, locally sourced, seasonal ingredients to support lightness and vitality.',
      'Herbal teas and refreshments available throughout the day.',
    ],
  },
  {
    icon: Trees,
    title: 'Time to Rest, Reset & Reconnect',
    items: [
      'Space to slow down, reflect, and realign with the season of renewal.',
      'Pristine fresh air, stunning walks in the valley, and quiet moments in nature.',
      'Evenings gathered around the fire pit under dark, starry skies.',
    ],
  },
  {
    icon: Flame,
    title: 'The World Peace Flame',
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
      <div className="relative mb-10 h-[50vh] min-h-[320px] w-full overflow-hidden rounded-xl">
        <Image
          src="/Assets/Images/snowdonia26.webp"
          alt="Snowdonia Spring Retreat"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 rounded-xl bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-2 text-center text-white">
          <p className="mb-3 text-xs uppercase tracking-widest text-white/80">
            April 2026 · Snowdonia
          </p>
          <h1 className="mb-4 font-jomolhari text-4xl text-white md:text-5xl">
            Spring Yoga Retreat
          </h1>
          <span className="rounded-full bg-customSienna px-4 py-1.5 text-xs font-semibold text-white">
            Only 2 spaces remaining
          </span>
        </div>
      </div>

      {/* Intro prose */}
      <div className="mb-12 w-full space-y-4 text-center">
        <p className="font-semibold italic text-customSienna">
          As the snow melts from the mountain tops and the streams come alive with rushing water,
          the sleeping land awakens.
        </p>
        <p>
          Join me for a Spring Yoga Retreat in the heart of Snowdonia, where you can feel the pulse
          of the Earth, steady and ancient. This is an invitation to step away from the noise and
          chaos of the world and shed the skins of yesterday. Come and settle into the rhythms of
          nature.
        </p>
        <p>
          Remember the cyclical and transformative power of the seasons. Reconnect with the life
          within you, mirrored in the beauty of nature.
        </p>
        <p className="text-black/65">
          Time changes on retreat — life changing insights and transformation happen in an instant.
          The magic of the place, and the shared focus of the group makes things possible that
          cannot be planned or known in advance. This is the reason I love teaching retreats. If you
          feel an inner &lsquo;yes&rsquo; — I&apos;d love you to come.
        </p>
      </div>

      {/* Dates & venue */}
      <div className="mb-12 grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex items-start gap-4 rounded-xl border border-customBeige/70 bg-white p-5">
          <CalendarDays className="mt-0.5 h-5 w-5 shrink-0 text-customTeal" strokeWidth={1.5} />
          <div>
            <p className="mb-1 text-xs uppercase tracking-widest text-black/50">Dates</p>
            <p className="text-sm font-semibold">Thu 23rd – Sun 26th April 2026</p>
            <p className="mt-0.5 text-xs text-black/55">Arrival from 3.00pm · Departure 11.00am</p>
          </div>
        </div>
        <div className="flex items-start gap-4 rounded-xl border border-customBeige/70 bg-white p-5">
          <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-customTeal" strokeWidth={1.5} />
          <div>
            <p className="mb-1 text-xs uppercase tracking-widest text-black/50">Venue</p>
            <p className="text-sm font-semibold">Snowdonia Mountain Lodge</p>
            <p className="mt-0.5 text-xs text-black/55">
              A stunning valley in the heart of Snowdonia
            </p>
          </div>
        </div>
      </div>

      {/* Photo strip */}
      <div className="mb-12 grid grid-cols-3 gap-2 overflow-hidden rounded-xl">
        {['snowdonia25-1.webp', 'snowdonia25-3.webp', 'snowdonia25-5.webp'].map((img, i) => (
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
      <div className="mb-12 w-full space-y-4 text-center">
        <p>
          Come and spend deep, reconnecting time on the mat, and deep, reconnecting time in nature.
          There&apos;ll be moments for reflection, solitude and connection. And yes — there will be
          plenty of time to laugh, chat, and enjoy the simple pleasure of good food and good
          company.
        </p>
        <p className="text-black/65">
          The Retreat is four days, and yet on retreat those days can be life changing. I&apos;ve
          had many such experiences — leaving home not knowing what to expect, tired and not
          altogether convinced it will be worth the journey. Only to return home on Sunday feeling a
          kind of soul revival — a renewed sense of purpose and enthusiasm for life.
        </p>
      </div>

      {/* What's included */}
      <div className="mb-12">
        <h2 className="mb-8 text-center">What&apos;s Included</h2>
        <p className="mb-8 w-full text-center text-sm text-black/60">
          Everything is taken care of, so you can simply arrive, breathe in the beauty of the
          valley, and allow yourself to be restored and revitalised.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {included.map((item, i) => {
            const Icon = item.icon;
            return (
              <Card key={i} className="border border-customBeige/60 bg-white text-left">
                <CardContent className="p-5">
                  <div className="mb-3 flex items-center gap-3">
                    <Icon className="h-5 w-5 shrink-0 text-customTeal" strokeWidth={1.5} />
                    <h3 className="m-0 text-base font-semibold">{item.title}</h3>
                  </div>
                  <ul className="space-y-1.5">
                    {item.items.map((point, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-black/65">
                        <span className="mt-0.5 shrink-0 text-xs text-customTeal">✦</span>
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
      <div className="mx-auto mb-12 max-w-sm overflow-hidden rounded-2xl border border-customTeal text-center">
        <div className="bg-customTeal px-6 py-5">
          <p className="mb-1 text-xs uppercase tracking-widest text-white">Your Investment</p>
          <p className="font-jomolhari text-5xl text-white">£645</p>
          <p className="mt-1 text-sm text-white/75">Payment plans available</p>
        </div>
        <div className="space-y-3 bg-white p-6">
          <p className="text-sm font-semibold text-customSienna">Only 2 spaces remaining</p>
          <p className="text-sm text-black/60">
            If you&apos;d like one of the remaining places, email Rose to register.
          </p>
          <Link href="/contact">
            <Button variant="secondary" size="lg" className="mt-2 w-full">
              Reserve Your Place
            </Button>
          </Link>
        </div>
      </div>

      {/* Closing */}
      <div className="mx-auto mb-8 max-w-md text-center">
        <p className="text-sm italic text-black/50">&ldquo;I&apos;d love you to come.&rdquo;</p>
        <p className="mt-2 text-sm">Love, Rose</p>
      </div>
    </div>
  );
};

export default SnowdoniaRetreat;
