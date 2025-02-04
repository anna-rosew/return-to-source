"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import RetreatSlide from "@/components/ui/RetreatOverviewSlide";
import { Slide } from "@/types";

interface RetreatCarouselProps {
  slides: Slide[];
}

export default function RetreatsOverview({ slides }: RetreatCarouselProps) {
  return (
    <div className="relative w-full">
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="relative w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <RetreatSlide slide={slide} />
          </SwiperSlide>
        ))}

        <div className="medium-screen-component">
          <div className="swiper-button-prev absolute left-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"></div>
          <div className="medium-screen-component swiper-button-next absolute right-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"></div>
        </div>
      </Swiper>
    </div>
  );
}
