import React from "react";
import TestimonialCarousel from "./TestimonialCarousel";
import Link from "next/link";
import { Button } from "../button";

const TestimonialSection = () => {
  return (
    <div className="h-full w-full bg-black px-6 py-12 md:px-16 lg:px-36 md:py-24 overflow-x-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Text Section */}
        <div className="flex flex-col md:col-span-1 items-center md:items-start text-center md:text-left space-y-12">
          <h2 className="text-white font-medium">
            Other Peoples&apos; Stories...
          </h2>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <Link href="/work" className="medium-screen-component">
            <Button
              variant="outline"
              size="lg"
              className="w-full my-3 mx-auto border-white text-white hover:bg-customBeige hover:text-black hover:border-customBeige"
            >
              Start my journey
            </Button>
          </Link>
        </div>

        <div className="w-full md:col-span-2">
          <TestimonialCarousel />
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
