import Card from "@/components/common/NavCard";
import SectionHeading from "@/components/common/SectionHeading";
import InPersonCarousel from "@/components/ui/InPersonCarousel";
import OnlineCarousel from "@/components/ui/OnlineCarousel";
import { slides } from "@/data/retreats";
import RetreatsOverview from "@/components/ui/RetreatsOverview";
import { groupCards } from "@/data/groups";
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
      <div className="online-groups">
        <SectionHeading title="Online Groups" />
        <p className="text md:text-center md:py-10 py-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <OnlineCarousel />
      </div>
      <div className="in-person-groups mb-8">
        <SectionHeading title="In-Person Groups" />
        <p className="text md:text-center md:py-10 py-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <InPersonCarousel />
      </div>
      <div className="in-person-groups mb-8">
        <SectionHeading title="Retreats" />
        <p className="text md:text-center md:py-10 py-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <RetreatsOverview slides={slides} />
      </div>
    </div>
  );
};

export default groups;
