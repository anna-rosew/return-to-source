import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const TestimonialCarousel = () => {
  return (
    <div className="text-white">
      <Carousel>
        <CarouselContent>
          <CarouselItem>Hell</CarouselItem>
          <CarouselItem>This</CarouselItem>
          <CarouselItem>Is.</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default TestimonialCarousel;
