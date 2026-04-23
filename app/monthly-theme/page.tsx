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
        <div className="max-w-2xl mx-auto text-center space-y-8">
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
              <ChevronRight className="w-4 h-4" />
            </span>
          </Link>
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-xl text-customTeal mb-4">THE INTENTION</h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            In Yogic philosophy, <strong>sankalpa</strong> (intention) and <strong>tapas</strong>{' '}
            (daily commitment) remind us that change isn&apos;t about striving, it&apos;s about a
            daily remembering. This programme is rooted in self-awareness, not driven by unhealthy
            ideals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-customSienna mb-3">Your Part:</h4>
              <p className="text-gray-700">
                Hold a clear intention, stay curious and allow yourself to be changed by what comes
                to light.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-customSienna mb-3">Rose&apos;s Part:</h4>
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
