import { Button } from '@/components/ui/button';
import { Slide } from '@/types/index';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface RetreatSlideProps {
  slide: Slide;
}

export default function RetreatSlide({ slide }: RetreatSlideProps) {
  return (
    <div className="relative flex h-[500px] w-full overflow-hidden rounded-lg md:h-[600px] lg:h-[700px]">
      <div
        className="absolute inset-0 h-full w-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${slide.imageUrl})`,
          borderRadius: 'inherit',
        }}
      >
        <div className="absolute inset-0 rounded-lg bg-black bg-opacity-40"></div>{' '}
      </div>

      <div className="relative z-10 flex h-full w-full flex-col justify-between overflow-hidden rounded-lg p-4 text-left md:flex-row">
        <div className="mt-48 flex w-full flex-col md:mx-10 md:my-24 md:w-2/3 lg:w-1/2">
          <h3 className="text-lg text-white opacity-70">
            <strong>{slide.location}</strong> | {slide.date}
          </h3>
          <h2 className="mb-6 text-3xl leading-tight text-white md:text-5xl">{slide.heading}</h2>

          <Link href={slide.link || '/retreats'}>
            <Button variant="primary" size="lg" className="w-auto self-start">
              {slide.buttonText}
              <ChevronRight />
            </Button>
          </Link>
        </div>

        <div className="medium-screen-component md:1/3 md:mx-10 md:mt-80 md:flex md:flex-col lg:w-1/2">
          <div className="description max-w-lg">
            <p className="mb-6 text-lg text-white">{slide.description}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {slide.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="retreat-pagination absolute bottom-4 left-4 z-10 flex space-x-2"></div>
    </div>
  );
}
