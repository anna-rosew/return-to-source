import Card from "@/components/common/NavCard";
import SectionHeading from "@/components/common/SectionHeading";
import InPersonCarousel from "@/components/ui/inperson/InPersonCarousel";
import OnlineCarousel from "@/components/ui/online/OnlineCarousel";
import { slides } from "@/content/retreats";
import RetreatsOverview from "@/components/ui/retreats/RetreatsOverview";
import { groupCards } from "@/content/groups";
import React from "react";

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
          connected to our supportive community.
        </p>
        <OnlineCarousel />
      </div>
      <div
        className="in-person-groups mb-8 scroll-mt-16"
        id="in-person-section"
      >
        <SectionHeading title="In-Person Groups" />

        <InPersonCarousel />
      </div>
      <div className="in-person-groups mb-8 scroll-mt-16" id="retreats-section">
        <SectionHeading title="Retreats" />
        <p className="text md:text-center md:py-10 py-4">
          Step away from the everyday and immerse yourself in transformative
          experiences. Our retreats blend yoga practice, meditation, and
          community connection in carefully chosen locations. Whether for a day
          or a week, these intimate gatherings offer a chance to reset, deepen
          your practice, and forge lasting connections with fellow
          practitioners.
        </p>
        <RetreatsOverview slides={slides} />
      </div>
    </div>
  );
};

export default groups;
