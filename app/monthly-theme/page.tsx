import { Metadata } from 'next';
import TestimonialSection from '@/components/ui/testimonials/TestimonialSection';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Monthly Theme | Rose Long',
  description:
    'A focused monthly programme with Rose Long — live yoga classes, daily practices, journal prompts and community support to help you show up for yourself.',
};

const MonthlyTheme = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-2xl space-y-8 text-center">
          <h1>Monthly Theme</h1>
          <p className="text-lg text-gray-700">
            Each month Rose runs a focused programme — live yoga classes, daily practices, journal
            prompts and community support, all woven around a single seasonal theme.
          </p>
          <p className="text-gray-600">
            The next theme is being prepared. Get in touch to be notified when it opens.
          </p>
          <Link href="/contact">
            <span className="inline-flex items-center font-medium text-customTeal">
              <strong>Get in touch</strong>
              <ChevronRight className="h-4 w-4" />
            </span>
          </Link>
        </div>

        <div className="mt-20 text-center">
          <h3 className="mb-4 text-xl text-customTeal">THE INTENTION</h3>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-700">
            In Yogic philosophy, <strong>sankalpa</strong> (intention) and <strong>tapas</strong>{' '}
            (daily commitment) remind us that change isn&apos;t about striving, it&apos;s about a
            daily remembering. This programme is rooted in self-awareness, not driven by unhealthy
            ideals.
          </p>
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h4 className="mb-3 font-semibold text-customSienna">Your Part:</h4>
              <p className="text-gray-700">
                Hold a clear intention, stay curious and allow yourself to be changed by what comes
                to light.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h4 className="mb-3 font-semibold text-customSienna">Rose&apos;s Part:</h4>
              <p className="text-gray-700">
                Provide the structure, rhythm and encouragement you need to consistently show up for
                yourself.
              </p>
            </div>
          </div>
        </div>
      </div>

      <TestimonialSection />
    </div>
  );
};

export default MonthlyTheme;
