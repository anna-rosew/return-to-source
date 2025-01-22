import { Button } from "@/components/ui/button";
import TestimonialSection from "@/components/ui/TestimonialSection";
import VideoPlayer from "@/components/ui/VideoPlayer";
import StarIcon from "@/public/Assets/Icons/StarIcon";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

import React from "react";

const onetoone = () => {
  return (
    <div>
      <div className="container  w-full">
        <h1>Approach</h1>
        <h3>Unlock the Answers from Within.</h3>
        <VideoPlayer url="https://vimeo.com/981928855" />

        <Link href="/contact">
          <Button
            variant="primary"
            size="lg"
            className="my-3 md:mr-auto w-full md:w-auto "
          >
            Book a free 30 minute session
          </Button>
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-8"></div>
        <div className="m-8">
          <p className="text-center">
            If you feel ready to embark on your journey of discovery or are
            simply interested, we are always here to{" "}
            <strong>have a chat.</strong> So, why not{"  "}
            <span className="inline-flex items-center gap-x-4">
              <Link href="/work" className="flex items-center font-medium">
                <strong>get in touch</strong>
                <ChevronRight />
              </Link>
            </span>
          </p>
        </div>
      </div>
      <TestimonialSection />
    </div>
  );
};

export default onetoone;
