import TestimonialCarousel from './TestimonialCarousel';
import Link from 'next/link';
import { Button } from '../button';

const TestimonialSection = () => {
  return (
    <div className="h-full w-full overflow-x-hidden bg-black px-6 py-12 md:px-16 md:py-24 lg:px-36">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Text Section */}
        <div className="flex flex-col items-center space-y-12 text-center md:col-span-1 md:items-start md:text-left">
          <h2 className="font-medium text-white">Other Peoples&apos; Stories...</h2>
          <p className="text-white">
            From reclaiming calm to finding the courage to make real change — these are the
            experiences of people who&apos;ve worked with Rose.
          </p>
          <Link href="/work" className="medium-screen-component">
            <Button
              variant="outline"
              size="lg"
              className="mx-auto my-3 w-full border-white text-white hover:border-customBeige hover:bg-customBeige hover:text-black"
            >
              Start my journey
            </Button>
          </Link>
        </div>

        <div className="w-full md:col-span-2">
          <TestimonialCarousel />
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
