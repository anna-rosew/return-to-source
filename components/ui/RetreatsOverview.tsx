"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Import Lucide Icons

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
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} w-3 h-3 mx-1 rounded-lg bg-white opacity-50"></span>`;
          },
        }}
        className="relative w-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <RetreatSlide slide={slide} />
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev hidden md:flex absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-black border-2 border-black rounded-full p-2 cursor-pointer hover:bg-gray-100">
          <ChevronLeft size={24} />
        </div>
        <div className="swiper-button-next hidden md:flex absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-black border-2 border-black rounded-full p-2 cursor-pointer hover:bg-gray-100">
          <ChevronRight size={24} />
        </div>
      </Swiper>
    </div>
  );
}
