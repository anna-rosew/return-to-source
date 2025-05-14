"use client";
import React from "react";
import VideoPlayer from "../VideoPlayer";

const HomeCTA = () => {
  return (
    <div className="w-full container">
      <div>
        <h2 className="text-white text-[28px] mt-7">Sample Class</h2>
      </div>
      <div>
        <VideoPlayer
          url="https://vimeo.com/998276851/f7735cc4ed"
          size="medium"
        />
      </div>
    </div>
  );
};

export default HomeCTA;
