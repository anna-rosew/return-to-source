import React from "react";
import { sessionInfo } from "@/content/inperson";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import InPersonCard from "./InPersonCard";

const InPersonCarousel = () => {
  return (
    <div className="text-black relative mx-auto md:px-20 my-4">
      <Carousel className="relative overflow-visible">
        <CarouselContent className="flex items-center space-x-4">
          {sessionInfo.map((session, index) => (
            <CarouselItem
              key={index}
              className="md:pl-40 md:basis-1/2 lg:basis-1/2"
            >
              <InPersonCard sessionInfo={session} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex items-center justify-center space-x-6 mt-8 sm:mt-0 sm:w-full sm:absolute sm:top-1/2 sm:-translate-y-1/2 sm:space-x-5">
          <CarouselPrevious className="sm:absolute sm:-left-10 sm:top-1/2 sm:-translate-y-1/2 z-10 text-black border-black" />
          <CarouselNext className="sm:absolute sm:-left-2 sm:top-1/2 sm:-translate-y-1/2 z-10 text-black border-black" />
        </div>
      </Carousel>
    </div>
  );
};

export default InPersonCarousel;
