import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import AjnaIcon from '@/public/Assets/Icons/AjnaIcon';
import AnahataIcon from '@/public/Assets/Icons/AnahataIcon';
import { Wind, Waves, Mountain, Flame } from 'lucide-react';

// ─── Data ─────────────────────────────────────────────────────────────────────

const easterClasses = [
  {
    name: 'Illuminate',
    chakra: 'Crown & 3rd Eye',
    description: 'Open to guidance and inner clarity, letting inspiration shine through.',
    date: 'Good Friday, 3rd April',
    time: '08.00–08.30',
    color: '#7C6B9E',
    Icon: AjnaIcon,
    iconType: 'stroke' as const,
  },
  {
    name: 'Vibrate',
    chakra: 'Throat',
    description:
      'Awaken your voice & allow your vision of renewal to resonate through the power of mantra.',
    date: 'Saturday, 4th April',
    time: '08.00–08.30',
    color: '#5B9BB5',
    Icon: Wind,
    iconType: 'lucide' as const,
  },
  {
    name: 'Connect',
    chakra: 'Heart',
    description: 'Open your heart & connect to the Love that connects us all.',
    date: 'Easter Sunday, 5th April',
    time: '08.00–08.30',
    color: '#356D65',
    Icon: AnahataIcon,
    iconType: 'stroke' as const,
  },
  {
    name: 'Transform',
    chakra: 'Solar Plexus',
    description: 'Ignite your motivation & radiant inner strength.',
    date: 'Easter Monday, 6th April',
    time: '08.00–08.30',
    color: '#C9921A',
    Icon: Flame,
    iconType: 'lucide' as const,
  },
  {
    name: 'Flow',
    chakra: 'Sacral',
    description: 'Flow with the natural rhythms of Spring.',
    date: 'Friday, 10th April',
    time: '07.00–07.30',
    color: '#D4742A',
    Icon: Waves,
    iconType: 'lucide' as const,
  },
  {
    name: 'Ground',
    chakra: 'Root',
    description: 'Embody your intentions in the light of the New Moon.',
    date: 'Friday, 17th April',
    time: '07.00–07.30',
    color: '#862b0e',
    Icon: Mountain,
    iconType: 'lucide' as const,
  },
];

const membershipDeals = [
  {
    title: 'Easter Series + Evening Chill',
    price: '£45',
    saving: 'save £15',
    normal: 'normally £60',
  },
  {
    title: 'Easter Series + Morning Class',
    subtitle: 'Core & Balance or Vital Breath',
    price: '£40',
    saving: 'save £14',
    normal: 'normally £54',
  },
  {
    title: 'All Classes',
    price: '£48',
    saving: 'half price',
    normal: 'normally £96',
    highlight: true,
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

const EasterSeriesSection = () => {
  return (
    <section className="easter-series mb-12 mt-4">
      <h2 className="my-6 text-center">Spring Awakening: The Easter Series</h2>

      {/* Intro */}
      <div className="mx-auto max-w-2xl py-4 text-center md:py-8">
        <p className="font-semibold italic text-customSienna md:text-center">
          Six classes. Six chakras. One awakening.
        </p>
        <p className="mt-2 md:text-center">
          This six-class series invites you to move through the chakras, awakening the vitality of
          Spring within you. Through movement, breathwork, mantra, and meditation, you&apos;ll
          attune to the season&apos;s natural rhythms and feed the seeds of fresh new beginnings.
        </p>
      </div>

      {/* Class cards */}
      <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {easterClasses.map((cls, i) => {
          const Icon = cls.Icon;
          return (
            <div
              key={i}
              className="flex flex-col overflow-hidden rounded-xl border border-customBeige/70 bg-white text-left"
            >
              {/* coloured top bar */}
              <div className="h-1 w-full" style={{ backgroundColor: cls.color }} />

              <div className="flex flex-1 flex-col p-5">
                {/* icon + chakra label row */}
                <div className="mb-3 flex items-center justify-between">
                  <p
                    className="m-0 text-xs font-medium uppercase tracking-widest"
                    style={{ color: cls.color }}
                  >
                    {cls.chakra}
                  </p>
                  <div style={{ color: cls.color }}>
                    {cls.iconType === 'lucide' ? (
                      <Icon className="h-5 w-5" strokeWidth={1.5} stroke={cls.color} fill="none" />
                    ) : (
                      <Icon className="h-6 w-6" width={24} height={24} />
                    )}
                  </div>
                </div>

                {/* name */}
                <h3 className="m-0 mb-2 font-jomolhari text-2xl leading-tight">{cls.name}</h3>

                {/* description */}
                <p className="m-0 flex-1 text-sm leading-relaxed text-black/65">
                  {cls.description}
                </p>

                {/* divider + date/time */}
                <div className="border-black/8 mt-4 flex items-center justify-between border-t pt-3">
                  <p className="m-0 text-xs font-semibold text-black/75">{cls.date}</p>
                  <p className="m-0 text-xs font-medium" style={{ color: cls.color }}>
                    {cls.time}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pricing */}
      <div className="mb-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
        <div className="text-center">
          <p className="m-0 font-jomolhari text-4xl text-customTeal">£36</p>
          <p className="m-0 mt-1 text-sm text-black/55">Full Series</p>
        </div>
        <div className="hidden h-12 w-px bg-black/15 sm:block" />
        <div className="text-center">
          <p className="m-0 font-jomolhari text-2xl text-black/60">£8</p>
          <p className="m-0 mt-1 text-sm text-black/55">Drop-in per class</p>
        </div>
      </div>

      {/* Membership deals */}
      <div className="mx-auto mb-10 max-w-2xl">
        <h3 className="mb-2 text-center">Easter Bundle Deals</h3>
        <p className="mb-6 text-center text-sm text-black/55 md:text-center">
          How to enjoy more classes and pay less.
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {membershipDeals.map((deal, i) => (
            <Card
              key={i}
              className={`border text-center ${
                deal.highlight
                  ? 'border-customTeal bg-customTeal text-white'
                  : 'border-customBeige/60 bg-white'
              }`}
            >
              <CardContent className="p-5">
                <p
                  className={`m-0 text-sm font-semibold leading-snug ${
                    deal.highlight ? 'text-white' : 'text-black'
                  }`}
                >
                  {deal.title}
                </p>
                {deal.subtitle && (
                  <p
                    className={`m-0 mt-0.5 text-xs ${
                      deal.highlight ? 'text-white/75' : 'text-black/50'
                    }`}
                  >
                    {deal.subtitle}
                  </p>
                )}
                <p
                  className={`m-0 mt-3 font-jomolhari text-3xl ${
                    deal.highlight ? 'text-white' : 'text-customTeal'
                  }`}
                >
                  {deal.price}
                </p>
                <p
                  className={`m-0 mt-1 text-xs font-medium ${
                    deal.highlight ? 'text-white/80' : 'text-customSienna'
                  }`}
                >
                  {deal.saving}
                </p>
                <p
                  className={`m-0 mt-0.5 text-xs line-through ${
                    deal.highlight ? 'text-white/50' : 'text-black/35'
                  }`}
                >
                  {deal.normal}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="flex justify-center">
        <Link href="/contact">
          <Button variant="secondary" size="lg">
            Book & Pay
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default EasterSeriesSection;
