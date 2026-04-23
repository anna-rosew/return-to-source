import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import TestimonialCard from './TestimonialCard';
import { testimonials } from '@/content/testimonials';

const TestimonialCarousel = () => {
  return (
    <div className="relative mx-auto my-4 text-black md:px-20">
      <Carousel className="relative overflow-visible">
        <CarouselContent className="flex items-center space-x-4">
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="w-full flex-shrink-0 md:w-3/4 md:px-4 lg:w-1/2">
              <TestimonialCard
                pic={testimonial.pic}
                heading={testimonial.heading}
                testimonial={testimonial.testimonial}
                name={testimonial.name}
                location={testimonial.location}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="mt-8 flex items-center justify-center space-x-6 sm:absolute sm:top-1/2 sm:mt-0 sm:w-full sm:-translate-y-1/2 sm:space-x-0">
          <CarouselPrevious className="z-10 sm:absolute sm:-left-10 sm:top-1/2 sm:-translate-y-1/2" />
          <CarouselNext className="z-10 sm:absolute sm:-right-7 sm:top-1/2 sm:-translate-y-1/2" />
        </div>
      </Carousel>
    </div>
  );
};

export default TestimonialCarousel;
