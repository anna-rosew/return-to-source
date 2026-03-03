import { Button } from "@/components/ui/button";
import DetailsCard from "@/components/ui/DetailsCard";
import TestimonialSection from "@/components/ui/testimonials/TestimonialSection";
import VideoPlayer from "@/components/ui/VideoPlayer";
import AjnaIcon from "@/public/Assets/Icons/AjnaIcon";
import AnahataIcon from "@/public/Assets/Icons/AnahataIcon";
import MuladharaIcon from "@/public/Assets/Icons/MuladharaIcon";
import StarIcon from "@/public/Assets/Icons/StarIcon";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const approach = () => {
  const cardDetails = [
    {
      Icon: MuladharaIcon,
      title: "Build Courage",
      text: "This is not a quick fix. The process asks you to release the familiar and step into the unknown.  It takes courage to risk letting go of what no longer works for you.  Holding a clear space of enquiry allows you to see your patterns, identify blind spots and unlock your potential.  Greater self-awareness equates with greater freedom.  Through this work you learn where you have agency and find your way through the blocks.",
    },
    {
      Icon: AjnaIcon,
      title: "Find Clarity",
      text: "This is not a quick fix. The process asks you to release the familiar and step into the unknown.  It takes courage to risk letting go of what no longer works for you.  Holding a clear space of enquiry allows you to see your patterns, identify blind spots and unlock your potential.  Greater self-awareness equates with greater freedom.  Through this work you learn where you have agency and find your way through the blocks.",
    },
    {
      Icon: AnahataIcon,
      title: "Be Present",
      text: "This is not a quick fix. The process asks you to release the familiar and step into the unknown.  It takes courage to risk letting go of what no longer works for you.  Holding a clear space of enquiry allows you to see your patterns, identify blind spots and unlock your potential.  Greater self-awareness equates with greater freedom.  Through this work you learn where you have agency and find your way through the blocks.",
    },
  ];

  return (
    <div>
      <div className="container  w-full">
        <h1>Approach</h1>
        <p className="font-bold md:text-center">
          Come and explore how your body, mind and breath work together. Open
          yourself to new dimensions of experience and personal growth
        </p>
        <VideoPlayer url="https://vimeo.com/981928855" />

        <div className="text-left mt-8 md:grid md:grid-cols-2 md:gap-12">
          <div className="flex items-center justify-center gap-5">
            <StarIcon
              className="hidden md:block text-black  group-hover:text-white transition-colors duration-700"
              width={100}
              height={100}
            />
            <div>
              <h3 className="text-customTeal text-base">TECHNIQUES</h3>
              <h2 className="text-2xl">
                You have the capacity to transform yourself from the inside out.
              </h2>
            </div>
          </div>
          <div className="pl-8">
            <p className="text-customTeal">
              The ancients knew the power of the mind, body and the breath, and
              modern research is proving what they knew; you can alter your own
              body and mind.
            </p>
            <Link href="/work">
              <Button
                variant="secondary"
                size="lg"
                className="my-3 md:mr-auto w-full md:w-auto "
              >
                Start my journey
              </Button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-8">
          {cardDetails.map((content, index) => (
            <DetailsCard
              key={index}
              Icon={content.Icon}
              title={content.title}
              text={content.text}
              width={70}
              height={70}
            />
          ))}
        </div>
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

export default approach;
