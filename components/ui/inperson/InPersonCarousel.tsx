import { sessionInfo } from '@/content/inperson';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import InPersonCard from './InPersonCard';

const InPersonCarousel = () => {
  return (
    <div className="relative mx-auto my-4 text-black md:px-20">
      <Carousel className="relative overflow-visible">
        <CarouselContent className="flex items-center space-x-4">
          {sessionInfo.map((session, index) => (
            <CarouselItem key={index} className="md:basis-1/2 md:pl-40 lg:basis-1/2">
              <InPersonCard sessionInfo={session} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="mt-8 flex items-center justify-center space-x-6 sm:absolute sm:top-1/2 sm:mt-0 sm:w-full sm:-translate-y-1/2 sm:space-x-5">
          <CarouselPrevious className="z-10 border-black text-black sm:absolute sm:-left-10 sm:top-1/2 sm:-translate-y-1/2" />
          <CarouselNext className="z-10 border-black text-black sm:absolute sm:-left-2 sm:top-1/2 sm:-translate-y-1/2" />
        </div>
      </Carousel>
    </div>
  );
};

export default InPersonCarousel;
