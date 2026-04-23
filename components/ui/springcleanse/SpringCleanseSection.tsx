import SectionHeading from '@/components/common/SectionHeading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

// ─── Types ────────────────────────────────────────────────────────────────────

type ActivityType = 'yoga' | 'breathwork' | 'relaxation' | 'community' | 'self';

interface ScheduleEntry {
  day: string;
  time: string;
  activity: string;
  type: ActivityType;
}

// ─── Schedule Data ─────────────────────────────────────────────────────────────

const week1: ScheduleEntry[] = [
  {
    day: 'Sun 1st',
    time: '6–7pm',
    activity: 'Set your intention & create your plan',
    type: 'community',
  },
  { day: 'Mon 2nd', time: '7am · 30m', activity: 'Yoga', type: 'yoga' },
  {
    day: 'Tue 3rd',
    time: '8pm · 30m',
    activity: 'Meditation',
    type: 'breathwork',
  },
  { day: 'Wed 4th', time: '7am · 30m', activity: 'Yoga', type: 'yoga' },
  {
    day: 'Thu 5th',
    time: '8pm · 60m',
    activity: 'Relaxation',
    type: 'relaxation',
  },
  { day: 'Fri 6th', time: '7am · 30m', activity: 'Yoga', type: 'yoga' },
  {
    day: 'Sat 7th',
    time: '',
    activity: 'Replays & recordings — your pace',
    type: 'self',
  },
  {
    day: 'Sun 8th',
    time: '6–7pm',
    activity: 'Check-in · review, evaluate, refine',
    type: 'community',
  },
];

const week2: ScheduleEntry[] = [
  { day: 'Mon 9th', time: '7am · 30m', activity: 'Yoga', type: 'yoga' },
  {
    day: 'Tue 10th',
    time: '8pm · 30m',
    activity: 'Meditation',
    type: 'breathwork',
  },
  { day: 'Wed 11th', time: '7am · 30m', activity: 'Yoga', type: 'yoga' },
  {
    day: 'Thu 12th',
    time: '8pm · 60m',
    activity: 'Relaxation',
    type: 'relaxation',
  },
  { day: 'Fri 13th', time: '7am · 30m', activity: 'Yoga', type: 'yoga' },
  {
    day: 'Sat 14th',
    time: '',
    activity: 'Replays & recordings — your pace',
    type: 'self',
  },
  {
    day: 'Sun 15th',
    time: '6–7pm',
    activity: 'Completion · review, refine & celebrate!',
    type: 'community',
  },
];

const week3: ScheduleEntry[] = [
  { day: 'Mon', time: '7am · 30m', activity: 'Yoga', type: 'yoga' },
  { day: 'Wed', time: '7am · 30m', activity: 'Yoga', type: 'yoga' },
  { day: 'Thu', time: '8pm · 60m', activity: 'Relaxation', type: 'relaxation' },
  { day: 'Fri', time: '7am · 30m', activity: 'Yoga', type: 'yoga' },
];

// Colour tokens per activity — uses brand palette
const activityStyle: Record<ActivityType, string> = {
  yoga: 'bg-[#356D65]/10 text-[#356D65] border-[#356D65]/20',
  breathwork: 'bg-[#CABB9D]/30 text-black    border-[#CABB9D]/50',
  relaxation: 'bg-[#862b0e]/8  text-[#862b0e] border-[#862b0e]/20',
  community: 'bg-[#BACA9E]/40 text-black    border-[#BACA9E]/60',
  self: 'bg-[#F6ECE1]    text-black    border-[#CABB9D]/40',
};

const legend: { type: ActivityType; label: string }[] = [
  { type: 'yoga', label: 'Yoga' },
  { type: 'breathwork', label: 'Meditation' },
  { type: 'relaxation', label: 'Relaxation' },
  { type: 'community', label: 'Community' },
  { type: 'self', label: 'Self-paced' },
];

// ─── Benefits ─────────────────────────────────────────────────────────────────

const benefits = [
  {
    label: 'Lighter & clearer',
    detail: 'Release winter heaviness and restore mental clarity',
  },
  {
    label: 'Better digestion',
    detail: 'Kindle agni, reduce bloating and congestion',
  },
  {
    label: 'More energy',
    detail: 'Replace fatigue with steady, sustained vitality',
  },
  {
    label: 'Emotional lift',
    detail: 'Release stagnation, feel motivated and uplifted',
  },
  {
    label: 'Clearer skin',
    detail: "Support your body's natural detox pathways",
  },
  {
    label: 'Stronger immunity',
    detail: 'Build resilience through breath and movement',
  },
];

// ─── What's Included ──────────────────────────────────────────────────────────

