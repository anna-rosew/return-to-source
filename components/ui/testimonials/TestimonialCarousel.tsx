import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "@/content/testimonials";

const TestimonialCarousel = () => {
  return (
    <div className="text-black relative mx-auto md:px-20 my-4">
      <Carousel className="relative overflow-visible">
        <CarouselContent className="flex items-center space-x-4">
          {testimonials.map((testimonial, index) => (
            <CarouselItem
              key={index}
              className="flex-shrink-0 w-full md:w-3/4 lg:w-1/2 md:px-4"
            >
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
        <div className="flex items-center justify-center space-x-6 mt-8 sm:mt-0 sm:w-full sm:absolute sm:top-1/2 sm:-translate-y-1/2 sm:space-x-0">
          <CarouselPrevious className="sm:absolute sm:-left-10 sm:top-1/2 sm:-translate-y-1/2 z-10" />
          <CarouselNext className="sm:absolute sm:-right-7 sm:top-1/2 sm:-translate-y-1/2 z-10" />
        </div>
      </Carousel>
    </div>
  );
};

export default TestimonialCarousel;
