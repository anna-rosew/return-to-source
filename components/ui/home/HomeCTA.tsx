"use client";
import React from "react";
import VideoPlayer from "../VideoPlayer";
import StarIcon from "@/public/Assets/Icons/StarIcon";
import Link from "next/link";
import { Button } from "../button";

const HomeCTA = () => {
  return (
    <div className="w-full container">
      <div>
        <StarIcon
          className="fill-white text-white mx-auto mt-7  group-hover:text-white transition-colors duration-700"
          width={25}
          height={25}
        />
        <h1 className="text-white text-[28px]">Sample Class</h1>
        <p className="text-white text-center">
          This breathing practice is an enquiry into how the breath moves
          through the left lung and the right lung. With the a-symmetry of the
          lungs (the right lung having 3 lobes and the left lung 2 lobes), we
          focus on the yin and yang qualities of the two lungs as we breathe,
          using the flow of the breath to cultivate balance.
        </p>
      </div>
      <div>
        <VideoPlayer url="https://vimeo.com/1073862777" size="large" />
        <Link href="/work">
          <Button variant="secondary" size="lg" className="mb-12 mx-auto">
            More Classes
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HomeCTA;
