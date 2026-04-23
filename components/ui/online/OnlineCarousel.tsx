'use client';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import OnlineClassSlides from './OnlineClassSlide';
import { classes } from '@/content/online';

const OnlineCarousel: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  const pagination = {
    el: '.online-pagination',
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return `<h3 class="${className} online-bullet">${classes[index].classType}</h3>`;
    },
  };

  return (
    <div className="w-full">
      <div>
        <div className="mb-6">
          <div className="online-pagination flex justify-center items-center py-4 border-t border-b border-gray-800" />
          <Swiper
            pagination={pagination}
            modules={[Pagination]}
            className="w-full"
            spaceBetween={50}
            slidesPerView={1}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {classes.map((classItem, index) => (
              <SwiperSlide
                key={index}
                className="text-center bg-transparent flex items-center justify-center"
              >
                <OnlineClassSlides classInfo={classItem} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default OnlineCarousel;