const included = [
  'Spring Cleanse pack — recipes, journal prompts & ingredient guides',
  'Weekly support emails & inspiration',
  '4 Evening Relaxation Yoga classes',
  '4 Core Strength Yoga classes',
  '4 Detoxifying Breathwork classes',
  '4 Detoxifying Chakra Yoga classes',
  '3 Community Zooms',
  'All replays for ongoing home use',
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function WeekCard({
  title,
  subtitle,
  entries,
}: {
  title: string;
  subtitle?: string;
  entries: ScheduleEntry[];
}) {
  return (
    <Card className="overflow-hidden border-customBeige/60">
      <CardHeader className="space-y-0 bg-customTeal px-4 py-3">
        <CardTitle className="font-jost text-sm font-semibold tracking-wide text-white">
          {title}
        </CardTitle>
        {subtitle && <p className="m-0 mt-0.5 text-xs leading-tight text-white/75">{subtitle}</p>}
      </CardHeader>
      <CardContent className="p-0">
        {entries.map((entry, i) => (
          <div
            key={i}
            className={`flex items-start gap-3 border-b border-black/5 px-4 py-2.5 last:border-0 ${
              activityStyle[entry.type]
            }`}
          >
            <span className="min-w-[62px] shrink-0 pt-0.5 font-jost text-xs font-semibold">
              {entry.day}
            </span>
            <div className="min-w-0 flex-1">
              <p className="m-0 text-xs font-semibold leading-tight">{entry.activity}</p>
              {entry.time && <p className="m-0 mt-0.5 text-xs opacity-60">{entry.time}</p>}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

const SpringCleanseSection = () => {
  return (
    <section className="spring-cleanse mb-12 mt-4">
      <SectionHeading title="Spring Cleanse 2026" />

      {/* ── Intro ── */}
      <div className="mx-auto max-w-2xl py-4 text-center md:py-8">
        <p className="font-semibold italic text-customSienna md:text-center">
          Feeling heavy, foggy, or just a little &ldquo;off&rdquo; after winter? This is your
          invitation to reset.
        </p>
        <p className="mt-2 md:text-center">
          The Spring Cleanse works with the natural shift of the season — lighter food, energising
          movement, and breathwork — so you emerge feeling clearer, lighter, and more alive.
        </p>
      </div>

      <div className="relative mb-10 h-56 w-full overflow-hidden rounded-lg md:h-72">
        <Image
          src="/Assets/Images/spring_cleanse.jpg"
          alt="Spring Cleanse 2026"
          fill
          className="object-cover"
        />
      </div>

      {/* ── Benefits ── */}
      <div className="mb-10">
        <h3 className="mb-5 text-center">What to expect</h3>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {benefits.map((b, i) => (
            <Card key={i} className="border-customBeige/50 bg-customLightBeige/50 text-left">
              <CardContent className="p-4">
                <p className="m-0 text-sm font-semibold leading-snug text-customTeal">{b.label}</p>
                <p className="m-0 mt-1 text-xs leading-snug text-black/65">{b.detail}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* ── Optional mid-section image slot ─────────────────────────────────────
          <div className="relative w-full h-60 rounded-lg overflow-hidden mb-10">
            <Image
              src="/Assets/SpringCleanse/practice.jpg"
              alt="Spring Cleanse practice"
              fill
              className="object-cover"
            />
          </div>
      ──────────────────────────────────────────────────────────────────────── */}

      {/* ── Schedule ── */}
      <div className="mb-10">
        <h3 className="mb-1 text-center">Your Schedule</h3>
        <p className="mb-6 text-center text-sm text-black/60 md:text-center">
          All sessions are live and recorded — catch up any time.
        </p>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <WeekCard title="Week 1 · 1–8 March" entries={week1} />
          <WeekCard title="Week 2 · 9–15 March" entries={week2} />
          <WeekCard
            title="16–30 March"
            subtitle="Live classes + replays & recordings"
            entries={week3}
          />
        </div>

        {/* Legend */}
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {legend.map(({ type, label }) => (
            <span
              key={type}
              className={`rounded-full border px-3 py-1 font-jost text-xs ${activityStyle[type]}`}
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* ── What's included ── */}
      <div className="mb-10">
        <h3 className="mb-6 text-center">What&apos;s included</h3>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-10 gap-y-3 md:grid-cols-2">
          {included.map((item, i) => (
            <div key={i} className="flex items-start gap-2 text-left">
              <span className="mt-0.5 shrink-0 text-xs text-customTeal">✦</span>
              <p className="m-0 text-sm leading-snug">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Testimonial ── */}
      <div className="mx-auto mb-8 max-w-xl">
        <div className="quote">
          <p className="m-0 text-sm italic">
            &ldquo;Feeling lighter, clearer, energised — arthritis hugely improved, more focused. Am
            going to continue. THANK YOU!&rdquo;
          </p>
        </div>
        <p className="m-0 mt-1 pr-3 text-right text-xs text-black/50">— E.H.</p>
      </div>

      {/* ── Pricing ── */}
      <Card className="mx-auto max-w-sm overflow-hidden border-customTeal text-center">
        <CardHeader className="bg-customTeal py-4">
          <CardTitle className="font-jost font-semibold text-white">Your Investment</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <p className="m-0 font-jomolhari text-4xl text-customTeal">£135</p>
          <p className="m-0 mt-1 text-sm text-black/55">Members: £65</p>

          <div className="my-4 rounded-lg border border-customBeige bg-customLightBeige p-4 text-left">
            <p className="m-0 text-sm font-semibold text-customSienna">Special offer</p>
            <p className="m-0 mt-1 text-sm leading-snug">
              Sign up with a friend — you both receive 50% off. Just £65 each.
            </p>
          </div>

          <p className="m-0 text-sm font-semibold text-customTeal">Ready? Email me to register.</p>
        </CardContent>
      </Card>
    </section>
  );
};

export default SpringCleanseSection;
