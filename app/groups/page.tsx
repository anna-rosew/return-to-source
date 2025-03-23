import Card from "@/components/common/NavCard";
import SectionHeading from "@/components/common/SectionHeading";
// import InPersonCarousel from "@/components/ui/inperson/InPersonCarousel";
import OnlineCarousel from "@/components/ui/online/OnlineCarousel";
import { slides } from "@/content/retreats";
import RetreatsOverview from "@/components/ui/retreats/RetreatsOverview";
import { groupCards } from "@/content/groups";
import React from "react";
import Link from "next/link";

const groups = () => {
  return (
    <div className="container text-center w-full">
      <h1 className="pb-5">Groups</h1>
      <p className="font-bold md:text-center">
        Come and explore how your body, mind and breath work together. Open
        yourself to new dimensions of experience and personal growth.
      </p>
      <div className="lg:my-20 my-7">
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
          {groupCards.map((card, index) => (
            <Card key={index} cardInfo={card} />
          ))}
        </div>
      </div>
      <div className="online-groups scroll-mt-16" id="online-section">
        <SectionHeading title="Online Groups" />
        <p className="text md:text-center md:py-10 py-4">
          Join us from anywhere in the world for live-streamed and on-demand
          sessions. Practice in the comfort of your own space while staying
          connected to our supportive community. This April there is an
          exclusive offer for the{" "}
          <strong className="font-bold">
            Morning Membership 20% DISCOUNT: Mondays, Wednesdays & Fridays
            (total 9 classes): £48!
          </strong>
        </p>
        <OnlineCarousel />
      </div>
      <div
        className="in-person-groups mb-8 scroll-mt-16"
        id="in-person-section"
      >
        <SectionHeading title="In-Person Groups" />
        <p className="text md:text-center md:py-10 py-4">
          There are currently no in-person sessions planned but{" "}
          <Link href="/contact" className="underline">
            stay-in-touch
          </Link>{" "}
          by asking to be signed up to <strong>the newsletter</strong> to be the
          first to hear!
        </p>

        {/* <InPersonCarousel /> */}
      </div>
      <div className="in-person-groups mb-8 scroll-mt-16" id="retreats-section">
        <SectionHeading title="Retreats" />
        <p className="text md:text-center md:py-10 py-4">
          Step away from the everyday and <strong>immerse</strong> yourself in{" "}
          <strong>transformative experiences</strong>. Our retreats blend{" "}
          <strong>yoga practice</strong>, <strong>meditation</strong>, and{" "}
          <strong>community connection</strong> in carefully chosen locations.
          Whether for a day or a week, these{" "}
          <strong>intimate gatherings</strong> offer a chance to{" "}
          <strong>reset</strong>, <strong>deepen</strong> your practice, and{" "}
          <strong>forge</strong> lasting connections with fellow practitioners.
        </p>
        <RetreatsOverview slides={slides} />
      </div>
    </div>
  );
};

export default groups;
