import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import InPersonCard from "./InPersonCard";

const sessionInfo = [
  {
    backgroundImage: "/Assets/Images/workshop1.webp",
    duration: "1h 30m",
    type: "Workshop",
    title: "Breathwork Workshop",
    description:
      "Join Rose for an introduction to Breath Work. This five-week course will introduce you to <strong>foundational practices</strong> that allow you to access the [strong]power of your breath[/strong].",
    location: "Abolute Yoga, Liverpool",
    date: "Wed 16, Feb",
  },
  {
    backgroundImage: "/Assets/Images/workshop1.webp",
    duration: "2h",
    type: "Course",
    title: "Core Strength & Digestive Cleansing",
    description:
      "This class will guide you through movements and breathing techniques that build physical core strength while simultaneously cleansing and balancing your digestive system.",
    location: "Room 202",
    date: "Wed 16, Feb",
  },
];

const InPersonCarousel = () => {
  return (
    <div className="text-black relative mx-auto md:px-20 my-4">
      <Carousel className="relative overflow-visible">
        <CarouselContent className="flex items-center space-x-4">
          {sessionInfo.map((session, index) => (
            <CarouselItem
              key={index}
              className="pl-40 md:basis-1/2 lg:basis-1/2"
            >
              <InPersonCard sessionInfo={session} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex items-center justify-center space-x-6 mt-8 sm:mt-0 sm:w-full sm:absolute sm:top-1/2 sm:-translate-y-1/2 sm:space-x-0">
          <CarouselPrevious className="sm:absolute sm:-left-10 sm:top-1/2 sm:-translate-y-1/2 z-10" />
          <CarouselNext className="sm:absolute sm:-left-2 sm:top-1/2 sm:-translate-y-1/2 z-10 text-black border-black" />
        </div>
      </Carousel>
    </div>
  );
};

export default InPersonCarousel;
