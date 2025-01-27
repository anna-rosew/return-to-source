import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const InPersonCarousel = () => {
  return (
    <div className="w-full">
      <Carousel className="w-full max-w-sm">
        <CarouselContent className="-ml-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-2xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex items-center justify-center space-x-6 mt-8 sm:mt-0 sm:w-full sm:absolute sm:top-1/2 sm:-translate-y-1/2 sm:space-x-0">
          <CarouselPrevious className="sm:absolute sm:-left-10 sm:top-1/2 sm:-translate-y-1/2 z-10 text-black" />
          <CarouselNext className="sm:absolute sm:-right-7 sm:top-1/2 sm:-translate-y-1/2 z-10 text-black" />
        </div>
      </Carousel>
    </div>
  );
};

export default InPersonCarousel;
