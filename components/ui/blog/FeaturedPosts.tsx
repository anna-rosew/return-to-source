"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Post } from "@/types";
import { FeaturedSlide } from "./FeaturedSlide";

interface FeaturedPostsProps {
  posts: Post[];
}

export function FeaturedPosts({ posts }: FeaturedPostsProps) {
  const featuredPosts = posts.filter((post) => post.featured).slice(0, 3);

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="relative w-full"
      >
        {featuredPosts.map((post) => (
          <SwiperSlide key={post.slug}>
            <FeaturedSlide post={post} />
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

export default FeaturedPosts;
