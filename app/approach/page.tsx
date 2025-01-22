import { Button } from "@/components/ui/button";
import DetailsCard from "@/components/ui/DetailsCard";
import VideoPlayer from "@/components/ui/VideoPlayer";
import Link from "next/link";
import React from "react";
import AnahataIcon from "@/public/Assets/Icons/courage-white.svg";

const approach = () => {
  return (
    <div className="container text-center w-full">
      <h1>Approach</h1>
      <p>
        This page is currently under construction. Please visit,{" "}
        <Link href="https://www.roselong-lifechanges.com/">
          Rose Long: Life Changes
        </Link>{" "}
        for more information.
      </p>
      <VideoPlayer url="https://vimeo.com/981928855" />
      <Link href="/work">
        <Button
          variant="outline"
          size="lg"
          className="my-3 mx-auto w-full md:w-auto "
        >
          Start my journey
        </Button>
      </Link>
      <div className="text-left">
        <h3 className="text-customTeal">TECHNIQUES</h3>
        <h2>
          You have the capacity to transform yourself from the inside out.
        </h2>
        <p className="text-customTeal ml-3">
          The ancients knew the power of the mind, body and the breath, and
          modern research is proving what they knew; you can alter your own body
          and mind.
        </p>
      </div>
      <DetailsCard
        iconUrl={AnahataIcon}
        title="Build Courage"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
      />
    </div>
  );
};

export default approach;
