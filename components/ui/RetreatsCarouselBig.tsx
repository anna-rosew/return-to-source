"use client";
import React from "react";

import { RetreatInfo } from "@/types/index";
import MorningIcon from "@/public/Assets/Icons/MorningIcon";
import RetreatSlide from "./RetreatOverviewSlide";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";

const retreatInfo: RetreatInfo[] = [
  {
    icon: MorningIcon,
    classType: "My Heart is for the Whole",
    description:
      "If you're looking for a fast way to <strong>regenerate your body, mind, and spirit,</strong> come and experience the magic of the breath. Deeply detoxifying, revitalising, and balancing, the practice of <strong>Pranayama</strong> has deep and lasting benefits.",
    permanentDescription:
      "You can join this class anywhere in the world on Zoom.",
    dates: ["Tue, Aug 6", "Wed, Aug 21", "Tue, Aug 27"],
    times: ["7:00 - 7:30 am", "7:00 - 7:30 am", "7:00 - 7:30 am"],
    dropInPrice: "£8",
    monthlyPrice: "3 session bundle £18",
    width: 100,
    height: 100,
    backgroundImage: "/Assets/Images/morning-breath.webp",
    duration: "30 mins",
  },
];

const RetreatCarousel: React.FC = () => {
  return (
    <div className="text-black relative mx-auto md:px-20 my-4">
      <Carousel className="relative overflow-visible">
        <CarouselContent className="flex items-center space-x-4">
          {retreatInfo.map((trips, index) => (
            <CarouselItem
              key={index}
              className="flex-shrink-0 w-full md:w-3/4 lg:w-1/2 md:px-4"
            >
              <RetreatSlide retreatInfo={trips} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex items-center justify-center space-x-6 mt-8 sm:mt-0 sm:w-full sm:absolute sm:top-1/2 sm:-translate-y-1/2 sm:space-x-0">
          <CarouselPrevious className="sm:absolute sm:-left-10 sm:top-1/2 sm:-translate-y-1/2 z-10 text-black border-black" />
          <CarouselNext className="sm:absolute sm:-left-2 sm:top-1/2 sm:-translate-y-1/2 z-10 text-black border-black" />
        </div>
      </Carousel>
    </div>
  );
};

export default RetreatCarousel;
