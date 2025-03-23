import { Button } from "@/components/ui/button";
import DetailsCard from "@/components/ui/DetailsCard";
import TestimonialSection from "@/components/ui/testimonials/TestimonialSection";
import VideoPlayer from "@/components/ui/VideoPlayer";
import { CalendarDays } from "lucide-react";
import { SunMoon } from "lucide-react";
import { Trees } from "lucide-react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

import React from "react";

const onetoone = () => {
  const cardDetails = [
    {
      Icon: CalendarDays,
      title: "Choose your Rhythm",
      text: "Weekly or Biweekly",
    },
    {
      Icon: Trees,
      title: "Where to Meet",
      text: "By Phone, Video Call or In-Person",
    },
    {
      Icon: SunMoon,
      title: "Tailored to You",
      text: "Daily Resources & Practices",
    },
  ];
  return (
    <div>
      <div className="container  w-full">
        <h1>One-to-Ones</h1>
        <h3>Embracing the Path of Self-Discovery</h3>
        <VideoPlayer url="https://vimeo.com/981928855" />

        <Link href="/contact">
          <Button
            variant="primary"
            size="lg"
            className="my-3 w-full md:w-auto mx-auto"
          >
            Book a free 30 minute session
          </Button>
        </Link>
        <div className="mt-12">
          <p className="para">
            These sessions offer you what you need to{" "}
            <strong>develop your inner guidance system.</strong> This requires a
            process of slowing down, breathing, and learning to listen and
            observe yourself. It can be uncomfortable and challenging at times.
            The Coaching Sessions offer a space of deep listening where insights
            arise, answers are revealed, and{" "}
            <strong>potential is unlocked.</strong>
          </p>
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
        <p className="para py-4">
          For the work to take root, you have <strong>daily practices</strong>{" "}
          and activities that embed what you’re learning into your daily life.
          Come with curiosity and an open mind. Your life{" "}
          <strong>will transform from the inside out.</strong>
        </p>
        <p className="para">
          <strong>Small steps to lasting change.</strong>
        </p>

        <div className="m-8">
          <p className="text-center text-customTeal">
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
